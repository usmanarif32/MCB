		function generateQR() {
            var merchantName = document.getElementById("merchantName").value;
            var merchantCity = document.getElementById("merchantCity").value;
            var merchantCategoryCode = document.getElementById("merchantCategoryCode").value;
            var accountNumber = document.getElementById("accountNumber").value;
			var merchantNameLength = merchantName.length;
			var merchantCityLength = merchantCity.length;
			
			if( merchantNameLength < 10)
				merchantNameLength = '0' + merchantNameLength;
			
			if( merchantCityLength < 10)
				merchantCityLength = '0' + merchantCityLength;

            // Generate a 32-digit UETR
            var uetr = generateUETR();
			var crc_tag = "6304"

            // Create the EMV QR string with the updated tag order
            var tag28Length = 2 + 2 + 32 + 2 + 2 + 11 + 2 + 2 + 24; // Length of Sub-tag 00 + Sub-tag 01 + Sub-tag 02
            var qrData = `00020101021128${tag28Length}0032${uetr}0111MUCBPKKKRTG0224${accountNumber}5204${merchantCategoryCode}5303${586}5802${'PK'}59${merchantNameLength}${merchantName}60${merchantCityLength}${merchantCity}${crc_tag}`;

            // Calculate and append CRC16 checksum (Tag 63)
            var crcValue = GenerateCRC(qrData);
            var qrStringWithCRC = qrData + `${crcValue}`;
            
            // Display the generated QR string with CRC
            document.getElementById("qrStringOutput").innerHTML = qrStringWithCRC;
			
			console.log('qrStringWithCRC QR String ' + qrStringWithCRC);

            // Display the data as text in the output section
            var output = `
                <h3>QR String Data:</h3>
                <p><strong>Merchant Name (Tag 59):</strong> ${merchantName}</p>
                <p><strong>Merchant City (Tag 60):</strong> ${merchantCity}</p>
                <p><strong>Currency Code (Tag 53 - PKR):</strong> PKR</p>
                <p><strong>Country Code (Tag 58 - PK):</strong> PK</p>
                <p><strong>Merchant Category Code (Tag 52):</strong> ${merchantCategoryCode}</p>
                <p><strong>Account Number:</strong> ${accountNumber}</p>
                <p><strong>UETR (Tag 28 Sub-tag 00):</strong> ${uetr}</p>
            `;

            document.getElementById("output").innerHTML = output;

            // Clear any previous QR codes
            document.getElementById("qrcode").innerHTML = "";

            // Generate the QR code using the EasyQRCodeJS library
			
			    let options = {
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                height: 256,
                logo: "images/mcb.png",
                logoBackgroundColor: '#ffffff',
                logoBackgroundTransparent: false,
                logoHeight: 40,
                logoWidth: 40,
                quietZone: 50,
                quietZoneColor: 'transparent',
                subTitleFont: 12,
                text: qrStringWithCRC.trim(),
				title: merchantName + " - " + accountNumber.slice(-4),
                titleBackgroundColor: "white",
                titleColor: "#000000",
                titleFont: 18,
                titleHeight: 0,
                titleTop: 292,
                typeNumber: 5,
                width: 256,
				tooltip:true,
				drawer:'canvas'
            };
			
			 var qrCode = new QRCode(document.getElementById("qrcode"),options);
			
            // After the QR code is generated, enable the download button
            setTimeout(function() {
                // Convert the generated QR code to a data URL
                var qrCanvas = document.querySelector('#qrcode canvas');
                var qrImage = qrCanvas.toDataURL('image/png');

                // Set the download link
                var downloadButton = document.getElementById("downloadButton");
                downloadButton.href = qrImage;
                downloadButton.style.display = 'inline-block'; // Show the download button
            }, 300);  // Delay to ensure the QR code is generated
        }

		
		//CRC Used for generating String
		function GenerateCRC(qrData) {
			var crcode = crc16(qrData).toString(16).toUpperCase();
			while (crcode.length < 4) {
				crcode = "0" + crcode;
			}
			//var output = qrData + crcode;
			return crcode;
		}
						
		function crc16(s) {
			var crc = 0xFFFF;
			var polynomial = 0x1021;
			var bytes = [];

			for (var i = 0; i < s.length; ++i) {
				var code = s.charCodeAt(i);

				bytes = bytes.concat([code]);
			}

			//converting the string into binary array.
			bytes.forEach(b => {

				for (let a = 0; a < 8; a++) {
					var bit = (((b >> (7 - a)) & 1) === 1);
					var c15 = (((crc >> 15) & 1) === 1);
					crc <<= 1;
					if (c15 ^ bit) crc ^= polynomial;
				}
			});
			crc &= 0xFFFF;
			console.log(crc);
			return crc
		}

        // Function to generate a 32-digit UETR
        function generateUETR() {
			let uetr = '';
			uetr = self.crypto.randomUUID().replace(/-/g, '').substring(0, 32);
		return uetr;
		}

		function generateQRFromString()	{
			// Clear any previous QR codes
			var MERCHANT_STATIC_QR_STRING = document.getElementById("qrStringInput").value.trim();
            document.getElementById("qrcodeFromString").innerHTML = "";
			
			let merchantNameLength = MERCHANT_STATIC_QR_STRING.substring(118,120);
			let merchantName = MERCHANT_STATIC_QR_STRING.substring(120,120 + parseInt(merchantNameLength));
			let accountNumber = MERCHANT_STATIC_QR_STRING.substring(71,71 + 24);
			
			let options = {
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                height: 256,
                logo: "images/mcb.png",
                logoBackgroundColor: '#ffffff',
                logoBackgroundTransparent: false,
                logoHeight: 40,
                logoWidth: 40,
                quietZone: 50,
                quietZoneColor: 'transparent',
                subTitleFont: 12,
                text: MERCHANT_STATIC_QR_STRING,
				title: merchantName + " - " + accountNumber.slice(-4),
                titleBackgroundColor: "white",
                titleColor: "#000000",
                titleFont: 18,
                titleHeight: 0,
                titleTop: 292,
                typeNumber: 5,
                width: 256,
				tooltip:true,
				drawer:'canvas'
            };
			
			 var qrcodeFromString = new QRCode(document.getElementById("qrcodeFromString"),options);
			
            setTimeout(function() {
                var qrCanvas = document.querySelector('#qrcodeFromString canvas');
                var qrImage = qrCanvas.toDataURL('image/png');

                var downloadButton = document.getElementById("downloadQRFromString");
                downloadButton.href = qrImage;
                downloadButton.style.display = 'inline-block';
            }, 300); 
			
		}
		
		function generateSQRFromIban()	{
			// Clear any previous QR codes
			var IBAN = document.getElementById("sqrIbanInput").value.trim();
			var sqrActTitle = document.getElementById("sqrActTitle").value.trim();
			var MERCHANT_STATIC_SQR_STRING = "0002020102110202000424" + IBAN + "1004"
			var CRC = GenerateCRC(MERCHANT_STATIC_SQR_STRING);
			MERCHANT_STATIC_SQR_STRING = MERCHANT_STATIC_SQR_STRING + CRC;
			
            document.getElementById("sqrcodeFromIban").innerHTML = "";
			
			let options = {
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                height: 256,
                logo: "images/mcb.png",
                logoBackgroundColor: '#ffffff',
                logoBackgroundTransparent: false,
                logoHeight: 40,
                logoWidth: 40,
                quietZone: 50,
                quietZoneColor: 'transparent',
                text: MERCHANT_STATIC_SQR_STRING,
				title: sqrActTitle + " - " + IBAN.slice(-4),
                titleBackgroundColor: "white",
                titleColor: "#000000",
                titleFont: 18,
                titleHeight: 0,
                titleTop: 292,
                typeNumber: 5,
                width: 256,
				tooltip:true,
				drawer:'canvas'
            };
			
			 var sqrcodeFromIban = new QRCode(document.getElementById("sqrcodeFromIban"),options);
			
            setTimeout(function() {
                var qrCanvas = document.querySelector('#sqrcodeFromIban canvas');
                var qrImage = qrCanvas.toDataURL('image/png');

                var downloadButton = document.getElementById("downloadSQRFromIban");
                downloadButton.href = qrImage;
                downloadButton.style.display = 'inline-block';
            }, 300); 
			
		}
		
		// Load the JSON file with the cities
		fetch('cities.json')
		  .then(response => {
			if (!response.ok) {
			  throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.text(); // Read response as text
		  })
		  .then(text => {
			//console.log('Response text:', text); // Log the raw text
			try {
			  const data = JSON.parse(text); // Parse the JSON manually
			  //console.log('Parsed JSON data:', data); // Log the parsed data
			  const citiesDropdown = document.getElementById('merchantCity');
			  
			  const cities = data.cities;
				
			if ( citiesDropdown )
			  cities.forEach(city => {
				const option = document.createElement('option');
				option.value = city;
				option.textContent = city;
				citiesDropdown.appendChild(option);
			  });
			} catch (error) {
			  console.error('JSON parsing error:', error);
			}
		  })
		  .catch(error => console.error('Error loading cities:', error)); 


        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
			
            // Simple validation (in real scenarios, you would check this against a server-side database)
	    if (username === "MCB" && password === "live") { 
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("qrFormContainer").style.display = "block";
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }
		
		function generateIbanFromAccountNumber() {
			var accountNumber = document.getElementById("accountNumberInput").value.trim();
			
			if (accountNumber.length != 24 && accountNumber.length == 16 && !isNaN(accountNumber) )
			{
				var MCB_SWIFT = 'MUCB'
				var PK = 'PK00'
				var check_sum_digit = ChecksumIBAN( PK + MCB_SWIFT + accountNumber);
				accountNumber = "PK"+check_sum_digit+ MCB_SWIFT +accountNumber;
				
				if ( validateIBAN(accountNumber) )
					document.getElementById("ibanFromAccountNumber").innerHTML = accountNumber;
				else
					document.getElementById("ibanFromAccountNumber").innerHTML = "Please enter 16-digits account number";
					
			}
			else
				document.getElementById("ibanFromAccountNumber").innerHTML = "Please enter 16-digits account number";
		}
		
		function validateInputIbanNumber() {
			var iban = document.getElementById("ibanInput").value.trim();
			
			if ( iban.length == 24 )
			{	
				if ( validateIBAN(iban) )
					document.getElementById("isValidIBAN").innerHTML = "Valid IBAN " + iban;
				else
					document.getElementById("isValidIBAN").innerHTML = "Invalid IBAN " + iban;
					
			}
			else
				document.getElementById("isValidIBAN").innerHTML = "Please enter 24-digits IBAN";
		}
		
		
		function ChecksumIBAN(iban)
		{
			  var code     = iban.substring(0, 2);
			  var checksum = iban.substring(2, 4);
			  var bban     = iban.substring(4);

			  // Assemble digit string
			  var digits = "";
			  for (var i = 0; i < bban.length; ++i)
			  {
				var ch = bban.charAt(i).toUpperCase();
				if ("0" <= ch && ch <= "9")
				  digits += ch;
				else
				  digits += capital2digits(ch);
			  }
			  for (var i = 0; i < code.length; ++i)
			  {
				var ch = code.charAt(i);
				digits += capital2digits(ch);
			  }
			  digits += checksum;

			  // Calculate checksum
			  checksum = 98 - mod97(digits);
			  //console.log("checksum-digits of IBAN " + checksum)
			  return fill0("" + checksum, 2);
		}
		
		function capital2digits(ch)
		{
		  var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		  for (var i = 0; i < capitals.length; ++i)
			if (ch == capitals.charAt(i))
			  break;
		  return i + 10;
		}
		
		function mod97(digit_string)
		{
			var m = 0;
			for (var i = 0; i < digit_string.length; ++i)
			m = (m * 10 + parseInt(digit_string.charAt(i))) % 97;
			return m;
		}

		function fill0(s, l)
		{
			while (s.length < l)
			s = "0" + s;
			return s;
		}
		
		function validateIBAN(iban) {
			var newIban = iban.toUpperCase(),
				modulo = function (divident, divisor) {
					var cDivident = '';
					var cRest = '';

					for (var i in divident ) {
						var cChar = divident[i];
						var cOperator = cRest + '' + cDivident + '' + cChar;

						if ( cOperator < parseInt(divisor) ) {
								cDivident += '' + cChar;
						} else {
								cRest = cOperator % divisor;
								if ( cRest == 0 ) {
									cRest = '';
								}
								cDivident = '';
						}

					}
					cRest += '' + cDivident;
					if (cRest == '') {
						cRest = 0;
					}
					return cRest;
				};

			if (newIban.search(/^[A-Z]{2}/gi) < 0) {
				return false;
			}

			newIban = newIban.substring(4) + newIban.substring(0, 4);

			newIban = newIban.replace(/[A-Z]/g, function (match) {
				return match.charCodeAt(0) - 55;
			});

			return parseInt(modulo(newIban, 97), 10) === 1;
		}
		
	function processCSV() {

    const fileInput = document.getElementById('csvFile');

    if (!fileInput.files.length) {
        alert("Please select a CSV file");
        return;
    }

    Papa.parse(fileInput.files[0], {
			header: true,
			skipEmptyLines: true,

			complete: function(results) {

				const data = results.data;

				document.getElementById("bulkQrContainer").innerHTML = "";

				data.forEach((row, index) => {

					const accountNumber = row.ACCOUNT_NUMBER?.trim();
					const merchantCategoryCode = row.MCC?.trim();
					const merchantCity = row.CITY?.trim();
					const merchantName = row.BUSINESS_NAME?.trim();

					if (!accountNumber || !merchantCategoryCode || !merchantCity || !merchantName) {
						console.log("Skipping invalid row", row);
						return;
					}

					generateBulkQR(
						merchantName,
						merchantCity,
						merchantCategoryCode,
						accountNumber,
						index
					);
				});
			}
		});
	}
	
	function generateBulkQR(
    merchantName,
    merchantCity,
    merchantCategoryCode,
    accountNumber,
    index
) 
{
    var merchantNameLength = merchantName.length;
    var merchantCityLength = merchantCity.length;

    if (merchantNameLength < 10)
        merchantNameLength = '0' + merchantNameLength;

    if (merchantCityLength < 10)
        merchantCityLength = '0' + merchantCityLength;

    var uetr = generateUETR();

    var crc_tag = "6304";

    var tag28Length =
        2 + 2 + 32 +
        2 + 2 + 11 +
        2 + 2 + 24;

    var qrData =
        `00020101021128${tag28Length}` +
        `0032${uetr}` +
        `0111MUCBPKKKRTG` +
        `0224${accountNumber}` +
        `5204${merchantCategoryCode}` +
        `5303586` +
        `5802PK` +
        `59${merchantNameLength}${merchantName}` +
        `60${merchantCityLength}${merchantCity}` +
        `${crc_tag}`;

    var crcValue = GenerateCRC(qrData);

    var qrStringWithCRC = qrData + crcValue;

    // Generate QR
    let options = {
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                height: 256,
                logo: "images/mcb.png",
                logoBackgroundColor: '#ffffff',
                logoBackgroundTransparent: false,
                logoHeight: 40,
                logoWidth: 40,
                quietZone: 50,
                quietZoneColor: 'transparent',
                text: qrStringWithCRC,
				title: merchantName+ " - " + accountNumber.slice(-4),
                titleBackgroundColor: "white",
                titleColor: "#000000",
                titleFont: 18,
                titleHeight: 0,
                titleTop: 292,
                typeNumber: 5,
                width: 256,
				tooltip:true,
				drawer:'canvas'
            };
	
	//let index = i + 1;
	let qrCodeDiv = document.createElement('div');
	qrCodeDiv.id = 'bqrcode' + index + '_' + merchantName + '-' + accountNumber;
	qrCodeDiv.crossorigin="anonymous";
	new QRCode(qrCodeDiv, options);

	let bulkQrContainer = document.getElementById("bulkQrContainer");
	bulkQrContainer.appendChild(qrCodeDiv);

    // Prepare Download
    setTimeout(() => {

        const qrCanvas =
            document.querySelector(`#qr_${index} canvas`);

        if (qrCanvas) {

            const qrImage =
                qrCanvas.toDataURL('image/png');

            const downloadButton =
                document.getElementById(`download_${index}`);

            downloadButton.href = qrImage;
        }

    }, 300);
	
	document.getElementById("downloadAllBtn").style.display = "block"
}

        function downloadBulkQRs() {
            const qrCodes = document.querySelectorAll('[id^=bqrcode]:not([style*="display: none"])');
            qrCodes.forEach((qrCodeDiv, index) => {
                let canvas = qrCodeDiv.querySelector('canvas');
				let merchantName = qrCodeDiv.id.split("_")[1];
                if (canvas) {
                    let dataURL = getCanvasDataURL(canvas);
					setTimeout(
					() => {
                    downloadImage(dataURL, `${merchantName}.png`);
					},
     200
  );
                }
            });
        }
		
	function getCanvasDataURL(canvas) {
           return canvas.toDataURL('image/png');
       }
		
	function downloadImage(dataURL, filename) {
           let link = document.createElement('a');
           link.href = dataURL;
           link.download = filename;
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
       }

