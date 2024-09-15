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
				title: merchantName + " - " + accountNumber,
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
				title: merchantName + " - " + accountNumber,
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
				title: IBAN,
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
		fetch('../json/cities.json')
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
			
			alert ("Hello");
			
			var sessionValue = sessionStorage.getItem('meResponse');
			alert("sessionValue " + sessionValue);
		
			console.log("me Response " + sessionStorage.getItem('meResponse'));
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
			
			debugger;
			
			var _vid_t = localStorage.getItem('_vid_t');
			var _vid_lr = localStorage.getItem('_vid_lr');
			
			debugger;
			
			//var sessionValue = sessionStorage.getItem('meResponse');

			// Open the target domain (or get the reference to the window)
			//const targetWindow = window.open('http://localhost:8080/sqr.html');

			// Send the session storage data to the target window
			//targetWindow.postMessage(sessionValue, 'http://localhost:8080/sqr.html');
			
			
			/*
			window.open('https://mcblive.com', 'http://localhost:8080/sqr.html');
			targetWindow.postMessage(sessionValue, 'https://target-domain.com');
						
			window.addEventListener('load', () => {
				const targetWindow = window.open('http://localhost:8080/sqr.html');
				targetWindow.postMessage('Hello from another tab', 'http://localhost:8080/sqr.html');
			});
			
			
			window.addEventListener('message', (event) => {
				if (event.origin === 'http://localhost:8080/sqr.html') {
					console.log(event.data);  // Output the message from the other tab
				}
			});
			*/

			//const meResponse = sessionStorage.getItem('meResponse');

            // Simple validation (in real scenarios, you would check this against a server-side database)
            /*if (username === "crediverse-analytics@concurrent.systems" && password === "er1c$$on") {
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("qrFormContainer").style.display = "block";
            } else {
                alert("Invalid credentials. Please try again.");
            }*/
			debugger;
			var JSESSIONID = getCookieValueByName('JSESSIONID');
			if (JSESSIONID)
			{
				console.log("JSESSIONID " + JSESSIONID);
			}
			else
			{
				alert("Invalid credentials. Please try again.");
			}
        }
		
		function getCookieValueByName(name) {
			const cookies = document.cookie.split('; ');
			for (let i = 0; i < cookies.length; i++) {
				const cookiePair = cookies[i].split('=');
				if (cookiePair[0] === name) {
					return decodeURIComponent(cookiePair[1]);
				}
			}
			
		chrome.cookies.getAll({ url: "https://mcblive.com/" }, function (cookies) {
			for (let i = 0; i < cookies.length; i++) {
				debugger;
				console.log(cookies[i].name + ": " + cookies[i].value);
			}
			});
			
			return null;
		}
		
	chrome.cookies.getAll({ url: "https://mcblive.com/" }, function (cookies) {
		for (let i = 0; i < cookies.length; i++) {
			debugger;
			console.log(cookies[i].name + ": " + cookies[i].value);
		}
	});


	window.addEventListener('message', function(event) {
		aler("Accessed");
		// Check the origin of the message to ensure it's from a trusted source
		if (event.origin === 'http://localhost:8080') {
			// Access the data sent by the source window
			const receivedSessionData = event.data;
			console.log('Received session data:', receivedSessionData);
			alert( "receivedSessionData " + receivedSessionData);

			// Now you can use the received session data in this window/tab
		} else {
			alert('Untrusted message origin');
			console.log('Untrusted message origin');
		}
	});
		

