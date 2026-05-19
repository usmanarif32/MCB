/*const MERCHANT_STATIC_QR_STRING_BKP = [
"00020101021128790032f5afde196d1845a59181b9e0a7c60e3e0111MUCBPKKKRTG0224PK58MUCB00771284010083495204562153035865802PK5914MILAN BOUTIQUE6007Karachi63040E26								",
"000201010211287900327d478bf2b4f9494485cda2fa8a886cff0111MUCBPKKKRTG0224PK93MUCB15110946610058155204152053035865802PK5914MASHOOD ABBASI6006Lahore63044F27								",
"000201010211287900327f437ab7236946378a8d0e5aa0427b070111MUCBPKKKRTG0224PK27MUCB11845582610002385204481253035865802PK5917A.S MOBILE CENTER6006Lahore6304500B							",
"0002010102112879003216a5dd85bdc7416fa8ecf8f7f75f00350111MUCBPKKKRTG0224PK78MUCB12118699810033615204564153035865802PK5911KIDZ DOMAIN6009ISLAMABAD630428A8								",
"0002010102112879003224706059d4734222aafef89190d2bce70111MUCBPKKKRTG0224PK58MUCB15185634510063925204723053035865802PK5911CUT & STYLE6007Karachi63044B3D									",
"00020101021128790032894edba33dd74fac88cfb72c626f47710111MUCBPKKKRTG0224PK63MUCB14539694810006615204152053035865802PK5918HAMZA TARIQ SHAMIM6006Lahore63043C27							",
"000201010211287900320d76c4a0838a42f799acf8ef40f205080111MUCBPKKKRTG0224PK06MUCB00749477910022935204573353035865802PK5938ACOUSTICA MUSICAL INSTRUMENTS & EVENTS6010Rawalpindi630427B9	",
"00020101021128790032a644c8b42c9747fca9153f123bcaa6c80111MUCBPKKKRTG0224PK81MUCB14938785510034215204481253035865802PK5914GHOUSIA MOBILE6007Karachi6304B8D7								",
"00020101021128790032028f4962ccad49c1a53afee627799fb50111MUCBPKKKRTG0224PK97MUCB13404230510036695204753153035865802PK5924SHAH JEE CAR ACCESSORIES6007Karachi6304EF56					",
"000201010211287900326700332551e248b0ab18f04f6fbd89490111MUCBPKKKRTG0224PK56MUCB02225144110048135204517253035865802PK5924KASHIF BROTHER PETROLIUM6006Multan63044C2F						",
"0002010102112879003249da30700eac4ef4b2c9c52f028aa75c0111MUCBPKKKRTG0224PK21MUCB14648646310011635204594853035865802PK5928LEGEND LEATHER INTERNATIONAL6010Rawalpindi6304A82C				",
"00020101021128790032d087285f02d544efbd93f83446a53c0c0111MUCBPKKKRTG0224PK78MUCB13383982910030405204531153035865802PK5918ISLAMUDDIN TRADERS6007Karachi6304C28E							",
"00020101021128790032fe7197c150a841aa97591063a5900dc20111MUCBPKKKRTG0224PK80MUCB07016942810076005204152053035865802PK5919SHEIKH HASEEB HAMID6006Lahore630479BC							",
"00020101021128790032042fd3f97b984b93a36a57fdc5f8d77f0111MUCBPKKKRTG0224PK20MUCB14699855010083785204481253035865802PK59127860 MOBILES6006Lahore63042E56									",
"000201010211287900323c15cc43630843f7b453cecd1fe3bf7d0111MUCBPKKKRTG0224PK43MUCB14644968810062385204481253035865802PK5924TALHA KHAN COMMUNICATION6007Karachi63047734					",
"000201010211287900322a3686d1723e443a8c0d8647dc21f84f0111MUCBPKKKRTG0224PK19MUCB01402020100143305204802153035865802PK5920IMRAN DENTAL SURGERY6006Lahore6304658F							",
"00020101021128790032a95cb139845745558992ac7af5350bf50111MUCBPKKKRTG0224PK09MUCB00043010100350165204553253035865802PK5918ABDUL HAMEED QADRI6007Karachi6304C2F4							",
"00020101021128790032e9542f5c16c543018c719d2c35cb04a60111MUCBPKKKRTG0224PK20MUCB08090146910033025204531153035865802PK5917GOOD LUCK TRADERS6006Lahore63044079							",
"00020101021128790032c842484964e64c36b87fc5ace2bae8590111MUCBPKKKRTG0224PK97MUCB10602685410003005204171153035865802PK5920MUHAMMAD HARIS LATIF6006Lahore630458EC							",
"0002010102112879003269cf17c1e7c44ca0940514bcfe5587310111MUCBPKKKRTG0224PK69MUCB00400405110057555204541153035865802PK5932NEW PRINCE MEDICAL & SUPER STORE6007Karachi6304BE98			",
"000201010211287900320de5599f5b19477985c096f52b6db1120111MUCBPKKKRTG0224PK26MUCB14354482010031545204152053035865802PK5918WASEEM AHMED MALIK6006Lahore63046576							",
"000201010211287900321786f1b1f3c04e3fbe4135a0b84800e70111MUCBPKKKRTG0224PK73MUCB11221193610053275204541153035865802PK5920GALAXY GENERAL STORE6007Karachi63041C4F						",
"000201010211287900327f2752f0d2ca42d6838cb02151a5bba70111MUCBPKKKRTG0224PK39MUCB15101874610063595204541153035865802PK5916QUALITY PSO MART6007Karachi6304A5F7							",
"00020101021128790032d774560d745f4932b0bff222bf8b89a50111MUCBPKKKRTG0224PK61MUCB07686415010085055204152053035865802PK5910HASSAN ALI6006Lahore6304FBAA									",
"000201010211287900322206321e86e2499b97b2e944bfd206f60111MUCBPKKKRTG0224PK78MUCB13932701410052975204152053035865802PK5910QASIM AZIZ6006Lahore63044040									",
"00020101021128790032414afaf164964b77829c437f3f1871f00111MUCBPKKKRTG0224PK95MUCB14012591810043705204152053035865802PK5915FURQAN ALI SYED6006Lahore6304D83F								",
"000201010211287900328cd4285e0707436f8dfa4d301c888d3d0111MUCBPKKKRTG0224PK50MUCB15258545110075735204566153035865802PK5912SHOE GARDEN 6006Lahore6304C160									",
"00020101021128790032cd346364b91c4979a06e854f0286ed910111MUCBPKKKRTG0224PK54MUCB09123132110126535204554153035865802PK5918ZA FILLING STATION6006Lahore6304B99A							",
"000201010211287900328fd37afb5e114a4ca69343eae920302e0111MUCBPKKKRTG0224PK33MUCB13049697810113185204541153035865802PK5930AHMED CHEMICAL & GENERAL STORE6007Karachi630421ED				",
"0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK55MUCB12065543710079255204481253035865802PK5919JAVERIA ENTERPRISES6006Lahore63049C3C		   					",
"0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK68MUCB10763664510000905204481253035865802PK590892 BYTES6007Karachi6304416D                   					",
"0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK21MUCB12200042010085265204594253035865802PK5919AL NOOR BOOK CENTER6006Lahore63041246         					",
"0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK13MUCB00597010100299435204561153035865802PK5915FASHION & STYLE6009ISLAMABAD630445CF          					",
"0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK32MUCB08138954610135775204531153035865802PK5926ALLAH WASAYA KARYANA STORE6007Lodhran630481C6 					",
"0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK71MUCB00301261110159385204152053035865802PK5911SALMAN SYED6006Lahore63044BDE                 					"
]*/

        /*for (let i = 0; i < MERCHANT_STATIC_QR_STRING.length; i++) {
            let merchantNameLength = MERCHANT_STATIC_QR_STRING[i].trim().substring(118,120);
            let merchantName = MERCHANT_STATIC_QR_STRING[i].trim().substring(120,120 + parseInt(merchantNameLength));
            let merchantAccount = MERCHANT_STATIC_QR_STRING[i].trim().substring(91,95);

            let options = {
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                height: 250,
				logo: "../images/mcb.png",
                logoBackgroundColor: '#ffffff',
                logoBackgroundTransparent: false,
                logoHeight: 40,
                logoWidth: 40,
                quietZone: 50,
                quietZoneColor: 'transparent',
                subTitleFont: 12,
                text: MERCHANT_STATIC_QR_STRING[i].trim(),
                title: merchantName + " - " + merchantAccount,
                titleBackgroundColor: "white",
                titleColor: "#000000",
                titleFont: 15,
                titleHeight: 0,
                titleTop: 292,
                typeNumber: 5,
                width: 250,
				tooltip:true,
				drawer:'canvas'
            };

            let index = i + 1;
            let qrCodeDiv = document.createElement('div');
            qrCodeDiv.id = 'qrcode' + index;
			qrCodeDiv.crossorigin="anonymous";
            new QRCode(qrCodeDiv, options);

            let root = document.getElementById("root");
            root.appendChild(qrCodeDiv);
        }*/

const MERCHANTS_STATIC_QR_STRING_GLB = [];

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
		
		function downloadPDF(dataURL, filename) {
            var { jsPDF } = window.jspdf;
            var pdf = new jsPDF();
			pdf.addImage(dataURL, 'PNG', 0, 0, 100, 100 );
			pdf.save(filename);
        }

        function downloadQRs() {
            const qrCodes = document.querySelectorAll('[id^=qrcode]:not([style*="display: none"])');
            qrCodes.forEach((qrCodeDiv, index) => {
                let canvas = qrCodeDiv.querySelector('canvas');
				//let merchantNameLength = MERCHANTS_STATIC_QR_STRING_GLB[index].trim().substring(118,120);
				//let merchantName = MERCHANTS_STATIC_QR_STRING_GLB[index].trim().substring(120,120 + parseInt(merchantNameLength));
				let merchantName = qrCodeDiv.id.split("_")[1];
                if (canvas) {
                    let dataURL = getCanvasDataURL(canvas);
					setTimeout(
					() => {
                    downloadImage(dataURL, `${merchantName}.png`);
					//downloadPDF(dataURL, `${merchantName}.pdf`);
					},
     200 // Delay download every 200ms
  );
                }
            });
        }

        $('#cmd').click(function () {
            // Download QR codes as PNG images
            downloadQRs();
        });
		
		const MERCHANT_STATIC_QR_STRING_FROM_CSV = [];
		
		document.addEventListener('DOMContentLoaded', () => {
			//fetch('../data/bulk_raast_01_500_qr_string.csv')
			//fetch('../data/North_QR/North_QR_1.csv')
			//fetch('../data/North_QR/North_QR_2.csv')
			//fetch('../data/North_QR/North_QR_3.csv')
			//fetch('../data/North_QR/North_QR_4.csv')
			//fetch('../data/North_QR/North_QR_5.csv')
			//fetch('../data/South_QR/South.csv')
			//fetch('../data/South_QR/South_QR_1.csv')
			//fetch('../data/South_QR/South_QR_2.csv')
			//fetch('../data/South_QR/South_QR_3.csv')l
			//fetch('../data/South_QR/South_QR_4.csv')
			//fetch('../data/South_QR/South_QR_5.csv')
			//fetch('../data/South_QR/South_QR_6.csv')
			//fetch('../data/South_QR/South_QR_7.csv')
			//fetch('../data/South_QR/South_QR_8.csv')
			//fetch('../data/South_QR/South_QR_9.csv')
			//fetch('../data/South_QR/South_QR_10.csv')
			//fetch('../data/South_QR/South_QR_11.csv')
			//fetch('../data/North_QR/North_QR_1.csv')
			//fetch('../data/North_QR/North_QR_2.csv')
			//fetch('../data/North_QR/North_QR_3.csv')
			//fetch('../data/North_QR/North_QR_4.csv')
			//fetch('../data/North_QR/North_QR_5.csv')
			//fetch('../data/South_QR/Central.csv')
			//fetch('../data/Central_QR/Central_QR_1.csv')
			//fetch('../data/Central_QR/Central_QR_2.csv')
			//fetch('../data/Central_QR/Central_QR_3.csv')
			//fetch('../data/Central_QR/Central_QR_4.csv')
			//fetch('../data/Central_QR/Central_QR_5.csv')
			//fetch('../data/Central_QR/Central_QR_6.csv')
			//fetch('../data/Central_QR/Central_QR_7.csv')
			//fetch('../data/Central_QR/Central_QR_8.csv')
			//fetch('../data/Central_QR/Central_QR_9.csv')
			//fetch('../data/Central_QR/Central_QR_10.csv')
			//fetch('../data/Central_QR/Central_QR_11.csv')
			//fetch('../data/Central_QR/Central_QR_12.csv')
			//fetch('../data/Central_QR/Central_QR_13.csv')
			//fetch('../data/Central_QR/Central_QR_14.csv')
			//fetch('../data/Central_QR/Central_QR_15.csv')
			//fetch('../data/Central_QR/Central_QR_16.csv')
			//fetch('../data/Central_QR/Central_QR_17.csv')
			//fetch('../data/Central_QR/Central_QR_18.csv')
			//fetch('../data/Central_QR/Central_QR_19.csv')
			//fetch('../data/Central_QR/Central_QR_20.csv')
			//fetch('../data/Central_QR/Central_QR_21.csv')
			//fetch('../data/Central_QR/Central_QR_22.csv')
			//fetch('../data/Central_QR/Central_QR_23.csv')
			//fetch('../data/Central_QR/Central_QR_24.csv')
			//fetch('../data/Central_QR/Central_QR_25.csv')
			//fetch('../data/Central_QR/Central_QR_26.csv')
			//fetch('../data/Central_QR/Central_QR_27.csv')
			//fetch('../data/Central_QR/Central_QR_28.csv')
			//fetch('../data/Central_QR/Central_QR_29.csv')
			//fetch('../data/Central_QR/Central_QR_30.csv')
			//fetch('../data/Central_QR/Central_QR_31.csv')
			//fetch('../data/Central_QR/Central_QR_32.csv')
			//fetch('../data/Central_QR/Central_QR_33.csv')
			//fetch('../data/u_QR/u_North_QR.csv')
			//fetch('../data/u_QR/u_South_QR.csv')
			//fetch('../data/u_QR/u_Central_QR.csv')
			//fetch('../data/u_QR/u_Privilage_QR.csv')
			//fetch('../data/d_QR/d_North_QR.csv')
			//fetch('../data/d_QR/d_South_QR.csv')
			//fetch('../data/d_QR/d_Central_QR.csv')
			//fetch('../data/d_QR/d_Privilage_QR.csv')
			fetch('../data/qrString.csv')
			  .then(response => response.text())
			  .then(csvText => {
				// Parse CSV data
				const MERCHANT_STATIC_QR_STRING = parseCSV(csvText);
				//console.log(MERCHANT_STATIC_QR_STRING); // Log the array to the console
				for (let i = 0; i < MERCHANT_STATIC_QR_STRING.length; i++) {
								MERCHANTS_STATIC_QR_STRING_GLB.push(MERCHANT_STATIC_QR_STRING[i].toString().trim());
						
					            let merchantNameLength = MERCHANT_STATIC_QR_STRING[i].toString().trim().substring(118,120);
								let merchantName = MERCHANT_STATIC_QR_STRING[i].toString().trim().substring(120,120 + parseInt(merchantNameLength));
								let merchantAccount = MERCHANT_STATIC_QR_STRING[i].toString().trim().substring(91,95);

								let options = {
									colorDark: "#000000",
									colorLight: "#ffffff",
									correctLevel: QRCode.CorrectLevel.H,
									height: 250,
									logo: "../images/mcb.png",
									logoBackgroundColor: '#ffffff',
									logoBackgroundTransparent: false,
									logoHeight: 40,
									logoWidth: 40,
									quietZone: 50,
									quietZoneColor: 'transparent',
									subTitleFont: 12,
									text: MERCHANT_STATIC_QR_STRING[i].toString(),
									title: merchantName + " - " + merchantAccount,
									titleBackgroundColor: "white",
									titleColor: "#000000",
									titleFont: 15,
									titleHeight: 0,
									titleTop: 292,
									typeNumber: 5,
									width: 250,
									tooltip:true,
									drawer:'canvas'
								};

								let index = i + 1;
								let qrCodeDiv = document.createElement('div');
								qrCodeDiv.id = 'qrcode' + index + '_' + merchantName + '-' + merchantAccount;
								qrCodeDiv.crossorigin="anonymous";
								new QRCode(qrCodeDiv, options);

								let root = document.getElementById("root");
								root.appendChild(qrCodeDiv);
					
					
				}
				//document.getElementById('output').textContent = JSON.stringify(data, null, 2);
			  })
			  .catch(error => console.error('Error loading CSV:', error));
		});

		function parseCSV(text) {
			const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
			return rows.map(row => row.split('\n'));
		}
	
	function search()
	{
		var businessName = document.getElementById("businessName").value.toUpperCase();
		if(businessName.length >= 4)
		{
		 // Get all div elements on the page
         var rootDiv = document.getElementById("root");
		 var divs = rootDiv.getElementsByTagName("div");

            // Loop through all divs and compare their id with the user input
            for (var i = 0; i < divs.length; i++) {
				var div = divs[i];
                // If the div id matches the user input, show it, otherwise hide it
                if (div.id.includes(businessName)) {
                    div.style.display = "";  // Show div
                } else {
                    div.style.display = "none";  // Hide div
                }
            }
		}
	}
	
	function searchByCity()
	{
		var merchantCity = document.getElementById("merchantCity").value;
		if(merchantCity != "Search by city")
		{
		 // Get all div elements on the page
         var rootDiv = document.getElementById("root");
		 var divs = rootDiv.getElementsByTagName("div");

            // Loop through all divs and compare their id with the user input
            for (var i = 0; i < divs.length; i++) {
				var div = divs[i];
                // If the div id matches the user input, show it, otherwise hide it
                if (div.title.includes(merchantCity)) {
                    div.style.display = "";  // Show div
                } else {
                    div.style.display = "none";  // Hide div
                }
            }
		}
	}
	
	function searchByAcctNoIBAN()
	{
		var acctNoIBAN = document.getElementById("acctNoIBAN").value;
		if(acctNoIBAN.length >= 14)
		{
		 // Get all div elements on the page
         var rootDiv = document.getElementById("root");
		 var divs = rootDiv.getElementsByTagName("div");

            // Loop through all divs and compare their id with the user input
            for (var i = 0; i < divs.length; i++) {
				var div = divs[i];
                // If the div id matches the user input, show it, otherwise hide it
                if (div.title.includes(acctNoIBAN)) {
                    div.style.display = "";  // Show div
                } else {
                    div.style.display = "none";  // Hide div
                }
            }
		}
	}
	
	function clearSearch()
	{
		document.getElementById("businessName").value = "";
		document.getElementById("acctNoIBAN").value   = "";
		document.getElementById("merchantCity").selectedIndex  = 0;
         var rootDiv = document.getElementById("root");
		 var divs = rootDiv.getElementsByTagName("div");
            // Loop through all divs and set their display to visible
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = "";  // Show all divs
            }
	}