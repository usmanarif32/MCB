import * as BigInteger from './BigInteger.min.js';
import * as IBAN_LIB_JS from './iban.js';
import { randomUUID } from 'crypto';
import fs from 'fs';
import csv from 'csv-parser';

//console.log("CRC!");

var qrData 		= "00020101021128790032804906a5ddda49b6ba3d452a9d674a350111MUCBPKKKRTG0224PK98MUCB11551874410004045204564153035865802PK5905SHANI6007Karachi6304";

/*
var MERCHANT_DATA = [
						[ 'PK42MUCB0555489541009132', 'Hyderabad', 'MOOSANI 110', '4812' ],
						[ 'PK60MUCB1425801881002168', 'ISLAMABAD', 'AL MADINA MEDICAL STORE & COSMETICS', '5912' ],
						[ 'PK47MUCB0696439831004107', 'Lahore', 'HEARING REHAB CENTER', '5975' ],
						[ 'PK14MUCB0800938511009799', 'Rawalpindi', 'NEW IRFAN AUTOS', '5533' ],
						[ 'PK57MUCB0291481821006917', 'ISLAMABAD', 'SANTINO', '5651' ],
						[ 'PK43MUCB0142101010039542', 'Karachi', 'ANARKALI SUPER STORE', '5411' ],
						[ 'PK20MUCB1469985501008378', 'Lahore', '7860 MOBILES', '4812' ],
						[ 'PK48MUCB1469424781008334', 'Lahore', 'Momana Zia', '5975' ],
						[ 'PK61MUCB0959088851011896', 'Lahore', 'IK TRADERS', '5732' ]
						
					]
*/
/*var MERCHANT_DATA = [
["0222514411004813","Multan","KASHIF BROTHER PETROLIUM","5172"							],
["0959088851011896","Lahore","IK TRADERS","5732"                                        ],
["1516506591000993","Karachi","VAPE STREETS","5993"                                     ],
["1464496881006238","Karachi","TALHA KHAN COMMUNICATION","4812"                         ],
["0539129101003226","Lahore","DIPLOMATIC TRAVEL TOURISM SERVICE","4722"                 ],
["1245233151000935","Rawalpindi","SHAHZAIB LEATHER BELT","5948"                         ],
["1518563451006392","Karachi","CUT & STYLE","7230"                                      ],
["0974655581008698","Lahore","SUPPER GRILL BURGER","5812"                               ],
["0483719211006816","Rawalpindi","RAWAL MALL","5311"                                    ],
["1510187461006359","Karachi","QUALITY PSO MART","5411"                                 ],
["1449335351013794","Lahore","SAAD FAROOQ","1520"                                       ],
["0000000015896833","Hyderabad","ONE -TEN ECHO SOUND SYSTEM AND ELECTRIC LIGHT ","5733" ],
["1401259181004370","Lahore","FURQAN ALI SYED","1520"                                   ],
["0779980831012522","Lahore","Muhammad Aqeel","1520"                                    ],
["0272320751012759","Karachi","THE METROPOLITAN ACADEMY","8299"                         ],
["0551111641003298","Karachi","SAJID COMMUNICATION","4812"                              ],
["1448832631010955","Lahore","AMIN AHMED FAYYAZ","1520"                                 ],
["0059701010029943","ISLAMABAD","FASHION & STYLE","5611"                                ],
["1328454801001049","Lahore","AMIN TRADERS","5532"                                      ],
["1493878551003421","Karachi","GHOUSIA MOBILE","4812"                                   ],
["1184558261000238","Lahore","A.S MOBILE CENTER","4812"                                 ],
["1282618851005029","Karachi","CLIFTON SURGICAL","5047"                                 ],
["1060268541000300","Lahore","MUHAMMAD HARIS LATIF","1711"                              ],
["0291481821006917","ISLAMABAD","SANTINO","5651"                                        ],
["0060107051003366","Lahore","IMRAN HUSSAIN","1520"                                     ],
["1467643971003304","Karachi","THE ROYAL PET ANIMAL HOSPITAL ","5995"                   ],
["1469985501008378","Lahore","7860 MOBILES","4812"                                      ],
["PK44JSBL9015000001738700","Rawalpindi","BABY OYE","5611"                              ],
["0076928501003031","ISLAMABAD","ARBAB YAWAR HAYAT","1520"                              ],
["0105801010071571","Karachi","SONITECH INTERNATIONAL","5047"                           ],
["0071332461000824","Karachi","MOHAMMAD EHSAN QURESHI","4812"                           ],
["0764869131003153","Karachi","EYE MAX","8043"                                          ],
["1063097931000507","ISLAMABAD","JAMAL FILLING STATION","5172"                          ],
["0017579171004951","Karachi","DECENT BALLOONS","5947"                                  ],
["1485409351003829","Lahore","NIMRA JAVED","1520"                                       ],
["0040040511005755","Karachi","NEW PRINCE MEDICAL & SUPER STORE","5411"                 ],
["1511094661005815","Lahore","MASHOOD ABBASI","1520"                                    ],
["1405396031003127","Lahore","KASHIF MALIK","1520"                                      ],
["0701694281007600","Lahore","SHEIKH HASEEB HAMID","1520"                               ],
["1435448201003154","Lahore","WASEEM AHMED MALIK","1520"                                ],
["1211869981003361","ISLAMABAD","KIDZ DOMAIN","5641"                                    ],
["0457543261004506","Karachi","ZAFAR MEDICAL & GENERAL STORE","5912"                    ],
["0962131291009255","Lahore","FAMILY PLASTIC","5722"                                    ],
["1122119361005327","Karachi","GALAXY GENERAL STORE","5411"                             ],
["1400262771001467","Karachi","MINI RATION STORE","5311"                                ],
["1425801881002168","ISLAMABAD","AL MADINA MEDICAL STORE & COSMETICS","5912"            ],
["0077128401008349","Karachi","MILAN BOUTIQUE","5621"                                   ],
["0408698481000524","Karachi","ALI ALI GARDEN SUPER STORE","5411"                       ],
["0696439831004107","Lahore","HEARING REHAB CENTER","5975"                              ],
["1520585911010344","Karachi","HINA HAMEED","1711"                                      ],
["1464864631001163","Rawalpindi","LEGEND LEATHER INTERNATIONAL","5948"                  ],
["0002401010019702","Karachi","AL RAHIM OIL AND GENERAL STORE","5411"                   ],
["0555489541009132","Hyderabad","MOOSANI 110","4812"                                    ],
["0053051021001558","Lahore","ALI STEEL","5051"                                         ],
["1304757751003372","Karachi","BISMILLAH LAIBA FOAM","5712"                             ],
["1469257021003488","Lahore","MUHAMMAD USMAN ARIF","1520"                               ],
["0893512791003976","Karachi","SHAHANA TAILORING & GARMENTS","5697"                     ],
["0106025991008789","Lahore","KHALIL ELECTRONICS","5732"                                ],
["1155187441000404","Karachi","SHANI'S KINDER GARDEN","5641"                            ],
["0914804331011312","Lahore","MUHAMMAD SOHAIB","1520"                                   ],
["1076366451000090","Karachi","92 BYTES","5045"                                         ],
["0800938511009799","Rawalpindi","NEW IRFAN AUTOS","5533"                               ],
["0140202010014330","Lahore","IMRAN DENTAL SURGERY","8021"                              ],
["1510545271003429","Karachi","AL MASOOM ENGINEERING WORKS","5251"                      ],
["0142101010039542","Karachi","ANARKALI SUPER STORE","5411"                             ],
["1452081011009128","Lahore","NEW UNIQUE GIFT SHOP","5947"                              ],
["1206554371007925","Lahore","JAVERIA ENTERPRISES","4812"                               ],
["0892304611004563","Lahore","MUHAMMAD SAAD HASSAN","1520"                              ],
["4004915281006348","Sargodha","SIDDIQUE AUTOS","5712"                                  ],
["0077468601001598","Lahore","FARRUKH TRADERS","5532"                                   ],
["1496505551013102","Karachi","NOORANI SUPER STORE","5311"                              ],
["1438168631003254","Lahore","NAUMAN WAJID QURESHI","1520"                              ],
["1484317841019809","Lahore","QADIR BURGER ","5812"                                     ],
["0004301010035016","Karachi","ABDUL HAMEED QADRI","5532"                               ],
["1408428981001704","Karachi","AHSAN AUTOS","5511"                                      ],
["0138901010002714","Rawalpindi","PARK VIEW FILLING STATION ","5172"                    ],
["0913264161005020","Karachi","MY CANNES MART","5411"                                   ],
["0809014691003302","Lahore","GOOD LUCK TRADERS","5311"                                 ],
["0074947791002293","Rawalpindi","ACOUSTICA MUSICAL INSTRUMENTS & EVENTS","5733"        ],
["0872026541010535","ISLAMABAD","ASHMAIR HASSAN TAHIR","1520"                           ],
["1453969481000661","Lahore","HAMZA TARIQ SHAMIM","1520"                                ],
["1338398291003040","Karachi","ISLAMUDDIN TRADERS","5311"                               ],
["1220004201008526","Lahore","AL NOOR BOOK CENTER","5942"                               ],
["1340423051003669","Karachi","SHAH JEE CAR ACCESSORIES","7531"                         ],
["1075930611001908","Lahore","AL FAZAL AUTO WORK SHOP","5521"                           ]

]*/
//14 March 2024
/*var MERCHANT_DATA = [
["1206554371007925","Lahore","JAVERIA ENTERPRISES","4812"								],
["1076366451000090","Karachi","92 BYTES","4812"											],
["1220004201008526","Lahore","AL NOOR BOOK CENTER","5942"								],
["0059701010029943","ISLAMABAD","FASHION & STYLE","5611"								],
["0813895461013577","Lodhran","ALLAH WASAYA KARYANA STORE","5311"						],
["0030126111015938","Lahore","SALMAN SYED","1520"										]
]*/

//20 May 2024
/*var MERCHANT_DATA = [
["6010069458600016","Lahore","JAVERIA ENTERPRISES","4812"								],
];*/

//9th Sep 2024
/*var MERCHANT_DATA = [
['PK89MUCB0077468601001598',	'Lahore',		'FARRUKH TRADERS',							'5532'],
['PK32MUCB0813895461013577',	'Lodhran',	'ALLAH WASAYA KARYANA STORE',					'5311'],
['PK44MUCB1075930611001908',	'Lahore',		'AL FAZAL AUTO WORK SHOP',					'5521'],
['PK98MUCB1155187441000404', 	'Karachi',	'SHANIS KINDER GARDEN',							'5641'],
['PK90MUCB1304757751003372',	'Karachi',	'BISMILLAH LAIBA FOAM',							'5712'],
['PK21MUCB1220004201008526',	'Lahore',		'AL NOOR BOOK CENTER',						'5942'],
['PK93MUCB1543459061020518',	'Lahore',		'TREND JEWELLERY',							'5944'],
['PK43MUCB0142101010039542',	'Karachi',	'ANARKALI SUPER STORE',							'5411'],
['PK39MUCB1520585911010344',	'Karachi',	'HINA HAMEED',									'1711'],
['PK84MUCB0539129101003226',	'Lahore',		'DIPLOMATIC TRAVEL TOURISM SERVICE',		'4722'],
['PK68MUCB1076366451000090',	'Karachi',	'92 BYTES',										'5045'],
['PK55MUCB1206554371007925',	'Lahore',		'JAVERIA ENTERPRISES',						'4812'],
['PK13MUCB0059701010029943',	'ISLAMABAD',	'FASHION & STYLE',							'5611'],
['PK27MUCB0457543261004506', 	'Karachi',	'ZAFAR MEDICAL & GENERAL STORE',				'5912']
];*/

//9th Sep 2024
/*var MERCHANT_DATA = [
['1328454801001049',	'Lahore',	'AMIN TRADERS',			'5532'],
['0696439831004107',	'Lahore',	'HEARING REHAB CENTER',	'5975'],	
['0140283531007049',	'Karachi',	'VIP FISH CORNER',		'5499'],
['0105801010071571',	'Karachi',	'SONITECH INTERNATIONAL','5047'],
['1516506591000993',	'Karachi',	'VAPE STREETS',			'5993'],
['0106025991008789',	'Lahore',	'KHALIL ELECTRONICS',	'5732'],
['1496505551013102',	'Karachi',	'NOORANI SUPER STORE',	'5311']
];*/

//20th Sep 2024
/*var MERCHANT_DATA = [
['1484049481007199',		'Sialkot',			'KIDS',							'5641'],
['0147401010004543',		'Gujranwala',		'IMTIAZ HUSSAIN OIL TRADERS',	'5541'],
['0140302010031064',		'Lahore',			'PIZZA PLACE',					'5814'],
['1540106631004463',		'Hyderabad',		'ADNAN CAR AIR CONDITIONS',		'7623'],
['1546268871001503',		'Lahore',			'AKBAR PHARMACY',				'5912'],
['1476431411001184',		'Rawalpindi',		'BABY OYE',						'5611'],
['0570807551001452',		'Sargodha',			'ADVIYAAT',						'5912']
]*/

//000201010211287900321dc8791ed0494caba27fcd05ce55b7320111MUCBPKKKRTG0224PK62MUCB14764314110011845204561153035865802PK5908BABY OYE6010Rawalpindi63044FEE
//00020101021128790032738cdf26586f4d7698a6e6960f152b1c0111MUCBPKKKRTG0224PK70MUCB05708075510014525204591253035865802PK5908ADVIYAAT6008Sargodha6304A44E


//18th Sep 2024
/*var MERCHANT_DATA = [
['PK73MUCB1157690301004213',	'Lahore',		'HASSAN TRADERS',							'5532'],
['PK71MUCB1281855461006452',	'Lahore',		'COMFY WEAR',							'5621'],
['PK06MUCB0753525231005959',	'Rawalpindi',		'ADVANCE BUSINESS CONSULTANCY',							'5411'],
['PK13MUCB0007712741003314',	'Lahore',		'HEER SALON & SKIN CARE',							'7230']
]*/

//25th Sep 2024
/*var MERCHANT_DATA = [
['PK31MUCB0692471051008853',	'Multan',		'GHULAM SHABBIR KARYANA STORE',	'5411'],
['PK07MUCB1532883901006472',	'Karachi',		'AIMAN MOBILE ZONE',			'4812'],
['PK91MUCB1231636841010143',	'Lahore',		'ROOP SINGHAR',					'5977'],
['PK93MUCB1205782941008787',	'Lahore',		'MADBUNS PAKISTAN', 			'5812'],
['PK34MUCB0734331241003613',	'Lahore',		'SALT MY DAINTY KITCHEN',		'5812'],
['PK16MUCB1542764151007408',	'Hyderabad',	'SHAH RENT A CAR',				'7512'],
['PK42MUCB1501134411001953',	'Lahore',		'NAWAB COLLECTION', 			'5651'],
['PK75MUCB0779576481004827',	'Gujranwala',	'YOUSAF SONS PHARMACY',			'5912'],
['PK75MUCB1461799861001482',	'Lahore',		'MALIK BROTHERS OIL STORE',		'5172'],
['PK67MUCB0865158931001278',	'Dina City',	'MUGHAL CEMENT STORE', 			'5251'],
['PK28MUCB0108001010034727',	'Lahore',		'VISION OPTIC',					'8043'],
['PK58MUCB0923163961003962',	'Lahore',		'MUZAMIL OIL STORE', 			'5172']
];*/

//30th Sep 2024
/*var MERCHANT_DATA = [
['PK19MUCB1499325241000854',	'Lahore',		'THE URBAN SUPER MARKET',	'5311'],
['PK11MUCB1143556231000447',	'Sialkot',		'PIZZA CITY',				'5814'],
['PK43MUCB1541528831007403',	'Sialkot',		'RANA MOBILE CENTER',		'5271']
];*/

//1st Oct 2024
/*
var MERCHANT_DATA = [
['0902979391006403',		'Lahore',		'AL NOOR ATTA CHAKKI',				'5311'],
['1074876031000304',		'Lahore',		'BISMA TRADERS',					'5399'],
['0105802010089418',		'Karachi',		'MUHAMMAD SAQIB SIDDIQUI',			'4812'],
['1131687131001162',		'Lahore',		'MSB TOURS & RENTAL SERVICES',		'7512'],
['1526972271007077',		'Lahore',		'ZUNNOON TRAVEL AND TOURS',			'4722'],
['1485227491014578',		'Lahore',		'CAFE BRU', 						'5814'],
['0285320711003015',		'Gujranwala',	'HASSAAN FILLING STATION',			'5541'],
['PK16HABB0012467904306403','Lahore',		'RANA SONS PHOTO STUDIO',			'7395'],
['4003426201013981',		'Multan',		'MAJID MOBILE SHOP',				'4812']
];*/

/*var MERCHANT_DATA = [
['1063097931000507',	'ISLAMABAD',	'JAMAL FILLING STATION',		'5172'],
['0053051021001558',	'Lahore',		'ALI STEEL',					'5051'],
['0138901010002714',	'Rawalpindi',	'PARK VIEW FILLING STATION',	'5172'],
['0483719211006816',	'Rawalpindi',	'RAWAL MALL',					'5311'],
['4004915281006348',	'Sargodha',		'SIDDIQUE AUTOS',				'5712'],
['1537164731008676',	'Lahore',		'UMER BATTERY SERVICE',			'5533'],
['0021801010044551',	'Lahore',		'VIP JEWELLERS',				'5944'],
];*/

var MERCHANT_DATA = [
['0007402010115026',	'Lahore',		'MS ZNM',									'5691'],
['0506238571005421',	'Lahore',		'BOMBAY CLOTH SALE DEPOT',					'5621'],
['0007736371009815',	'Karachi',		'SENOR SALOON & SPA ',						'7298'],
['1584283691003680',	'Karachi',		'LE MONTIE GARMENTS',						'5611'],
['0086460471007914',	'Lahore',		'BHURAN KHAN ENTERPRISES ',					'5651'],
['1463411591009314',	'Lahore',		'HANIYA ENTERPRISES',						'4812'],
['1575570691012858',	'Ali Pur',		'ISLAM PHARMACY',							'5912'],
['1431709551000049',	'Karachi',		'BEAUTY PALACE BY ERUM IMRAN',				'7298'],
['0095801181005517',	'Lahore',		'CHAUDARY ELECTRONICS',						'5732']
]

var check_digits_iban = ChecksumIBAN("PK00MUCB0959088851011896");
//console.log("ChecksumIBAN " + 	ChecksumIBAN("PK00MUCB0959088851011896") );
//console.log("IBANokay " + 	IBANokay("PK48MUCB1469424781008334") );
//console.log("IBAN Validation " + validateIBAN("PK" + check_digits_iban + "MUCB0959088851011896") );

// Formate string

var baseString_tag28  	= "00020101021128790032";
var uetr 				= "";
var Bic_Code			= "0111MUCBPKKKRTG0224";
var IBAN				= "";
var MCC_tag				= "5204";
var currency_country			= "53035865802PK59";
var merchant_business_name = "";
var merchant_business_name_lenght = "";
var city_tag = "60";
var city = "";
var city_length = "";
var crc_tag = "6304"


const results = [];
//fs.createReadStream('qrString.csv')
//fs.createReadStream('data/newStrings.csv')
//fs.createReadStream('data/bulk_raast_01_500.csv')
//fs.createReadStream('data/PROD_MERCHANT_16_OCT_25.csv')
//fs.createReadStream('data/North_QR.csv')
//fs.createReadStream('data/South_QR.csv')
//fs.createReadStream('data/Central_QR.csv')
//fs.createReadStream('data/u_North_QR.csv')
//fs.createReadStream('data/u_South_QR.csv')
//fs.createReadStream('data/u_Central_QR.csv')
//fs.createReadStream('data/u_Privilage_QR.csv')
//fs.createReadStream('data/d_North_QR.csv')
//fs.createReadStream('data/d_South_QR.csv')
//fs.createReadStream('data/d_Central_QR.csv')
//fs.createReadStream('data/d_Privilage_QR.csv')
//fs.createReadStream('data/QR_RAAST_Self_Employed.csv')
fs.createReadStream('data/cattle_and_farms_qr.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
	    //console.log(results);
	console.log( 'IBAN,MCC,CITY,BUSINESS_NAME,QR_STRING' );	
	for(let i = 0; i < results.length; i++) {
		let object = results[i];
		/*console.log(object.Account_Number);
		console.log(object.City);
		console.log(object.Business_Name);
		console.log(object.MCC);*/
		
		IBAN  = object.ACCOUNT_NUMBER.trim();
		merchant_business_name = object.BUSINESS_NAME.trim();
		//merchant_business_name = merchant_business_name.length > 32 ? merchant_business_name.substring(0, 32) : merchant_business_name;
		merchant_business_name_lenght = merchant_business_name.length;
		if(merchant_business_name_lenght < 10)
			merchant_business_name_lenght = '0' + merchant_business_name_lenght;
		
		city = object.CITY.trim();
		city_length = city.length;
		if ( city_length < 10 )
			city_length = '0' + city_length;
		
		if (IBAN.length != 24)
		{
			var MCB_SWIFT = 'MUCB'
			var PK = 'PK00'
			var check_sum_digit = ChecksumIBAN( PK + MCB_SWIFT + IBAN);
			if ( validateIBAN( 'PK' + check_sum_digit + MCB_SWIFT + IBAN) )
			{
				IBAN = "PK"+check_sum_digit+ MCB_SWIFT +IBAN;
			}
		}
	
		uetr = generateUETR();
		
		var MCC_tag_plus_value  = MCC_tag + object.MCC.trim();
		var QR_STRING = baseString_tag28 + uetr + Bic_Code + IBAN + MCC_tag_plus_value + currency_country + merchant_business_name_lenght + merchant_business_name + city_tag + city_length + city + crc_tag;
		//console.log(IBAN + ',' + object.MCC.trim() + ',' + city + ',' + merchant_business_name + ',' + GenerateCRC(QR_STRING) );
		console.log(GenerateCRC(QR_STRING) ); // only strings
		
	}
	
	
  });
  
  //console.log(results);
  
/*  	for(let i = 0; i < results.length; i++) {
		let object = results[i];
		console.log(object.Account_Number);
		console.log(object.City);
		console.log(object.Business_Name);
		console.log(object.MCC);
		
		IBAN  = object.Account_Number.trim();
		merchant_business_name = object.Business_Name.trim();
		merchant_business_name_lenght = merchant_business_name.length;
		if(merchant_business_name_lenght < 10)
			merchant_business_name_lenght = '0' + merchant_business_name_lenght;
		
		city = object.City.trim();
		city_length = city.length;
		if ( city_length < 10 )
			city_length = '0' + city_length;
		
		if (IBAN.length != 24)
		{
			var MCB_SWIFT = 'MUCB'
			var PK = 'PK00'
			var check_sum_digit = ChecksumIBAN( PK + MCB_SWIFT + IBAN);
			if ( validateIBAN( 'PK' + check_sum_digit + MCB_SWIFT + IBAN) )
			{
				IBAN = "PK"+check_sum_digit+ MCB_SWIFT +IBAN;
			}
		}
	
		uetr = generateUETR();
		
		var MCC_tag_plus_value  = MCC_tag + object.MCC.trim();
		var QR_STRING = baseString_tag28 + uetr + Bic_Code + IBAN + MCC_tag_plus_value + currency_country + merchant_business_name_lenght + merchant_business_name + city_tag + city_length + city + crc_tag;
		console.log( GenerateCRC(QR_STRING) );
		
	}
*/

var sQR = "0002010102112879003272bb51b4f4794d9fb6bd7125e4dc1eb60111MUCBPKKKRTG0224PK60MUCB14258018810021685204481253035865802PK5909AL MADINA6009ISLAMABAD6304"


function parseCSV(text) {
			const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
			return rows.map(row => row.split('\n'));
		}

// Check the checksum of an IBAN.
function IBANokay(iban)
{
  return ChecksumIBAN(iban) == "97";
}

function generateUETR() {
		return randomUUID().replace(/-/g, '').substring(0, 32);
			//return this.crypto.randomUUID().replace(/-/g, '').substring(0, 32);
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

function GenerateCRC(qrData) {
    var crcode = crc16(qrData).toString(16).toUpperCase();
    while (crcode.length < 4) {
        crcode = "0" + crcode;
    }
    var output = qrData + crcode;
    return output;
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
    //console.log(crc);
    return crc
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

function CalcIBAN(country, bank, account)
{
  var fill_acc = FillAccount(country, account);
  var checksum = ChecksumIBAN(country.code + "00" + bank + fill_acc);
  return country.code + checksum + bank + fill_acc;
}

function FillAccount(country, account)
{
  return fill0(account, country.acc_lng);
}