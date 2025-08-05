'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const validations = require('./validations-d525e60d.js');

const countries = {
	"brazil-flag": {
	code: "+55",
	name: "Brasil",
	isoCode: "BR / BRA"
},
	"united-states-flag": {
	code: "+1",
	name: "Estados Unidos",
	isoCode: "US / USA"
},
	"afghanistan-flag": {
	code: "+93",
	name: "Afeganistão",
	isoCode: "AF / AFG"
},
	"south-africa-flag": {
	code: "+27",
	name: "África do Sul",
	isoCode: "ZA / ZAF"
},
	"albania-flag": {
	code: "+355",
	name: "Albânia",
	isoCode: "AL / ALB"
},
	"germany-flag": {
	code: "+49",
	name: "Alemanha",
	isoCode: "DE / DEU"
},
	"andorra-flag": {
	code: "+376",
	name: "Andorra",
	isoCode: "AD / AND"
},
	"angola-flag": {
	code: "+244",
	name: "Angola",
	isoCode: "AO / AGO"
},
	"anguilla-flag": {
	code: "+1-264",
	name: "Anguila",
	isoCode: "AI / AIA"
},
	"antigua-and-barbuda-flag": {
	code: "+1-268",
	name: "Antígua e Barbuda",
	isoCode: "AG / ATG"
},
	"netherlands-antilles-flag": {
	code: "+599",
	name: "Antilhas Holandesas",
	isoCode: "AN / ANT"
},
	"saudi-arabia-flag": {
	code: "+966",
	name: "Arábia Saudita",
	isoCode: "SA / SAU"
},
	"algeria-flag": {
	code: "+213",
	name: "Argélia",
	isoCode: "DZ / DZA"
},
	"argentina-flag": {
	code: "+54",
	name: "Argentina",
	isoCode: "AR / ARG"
},
	"armenia-flag": {
	code: "+374",
	name: "Armênia",
	isoCode: "AM / ARM"
},
	"aruba-flag": {
	code: "+297",
	name: "Aruba",
	isoCode: "AW / ABW"
},
	"australia-flag": {
	code: "+61",
	name: "Austrália",
	isoCode: "AU / AUS"
},
	"austria-flag": {
	code: "+43",
	name: "Áustria",
	isoCode: "AT / AUT"
},
	"azerbaijan-flag": {
	code: "+994",
	name: "Azerbaijão",
	isoCode: "AZ / AZE"
},
	"bahamas-flag": {
	code: "+1-242",
	name: "Bahamas",
	isoCode: "BS / BHS"
},
	"bahrain-flag": {
	code: "+973",
	name: "Bahrein",
	isoCode: "BH / BHR"
},
	"bangladesh-flag": {
	code: "+880",
	name: "Bangladesh",
	isoCode: "BD / BGD"
},
	"barbados-flag": {
	code: "+1-246",
	name: "Barbados",
	isoCode: "BB / BRB"
},
	"belgium-flag": {
	code: "+32",
	name: "Bélgica",
	isoCode: "BE / BEL"
},
	"belize-flag": {
	code: "+501",
	name: "Belize",
	isoCode: "BZ / BLZ"
},
	"benin-flag": {
	code: "+229",
	name: "Benim",
	isoCode: "BJ / BEN"
},
	"bermuda-flag": {
	code: "+1-441",
	name: "Bermuda",
	isoCode: "BM / BMU"
},
	"belarus-flag": {
	code: "+375",
	name: "Bielorrússia",
	isoCode: "BY / BLR"
},
	"bolivia-flag": {
	code: "+591",
	name: "Bolívia",
	isoCode: "BO / BOL"
},
	"bosnia-and-herzegovina-flag": {
	code: "+387",
	name: "Bósnia e Herzegovina",
	isoCode: "BA / BIH"
},
	"botswana-flag": {
	code: "+267",
	name: "Botsuana",
	isoCode: "BW / BWA"
},
	"british-indian-ocean-territory-flag": {
	code: "+246",
	name: "Território Britânico do Oceano Índico",
	isoCode: "IO / IOT"
},
	"british-virgin-islands-flag": {
	code: "+1-284",
	name: "Ilhas Virgens Britânicas",
	isoCode: "VG / VGB"
},
	"brunei-flag": {
	code: "+673",
	name: "Brunei",
	isoCode: "BN / BRN"
},
	"bulgaria-flag": {
	code: "+359",
	name: "Bulgária",
	isoCode: "BG / BGR"
},
	"burkina-faso-flag": {
	code: "+226",
	name: "Burkina Faso",
	isoCode: "BF / BFA"
},
	"burundi-flag": {
	code: "+257",
	name: "Burundi",
	isoCode: "BI / BDI"
},
	"bhutan-flag": {
	code: "+975",
	name: "Butão",
	isoCode: "BT / BTN"
},
	"cape-verde-flag": {
	code: "+238",
	name: "Cabo Verde",
	isoCode: "CV / CPV"
},
	"cameroon-flag": {
	code: "+237",
	name: "Camarões",
	isoCode: "CM / CMR"
},
	"cambodia-flag": {
	code: "+855",
	name: "Camboja",
	isoCode: "KH / KHM"
},
	"canada-flag": {
	code: "+1",
	name: "Canadá",
	isoCode: "CA / CAN"
},
	"qatar-flag": {
	code: "+974",
	name: "Catar",
	isoCode: "QA / QAT"
},
	"kazakhstan-flag": {
	code: "+7",
	name: "Cazaquistão",
	isoCode: "KZ / KAZ"
},
	"chad-flag": {
	code: "+235",
	name: "Chade",
	isoCode: "TD / TCD"
},
	"china-flag": {
	code: "+86",
	name: "China",
	isoCode: "CN / CHN"
},
	"chile-flag": {
	code: "+56",
	name: "Chile",
	isoCode: "CL / CHL"
},
	"chipre-flag": {
	code: "+357",
	name: "Chipre",
	isoCode: "CY / CYP"
},
	"singapore-flag": {
	code: "+65",
	name: "Cingapura",
	isoCode: "SG / SGP"
},
	"colombia-flag": {
	code: "+57",
	name: "Colômbia",
	isoCode: "CO / COL"
},
	"comoros-flag": {
	code: "+269",
	name: "Comores",
	isoCode: "KM / COM"
},
	"north-korea-flag": {
	code: "+850",
	name: "Coréia do Norte",
	isoCode: "KP / PRK"
},
	"ivory-coast-flag": {
	code: "+225",
	name: "Costa do Marfim",
	isoCode: "CI / CIV"
},
	"costa-rica-flag": {
	code: "+506",
	name: "Costa Rica",
	isoCode: "CR / CRI"
},
	"croatia-flag": {
	code: "+385",
	name: "Croácia",
	isoCode: "HR / HRV"
},
	"cuba-flag": {
	code: "+53",
	name: "Cuba",
	isoCode: "CU / CUB"
},
	"curacao-flag": {
	code: "+599",
	name: "Curaçao",
	isoCode: "CW / CUW"
},
	"denmark-flag": {
	code: "+45",
	name: "Dinamarca",
	isoCode: "DK / DNK"
},
	"djibouti-flag": {
	code: "+253",
	name: "Djibuti",
	isoCode: "DJ / DJI"
},
	"dominica-flag": {
	code: "+1-767",
	name: "Dominica",
	isoCode: "DM / DMA"
},
	"ecuador-flag": {
	code: "+593",
	name: "Equador",
	isoCode: "EC / ECU"
},
	"egypt-flag": {
	code: "+20",
	name: "Egito",
	isoCode: "EG / EGY"
},
	"el-salvador-flag": {
	code: "+503",
	name: "El Salvador",
	isoCode: "SV / SLV"
},
	"united-arab-emirates-flag": {
	code: "+971",
	name: "Emirados Árabes Unidos",
	isoCode: "AE / ARE"
},
	"eritrea-flag": {
	code: "+291",
	name: "Eritreia",
	isoCode: "ER / ERI"
},
	"spain-flag": {
	code: "+34",
	name: "Espanha",
	isoCode: "ES / ESP"
},
	"slovakia-flag": {
	code: "+421",
	name: "Eslováquia",
	isoCode: "SK / SVK"
},
	"slovenia-flag": {
	code: "+386",
	name: "Eslovênia",
	isoCode: "SI / SVN"
},
	"estonia-flag": {
	code: "+372",
	name: "Estônia",
	isoCode: "EE / EST"
},
	"ethiopia-flag": {
	code: "+251",
	name: "Etiópia",
	isoCode: "ET / ETH"
},
	"fiji-flag": {
	code: "+679",
	name: "Fiji",
	isoCode: "FJ / FJI"
},
	"philippines-flag": {
	code: "+63",
	name: "Filipinas",
	isoCode: "PH / PHL"
},
	"finland-flag": {
	code: "+358",
	name: "Finlândia",
	isoCode: "FI / FIN"
},
	"france-flag": {
	code: "+33",
	name: "França",
	isoCode: "FR / FRA"
},
	"gabon-flag": {
	code: "+241",
	name: "Gabão",
	isoCode: "GA / GAB"
},
	"gambia-flag": {
	code: "+220",
	name: "Gâmbia",
	isoCode: "GM / GMB"
},
	"georgia-flag": {
	code: "+995",
	name: "Geórgia",
	isoCode: "GE / GEO"
},
	"ghana-flag": {
	code: "+233",
	name: "Gana",
	isoCode: "GH / GHA"
},
	"gibraltar-flag": {
	code: "+350",
	name: "Gibraltar",
	isoCode: "GI / GIB"
},
	"grenada-flag": {
	code: "+1-473",
	name: "Granada",
	isoCode: "GD / GRD"
},
	"greece-flag": {
	code: "+30",
	name: "Grécia",
	isoCode: "GR / GRC"
},
	"greenland-flag": {
	code: "+299",
	name: "Groenlândia",
	isoCode: "GL / GRL"
},
	"guam-flag": {
	code: "+1-671",
	name: "Guam",
	isoCode: "GU / GUM"
},
	"guatemala-flag": {
	code: "+502",
	name: "Guatemala",
	isoCode: "GT / GTM"
},
	"guernsey-flag": {
	code: "+44-1481",
	name: "Guernsey",
	isoCode: "GG / GGY"
},
	"guinea-flag": {
	code: "+224",
	name: "Guiné",
	isoCode: "GN / GIN"
},
	"guinea-bissau-flag": {
	code: "+245",
	name: "Guiné Bissau",
	isoCode: "GW / GNB"
},
	"equatorial-guinea-flag": {
	code: "+240",
	name: "Guiné Equatorial",
	isoCode: "GQ / GNQ"
},
	"guyana-flag": {
	code: "+592",
	name: "Guiana",
	isoCode: "GY / GUY"
},
	"french-guyana-flag": {
	code: "+594",
	name: "Guiana Francesa",
	isoCode: "GQ / GNQ"
},
	"haiti-flag": {
	code: "+509",
	name: "Haiti",
	isoCode: "HT / HTI"
},
	"netherlands-flag": {
	code: "+31",
	name: "Holanda",
	isoCode: "NL / NLD"
},
	"honduras-flag": {
	code: "+504",
	name: "Honduras",
	isoCode: "HN / HND"
},
	"hong-kong-flag": {
	code: "+852",
	name: "Hong Kong",
	isoCode: "HK / HKG"
},
	"hungary-flag": {
	code: "+36",
	name: "Hungria",
	isoCode: "HU / HUN"
},
	"iceland-flag": {
	code: "+354",
	name: "Islândia",
	isoCode: "IS / ISL"
},
	"yemen-flag": {
	code: "+967",
	name: "Iémen",
	isoCode: "YE / YEM"
},
	"cayman-islands-flag": {
	code: "+1-345",
	name: "Ilhas Cayman",
	isoCode: "KY / CYM"
},
	"isle-of-man-flag": {
	code: "+44-1624",
	name: "Ilha de Man",
	isoCode: "IM / IMN"
},
	"christmas-island-flag": {
	code: "+61",
	name: "Ilha do Natal",
	isoCode: "CX / CXR"
},
	"cook-islands-flag": {
	code: "+682",
	name: "Ilhas Cook",
	isoCode: "CK / COK"
},
	"falkland-islands-flag": {
	code: "+500",
	name: "Ilhas Malvinas",
	isoCode: "FK / FLK"
},
	"faroe-islands-flag": {
	code: "+298",
	name: "ilhas Faroe",
	isoCode: "FO / FRO"
},
	"marshall-islands-flag": {
	code: "+692",
	name: "Ilhas Marshall",
	isoCode: "MH / MHL"
},
	"northern-mariana-islands-flag": {
	code: "+1-670",
	name: "Ilhas Marianas do Norte",
	isoCode: "MP / MNP"
},
	"solomon-islands-flag": {
	code: "+677",
	name: "Ilhas Salomão",
	isoCode: "SB / SLB"
},
	"turks-and-caicos-islands-flag": {
	code: "+1-649",
	name: "Ilhas Turcas e Caicos",
	isoCode: "TC / TCA"
},
	"u.s.-virgin-islands-flag": {
	code: "+1-340",
	name: "Ilhas Virgens Americanas",
	isoCode: "VI / VIR"
},
	"india-flag": {
	code: "+91",
	name: "Índia",
	isoCode: "IN / IND"
},
	"indonesia-flag": {
	code: "+62",
	name: "Indonésia",
	isoCode: "ID / IDN"
},
	"iran-flag": {
	code: "+98",
	name: "Irã",
	isoCode: "IR / IRN"
},
	"iraq-flag": {
	code: "+964",
	name: "Iraque",
	isoCode: "IQ / IRQ"
},
	"ireland-flag": {
	code: "+353",
	name: "Irlanda",
	isoCode: "IE / IRL"
},
	"israel-flag": {
	code: "+972",
	name: "Israel",
	isoCode: "IL / ISR"
},
	"italy-flag": {
	code: "+39",
	name: "Itália",
	isoCode: "IT / ITA"
},
	"jamaica-flag": {
	code: "+1-876",
	name: "Jamaica",
	isoCode: "JM / JAM"
},
	"japan-flag": {
	code: "+81",
	name: "Japão",
	isoCode: "JP / JPN"
},
	"jersey-flag": {
	code: "+44-1534",
	name: "Camisa",
	isoCode: "JE / JEY"
},
	"jordan-flag": {
	code: "+962",
	name: "Jordânia",
	isoCode: "JO / JOR"
},
	"kiribati-flag": {
	code: "+686",
	name: "Kiribati",
	isoCode: "KI / KIR"
},
	"kosovo-flag": {
	code: "+383",
	name: "Kosovo",
	isoCode: "XK / XKX"
},
	"kuwait-flag": {
	code: "+965",
	name: "Kuwait",
	isoCode: "KW / KWT"
},
	"laos-flag": {
	code: "+856",
	name: "Laos",
	isoCode: "LA / LAO"
},
	"latvia-flag": {
	code: "+371",
	name: "Letônia",
	isoCode: "LV / LVA"
},
	"lebanon-flag": {
	code: "+961",
	name: "Líbano",
	isoCode: "LB / LBN"
},
	"lesotho-flag": {
	code: "+266",
	name: "Lesoto",
	isoCode: "LS / LSO"
},
	"liberia-flag": {
	code: "+231",
	name: "Libéria",
	isoCode: "LR / LBR"
},
	"libya-flag": {
	code: "+218",
	name: "Líbia",
	isoCode: "LY / LBY"
},
	"liechtenstein-flag": {
	code: "+423",
	name: "Liechtenstein",
	isoCode: "LI / LIE"
},
	"lithuania-flag": {
	code: "+370",
	name: "Lituânia",
	isoCode: "LT / LTU"
},
	"luxembourg-flag": {
	code: "+352",
	name: "Luxemburgo",
	isoCode: "LU / LUX"
},
	"macau-flag": {
	code: "+853",
	name: "Macau",
	isoCode: "MO / MAC"
},
	"macedonia-flag": {
	code: "+389",
	name: "Macedônia",
	isoCode: "MK / MKD"
},
	"madagascar-flag": {
	code: "+261",
	name: "Madagáscar",
	isoCode: "MG / MDG"
},
	"malawi-flag": {
	code: "+265",
	name: "Malawi",
	isoCode: "MW / MWI"
},
	"malasya-flag": {
	code: "+60",
	name: "Malásia",
	isoCode: "MY / MYS"
},
	"maldives-flag": {
	code: "+960",
	name: "Maldivas",
	isoCode: "MV / MDV"
},
	"mali-flag": {
	code: "+223",
	name: "Mali",
	isoCode: "ML / MLI"
},
	"malta-flag": {
	code: "+356",
	name: "Malta",
	isoCode: "MT / MLT"
},
	"martinique-flag": {
	code: "+596",
	name: "Martinica",
	isoCode: "MQ / MTQ"
},
	"mauritania-flag": {
	code: "+222",
	name: "Mauritânia",
	isoCode: "MR / MRT"
},
	"mauritius-flag": {
	code: "+230",
	name: "Maurício",
	isoCode: "MU / MUS"
},
	"mayotte-flag": {
	code: "+262",
	name: "Maiote",
	isoCode: "YT / MYT"
},
	"mexico-flag": {
	code: "+52",
	name: "México",
	isoCode: "MX / MEX"
},
	"micronesia-flag": {
	code: "+691",
	name: "Micronésia",
	isoCode: "FM / FSM"
},
	"moldova-flag": {
	code: "+373",
	name: "Moldávia",
	isoCode: "MD / MDA"
},
	"monaco-flag": {
	code: "+377",
	name: "Mônaco",
	isoCode: "MC / MCO"
},
	"mongolia-flag": {
	code: "+976",
	name: "Mongólia",
	isoCode: "MN / MNG"
},
	"montenegro-flag": {
	code: "+382",
	name: "Montenegro",
	isoCode: "ME / MNE"
},
	"montserrat-flag": {
	code: "+1-664",
	name: "Montserrat",
	isoCode: "MS / MSR"
},
	"morocco-flag": {
	code: "+212",
	name: "Marrocos",
	isoCode: "MA / MAR"
},
	"mozambique-flag": {
	code: "+258",
	name: "Moçambique",
	isoCode: "MZ / MOZ"
},
	"myanmar-flag": {
	code: "+95",
	name: "Mianmar",
	isoCode: "MM / MMR"
},
	"namibia-flag": {
	code: "+264",
	name: "Namíbia",
	isoCode: "NA / NAM"
},
	"nauru-flag": {
	code: "+674",
	name: "Nauru",
	isoCode: "NR / NRU"
},
	"nepal-flag": {
	code: "+977",
	name: "Nepal",
	isoCode: "NP / NPL"
},
	"nicaragua-flag": {
	code: "+505",
	name: "Nicarágua",
	isoCode: "NI / NIC"
},
	"niger-flag": {
	code: "+227",
	name: "Níger",
	isoCode: "NE / NER"
},
	"nigeria-flag": {
	code: "+234",
	name: "Nigéria",
	isoCode: "NG / NGA"
},
	"niue-flag": {
	code: "+683",
	name: "Niue",
	isoCode: "NU / NIU"
},
	"norway-flag": {
	code: "+47",
	name: "Noruega",
	isoCode: "NO / NOR"
},
	"new-caledonia-flag": {
	code: "+687",
	name: "Nova Caledônia",
	isoCode: "NC / NCL"
},
	"new-zealand-flag": {
	code: "+64",
	name: "Nova Zelândia",
	isoCode: "NZ / NZL"
},
	"oman-flag": {
	code: "+968",
	name: "Omã",
	isoCode: "OM / OMN"
},
	"pakistan-flag": {
	code: "+92",
	name: "Paquistão",
	isoCode: "PK / PAK"
},
	"palau-flag": {
	code: "+680",
	name: "Palau",
	isoCode: "PW / PLW"
},
	"palestine-flag": {
	code: "+970",
	name: "Palestina",
	isoCode: "PS / PSE"
},
	"panama-flag": {
	code: "+507",
	name: "Panamá",
	isoCode: "PA / PAN"
},
	"papua-new-guinea-flag": {
	code: "+675",
	name: "Papua Nova Guiné",
	isoCode: "PG / PNG"
},
	"paraguay-flag": {
	code: "+595",
	name: "Paraguai",
	isoCode: "PY / PRY"
},
	"peru-flag": {
	code: "+51",
	name: "Peru",
	isoCode: "PE / PER"
},
	"pitcairn-flag": {
	code: "+64",
	name: "Pitcairn",
	isoCode: "PN / PCN"
},
	"poland-flag": {
	code: "+48",
	name: "Polônia",
	isoCode: "PL / POL"
},
	"french-polynesia-flag": {
	code: "+689",
	name: "Polinésia Francesa",
	isoCode: "PF / PYF"
},
	"portugal-flag": {
	code: "+351",
	name: "Portugal",
	isoCode: "PT / PRT"
},
	"puerto-rico-flag": {
	code: "+1-787",
	name: "Porto Rico",
	isoCode: "PR / PRI"
},
	"kenya-flag": {
	code: "+254",
	name: "Quênia",
	isoCode: "KE / KEN"
},
	"kyrgyzstan-flag": {
	code: "+996",
	name: "Quirguistão",
	isoCode: "KG / KGZ"
},
	"central-african-republic-flag": {
	code: "+236",
	name: "República Centro-Africana",
	isoCode: "CF / CAF"
},
	"czech-republic-flag": {
	code: "+420",
	name: "República Checa",
	isoCode: "CZ / CZE"
},
	"dominican-republic-flag": {
	code: "+1-809",
	name: "República Dominicana",
	isoCode: "DO / DOM"
},
	"united-kingdom-flag": {
	code: "+44",
	name: "Reino Unido",
	isoCode: "GB / GBR"
},
	"republic-of-the-congo-flag": {
	code: "+242",
	name: "República do congo",
	isoCode: "CG / COG"
},
	"democratic-republic-of-congo-flag": {
	code: "+243",
	name: "República Democratica do congo",
	isoCode: "CD / COD"
},
	"reunion-flag": {
	code: "+262",
	name: "Reunião",
	isoCode: "RE / REU"
},
	"romania-flag": {
	code: "+40",
	name: "Romênia",
	isoCode: "RO / ROU"
},
	"russia-flag": {
	code: "+7",
	name: "Rússia",
	isoCode: "RU / RUS"
},
	"rwanda-flag": {
	code: "+250",
	name: "Ruanda",
	isoCode: "RW / RWA"
},
	"western-sahara-flag": {
	code: "+212",
	name: "Saara Ocidental",
	isoCode: "EH / ESH"
},
	"saint-barthelemy-flag": {
	code: "+590",
	name: "São Bartolomeu",
	isoCode: "BL / BLM"
},
	"saint-helena-flag": {
	code: "+290",
	name: "Santa Helena",
	isoCode: "SH / SHN"
},
	"saint-kitts-and-nevis-flag": {
	code: "+1-869",
	name: "São Cristóvão e Nevis",
	isoCode: "KN / KNA"
},
	"saint-lucia-flag": {
	code: "+1-758",
	name: "Santa Lúcia",
	isoCode: "LC / LCA"
},
	"saint-martin-flag": {
	code: "+590",
	name: "são Martinho",
	isoCode: "MF / MAF"
},
	"saint-pierre-and-miquelon-flag": {
	code: "+508",
	name: "São Pedro e Miquelon",
	isoCode: "PM / SPM"
},
	"saint-vincent-and-the-grenadines-flag": {
	code: "+1-784",
	name: "São Vicente e Granadinas",
	isoCode: "VC / VCT"
},
	"samoa-flag": {
	code: "+685",
	name: "Samoa",
	isoCode: "WS / WSM"
},
	"american-samoa-flag": {
	code: "+1-684",
	name: "Samoa Americana",
	isoCode: "AS / ASM"
},
	"san-marino-flag": {
	code: "+378",
	name: "San Marino",
	isoCode: "SM / SMR"
},
	"sao-tome-and-principe-flag": {
	code: "+239",
	name: "São Tomé e Príncipe",
	isoCode: "ST / STP"
},
	"senegal-flag": {
	code: "+221",
	name: "Senegal",
	isoCode: "SN / SEN"
},
	"serbia-flag": {
	code: "+381",
	name: "Sérvia",
	isoCode: "RS / SRB"
},
	"seychelles-flag": {
	code: "+248",
	name: "Seychelles",
	isoCode: "SC / SYC"
},
	"sierra-leone-flag": {
	code: "+232",
	name: "Serra Leoa",
	isoCode: "SL / SLE"
},
	"sint-maarten-flag": {
	code: "+1-721",
	name: "Sint Maarten",
	isoCode: "SX / SXM"
},
	"somalia-flag": {
	code: "+252",
	name: "Somália",
	isoCode: "SO / SOM"
},
	"south-korea-flag": {
	code: "+82",
	name: "Coreia do Sul",
	isoCode: "KR / KOR"
},
	"south-sudan-flag": {
	code: "+211",
	name: "Sudão do Sul",
	isoCode: "SS / SSD"
},
	"sri-lanka-flag": {
	code: "+94",
	name: "Sri Lanka",
	isoCode: "LK / LKA"
},
	"sudan-flag": {
	code: "+249",
	name: "Sudão",
	isoCode: "SD / SDN"
},
	"suriname-flag": {
	code: "+597",
	name: "Suriname",
	isoCode: "SR / SUR"
},
	"svalbard-and-jan-mayen-flag": {
	code: "+47",
	name: "Svalbard e Jan Mayen",
	isoCode: "SJ / SJM"
},
	"swaziland-flag": {
	code: "+268",
	name: "Suazilândia",
	isoCode: "SZ / SWZ"
},
	"sweden-flag": {
	code: "+46",
	name: "Suécia",
	isoCode: "SE / SWE"
},
	"switzerland-flag": {
	code: "+41",
	name: "Suíça",
	isoCode: "CH / CHE"
},
	"syria-flag": {
	code: "+963",
	name: "Síria",
	isoCode: "SY / SYR"
},
	"taiwan-flag": {
	code: "+886",
	name: "Taiwan",
	isoCode: "TW / TWN"
},
	"tajikistan-flag": {
	code: "+992",
	name: "Tadjiquistão",
	isoCode: "TJ / TJK"
},
	"tanzania-flag": {
	code: "+255",
	name: "Tanzânia",
	isoCode: "TZ / TZA"
},
	"thailand-flag": {
	code: "+66",
	name: "Tailândia",
	isoCode: "TH / THA"
},
	"east-timor-flag": {
	code: "+670",
	name: "Timor Leste",
	isoCode: "TL / TLS"
},
	"togo-flag": {
	code: "+228",
	name: "Togo",
	isoCode: "TG / TGO"
},
	"tokelau-flag": {
	code: "+690",
	name: "Toquelau",
	isoCode: "TK / TKL"
},
	"tonga-flag": {
	code: "+676",
	name: "Tonga",
	isoCode: "TO / TON"
},
	"trinidad-and-tobago-flag": {
	code: "+1-868",
	name: "Trindade e Tobago",
	isoCode: "TT / TTO"
},
	"tunisia-flag": {
	code: "+216",
	name: "Tunísia",
	isoCode: "TN / TUN"
},
	"turkey-flag": {
	code: "+90",
	name: "Turquia",
	isoCode: "TR / TUR"
},
	"turkmenistan-flag": {
	code: "+993",
	name: "Turquemenistão",
	isoCode: "TM / TKM"
},
	"tuvalu-flag": {
	code: "+688",
	name: "Tuvalu",
	isoCode: "TV / TUV"
},
	"uganda-flag": {
	code: "+256",
	name: "Uganda",
	isoCode: "UG / UGA"
},
	"ukraine-flag": {
	code: "+380",
	name: "Ucrânia",
	isoCode: "UA / UKR"
},
	"uruguay-flag": {
	code: "+598",
	name: "Uruguai",
	isoCode: "UY / URY"
},
	"uzbekistan-flag": {
	code: "+998",
	name: "Uzbequistão",
	isoCode: "UZ / UZB"
},
	"vanuatu-flag": {
	code: "+678",
	name: "Vanuatu",
	isoCode: "VU / VUT"
},
	"vatican-flag": {
	code: "+379",
	name: "Vaticano",
	isoCode: "VA / VAT"
},
	"venezuela-flag": {
	code: "+58",
	name: "Venezuela",
	isoCode: "VE / VEN"
},
	"vietnam-flag": {
	code: "+84",
	name: "Vietnã",
	isoCode: "VN / VNM"
},
	"wallis-and-futuna-flag": {
	code: "+681",
	name: "Wallis e Futuna",
	isoCode: "WF / WLF"
},
	"zambia-flag": {
	code: "+260",
	name: "Zâmbia",
	isoCode: "ZM / ZMB"
},
	"zimbabwe-flag": {
	code: "+263",
	name: "Zimbábue",
	isoCode: "ZW / ZWE"
}
};

const countriesPt_BR = {
	"brazil-flag": {
	code: "+55",
	name: "Brasil",
	isoCode: "BR / BRA"
},
	"united-states-flag": {
	code: "+1",
	name: "Estados Unidos",
	isoCode: "US / USA"
},
	"afghanistan-flag": {
	code: "+93",
	name: "Afeganistão",
	isoCode: "AF / AFG"
},
	"south-africa-flag": {
	code: "+27",
	name: "África do Sul",
	isoCode: "ZA / ZAF"
},
	"albania-flag": {
	code: "+355",
	name: "Albânia",
	isoCode: "AL / ALB"
},
	"germany-flag": {
	code: "+49",
	name: "Alemanha",
	isoCode: "DE / DEU"
},
	"andorra-flag": {
	code: "+376",
	name: "Andorra",
	isoCode: "AD / AND"
},
	"angola-flag": {
	code: "+244",
	name: "Angola",
	isoCode: "AO / AGO"
},
	"anguilla-flag": {
	code: "+1-264",
	name: "Anguila",
	isoCode: "AI / AIA"
},
	"antigua-and-barbuda-flag": {
	code: "+1-268",
	name: "Antígua e Barbuda",
	isoCode: "AG / ATG"
},
	"netherlands-antilles-flag": {
	code: "+599",
	name: "Antilhas Holandesas",
	isoCode: "AN / ANT"
},
	"saudi-arabia-flag": {
	code: "+966",
	name: "Arábia Saudita",
	isoCode: "SA / SAU"
},
	"algeria-flag": {
	code: "+213",
	name: "Argélia",
	isoCode: "DZ / DZA"
},
	"argentina-flag": {
	code: "+54",
	name: "Argentina",
	isoCode: "AR / ARG"
},
	"armenia-flag": {
	code: "+374",
	name: "Armênia",
	isoCode: "AM / ARM"
},
	"aruba-flag": {
	code: "+297",
	name: "Aruba",
	isoCode: "AW / ABW"
},
	"australia-flag": {
	code: "+61",
	name: "Austrália",
	isoCode: "AU / AUS"
},
	"austria-flag": {
	code: "+43",
	name: "Áustria",
	isoCode: "AT / AUT"
},
	"azerbaijan-flag": {
	code: "+994",
	name: "Azerbaijão",
	isoCode: "AZ / AZE"
},
	"bahamas-flag": {
	code: "+1-242",
	name: "Bahamas",
	isoCode: "BS / BHS"
},
	"bahrain-flag": {
	code: "+973",
	name: "Bahrein",
	isoCode: "BH / BHR"
},
	"bangladesh-flag": {
	code: "+880",
	name: "Bangladesh",
	isoCode: "BD / BGD"
},
	"barbados-flag": {
	code: "+1-246",
	name: "Barbados",
	isoCode: "BB / BRB"
},
	"belgium-flag": {
	code: "+32",
	name: "Bélgica",
	isoCode: "BE / BEL"
},
	"belize-flag": {
	code: "+501",
	name: "Belize",
	isoCode: "BZ / BLZ"
},
	"benin-flag": {
	code: "+229",
	name: "Benim",
	isoCode: "BJ / BEN"
},
	"bermuda-flag": {
	code: "+1-441",
	name: "Bermuda",
	isoCode: "BM / BMU"
},
	"belarus-flag": {
	code: "+375",
	name: "Bielorrússia",
	isoCode: "BY / BLR"
},
	"bolivia-flag": {
	code: "+591",
	name: "Bolívia",
	isoCode: "BO / BOL"
},
	"bosnia-and-herzegovina-flag": {
	code: "+387",
	name: "Bósnia e Herzegovina",
	isoCode: "BA / BIH"
},
	"botswana-flag": {
	code: "+267",
	name: "Botsuana",
	isoCode: "BW / BWA"
},
	"british-indian-ocean-territory-flag": {
	code: "+246",
	name: "Território Britânico do Oceano Índico",
	isoCode: "IO / IOT"
},
	"british-virgin-islands-flag": {
	code: "+1-284",
	name: "Ilhas Virgens Britânicas",
	isoCode: "VG / VGB"
},
	"brunei-flag": {
	code: "+673",
	name: "Brunei",
	isoCode: "BN / BRN"
},
	"bulgaria-flag": {
	code: "+359",
	name: "Bulgária",
	isoCode: "BG / BGR"
},
	"burkina-faso-flag": {
	code: "+226",
	name: "Burkina Faso",
	isoCode: "BF / BFA"
},
	"burundi-flag": {
	code: "+257",
	name: "Burundi",
	isoCode: "BI / BDI"
},
	"bhutan-flag": {
	code: "+975",
	name: "Butão",
	isoCode: "BT / BTN"
},
	"cape-verde-flag": {
	code: "+238",
	name: "Cabo Verde",
	isoCode: "CV / CPV"
},
	"cameroon-flag": {
	code: "+237",
	name: "Camarões",
	isoCode: "CM / CMR"
},
	"cambodia-flag": {
	code: "+855",
	name: "Camboja",
	isoCode: "KH / KHM"
},
	"canada-flag": {
	code: "+1",
	name: "Canadá",
	isoCode: "CA / CAN"
},
	"qatar-flag": {
	code: "+974",
	name: "Catar",
	isoCode: "QA / QAT"
},
	"kazakhstan-flag": {
	code: "+7",
	name: "Cazaquistão",
	isoCode: "KZ / KAZ"
},
	"chad-flag": {
	code: "+235",
	name: "Chade",
	isoCode: "TD / TCD"
},
	"china-flag": {
	code: "+86",
	name: "China",
	isoCode: "CN / CHN"
},
	"chile-flag": {
	code: "+56",
	name: "Chile",
	isoCode: "CL / CHL"
},
	"chipre-flag": {
	code: "+357",
	name: "Chipre",
	isoCode: "CY / CYP"
},
	"singapore-flag": {
	code: "+65",
	name: "Cingapura",
	isoCode: "SG / SGP"
},
	"colombia-flag": {
	code: "+57",
	name: "Colômbia",
	isoCode: "CO / COL"
},
	"comoros-flag": {
	code: "+269",
	name: "Comores",
	isoCode: "KM / COM"
},
	"north-korea-flag": {
	code: "+850",
	name: "Coréia do Norte",
	isoCode: "KP / PRK"
},
	"ivory-coast-flag": {
	code: "+225",
	name: "Costa do Marfim",
	isoCode: "CI / CIV"
},
	"costa-rica-flag": {
	code: "+506",
	name: "Costa Rica",
	isoCode: "CR / CRI"
},
	"croatia-flag": {
	code: "+385",
	name: "Croácia",
	isoCode: "HR / HRV"
},
	"cuba-flag": {
	code: "+53",
	name: "Cuba",
	isoCode: "CU / CUB"
},
	"curacao-flag": {
	code: "+599",
	name: "Curaçao",
	isoCode: "CW / CUW"
},
	"denmark-flag": {
	code: "+45",
	name: "Dinamarca",
	isoCode: "DK / DNK"
},
	"djibouti-flag": {
	code: "+253",
	name: "Djibuti",
	isoCode: "DJ / DJI"
},
	"dominica-flag": {
	code: "+1-767",
	name: "Dominica",
	isoCode: "DM / DMA"
},
	"ecuador-flag": {
	code: "+593",
	name: "Equador",
	isoCode: "EC / ECU"
},
	"egypt-flag": {
	code: "+20",
	name: "Egito",
	isoCode: "EG / EGY"
},
	"el-salvador-flag": {
	code: "+503",
	name: "El Salvador",
	isoCode: "SV / SLV"
},
	"united-arab-emirates-flag": {
	code: "+971",
	name: "Emirados Árabes Unidos",
	isoCode: "AE / ARE"
},
	"eritrea-flag": {
	code: "+291",
	name: "Eritreia",
	isoCode: "ER / ERI"
},
	"spain-flag": {
	code: "+34",
	name: "Espanha",
	isoCode: "ES / ESP"
},
	"slovakia-flag": {
	code: "+421",
	name: "Eslováquia",
	isoCode: "SK / SVK"
},
	"slovenia-flag": {
	code: "+386",
	name: "Eslovênia",
	isoCode: "SI / SVN"
},
	"estonia-flag": {
	code: "+372",
	name: "Estônia",
	isoCode: "EE / EST"
},
	"ethiopia-flag": {
	code: "+251",
	name: "Etiópia",
	isoCode: "ET / ETH"
},
	"fiji-flag": {
	code: "+679",
	name: "Fiji",
	isoCode: "FJ / FJI"
},
	"philippines-flag": {
	code: "+63",
	name: "Filipinas",
	isoCode: "PH / PHL"
},
	"finland-flag": {
	code: "+358",
	name: "Finlândia",
	isoCode: "FI / FIN"
},
	"france-flag": {
	code: "+33",
	name: "França",
	isoCode: "FR / FRA"
},
	"gabon-flag": {
	code: "+241",
	name: "Gabão",
	isoCode: "GA / GAB"
},
	"gambia-flag": {
	code: "+220",
	name: "Gâmbia",
	isoCode: "GM / GMB"
},
	"georgia-flag": {
	code: "+995",
	name: "Geórgia",
	isoCode: "GE / GEO"
},
	"ghana-flag": {
	code: "+233",
	name: "Gana",
	isoCode: "GH / GHA"
},
	"gibraltar-flag": {
	code: "+350",
	name: "Gibraltar",
	isoCode: "GI / GIB"
},
	"grenada-flag": {
	code: "+1-473",
	name: "Granada",
	isoCode: "GD / GRD"
},
	"greece-flag": {
	code: "+30",
	name: "Grécia",
	isoCode: "GR / GRC"
},
	"greenland-flag": {
	code: "+299",
	name: "Groenlândia",
	isoCode: "GL / GRL"
},
	"guam-flag": {
	code: "+1-671",
	name: "Guam",
	isoCode: "GU / GUM"
},
	"guatemala-flag": {
	code: "+502",
	name: "Guatemala",
	isoCode: "GT / GTM"
},
	"guernsey-flag": {
	code: "+44-1481",
	name: "Guernsey",
	isoCode: "GG / GGY"
},
	"guinea-flag": {
	code: "+224",
	name: "Guiné",
	isoCode: "GN / GIN"
},
	"guinea-bissau-flag": {
	code: "+245",
	name: "Guiné Bissau",
	isoCode: "GW / GNB"
},
	"equatorial-guinea-flag": {
	code: "+240",
	name: "Guiné Equatorial",
	isoCode: "GQ / GNQ"
},
	"guyana-flag": {
	code: "+592",
	name: "Guiana",
	isoCode: "GY / GUY"
},
	"french-guyana-flag": {
	code: "+594",
	name: "Guiana Francesa",
	isoCode: "GQ / GNQ"
},
	"haiti-flag": {
	code: "+509",
	name: "Haiti",
	isoCode: "HT / HTI"
},
	"netherlands-flag": {
	code: "+31",
	name: "Holanda",
	isoCode: "NL / NLD"
},
	"honduras-flag": {
	code: "+504",
	name: "Honduras",
	isoCode: "HN / HND"
},
	"hong-kong-flag": {
	code: "+852",
	name: "Hong Kong",
	isoCode: "HK / HKG"
},
	"hungary-flag": {
	code: "+36",
	name: "Hungria",
	isoCode: "HU / HUN"
},
	"iceland-flag": {
	code: "+354",
	name: "Islândia",
	isoCode: "IS / ISL"
},
	"yemen-flag": {
	code: "+967",
	name: "Iémen",
	isoCode: "YE / YEM"
},
	"cayman-islands-flag": {
	code: "+1-345",
	name: "Ilhas Cayman",
	isoCode: "KY / CYM"
},
	"isle-of-man-flag": {
	code: "+44-1624",
	name: "Ilha de Man",
	isoCode: "IM / IMN"
},
	"christmas-island-flag": {
	code: "+61",
	name: "Ilha do Natal",
	isoCode: "CX / CXR"
},
	"cook-islands-flag": {
	code: "+682",
	name: "Ilhas Cook",
	isoCode: "CK / COK"
},
	"falkland-islands-flag": {
	code: "+500",
	name: "Ilhas Malvinas",
	isoCode: "FK / FLK"
},
	"faroe-islands-flag": {
	code: "+298",
	name: "ilhas Faroe",
	isoCode: "FO / FRO"
},
	"marshall-islands-flag": {
	code: "+692",
	name: "Ilhas Marshall",
	isoCode: "MH / MHL"
},
	"northern-mariana-islands-flag": {
	code: "+1-670",
	name: "Ilhas Marianas do Norte",
	isoCode: "MP / MNP"
},
	"solomon-islands-flag": {
	code: "+677",
	name: "Ilhas Salomão",
	isoCode: "SB / SLB"
},
	"turks-and-caicos-islands-flag": {
	code: "+1-649",
	name: "Ilhas Turcas e Caicos",
	isoCode: "TC / TCA"
},
	"u.s.-virgin-islands-flag": {
	code: "+1-340",
	name: "Ilhas Virgens Americanas",
	isoCode: "VI / VIR"
},
	"india-flag": {
	code: "+91",
	name: "Índia",
	isoCode: "IN / IND"
},
	"indonesia-flag": {
	code: "+62",
	name: "Indonésia",
	isoCode: "ID / IDN"
},
	"iran-flag": {
	code: "+98",
	name: "Irã",
	isoCode: "IR / IRN"
},
	"iraq-flag": {
	code: "+964",
	name: "Iraque",
	isoCode: "IQ / IRQ"
},
	"ireland-flag": {
	code: "+353",
	name: "Irlanda",
	isoCode: "IE / IRL"
},
	"israel-flag": {
	code: "+972",
	name: "Israel",
	isoCode: "IL / ISR"
},
	"italy-flag": {
	code: "+39",
	name: "Itália",
	isoCode: "IT / ITA"
},
	"jamaica-flag": {
	code: "+1-876",
	name: "Jamaica",
	isoCode: "JM / JAM"
},
	"japan-flag": {
	code: "+81",
	name: "Japão",
	isoCode: "JP / JPN"
},
	"jersey-flag": {
	code: "+44-1534",
	name: "Camisa",
	isoCode: "JE / JEY"
},
	"jordan-flag": {
	code: "+962",
	name: "Jordânia",
	isoCode: "JO / JOR"
},
	"kiribati-flag": {
	code: "+686",
	name: "Kiribati",
	isoCode: "KI / KIR"
},
	"kosovo-flag": {
	code: "+383",
	name: "Kosovo",
	isoCode: "XK / XKX"
},
	"kuwait-flag": {
	code: "+965",
	name: "Kuwait",
	isoCode: "KW / KWT"
},
	"laos-flag": {
	code: "+856",
	name: "Laos",
	isoCode: "LA / LAO"
},
	"latvia-flag": {
	code: "+371",
	name: "Letônia",
	isoCode: "LV / LVA"
},
	"lebanon-flag": {
	code: "+961",
	name: "Líbano",
	isoCode: "LB / LBN"
},
	"lesotho-flag": {
	code: "+266",
	name: "Lesoto",
	isoCode: "LS / LSO"
},
	"liberia-flag": {
	code: "+231",
	name: "Libéria",
	isoCode: "LR / LBR"
},
	"libya-flag": {
	code: "+218",
	name: "Líbia",
	isoCode: "LY / LBY"
},
	"liechtenstein-flag": {
	code: "+423",
	name: "Liechtenstein",
	isoCode: "LI / LIE"
},
	"lithuania-flag": {
	code: "+370",
	name: "Lituânia",
	isoCode: "LT / LTU"
},
	"luxembourg-flag": {
	code: "+352",
	name: "Luxemburgo",
	isoCode: "LU / LUX"
},
	"macau-flag": {
	code: "+853",
	name: "Macau",
	isoCode: "MO / MAC"
},
	"macedonia-flag": {
	code: "+389",
	name: "Macedônia",
	isoCode: "MK / MKD"
},
	"madagascar-flag": {
	code: "+261",
	name: "Madagáscar",
	isoCode: "MG / MDG"
},
	"malawi-flag": {
	code: "+265",
	name: "Malawi",
	isoCode: "MW / MWI"
},
	"malaysia-flag": {
	code: "+60",
	name: "Malásia",
	isoCode: "MY / MYS"
},
	"maldives-flag": {
	code: "+960",
	name: "Maldivas",
	isoCode: "MV / MDV"
},
	"mali-flag": {
	code: "+223",
	name: "Mali",
	isoCode: "ML / MLI"
},
	"malta-flag": {
	code: "+356",
	name: "Malta",
	isoCode: "MT / MLT"
},
	"martinique-flag": {
	code: "+596",
	name: "Martinica",
	isoCode: "MQ / MTQ"
},
	"mauritania-flag": {
	code: "+222",
	name: "Mauritânia",
	isoCode: "MR / MRT"
},
	"mauritius-flag": {
	code: "+230",
	name: "Maurício",
	isoCode: "MU / MUS"
},
	"mayotte-flag": {
	code: "+262",
	name: "Maiote",
	isoCode: "YT / MYT"
},
	"mexico-flag": {
	code: "+52",
	name: "México",
	isoCode: "MX / MEX"
},
	"micronesia-flag": {
	code: "+691",
	name: "Micronésia",
	isoCode: "FM / FSM"
},
	"moldova-flag": {
	code: "+373",
	name: "Moldávia",
	isoCode: "MD / MDA"
},
	"monaco-flag": {
	code: "+377",
	name: "Mônaco",
	isoCode: "MC / MCO"
},
	"mongolia-flag": {
	code: "+976",
	name: "Mongólia",
	isoCode: "MN / MNG"
},
	"montenegro-flag": {
	code: "+382",
	name: "Montenegro",
	isoCode: "ME / MNE"
},
	"montserrat-flag": {
	code: "+1-664",
	name: "Montserrat",
	isoCode: "MS / MSR"
},
	"morocco-flag": {
	code: "+212",
	name: "Marrocos",
	isoCode: "MA / MAR"
},
	"mozambique-flag": {
	code: "+258",
	name: "Moçambique",
	isoCode: "MZ / MOZ"
},
	"myanmar-flag": {
	code: "+95",
	name: "Mianmar",
	isoCode: "MM / MMR"
},
	"namibia-flag": {
	code: "+264",
	name: "Namíbia",
	isoCode: "NA / NAM"
},
	"nauru-flag": {
	code: "+674",
	name: "Nauru",
	isoCode: "NR / NRU"
},
	"nepal-flag": {
	code: "+977",
	name: "Nepal",
	isoCode: "NP / NPL"
},
	"nicaragua-flag": {
	code: "+505",
	name: "Nicarágua",
	isoCode: "NI / NIC"
},
	"niger-flag": {
	code: "+227",
	name: "Níger",
	isoCode: "NE / NER"
},
	"nigeria-flag": {
	code: "+234",
	name: "Nigéria",
	isoCode: "NG / NGA"
},
	"niue-flag": {
	code: "+683",
	name: "Niue",
	isoCode: "NU / NIU"
},
	"norway-flag": {
	code: "+47",
	name: "Noruega",
	isoCode: "NO / NOR"
},
	"new-caledonia-flag": {
	code: "+687",
	name: "Nova Caledônia",
	isoCode: "NC / NCL"
},
	"new-zealand-flag": {
	code: "+64",
	name: "Nova Zelândia",
	isoCode: "NZ / NZL"
},
	"oman-flag": {
	code: "+968",
	name: "Omã",
	isoCode: "OM / OMN"
},
	"pakistan-flag": {
	code: "+92",
	name: "Paquistão",
	isoCode: "PK / PAK"
},
	"palau-flag": {
	code: "+680",
	name: "Palau",
	isoCode: "PW / PLW"
},
	"palestine-flag": {
	code: "+970",
	name: "Palestina",
	isoCode: "PS / PSE"
},
	"panama-flag": {
	code: "+507",
	name: "Panamá",
	isoCode: "PA / PAN"
},
	"papua-new-guinea-flag": {
	code: "+675",
	name: "Papua Nova Guiné",
	isoCode: "PG / PNG"
},
	"paraguay-flag": {
	code: "+595",
	name: "Paraguai",
	isoCode: "PY / PRY"
},
	"peru-flag": {
	code: "+51",
	name: "Peru",
	isoCode: "PE / PER"
},
	"pitcairn-flag": {
	code: "+64",
	name: "Pitcairn",
	isoCode: "PN / PCN"
},
	"poland-flag": {
	code: "+48",
	name: "Polônia",
	isoCode: "PL / POL"
},
	"french-polynesia-flag": {
	code: "+689",
	name: "Polinésia Francesa",
	isoCode: "PF / PYF"
},
	"portugal-flag": {
	code: "+351",
	name: "Portugal",
	isoCode: "PT / PRT"
},
	"puerto-rico-flag": {
	code: "+1-787",
	name: "Porto Rico",
	isoCode: "PR / PRI"
},
	"kenya-flag": {
	code: "+254",
	name: "Quênia",
	isoCode: "KE / KEN"
},
	"kyrgyzstan-flag": {
	code: "+996",
	name: "Quirguistão",
	isoCode: "KG / KGZ"
},
	"central-african-republic-flag": {
	code: "+236",
	name: "República Centro-Africana",
	isoCode: "CF / CAF"
},
	"czech-republic-flag": {
	code: "+420",
	name: "República Checa",
	isoCode: "CZ / CZE"
},
	"dominican-republic-flag": {
	code: "+1-809",
	name: "República Dominicana",
	isoCode: "DO / DOM"
},
	"united-kingdom-flag": {
	code: "+44",
	name: "Reino Unido",
	isoCode: "GB / GBR"
},
	"republic-of-the-congo-flag": {
	code: "+242",
	name: "República do congo",
	isoCode: "CG / COG"
},
	"democratic-republic-of-congo-flag": {
	code: "+243",
	name: "República Democratica do congo",
	isoCode: "CD / COD"
},
	"reunion-flag": {
	code: "+262",
	name: "Reunião",
	isoCode: "RE / REU"
},
	"romania-flag": {
	code: "+40",
	name: "Romênia",
	isoCode: "RO / ROU"
},
	"russia-flag": {
	code: "+7",
	name: "Rússia",
	isoCode: "RU / RUS"
},
	"rwanda-flag": {
	code: "+250",
	name: "Ruanda",
	isoCode: "RW / RWA"
},
	"western-sahara-flag": {
	code: "+212",
	name: "Saara Ocidental",
	isoCode: "EH / ESH"
},
	"saint-barthelemy-flag": {
	code: "+590",
	name: "São Bartolomeu",
	isoCode: "BL / BLM"
},
	"saint-helena-flag": {
	code: "+290",
	name: "Santa Helena",
	isoCode: "SH / SHN"
},
	"saint-kitts-and-nevis-flag": {
	code: "+1-869",
	name: "São Cristóvão e Nevis",
	isoCode: "KN / KNA"
},
	"saint-lucia-flag": {
	code: "+1-758",
	name: "Santa Lúcia",
	isoCode: "LC / LCA"
},
	"saint-martin-flag": {
	code: "+590",
	name: "são Martinho",
	isoCode: "MF / MAF"
},
	"saint-pierre-and-miquelon-flag": {
	code: "+508",
	name: "São Pedro e Miquelon",
	isoCode: "PM / SPM"
},
	"saint-vincent-and-the-grenadines-flag": {
	code: "+1-784",
	name: "São Vicente e Granadinas",
	isoCode: "VC / VCT"
},
	"samoa-flag": {
	code: "+685",
	name: "Samoa",
	isoCode: "WS / WSM"
},
	"american-samoa-flag": {
	code: "+1-684",
	name: "Samoa Americana",
	isoCode: "AS / ASM"
},
	"san-marino-flag": {
	code: "+378",
	name: "San Marino",
	isoCode: "SM / SMR"
},
	"sao-tome-and-principe-flag": {
	code: "+239",
	name: "São Tomé e Príncipe",
	isoCode: "ST / STP"
},
	"senegal-flag": {
	code: "+221",
	name: "Senegal",
	isoCode: "SN / SEN"
},
	"serbia-flag": {
	code: "+381",
	name: "Sérvia",
	isoCode: "RS / SRB"
},
	"seychelles-flag": {
	code: "+248",
	name: "Seychelles",
	isoCode: "SC / SYC"
},
	"sierra-leone-flag": {
	code: "+232",
	name: "Serra Leoa",
	isoCode: "SL / SLE"
},
	"sint-maarten-flag": {
	code: "+1-721",
	name: "Sint Maarten",
	isoCode: "SX / SXM"
},
	"somalia-flag": {
	code: "+252",
	name: "Somália",
	isoCode: "SO / SOM"
},
	"south-korea-flag": {
	code: "+82",
	name: "Coreia do Sul",
	isoCode: "KR / KOR"
},
	"south-sudan-flag": {
	code: "+211",
	name: "Sudão do Sul",
	isoCode: "SS / SSD"
},
	"sri-lanka-flag": {
	code: "+94",
	name: "Sri Lanka",
	isoCode: "LK / LKA"
},
	"sudan-flag": {
	code: "+249",
	name: "Sudão",
	isoCode: "SD / SDN"
},
	"suriname-flag": {
	code: "+597",
	name: "Suriname",
	isoCode: "SR / SUR"
},
	"svalbard-and-jan-mayen-flag": {
	code: "+47",
	name: "Svalbard e Jan Mayen",
	isoCode: "SJ / SJM"
},
	"swaziland-flag": {
	code: "+268",
	name: "Suazilândia",
	isoCode: "SZ / SWZ"
},
	"sweden-flag": {
	code: "+46",
	name: "Suécia",
	isoCode: "SE / SWE"
},
	"switzerland-flag": {
	code: "+41",
	name: "Suíça",
	isoCode: "CH / CHE"
},
	"syria-flag": {
	code: "+963",
	name: "Síria",
	isoCode: "SY / SYR"
},
	"taiwan-flag": {
	code: "+886",
	name: "Taiwan",
	isoCode: "TW / TWN"
},
	"tajikistan-flag": {
	code: "+992",
	name: "Tadjiquistão",
	isoCode: "TJ / TJK"
},
	"tanzania-flag": {
	code: "+255",
	name: "Tanzânia",
	isoCode: "TZ / TZA"
},
	"thailand-flag": {
	code: "+66",
	name: "Tailândia",
	isoCode: "TH / THA"
},
	"east-timor-flag": {
	code: "+670",
	name: "Timor Leste",
	isoCode: "TL / TLS"
},
	"togo-flag": {
	code: "+228",
	name: "Togo",
	isoCode: "TG / TGO"
},
	"tokelau-flag": {
	code: "+690",
	name: "Toquelau",
	isoCode: "TK / TKL"
},
	"tonga-flag": {
	code: "+676",
	name: "Tonga",
	isoCode: "TO / TON"
},
	"trinidad-and-tobago-flag": {
	code: "+1-868",
	name: "Trindade e Tobago",
	isoCode: "TT / TTO"
},
	"tunisia-flag": {
	code: "+216",
	name: "Tunísia",
	isoCode: "TN / TUN"
},
	"turkey-flag": {
	code: "+90",
	name: "Turquia",
	isoCode: "TR / TUR"
},
	"turkmenistan-flag": {
	code: "+993",
	name: "Turquemenistão",
	isoCode: "TM / TKM"
},
	"tuvalu-flag": {
	code: "+688",
	name: "Tuvalu",
	isoCode: "TV / TUV"
},
	"uganda-flag": {
	code: "+256",
	name: "Uganda",
	isoCode: "UG / UGA"
},
	"ukraine-flag": {
	code: "+380",
	name: "Ucrânia",
	isoCode: "UA / UKR"
},
	"uruguay-flag": {
	code: "+598",
	name: "Uruguai",
	isoCode: "UY / URY"
},
	"uzbekistan-flag": {
	code: "+998",
	name: "Uzbequistão",
	isoCode: "UZ / UZB"
},
	"vanuatu-flag": {
	code: "+678",
	name: "Vanuatu",
	isoCode: "VU / VUT"
},
	"vatican-flag": {
	code: "+379",
	name: "Vaticano",
	isoCode: "VA / VAT"
},
	"venezuela-flag": {
	code: "+58",
	name: "Venezuela",
	isoCode: "VE / VEN"
},
	"vietnam-flag": {
	code: "+84",
	name: "Vietnã",
	isoCode: "VN / VNM"
},
	"wallis-and-futuna-flag": {
	code: "+681",
	name: "Wallis e Futuna",
	isoCode: "WF / WLF"
},
	"zambia-flag": {
	code: "+260",
	name: "Zâmbia",
	isoCode: "ZM / ZMB"
},
	"zimbabwe-flag": {
	code: "+263",
	name: "Zimbábue",
	isoCode: "ZW / ZWE"
}
};

const countriesEn_US = {
	"brazil-flag": {
	code: "+55",
	name: "Brazil",
	isoCode: "BR / BRA"
},
	"united-states-flag": {
	code: "+1",
	name: "United States",
	isoCode: "US / USA"
},
	"afghanistan-flag": {
	code: "+93",
	name: "Afghanistan",
	isoCode: "AF / AFG"
},
	"south-africa-flag": {
	code: "+27",
	name: "South Africa",
	isoCode: "ZA / ZAF"
},
	"albania-flag": {
	code: "+355",
	name: "Albania",
	isoCode: "AL / ALB"
},
	"germany-flag": {
	code: "+49",
	name: "Germany",
	isoCode: "DE / DEU"
},
	"andorra-flag": {
	code: "+376",
	name: "Andorra",
	isoCode: "AD / AND"
},
	"angola-flag": {
	code: "+244",
	name: "Angola",
	isoCode: "AO / AGO"
},
	"anguilla-flag": {
	code: "+1-264",
	name: "Anguilla",
	isoCode: "AI / AIA"
},
	"antigua-and-barbuda-flag": {
	code: "+1-268",
	name: "Antigua and Barbuda",
	isoCode: "AG / ATG"
},
	"netherlands-antilles-flag": {
	code: "+599",
	name: "Netherlands Antilles",
	isoCode: "AN / ANT"
},
	"saudi-arabia-flag": {
	code: "+966",
	name: "Saudi Arabia",
	isoCode: "SA / SAU"
},
	"algeria-flag": {
	code: "+213",
	name: "Algeria",
	isoCode: "DZ / DZA"
},
	"argentina-flag": {
	code: "+54",
	name: "Argentina",
	isoCode: "AR / ARG"
},
	"armenia-flag": {
	code: "+374",
	name: "Armenia",
	isoCode: "AM / ARM"
},
	"aruba-flag": {
	code: "+297",
	name: "Aruba",
	isoCode: "AW / ABW"
},
	"australia-flag": {
	code: "+61",
	name: "Australia",
	isoCode: "AU / AUS"
},
	"austria-flag": {
	code: "+43",
	name: "Austria",
	isoCode: "AT / AUT"
},
	"azerbaijan-flag": {
	code: "+994",
	name: "Azerbaijan",
	isoCode: "AZ / AZE"
},
	"bahamas-flag": {
	code: "+1-242",
	name: "Bahamas",
	isoCode: "BS / BHS"
},
	"bahrain-flag": {
	code: "+973",
	name: "Bahrain",
	isoCode: "BH / BHR"
},
	"bangladesh-flag": {
	code: "+880",
	name: "Bangladesh",
	isoCode: "BD / BGD"
},
	"barbados-flag": {
	code: "+1-246",
	name: "Barbados",
	isoCode: "BB / BRB"
},
	"belgium-flag": {
	code: "+32",
	name: "Belgium",
	isoCode: "BE / BEL"
},
	"belize-flag": {
	code: "+501",
	name: "Belize",
	isoCode: "BZ / BLZ"
},
	"benin-flag": {
	code: "+229",
	name: "Benin",
	isoCode: "BJ / BEN"
},
	"bermuda-flag": {
	code: "+1-441",
	name: "Bermuda",
	isoCode: "BM / BMU"
},
	"belarus-flag": {
	code: "+375",
	name: "Belarus",
	isoCode: "BY / BLR"
},
	"bolivia-flag": {
	code: "+591",
	name: "Bolivia",
	isoCode: "BO / BOL"
},
	"bosnia-and-herzegovina-flag": {
	code: "+387",
	name: "Bosnia and Herzegovina",
	isoCode: "BA / BIH"
},
	"botswana-flag": {
	code: "+267",
	name: "Botswana",
	isoCode: "BW / BWA"
},
	"british-indian-ocean-territory-flag": {
	code: "+246",
	name: "British Indian Ocean Territory",
	isoCode: "IO / IOT"
},
	"british-virgin-islands-flag": {
	code: "+1-284",
	name: "British Virgin Islands",
	isoCode: "VG / VGB"
},
	"brunei-flag": {
	code: "+673",
	name: "Brunei",
	isoCode: "BN / BRN"
},
	"bulgaria-flag": {
	code: "+359",
	name: "Bulgaria",
	isoCode: "BG / BGR"
},
	"burkina-faso-flag": {
	code: "+226",
	name: "Burkina Faso",
	isoCode: "BF / BFA"
},
	"burundi-flag": {
	code: "+257",
	name: "Burundi",
	isoCode: "BI / BDI"
},
	"bhutan-flag": {
	code: "+975",
	name: "Bhutan",
	isoCode: "BT / BTN"
},
	"cape-verde-flag": {
	code: "+238",
	name: "Cape Verde",
	isoCode: "CV / CPV"
},
	"cameroon-flag": {
	code: "+237",
	name: "Cameroon",
	isoCode: "CM / CMR"
},
	"cambodia-flag": {
	code: "+855",
	name: "Cambodia",
	isoCode: "KH / KHM"
},
	"canada-flag": {
	code: "+1",
	name: "Canada",
	isoCode: "CA / CAN"
},
	"qatar-flag": {
	code: "+974",
	name: "Qatar",
	isoCode: "QA / QAT"
},
	"kazakhstan-flag": {
	code: "+7",
	name: "Kazakhstan",
	isoCode: "KZ / KAZ"
},
	"chad-flag": {
	code: "+235",
	name: "Chad",
	isoCode: "TD / TCD"
},
	"china-flag": {
	code: "+86",
	name: "China",
	isoCode: "CN / CHN"
},
	"chile-flag": {
	code: "+56",
	name: "Chile",
	isoCode: "CL / CHL"
},
	"chipre-flag": {
	code: "+357",
	name: "Cyprus",
	isoCode: "CY / CYP"
},
	"singapore-flag": {
	code: "+65",
	name: "Singapore",
	isoCode: "SG / SGP"
},
	"colombia-flag": {
	code: "+57",
	name: "Colombia",
	isoCode: "CO / COL"
},
	"comoros-flag": {
	code: "+269",
	name: "Comoros",
	isoCode: "KM / COM"
},
	"north-korea-flag": {
	code: "+850",
	name: "North Korea",
	isoCode: "KP / PRK"
},
	"ivory-coast-flag": {
	code: "+225",
	name: "Ivory Coast",
	isoCode: "CI / CIV"
},
	"costa-rica-flag": {
	code: "+506",
	name: "Costa Rica",
	isoCode: "CR / CRI"
},
	"croatia-flag": {
	code: "+385",
	name: "Croatia",
	isoCode: "HR / HRV"
},
	"cuba-flag": {
	code: "+53",
	name: "Cuba",
	isoCode: "CU / CUB"
},
	"curacao-flag": {
	code: "+599",
	name: "Curaçao",
	isoCode: "CW / CUW"
},
	"denmark-flag": {
	code: "+45",
	name: "Denmark",
	isoCode: "DK / DNK"
},
	"djibouti-flag": {
	code: "+253",
	name: "Djibouti",
	isoCode: "DJ / DJI"
},
	"dominica-flag": {
	code: "+1-767",
	name: "Dominica",
	isoCode: "DM / DMA"
},
	"ecuador-flag": {
	code: "+593",
	name: "Ecuador",
	isoCode: "EC / ECU"
},
	"egypt-flag": {
	code: "+20",
	name: "Egypt",
	isoCode: "EG / EGY"
},
	"el-salvador-flag": {
	code: "+503",
	name: "El Salvador",
	isoCode: "SV / SLV"
},
	"united-arab-emirates-flag": {
	code: "+971",
	name: "United Arab Emirates",
	isoCode: "AE / ARE"
},
	"eritrea-flag": {
	code: "+291",
	name: "Eritrea",
	isoCode: "ER / ERI"
},
	"spain-flag": {
	code: "+34",
	name: "Spain",
	isoCode: "ES / ESP"
},
	"slovakia-flag": {
	code: "+421",
	name: "Slovakia",
	isoCode: "SK / SVK"
},
	"slovenia-flag": {
	code: "+386",
	name: "Slovenia",
	isoCode: "SI / SVN"
},
	"estonia-flag": {
	code: "+372",
	name: "Estonia",
	isoCode: "EE / EST"
},
	"ethiopia-flag": {
	code: "+251",
	name: "Ethiopia",
	isoCode: "ET / ETH"
},
	"fiji-flag": {
	code: "+679",
	name: "Fiji",
	isoCode: "FJ / FJI"
},
	"philippines-flag": {
	code: "+63",
	name: "Philippines",
	isoCode: "PH / PHL"
},
	"finland-flag": {
	code: "+358",
	name: "Finland",
	isoCode: "FI / FIN"
},
	"france-flag": {
	code: "+33",
	name: "France",
	isoCode: "FR / FRA"
},
	"gabon-flag": {
	code: "+241",
	name: "Gabon",
	isoCode: "GA / GAB"
},
	"gambia-flag": {
	code: "+220",
	name: "Gambia",
	isoCode: "GM / GMB"
},
	"georgia-flag": {
	code: "+995",
	name: "Georgia",
	isoCode: "GE / GEO"
},
	"ghana-flag": {
	code: "+233",
	name: "Ghana",
	isoCode: "GH / GHA"
},
	"gibraltar-flag": {
	code: "+350",
	name: "Gibraltar",
	isoCode: "GI / GIB"
},
	"grenada-flag": {
	code: "+1-473",
	name: "Grenada",
	isoCode: "GD / GRD"
},
	"greece-flag": {
	code: "+30",
	name: "Greece",
	isoCode: "GR / GRC"
},
	"greenland-flag": {
	code: "+299",
	name: "Greenland",
	isoCode: "GL / GRL"
},
	"guam-flag": {
	code: "+1-671",
	name: "Guam",
	isoCode: "GU / GUM"
},
	"guatemala-flag": {
	code: "+502",
	name: "Guatemala",
	isoCode: "GT / GTM"
},
	"guernsey-flag": {
	code: "+44-1481",
	name: "Guernsey",
	isoCode: "GG / GGY"
},
	"guinea-flag": {
	code: "+224",
	name: "Guinea",
	isoCode: "GN / GIN"
},
	"guinea-bissau-flag": {
	code: "+245",
	name: "Guinea-Bissau",
	isoCode: "GW / GNB"
},
	"equatorial-guinea-flag": {
	code: "+240",
	name: "Equatorial Guinea",
	isoCode: "GQ / GNQ"
},
	"guyana-flag": {
	code: "+592",
	name: "Guyana",
	isoCode: "GY / GUY"
},
	"french-guyana-flag": {
	code: "+594",
	name: "French Guiana",
	isoCode: "GQ / GNQ"
},
	"haiti-flag": {
	code: "+509",
	name: "Haiti",
	isoCode: "HT / HTI"
},
	"netherlands-flag": {
	code: "+31",
	name: "Netherlands",
	isoCode: "NL / NLD"
},
	"honduras-flag": {
	code: "+504",
	name: "Honduras",
	isoCode: "HN / HND"
},
	"hong-kong-flag": {
	code: "+852",
	name: "Hong Kong",
	isoCode: "HK / HKG"
},
	"hungary-flag": {
	code: "+36",
	name: "Hungary",
	isoCode: "HU / HUN"
},
	"iceland-flag": {
	code: "+354",
	name: "Iceland",
	isoCode: "IS / ISL"
},
	"yemen-flag": {
	code: "+967",
	name: "Yemen",
	isoCode: "YE / YEM"
},
	"cayman-islands-flag": {
	code: "+1-345",
	name: "Cayman Islands",
	isoCode: "KY / CYM"
},
	"isle-of-man-flag": {
	code: "+44-1624",
	name: "Isle of Man",
	isoCode: "IM / IMN"
},
	"christmas-island-flag": {
	code: "+61",
	name: "Christmas Island",
	isoCode: "CX / CXR"
},
	"cook-islands-flag": {
	code: "+682",
	name: "Cook Islands",
	isoCode: "CK / COK"
},
	"falkland-islands-flag": {
	code: "+500",
	name: "Falkland Islands",
	isoCode: "FK / FLK"
},
	"faroe-islands-flag": {
	code: "+298",
	name: "Faroe Islands",
	isoCode: "FO / FRO"
},
	"marshall-islands-flag": {
	code: "+692",
	name: "Marshall Islands",
	isoCode: "MH / MHL"
},
	"northern-mariana-islands-flag": {
	code: "+1-670",
	name: "Northern Mariana Islands",
	isoCode: "MP / MNP"
},
	"solomon-islands-flag": {
	code: "+677",
	name: "Solomon Islands",
	isoCode: "SB / SLB"
},
	"turks-and-caicos-islands-flag": {
	code: "+1-649",
	name: "Turks and Caicos Islands",
	isoCode: "TC / TCA"
},
	"u.s.-virgin-islands-flag": {
	code: "+1-340",
	name: "U.S. Virgin Islands",
	isoCode: "VI / VIR"
},
	"india-flag": {
	code: "+91",
	name: "India",
	isoCode: "IN / IND"
},
	"indonesia-flag": {
	code: "+62",
	name: "Indonesia",
	isoCode: "ID / IDN"
},
	"iran-flag": {
	code: "+98",
	name: "Iran",
	isoCode: "IR / IRN"
},
	"iraq-flag": {
	code: "+964",
	name: "Iraq",
	isoCode: "IQ / IRQ"
},
	"ireland-flag": {
	code: "+353",
	name: "Ireland",
	isoCode: "IE / IRL"
},
	"israel-flag": {
	code: "+972",
	name: "Israel",
	isoCode: "IL / ISR"
},
	"italy-flag": {
	code: "+39",
	name: "Italy",
	isoCode: "IT / ITA"
},
	"jamaica-flag": {
	code: "+1-876",
	name: "Jamaica",
	isoCode: "JM / JAM"
},
	"japan-flag": {
	code: "+81",
	name: "Japan",
	isoCode: "JP / JPN"
},
	"jersey-flag": {
	code: "+44-1534",
	name: "Jersey",
	isoCode: "JE / JEY"
},
	"jordan-flag": {
	code: "+962",
	name: "Jordan",
	isoCode: "JO / JOR"
},
	"kiribati-flag": {
	code: "+686",
	name: "Kiribati",
	isoCode: "KI / KIR"
},
	"kosovo-flag": {
	code: "+383",
	name: "Kosovo",
	isoCode: "XK / XKX"
},
	"kuwait-flag": {
	code: "+965",
	name: "Kuwait",
	isoCode: "KW / KWT"
},
	"laos-flag": {
	code: "+856",
	name: "Laos",
	isoCode: "LA / LAO"
},
	"latvia-flag": {
	code: "+371",
	name: "Latvia",
	isoCode: "LV / LVA"
},
	"lebanon-flag": {
	code: "+961",
	name: "Lebanon",
	isoCode: "LB / LBN"
},
	"lesotho-flag": {
	code: "+266",
	name: "Lesotho",
	isoCode: "LS / LSO"
},
	"liberia-flag": {
	code: "+231",
	name: "Liberia",
	isoCode: "LR / LBR"
},
	"libya-flag": {
	code: "+218",
	name: "Libya",
	isoCode: "LY / LBY"
},
	"liechtenstein-flag": {
	code: "+423",
	name: "Liechtenstein",
	isoCode: "LI / LIE"
},
	"lithuania-flag": {
	code: "+370",
	name: "Lithuania",
	isoCode: "LT / LTU"
},
	"luxembourg-flag": {
	code: "+352",
	name: "Luxembourg",
	isoCode: "LU / LUX"
},
	"macau-flag": {
	code: "+853",
	name: "Macau",
	isoCode: "MO / MAC"
},
	"macedonia-flag": {
	code: "+389",
	name: "Macedonia",
	isoCode: "MK / MKD"
},
	"madagascar-flag": {
	code: "+261",
	name: "Madagascar",
	isoCode: "MG / MDG"
},
	"malawi-flag": {
	code: "+265",
	name: "Malawi",
	isoCode: "MW / MWI"
},
	"malaysia-flag": {
	code: "+60",
	name: "Malaysia",
	isoCode: "MY / MYS"
},
	"maldives-flag": {
	code: "+960",
	name: "Maldives",
	isoCode: "MV / MDV"
},
	"mali-flag": {
	code: "+223",
	name: "Mali",
	isoCode: "ML / MLI"
},
	"malta-flag": {
	code: "+356",
	name: "Malta",
	isoCode: "MT / MLT"
},
	"martinique-flag": {
	code: "+596",
	name: "Martinique",
	isoCode: "MQ / MTQ"
},
	"mauritania-flag": {
	code: "+222",
	name: "Mauritania",
	isoCode: "MR / MRT"
},
	"mauritius-flag": {
	code: "+230",
	name: "Mauritius",
	isoCode: "MU / MUS"
},
	"mayotte-flag": {
	code: "+262",
	name: "Mayotte",
	isoCode: "YT / MYT"
},
	"mexico-flag": {
	code: "+52",
	name: "Mexico",
	isoCode: "MX / MEX"
},
	"micronesia-flag": {
	code: "+691",
	name: "Micronesia",
	isoCode: "FM / FSM"
},
	"moldova-flag": {
	code: "+373",
	name: "Moldova",
	isoCode: "MD / MDA"
},
	"monaco-flag": {
	code: "+377",
	name: "Monaco",
	isoCode: "MC / MCO"
},
	"mongolia-flag": {
	code: "+976",
	name: "Mongolia",
	isoCode: "MN / MNG"
},
	"montenegro-flag": {
	code: "+382",
	name: "Montenegro",
	isoCode: "ME / MNE"
},
	"montserrat-flag": {
	code: "+1-664",
	name: "Montserrat",
	isoCode: "MS / MSR"
},
	"morocco-flag": {
	code: "+212",
	name: "Morocco",
	isoCode: "MA / MAR"
},
	"mozambique-flag": {
	code: "+258",
	name: "Mozambique",
	isoCode: "MZ / MOZ"
},
	"myanmar-flag": {
	code: "+95",
	name: "Myanmar",
	isoCode: "MM / MMR"
},
	"namibia-flag": {
	code: "+264",
	name: "Namibia",
	isoCode: "NA / NAM"
},
	"nauru-flag": {
	code: "+674",
	name: "Nauru",
	isoCode: "NR / NRU"
},
	"nepal-flag": {
	code: "+977",
	name: "Nepal",
	isoCode: "NP / NPL"
},
	"nicaragua-flag": {
	code: "+505",
	name: "Nicaragua",
	isoCode: "NI / NIC"
},
	"niger-flag": {
	code: "+227",
	name: "Niger",
	isoCode: "NE / NER"
},
	"nigeria-flag": {
	code: "+234",
	name: "Nigeria",
	isoCode: "NG / NGA"
},
	"niue-flag": {
	code: "+683",
	name: "Niue",
	isoCode: "NU / NIU"
},
	"norway-flag": {
	code: "+47",
	name: "Norway",
	isoCode: "NO / NOR"
},
	"new-caledonia-flag": {
	code: "+687",
	name: "New Caledonia",
	isoCode: "NC / NCL"
},
	"new-zealand-flag": {
	code: "+64",
	name: "New Zealand",
	isoCode: "NZ / NZL"
},
	"oman-flag": {
	code: "+968",
	name: "Oman",
	isoCode: "OM / OMN"
},
	"pakistan-flag": {
	code: "+92",
	name: "Pakistan",
	isoCode: "PK / PAK"
},
	"palau-flag": {
	code: "+680",
	name: "Palau",
	isoCode: "PW / PLW"
},
	"palestine-flag": {
	code: "+970",
	name: "Palestine",
	isoCode: "PS / PSE"
},
	"panama-flag": {
	code: "+507",
	name: "Panama",
	isoCode: "PA / PAN"
},
	"papua-new-guinea-flag": {
	code: "+675",
	name: "Papua New Guinea",
	isoCode: "PG / PNG"
},
	"paraguay-flag": {
	code: "+595",
	name: "Paraguay",
	isoCode: "PY / PRY"
},
	"peru-flag": {
	code: "+51",
	name: "Peru",
	isoCode: "PE / PER"
},
	"pitcairn-flag": {
	code: "+64",
	name: "Pitcairn",
	isoCode: "PN / PCN"
},
	"poland-flag": {
	code: "+48",
	name: "Poland",
	isoCode: "PL / POL"
},
	"french-polynesia-flag": {
	code: "+689",
	name: "French Polynesia",
	isoCode: "PF / PYF"
},
	"portugal-flag": {
	code: "+351",
	name: "Portugal",
	isoCode: "PT / PRT"
},
	"puerto-rico-flag": {
	code: "+1-787",
	name: "Puerto Rico",
	isoCode: "PR / PRI"
},
	"kenya-flag": {
	code: "+254",
	name: "Kenya",
	isoCode: "KE / KEN"
},
	"kyrgyzstan-flag": {
	code: "+996",
	name: "Kyrgyzstan",
	isoCode: "KG / KGZ"
},
	"central-african-republic-flag": {
	code: "+236",
	name: "Central African Republic",
	isoCode: "CF / CAF"
},
	"czech-republic-flag": {
	code: "+420",
	name: "Czech Republic",
	isoCode: "CZ / CZE"
},
	"dominican-republic-flag": {
	code: "+1-809",
	name: "Dominican Republic",
	isoCode: "DO / DOM"
},
	"united-kingdom-flag": {
	code: "+44",
	name: "United Kingdom",
	isoCode: "GB / GBR"
},
	"republic-of-the-congo-flag": {
	code: "+242",
	name: "Republic of the Congo",
	isoCode: "CG / COG"
},
	"democratic-republic-of-congo-flag": {
	code: "+243",
	name: "Democratic Republic of the Congo",
	isoCode: "CD / COD"
},
	"reunion-flag": {
	code: "+262",
	name: "Réunion",
	isoCode: "RE / REU"
},
	"romania-flag": {
	code: "+40",
	name: "Romania",
	isoCode: "RO / ROU"
},
	"russia-flag": {
	code: "+7",
	name: "Russia",
	isoCode: "RU / RUS"
},
	"rwanda-flag": {
	code: "+250",
	name: "Rwanda",
	isoCode: "RW / RWA"
},
	"western-sahara-flag": {
	code: "+212",
	name: "Western Sahara",
	isoCode: "EH / ESH"
},
	"saint-barthelemy-flag": {
	code: "+590",
	name: "Saint Barthélemy",
	isoCode: "BL / BLM"
},
	"saint-helena-flag": {
	code: "+290",
	name: "Saint Helena",
	isoCode: "SH / SHN"
},
	"saint-kitts-and-nevis-flag": {
	code: "+1-869",
	name: "Saint Kitts and Nevis",
	isoCode: "KN / KNA"
},
	"saint-lucia-flag": {
	code: "+1-758",
	name: "Saint Lucia",
	isoCode: "LC / LCA"
},
	"saint-martin-flag": {
	code: "+590",
	name: "Saint Martin",
	isoCode: "MF / MAF"
},
	"saint-pierre-and-miquelon-flag": {
	code: "+508",
	name: "Saint Pierre and Miquelon",
	isoCode: "PM / SPM"
},
	"saint-vincent-and-the-grenadines-flag": {
	code: "+1-784",
	name: "Saint Vincent and the Grenadines",
	isoCode: "VC / VCT"
},
	"samoa-flag": {
	code: "+685",
	name: "Samoa",
	isoCode: "WS / WSM"
},
	"american-samoa-flag": {
	code: "+1-684",
	name: "American Samoa",
	isoCode: "AS / ASM"
},
	"san-marino-flag": {
	code: "+378",
	name: "San Marino",
	isoCode: "SM / SMR"
},
	"sao-tome-and-principe-flag": {
	code: "+239",
	name: "Sao Tome and Principe",
	isoCode: "ST / STP"
},
	"senegal-flag": {
	code: "+221",
	name: "Senegal",
	isoCode: "SN / SEN"
},
	"serbia-flag": {
	code: "+381",
	name: "Serbia",
	isoCode: "RS / SRB"
},
	"seychelles-flag": {
	code: "+248",
	name: "Seychelles",
	isoCode: "SC / SYC"
},
	"sierra-leone-flag": {
	code: "+232",
	name: "Sierra Leone",
	isoCode: "SL / SLE"
},
	"sint-maarten-flag": {
	code: "+1-721",
	name: "Sint Maarten",
	isoCode: "SX / SXM"
},
	"somalia-flag": {
	code: "+252",
	name: "Somalia",
	isoCode: "SO / SOM"
},
	"south-korea-flag": {
	code: "+82",
	name: "South Korea",
	isoCode: "KR / KOR"
},
	"south-sudan-flag": {
	code: "+211",
	name: "South Sudan",
	isoCode: "SS / SSD"
},
	"sri-lanka-flag": {
	code: "+94",
	name: "Sri Lanka",
	isoCode: "LK / LKA"
},
	"sudan-flag": {
	code: "+249",
	name: "Sudan",
	isoCode: "SD / SDN"
},
	"suriname-flag": {
	code: "+597",
	name: "Suriname",
	isoCode: "SR / SUR"
},
	"svalbard-and-jan-mayen-flag": {
	code: "+47",
	name: "Svalbard and Jan Mayen",
	isoCode: "SJ / SJM"
},
	"swaziland-flag": {
	code: "+268",
	name: "Swaziland",
	isoCode: "SZ / SWZ"
},
	"sweden-flag": {
	code: "+46",
	name: "Sweden",
	isoCode: "SE / SWE"
},
	"switzerland-flag": {
	code: "+41",
	name: "Switzerland",
	isoCode: "CH / CHE"
},
	"syria-flag": {
	code: "+963",
	name: "Syria",
	isoCode: "SY / SYR"
},
	"taiwan-flag": {
	code: "+886",
	name: "Taiwan",
	isoCode: "TW / TWN"
},
	"tajikistan-flag": {
	code: "+992",
	name: "Tajikistan",
	isoCode: "TJ / TJK"
},
	"tanzania-flag": {
	code: "+255",
	name: "Tanzania",
	isoCode: "TZ / TZA"
},
	"thailand-flag": {
	code: "+66",
	name: "Thailand",
	isoCode: "TH / THA"
},
	"east-timor-flag": {
	code: "+670",
	name: "East Timor",
	isoCode: "TL / TLS"
},
	"togo-flag": {
	code: "+228",
	name: "Togo",
	isoCode: "TG / TGO"
},
	"tokelau-flag": {
	code: "+690",
	name: "Tokelau",
	isoCode: "TK / TKL"
},
	"tonga-flag": {
	code: "+676",
	name: "Tonga",
	isoCode: "TO / TON"
},
	"trinidad-and-tobago-flag": {
	code: "+1-868",
	name: "Trinidad and Tobago",
	isoCode: "TT / TTO"
},
	"tunisia-flag": {
	code: "+216",
	name: "Tunisia",
	isoCode: "TN / TUN"
},
	"turkey-flag": {
	code: "+90",
	name: "Turkey",
	isoCode: "TR / TUR"
},
	"turkmenistan-flag": {
	code: "+993",
	name: "Turkmenistan",
	isoCode: "TM / TKM"
},
	"tuvalu-flag": {
	code: "+688",
	name: "Tuvalu",
	isoCode: "TV / TUV"
},
	"uganda-flag": {
	code: "+256",
	name: "Uganda",
	isoCode: "UG / UGA"
},
	"ukraine-flag": {
	code: "+380",
	name: "Ukraine",
	isoCode: "UA / UKR"
},
	"uruguay-flag": {
	code: "+598",
	name: "Uruguay",
	isoCode: "UY / URY"
},
	"uzbekistan-flag": {
	code: "+998",
	name: "Uzbekistan",
	isoCode: "UZ / UZB"
},
	"vanuatu-flag": {
	code: "+678",
	name: "Vanuatu",
	isoCode: "VU / VUT"
},
	"vatican-flag": {
	code: "+379",
	name: "Vatican City",
	isoCode: "VA / VAT"
},
	"venezuela-flag": {
	code: "+58",
	name: "Venezuela",
	isoCode: "VE / VEN"
},
	"vietnam-flag": {
	code: "+84",
	name: "Vietnam",
	isoCode: "VN / VNM"
},
	"wallis-and-futuna-flag": {
	code: "+681",
	name: "Wallis and Futuna",
	isoCode: "WF / WLF"
},
	"zambia-flag": {
	code: "+260",
	name: "Zambia",
	isoCode: "ZM / ZMB"
},
	"zimbabwe-flag": {
	code: "+263",
	name: "Zimbabwe",
	isoCode: "ZW / ZWE"
}
};

const countriesEs_ES = {
	"brazil-flag": {
	code: "+55",
	name: "Brasil",
	isoCode: "BR / BRA"
},
	"united-states-flag": {
	code: "+1",
	name: "Estados Unidos",
	isoCode: "US / USA"
},
	"afghanistan-flag": {
	code: "+93",
	name: "Afganistán",
	isoCode: "AF / AFG"
},
	"south-africa-flag": {
	code: "+27",
	name: "Sudáfrica",
	isoCode: "ZA / ZAF"
},
	"albania-flag": {
	code: "+355",
	name: "Albania",
	isoCode: "AL / ALB"
},
	"germany-flag": {
	code: "+49",
	name: "Alemania",
	isoCode: "DE / DEU"
},
	"andorra-flag": {
	code: "+376",
	name: "Andorra",
	isoCode: "AD / AND"
},
	"angola-flag": {
	code: "+244",
	name: "Angola",
	isoCode: "AO / AGO"
},
	"anguilla-flag": {
	code: "+1-264",
	name: "Anguilla",
	isoCode: "AI / AIA"
},
	"antigua-and-barbuda-flag": {
	code: "+1-268",
	name: "Antigua y Barbuda",
	isoCode: "AG / ATG"
},
	"netherlands-antilles-flag": {
	code: "+599",
	name: "Antillas Holandesas",
	isoCode: "AN / ANT"
},
	"saudi-arabia-flag": {
	code: "+966",
	name: "Arabia Saudita",
	isoCode: "SA / SAU"
},
	"algeria-flag": {
	code: "+213",
	name: "Argelia",
	isoCode: "DZ / DZA"
},
	"argentina-flag": {
	code: "+54",
	name: "Argentina",
	isoCode: "AR / ARG"
},
	"armenia-flag": {
	code: "+374",
	name: "Armenia",
	isoCode: "AM / ARM"
},
	"aruba-flag": {
	code: "+297",
	name: "Aruba",
	isoCode: "AW / ABW"
},
	"australia-flag": {
	code: "+61",
	name: "Australia",
	isoCode: "AU / AUS"
},
	"austria-flag": {
	code: "+43",
	name: "Austria",
	isoCode: "AT / AUT"
},
	"azerbaijan-flag": {
	code: "+994",
	name: "Azerbaiyán",
	isoCode: "AZ / AZE"
},
	"bahamas-flag": {
	code: "+1-242",
	name: "Bahamas",
	isoCode: "BS / BHS"
},
	"bahrain-flag": {
	code: "+973",
	name: "Baréin",
	isoCode: "BH / BHR"
},
	"bangladesh-flag": {
	code: "+880",
	name: "Bangladesh",
	isoCode: "BD / BGD"
},
	"barbados-flag": {
	code: "+1-246",
	name: "Barbados",
	isoCode: "BB / BRB"
},
	"belgium-flag": {
	code: "+32",
	name: "Bélgica",
	isoCode: "BE / BEL"
},
	"belize-flag": {
	code: "+501",
	name: "Belice",
	isoCode: "BZ / BLZ"
},
	"benin-flag": {
	code: "+229",
	name: "Benín",
	isoCode: "BJ / BEN"
},
	"bermuda-flag": {
	code: "+1-441",
	name: "Bermudas",
	isoCode: "BM / BMU"
},
	"belarus-flag": {
	code: "+375",
	name: "Bielorrusia",
	isoCode: "BY / BLR"
},
	"bolivia-flag": {
	code: "+591",
	name: "Bolivia",
	isoCode: "BO / BOL"
},
	"bosnia-and-herzegovina-flag": {
	code: "+387",
	name: "Bosnia y Herzegovina",
	isoCode: "BA / BIH"
},
	"botswana-flag": {
	code: "+267",
	name: "Botsuana",
	isoCode: "BW / BWA"
},
	"british-indian-ocean-territory-flag": {
	code: "+246",
	name: "Territorio Británico del Océano Índico",
	isoCode: "IO / IOT"
},
	"british-virgin-islands-flag": {
	code: "+1-284",
	name: "Islas Vírgenes Británicas",
	isoCode: "VG / VGB"
},
	"brunei-flag": {
	code: "+673",
	name: "Brunéi",
	isoCode: "BN / BRN"
},
	"bulgaria-flag": {
	code: "+359",
	name: "Bulgaria",
	isoCode: "BG / BGR"
},
	"burkina-faso-flag": {
	code: "+226",
	name: "Burkina Faso",
	isoCode: "BF / BFA"
},
	"burundi-flag": {
	code: "+257",
	name: "Burundi",
	isoCode: "BI / BDI"
},
	"bhutan-flag": {
	code: "+975",
	name: "Bután",
	isoCode: "BT / BTN"
},
	"cape-verde-flag": {
	code: "+238",
	name: "Cabo Verde",
	isoCode: "CV / CPV"
},
	"cameroon-flag": {
	code: "+237",
	name: "Camerún",
	isoCode: "CM / CMR"
},
	"cambodia-flag": {
	code: "+855",
	name: "Camboya",
	isoCode: "KH / KHM"
},
	"canada-flag": {
	code: "+1",
	name: "Canadá",
	isoCode: "CA / CAN"
},
	"qatar-flag": {
	code: "+974",
	name: "Catar",
	isoCode: "QA / QAT"
},
	"kazakhstan-flag": {
	code: "+7",
	name: "Kazajistán",
	isoCode: "KZ / KAZ"
},
	"chad-flag": {
	code: "+235",
	name: "Chad",
	isoCode: "TD / TCD"
},
	"china-flag": {
	code: "+86",
	name: "China",
	isoCode: "CN / CHN"
},
	"chile-flag": {
	code: "+56",
	name: "Chile",
	isoCode: "CL / CHL"
},
	"chipre-flag": {
	code: "+357",
	name: "Chipre",
	isoCode: "CY / CYP"
},
	"singapore-flag": {
	code: "+65",
	name: "Singapur",
	isoCode: "SG / SGP"
},
	"colombia-flag": {
	code: "+57",
	name: "Colombia",
	isoCode: "CO / COL"
},
	"comoros-flag": {
	code: "+269",
	name: "Comoras",
	isoCode: "KM / COM"
},
	"north-korea-flag": {
	code: "+850",
	name: "Corea del Norte",
	isoCode: "KP / PRK"
},
	"ivory-coast-flag": {
	code: "+225",
	name: "Costa de Marfil",
	isoCode: "CI / CIV"
},
	"costa-rica-flag": {
	code: "+506",
	name: "Costa Rica",
	isoCode: "CR / CRI"
},
	"croatia-flag": {
	code: "+385",
	name: "Croacia",
	isoCode: "HR / HRV"
},
	"cuba-flag": {
	code: "+53",
	name: "Cuba",
	isoCode: "CU / CUB"
},
	"curacao-flag": {
	code: "+599",
	name: "Curazao",
	isoCode: "CW / CUW"
},
	"denmark-flag": {
	code: "+45",
	name: "Dinamarca",
	isoCode: "DK / DNK"
},
	"djibouti-flag": {
	code: "+253",
	name: "Yibuti",
	isoCode: "DJ / DJI"
},
	"dominica-flag": {
	code: "+1-767",
	name: "Dominica",
	isoCode: "DM / DMA"
},
	"ecuador-flag": {
	code: "+593",
	name: "Ecuador",
	isoCode: "EC / ECU"
},
	"egypt-flag": {
	code: "+20",
	name: "Egipto",
	isoCode: "EG / EGY"
},
	"el-salvador-flag": {
	code: "+503",
	name: "El Salvador",
	isoCode: "SV / SLV"
},
	"united-arab-emirates-flag": {
	code: "+971",
	name: "Emiratos Árabes Unidos",
	isoCode: "AE / ARE"
},
	"eritrea-flag": {
	code: "+291",
	name: "Eritrea",
	isoCode: "ER / ERI"
},
	"spain-flag": {
	code: "+34",
	name: "España",
	isoCode: "ES / ESP"
},
	"slovakia-flag": {
	code: "+421",
	name: "Eslovaquia",
	isoCode: "SK / SVK"
},
	"slovenia-flag": {
	code: "+386",
	name: "Eslovenia",
	isoCode: "SI / SVN"
},
	"estonia-flag": {
	code: "+372",
	name: "Estonia",
	isoCode: "EE / EST"
},
	"ethiopia-flag": {
	code: "+251",
	name: "Etiopía",
	isoCode: "ET / ETH"
},
	"fiji-flag": {
	code: "+679",
	name: "Fiyi",
	isoCode: "FJ / FJI"
},
	"philippines-flag": {
	code: "+63",
	name: "Filipinas",
	isoCode: "PH / PHL"
},
	"finland-flag": {
	code: "+358",
	name: "Finlandia",
	isoCode: "FI / FIN"
},
	"france-flag": {
	code: "+33",
	name: "Francia",
	isoCode: "FR / FRA"
},
	"gabon-flag": {
	code: "+241",
	name: "Gabón",
	isoCode: "GA / GAB"
},
	"gambia-flag": {
	code: "+220",
	name: "Gambia",
	isoCode: "GM / GMB"
},
	"georgia-flag": {
	code: "+995",
	name: "Georgia",
	isoCode: "GE / GEO"
},
	"ghana-flag": {
	code: "+233",
	name: "Ghana",
	isoCode: "GH / GHA"
},
	"gibraltar-flag": {
	code: "+350",
	name: "Gibraltar",
	isoCode: "GI / GIB"
},
	"grenada-flag": {
	code: "+1-473",
	name: "Granada",
	isoCode: "GD / GRD"
},
	"greece-flag": {
	code: "+30",
	name: "Grecia",
	isoCode: "GR / GRC"
},
	"greenland-flag": {
	code: "+299",
	name: "Groenlandia",
	isoCode: "GL / GRL"
},
	"guam-flag": {
	code: "+1-671",
	name: "Guam",
	isoCode: "GU / GUM"
},
	"guatemala-flag": {
	code: "+502",
	name: "Guatemala",
	isoCode: "GT / GTM"
},
	"guernsey-flag": {
	code: "+44-1481",
	name: "Guernesey",
	isoCode: "GG / GGY"
},
	"guinea-flag": {
	code: "+224",
	name: "Guinea",
	isoCode: "GN / GIN"
},
	"guinea-bissau-flag": {
	code: "+245",
	name: "Guinea-Bisáu",
	isoCode: "GW / GNB"
},
	"equatorial-guinea-flag": {
	code: "+240",
	name: "Guinea Ecuatorial",
	isoCode: "GQ / GNQ"
},
	"guyana-flag": {
	code: "+592",
	name: "Guyana",
	isoCode: "GY / GUY"
},
	"french-guyana-flag": {
	code: "+594",
	name: "Guayana Francesa",
	isoCode: "GQ / GNQ"
},
	"haiti-flag": {
	code: "+509",
	name: "Haití",
	isoCode: "HT / HTI"
},
	"netherlands-flag": {
	code: "+31",
	name: "Países Bajos",
	isoCode: "NL / NLD"
},
	"honduras-flag": {
	code: "+504",
	name: "Honduras",
	isoCode: "HN / HND"
},
	"hong-kong-flag": {
	code: "+852",
	name: "Hong Kong",
	isoCode: "HK / HKG"
},
	"hungary-flag": {
	code: "+36",
	name: "Hungría",
	isoCode: "HU / HUN"
},
	"iceland-flag": {
	code: "+354",
	name: "Islandia",
	isoCode: "IS / ISL"
},
	"yemen-flag": {
	code: "+967",
	name: "Yemen",
	isoCode: "YE / YEM"
},
	"cayman-islands-flag": {
	code: "+1-345",
	name: "Islas Caimán",
	isoCode: "KY / CYM"
},
	"isle-of-man-flag": {
	code: "+44-1624",
	name: "Isla de Man",
	isoCode: "IM / IMN"
},
	"christmas-island-flag": {
	code: "+61",
	name: "Isla de Navidad",
	isoCode: "CX / CXR"
},
	"cook-islands-flag": {
	code: "+682",
	name: "Islas Cook",
	isoCode: "CK / COK"
},
	"falkland-islands-flag": {
	code: "+500",
	name: "Islas Malvinas",
	isoCode: "FK / FLK"
},
	"faroe-islands-flag": {
	code: "+298",
	name: "Islas Feroe",
	isoCode: "FO / FRO"
},
	"marshall-islands-flag": {
	code: "+692",
	name: "Islas Marshall",
	isoCode: "MH / MHL"
},
	"northern-mariana-islands-flag": {
	code: "+1-670",
	name: "Islas Marianas del Norte",
	isoCode: "MP / MNP"
},
	"solomon-islands-flag": {
	code: "+677",
	name: "Islas Salomón",
	isoCode: "SB / SLB"
},
	"turks-and-caicos-islands-flag": {
	code: "+1-649",
	name: "Islas Turcas y Caicos",
	isoCode: "TC / TCA"
},
	"u.s.-virgin-islands-flag": {
	code: "+1-340",
	name: "Islas Vírgenes de EE. UU.",
	isoCode: "VI / VIR"
},
	"india-flag": {
	code: "+91",
	name: "India",
	isoCode: "IN / IND"
},
	"indonesia-flag": {
	code: "+62",
	name: "Indonesia",
	isoCode: "ID / IDN"
},
	"iran-flag": {
	code: "+98",
	name: "Irán",
	isoCode: "IR / IRN"
},
	"iraq-flag": {
	code: "+964",
	name: "Irak",
	isoCode: "IQ / IRQ"
},
	"ireland-flag": {
	code: "+353",
	name: "Irlanda",
	isoCode: "IE / IRL"
},
	"israel-flag": {
	code: "+972",
	name: "Israel",
	isoCode: "IL / ISR"
},
	"italy-flag": {
	code: "+39",
	name: "Italia",
	isoCode: "IT / ITA"
},
	"jamaica-flag": {
	code: "+1-876",
	name: "Jamaica",
	isoCode: "JM / JAM"
},
	"japan-flag": {
	code: "+81",
	name: "Japón",
	isoCode: "JP / JPN"
},
	"jersey-flag": {
	code: "+44-1534",
	name: "Jersey",
	isoCode: "JE / JEY"
},
	"jordan-flag": {
	code: "+962",
	name: "Jordania",
	isoCode: "JO / JOR"
},
	"kiribati-flag": {
	code: "+686",
	name: "Kiribati",
	isoCode: "KI / KIR"
},
	"kosovo-flag": {
	code: "+383",
	name: "Kosovo",
	isoCode: "XK / XKX"
},
	"kuwait-flag": {
	code: "+965",
	name: "Kuwait",
	isoCode: "KW / KWT"
},
	"laos-flag": {
	code: "+856",
	name: "Laos",
	isoCode: "LA / LAO"
},
	"latvia-flag": {
	code: "+371",
	name: "Letonia",
	isoCode: "LV / LVA"
},
	"lebanon-flag": {
	code: "+961",
	name: "Líbano",
	isoCode: "LB / LBN"
},
	"lesotho-flag": {
	code: "+266",
	name: "Lesoto",
	isoCode: "LS / LSO"
},
	"liberia-flag": {
	code: "+231",
	name: "Liberia",
	isoCode: "LR / LBR"
},
	"libya-flag": {
	code: "+218",
	name: "Libia",
	isoCode: "LY / LBY"
},
	"liechtenstein-flag": {
	code: "+423",
	name: "Liechtenstein",
	isoCode: "LI / LIE"
},
	"lithuania-flag": {
	code: "+370",
	name: "Lituania",
	isoCode: "LT / LTU"
},
	"luxembourg-flag": {
	code: "+352",
	name: "Luxemburgo",
	isoCode: "LU / LUX"
},
	"macau-flag": {
	code: "+853",
	name: "Macao",
	isoCode: "MO / MAC"
},
	"macedonia-flag": {
	code: "+389",
	name: "Macedonia",
	isoCode: "MK / MKD"
},
	"madagascar-flag": {
	code: "+261",
	name: "Madagascar",
	isoCode: "MG / MDG"
},
	"malawi-flag": {
	code: "+265",
	name: "Malaui",
	isoCode: "MW / MWI"
},
	"malaysia-flag": {
	code: "+60",
	name: "Malasia",
	isoCode: "MY / MYS"
},
	"maldives-flag": {
	code: "+960",
	name: "Maldivas",
	isoCode: "MV / MDV"
},
	"mali-flag": {
	code: "+223",
	name: "Mali",
	isoCode: "ML / MLI"
},
	"malta-flag": {
	code: "+356",
	name: "Malta",
	isoCode: "MT / MLT"
},
	"martinique-flag": {
	code: "+596",
	name: "Martinica",
	isoCode: "MQ / MTQ"
},
	"mauritania-flag": {
	code: "+222",
	name: "Mauritania",
	isoCode: "MR / MRT"
},
	"mauritius-flag": {
	code: "+230",
	name: "Mauricio",
	isoCode: "MU / MUS"
},
	"mayotte-flag": {
	code: "+262",
	name: "Mayotte",
	isoCode: "YT / MYT"
},
	"mexico-flag": {
	code: "+52",
	name: "México",
	isoCode: "MX / MEX"
},
	"micronesia-flag": {
	code: "+691",
	name: "Micronesia",
	isoCode: "FM / FSM"
},
	"moldova-flag": {
	code: "+373",
	name: "Moldavia",
	isoCode: "MD / MDA"
},
	"monaco-flag": {
	code: "+377",
	name: "Mónaco",
	isoCode: "MC / MCO"
},
	"mongolia-flag": {
	code: "+976",
	name: "Mongolia",
	isoCode: "MN / MNG"
},
	"montenegro-flag": {
	code: "+382",
	name: "Montenegro",
	isoCode: "ME / MNE"
},
	"montserrat-flag": {
	code: "+1-664",
	name: "Montserrat",
	isoCode: "MS / MSR"
},
	"morocco-flag": {
	code: "+212",
	name: "Marruecos",
	isoCode: "MA / MAR"
},
	"mozambique-flag": {
	code: "+258",
	name: "Mozambique",
	isoCode: "MZ / MOZ"
},
	"myanmar-flag": {
	code: "+95",
	name: "Myanmar",
	isoCode: "MM / MMR"
},
	"namibia-flag": {
	code: "+264",
	name: "Namibia",
	isoCode: "NA / NAM"
},
	"nauru-flag": {
	code: "+674",
	name: "Nauru",
	isoCode: "NR / NRU"
},
	"nepal-flag": {
	code: "+977",
	name: "Nepal",
	isoCode: "NP / NPL"
},
	"nicaragua-flag": {
	code: "+505",
	name: "Nicaragua",
	isoCode: "NI / NIC"
},
	"niger-flag": {
	code: "+227",
	name: "Níger",
	isoCode: "NE / NER"
},
	"nigeria-flag": {
	code: "+234",
	name: "Nigeria",
	isoCode: "NG / NGA"
},
	"niue-flag": {
	code: "+683",
	name: "Niue",
	isoCode: "NU / NIU"
},
	"norway-flag": {
	code: "+47",
	name: "Noruega",
	isoCode: "NO / NOR"
},
	"new-caledonia-flag": {
	code: "+687",
	name: "Nueva Caledonia",
	isoCode: "NC / NCL"
},
	"new-zealand-flag": {
	code: "+64",
	name: "Nueva Zelanda",
	isoCode: "NZ / NZL"
},
	"oman-flag": {
	code: "+968",
	name: "Omán",
	isoCode: "OM / OMN"
},
	"pakistan-flag": {
	code: "+92",
	name: "Pakistán",
	isoCode: "PK / PAK"
},
	"palau-flag": {
	code: "+680",
	name: "Palau",
	isoCode: "PW / PLW"
},
	"palestine-flag": {
	code: "+970",
	name: "Palestina",
	isoCode: "PS / PSE"
},
	"panama-flag": {
	code: "+507",
	name: "Panamá",
	isoCode: "PA / PAN"
},
	"papua-new-guinea-flag": {
	code: "+675",
	name: "Papúa Nueva Guinea",
	isoCode: "PG / PNG"
},
	"paraguay-flag": {
	code: "+595",
	name: "Paraguay",
	isoCode: "PY / PRY"
},
	"peru-flag": {
	code: "+51",
	name: "Perú",
	isoCode: "PE / PER"
},
	"pitcairn-flag": {
	code: "+64",
	name: "Pitcairn",
	isoCode: "PN / PCN"
},
	"poland-flag": {
	code: "+48",
	name: "Polonia",
	isoCode: "PL / POL"
},
	"french-polynesia-flag": {
	code: "+689",
	name: "Polinesia Francesa",
	isoCode: "PF / PYF"
},
	"portugal-flag": {
	code: "+351",
	name: "Portugal",
	isoCode: "PT / PRT"
},
	"puerto-rico-flag": {
	code: "+1-787",
	name: "Puerto Rico",
	isoCode: "PR / PRI"
},
	"kenya-flag": {
	code: "+254",
	name: "Kenia",
	isoCode: "KE / KEN"
},
	"kyrgyzstan-flag": {
	code: "+996",
	name: "Kirguistán",
	isoCode: "KG / KGZ"
},
	"central-african-republic-flag": {
	code: "+236",
	name: "República Centroafricana",
	isoCode: "CF / CAF"
},
	"czech-republic-flag": {
	code: "+420",
	name: "República Checa",
	isoCode: "CZ / CZE"
},
	"dominican-republic-flag": {
	code: "+1-809",
	name: "República Dominicana",
	isoCode: "DO / DOM"
},
	"united-kingdom-flag": {
	code: "+44",
	name: "Reino Unido",
	isoCode: "GB / GBR"
},
	"republic-of-the-congo-flag": {
	code: "+242",
	name: "República del Congo",
	isoCode: "CG / COG"
},
	"democratic-republic-of-congo-flag": {
	code: "+243",
	name: "República Democrática del Congo",
	isoCode: "CD / COD"
},
	"reunion-flag": {
	code: "+262",
	name: "Reunión",
	isoCode: "RE / REU"
},
	"romania-flag": {
	code: "+40",
	name: "Rumania",
	isoCode: "RO / ROU"
},
	"russia-flag": {
	code: "+7",
	name: "Rusia",
	isoCode: "RU / RUS"
},
	"rwanda-flag": {
	code: "+250",
	name: "Ruanda",
	isoCode: "RW / RWA"
},
	"western-sahara-flag": {
	code: "+212",
	name: "Sahara Occidental",
	isoCode: "EH / ESH"
},
	"saint-barthelemy-flag": {
	code: "+590",
	name: "San Bartolomé",
	isoCode: "BL / BLM"
},
	"saint-helena-flag": {
	code: "+290",
	name: "Santa Helena",
	isoCode: "SH / SHN"
},
	"saint-kitts-and-nevis-flag": {
	code: "+1-869",
	name: "San Cristóbal y Nieves",
	isoCode: "KN / KNA"
},
	"saint-lucia-flag": {
	code: "+1-758",
	name: "Santa Lucía",
	isoCode: "LC / LCA"
},
	"saint-martin-flag": {
	code: "+590",
	name: "San Martín",
	isoCode: "MF / MAF"
},
	"saint-pierre-and-miquelon-flag": {
	code: "+508",
	name: "San Pedro y Miquelón",
	isoCode: "PM / SPM"
},
	"saint-vincent-and-the-grenadines-flag": {
	code: "+1-784",
	name: "San Vicente y las Granadinas",
	isoCode: "VC / VCT"
},
	"samoa-flag": {
	code: "+685",
	name: "Samoa",
	isoCode: "WS / WSM"
},
	"american-samoa-flag": {
	code: "+1-684",
	name: "Samoa Americana",
	isoCode: "AS / ASM"
},
	"san-marino-flag": {
	code: "+378",
	name: "San Marino",
	isoCode: "SM / SMR"
},
	"sao-tome-and-principe-flag": {
	code: "+239",
	name: "Santo Tomé y Príncipe",
	isoCode: "ST / STP"
},
	"senegal-flag": {
	code: "+221",
	name: "Senegal",
	isoCode: "SN / SEN"
},
	"serbia-flag": {
	code: "+381",
	name: "Serbia",
	isoCode: "RS / SRB"
},
	"seychelles-flag": {
	code: "+248",
	name: "Seychelles",
	isoCode: "SC / SYC"
},
	"sierra-leone-flag": {
	code: "+232",
	name: "Sierra Leona",
	isoCode: "SL / SLE"
},
	"sint-maarten-flag": {
	code: "+1-721",
	name: "Sint Maarten",
	isoCode: "SX / SXM"
},
	"somalia-flag": {
	code: "+252",
	name: "Somalia",
	isoCode: "SO / SOM"
},
	"south-korea-flag": {
	code: "+82",
	name: "Corea del Sur",
	isoCode: "KR / KOR"
},
	"south-sudan-flag": {
	code: "+211",
	name: "Sudán del Sur",
	isoCode: "SS / SSD"
},
	"sri-lanka-flag": {
	code: "+94",
	name: "Sri Lanka",
	isoCode: "LK / LKA"
},
	"sudan-flag": {
	code: "+249",
	name: "Sudán",
	isoCode: "SD / SDN"
},
	"suriname-flag": {
	code: "+597",
	name: "Surinam",
	isoCode: "SR / SUR"
},
	"svalbard-and-jan-mayen-flag": {
	code: "+47",
	name: "Svalbard y Jan Mayen",
	isoCode: "SJ / SJM"
},
	"swaziland-flag": {
	code: "+268",
	name: "Suazilandia",
	isoCode: "SZ / SWZ"
},
	"sweden-flag": {
	code: "+46",
	name: "Suecia",
	isoCode: "SE / SWE"
},
	"switzerland-flag": {
	code: "+41",
	name: "Suiza",
	isoCode: "CH / CHE"
},
	"syria-flag": {
	code: "+963",
	name: "Siria",
	isoCode: "SY / SYR"
},
	"taiwan-flag": {
	code: "+886",
	name: "Taiwán",
	isoCode: "TW / TWN"
},
	"tajikistan-flag": {
	code: "+992",
	name: "Tayikistán",
	isoCode: "TJ / TJK"
},
	"tanzania-flag": {
	code: "+255",
	name: "Tanzania",
	isoCode: "TZ / TZA"
},
	"thailand-flag": {
	code: "+66",
	name: "Tailandia",
	isoCode: "TH / THA"
},
	"east-timor-flag": {
	code: "+670",
	name: "Timor Oriental",
	isoCode: "TL / TLS"
},
	"togo-flag": {
	code: "+228",
	name: "Togo",
	isoCode: "TG / TGO"
},
	"tokelau-flag": {
	code: "+690",
	name: "Tokelau",
	isoCode: "TK / TKL"
},
	"tonga-flag": {
	code: "+676",
	name: "Tonga",
	isoCode: "TO / TON"
},
	"trinidad-and-tobago-flag": {
	code: "+1-868",
	name: "Trinidad y Tobago",
	isoCode: "TT / TTO"
},
	"tunisia-flag": {
	code: "+216",
	name: "Túnez",
	isoCode: "TN / TUN"
},
	"turkey-flag": {
	code: "+90",
	name: "Turquía",
	isoCode: "TR / TUR"
},
	"turkmenistan-flag": {
	code: "+993",
	name: "Turkmenistán",
	isoCode: "TM / TKM"
},
	"tuvalu-flag": {
	code: "+688",
	name: "Tuvalu",
	isoCode: "TV / TUV"
},
	"uganda-flag": {
	code: "+256",
	name: "Uganda",
	isoCode: "UG / UGA"
},
	"ukraine-flag": {
	code: "+380",
	name: "Ucrania",
	isoCode: "UA / UKR"
},
	"uruguay-flag": {
	code: "+598",
	name: "Uruguay",
	isoCode: "UY / URY"
},
	"uzbekistan-flag": {
	code: "+998",
	name: "Uzbekistán",
	isoCode: "UZ / UZB"
},
	"vanuatu-flag": {
	code: "+678",
	name: "Vanuatu",
	isoCode: "VU / VUT"
},
	"vatican-flag": {
	code: "+379",
	name: "Vaticano",
	isoCode: "VA / VAT"
},
	"venezuela-flag": {
	code: "+58",
	name: "Venezuela",
	isoCode: "VE / VEN"
},
	"vietnam-flag": {
	code: "+84",
	name: "Vietnam",
	isoCode: "VN / VNM"
},
	"wallis-and-futuna-flag": {
	code: "+681",
	name: "Wallis y Futuna",
	isoCode: "WF / WLF"
},
	"zambia-flag": {
	code: "+260",
	name: "Zambia",
	isoCode: "ZM / ZMB"
},
	"zimbabwe-flag": {
	code: "+263",
	name: "Zimbabue",
	isoCode: "ZW / ZWE"
}
};

const inputPhoneNumberCss = ":root{--space-0:0px;--space-0-5:4px;--space-1:8px;--space-2:16px;--space-3:24px;--space-4:32px;--space-5:40px;--space-6:48px;--space-7:56px;--space-8:64px;--space-9:72px;--space-10:80px;--space-11:88px;--space-12:96px}.m-0{margin:var(--space-0) !important}.m-0\\.5{margin:var(--space-0-5) !important}.m-1{margin:var(--space-1) !important}.m-2{margin:var(--space-2) !important}.m-3{margin:var(--space-3) !important}.m-4{margin:var(--space-4) !important}.m-5{margin:var(--space-5) !important}.m-6{margin:var(--space-6) !important}.m-7{margin:var(--space-7) !important}.m-8{margin:var(--space-8) !important}.m-9{margin:var(--space-9) !important}.m-10{margin:var(--space-10) !important}.m-11{margin:var(--space-11) !important}.m-12{margin:var(--space-12) !important}.mx-0{margin-left:var(--space-0) !important;margin-right:var(--space-0) !important}.mx-0\\.5{margin-left:var(--space-0-5) !important;margin-right:var(--space-0-5) !important}.mx-1{margin-left:var(--space-1) !important;margin-right:var(--space-1) !important}.mx-2{margin-left:var(--space-2) !important;margin-right:var(--space-2) !important}.mx-3{margin-left:var(--space-3) !important;margin-right:var(--space-3) !important}.mx-4{margin-left:var(--space-4) !important;margin-right:var(--space-4) !important}.mx-5{margin-left:var(--space-5) !important;margin-right:var(--space-5) !important}.mx-6{margin-left:var(--space-6) !important;margin-right:var(--space-6) !important}.mx-7{margin-left:var(--space-7) !important;margin-right:var(--space-7) !important}.mx-8{margin-left:var(--space-8) !important;margin-right:var(--space-8) !important}.mx-9{margin-left:var(--space-9) !important;margin-right:var(--space-9) !important}.mx-10{margin-left:var(--space-10) !important;margin-right:var(--space-10) !important}.mx-11{margin-left:var(--space-11) !important;margin-right:var(--space-11) !important}.mx-12{margin-left:var(--space-12) !important;margin-right:var(--space-12) !important}.my-0{margin-top:var(--space-0) !important;margin-bottom:var(--space-0) !important}.my-0\\.5{margin-top:var(--space-0-5) !important;margin-bottom:var(--space-0-5) !important}.my-1{margin-top:var(--space-1) !important;margin-bottom:var(--space-1) !important}.my-2{margin-top:var(--space-2) !important;margin-bottom:var(--space-2) !important}.my-3{margin-top:var(--space-3) !important;margin-bottom:var(--space-3) !important}.my-4{margin-top:var(--space-4) !important;margin-bottom:var(--space-4) !important}.my-5{margin-top:var(--space-5) !important;margin-bottom:var(--space-5) !important}.my-6{margin-top:var(--space-6) !important;margin-bottom:var(--space-6) !important}.my-7{margin-top:var(--space-7) !important;margin-bottom:var(--space-7) !important}.my-8{margin-top:var(--space-8) !important;margin-bottom:var(--space-8) !important}.my-9{margin-top:var(--space-9) !important;margin-bottom:var(--space-9) !important}.my-10{margin-top:var(--space-10) !important;margin-bottom:var(--space-10) !important}.my-11{margin-top:var(--space-11) !important;margin-bottom:var(--space-11) !important}.my-12{margin-top:var(--space-12) !important;margin-bottom:var(--space-12) !important}.mt-0{margin-top:var(--space-0) !important}.mt-0\\.5{margin-top:var(--space-0-5) !important}.mt-1{margin-top:var(--space-1) !important}.mt-2{margin-top:var(--space-2) !important}.mt-3{margin-top:var(--space-3) !important}.mt-4{margin-top:var(--space-4) !important}.mt-5{margin-top:var(--space-5) !important}.mt-6{margin-top:var(--space-6) !important}.mt-7{margin-top:var(--space-7) !important}.mt-8{margin-top:var(--space-8) !important}.mt-9{margin-top:var(--space-9) !important}.mt-10{margin-top:var(--space-10) !important}.mt-11{margin-top:var(--space-11) !important}.mt-12{margin-top:var(--space-12) !important}.mr-0{margin-right:var(--space-0) !important}.mr-0\\.5{margin-right:var(--space-0-5) !important}.mr-1{margin-right:var(--space-1) !important}.mr-2{margin-right:var(--space-2) !important}.mr-3{margin-right:var(--space-3) !important}.mr-4{margin-right:var(--space-4) !important}.mr-5{margin-right:var(--space-5) !important}.mr-6{margin-right:var(--space-6) !important}.mr-7{margin-right:var(--space-7) !important}.mr-8{margin-right:var(--space-8) !important}.mr-9{margin-right:var(--space-9) !important}.mr-10{margin-right:var(--space-10) !important}.mr-11{margin-right:var(--space-11) !important}.mr-12{margin-right:var(--space-12) !important}.mb-0{margin-bottom:var(--space-0) !important}.mb-0\\.5{margin-bottom:var(--space-0-5) !important}.mb-1{margin-bottom:var(--space-1) !important}.mb-2{margin-bottom:var(--space-2) !important}.mb-3{margin-bottom:var(--space-3) !important}.mb-4{margin-bottom:var(--space-4) !important}.mb-5{margin-bottom:var(--space-5) !important}.mb-6{margin-bottom:var(--space-6) !important}.mb-7{margin-bottom:var(--space-7) !important}.mb-8{margin-bottom:var(--space-8) !important}.mb-9{margin-bottom:var(--space-9) !important}.mb-10{margin-bottom:var(--space-10) !important}.mb-11{margin-bottom:var(--space-11) !important}.mb-12{margin-bottom:var(--space-12) !important}.ml-0{margin-left:var(--space-0) !important}.ml-0\\.5{margin-left:var(--space-0-5) !important}.ml-1{margin-left:var(--space-1) !important}.ml-2{margin-left:var(--space-2) !important}.ml-3{margin-left:var(--space-3) !important}.ml-4{margin-left:var(--space-4) !important}.ml-5{margin-left:var(--space-5) !important}.ml-6{margin-left:var(--space-6) !important}.ml-7{margin-left:var(--space-7) !important}.ml-8{margin-left:var(--space-8) !important}.ml-9{margin-left:var(--space-9) !important}.ml-10{margin-left:var(--space-10) !important}.ml-11{margin-left:var(--space-11) !important}.ml-12{margin-left:var(--space-12) !important}.p-0{padding:var(--space-0) !important}.p-0\\.5{padding:var(--space-0-5) !important}.p-1{padding:var(--space-1) !important}.p-2{padding:var(--space-2) !important}.p-3{padding:var(--space-3) !important}.p-4{padding:var(--space-4) !important}.p-5{padding:var(--space-5) !important}.p-6{padding:var(--space-6) !important}.p-7{padding:var(--space-7) !important}.p-8{padding:var(--space-8) !important}.p-9{padding:var(--space-9) !important}.p-10{padding:var(--space-10) !important}.p-11{padding:var(--space-11) !important}.p-12{padding:var(--space-12) !important}.px-0{padding-left:var(--space-0) !important;padding-right:var(--space-0) !important}.px-0\\.5{padding-left:var(--space-0-5) !important;padding-right:var(--space-0-5) !important}.px-1{padding-left:var(--space-1) !important;padding-right:var(--space-1) !important}.px-2{padding-left:var(--space-2) !important;padding-right:var(--space-2) !important}.px-3{padding-left:var(--space-3) !important;padding-right:var(--space-3) !important}.px-4{padding-left:var(--space-4) !important;padding-right:var(--space-4) !important}.px-5{padding-left:var(--space-5) !important;padding-right:var(--space-5) !important}.px-6{padding-left:var(--space-6) !important;padding-right:var(--space-6) !important}.px-7{padding-left:var(--space-7) !important;padding-right:var(--space-7) !important}.px-8{padding-left:var(--space-8) !important;padding-right:var(--space-8) !important}.px-9{padding-left:var(--space-9) !important;padding-right:var(--space-9) !important}.px-10{padding-left:var(--space-10) !important;padding-right:var(--space-10) !important}.px-11{padding-left:var(--space-11) !important;padding-right:var(--space-11) !important}.px-12{padding-left:var(--space-12) !important;padding-right:var(--space-12) !important}.py-0{padding-top:var(--space-0) !important;padding-bottom:var(--space-0) !important}.py-0\\.5{padding-top:var(--space-0-5) !important;padding-bottom:var(--space-0-5) !important}.py-1{padding-top:var(--space-1) !important;padding-bottom:var(--space-1) !important}.py-2{padding-top:var(--space-2) !important;padding-bottom:var(--space-2) !important}.py-3{padding-top:var(--space-3) !important;padding-bottom:var(--space-3) !important}.py-4{padding-top:var(--space-4) !important;padding-bottom:var(--space-4) !important}.py-5{padding-top:var(--space-5) !important;padding-bottom:var(--space-5) !important}.py-6{padding-top:var(--space-6) !important;padding-bottom:var(--space-6) !important}.py-7{padding-top:var(--space-7) !important;padding-bottom:var(--space-7) !important}.py-8{padding-top:var(--space-8) !important;padding-bottom:var(--space-8) !important}.py-9{padding-top:var(--space-9) !important;padding-bottom:var(--space-9) !important}.py-10{padding-top:var(--space-10) !important;padding-bottom:var(--space-10) !important}.py-11{padding-top:var(--space-11) !important;padding-bottom:var(--space-11) !important}.py-12{padding-top:var(--space-12) !important;padding-bottom:var(--space-12) !important}.pt-0{padding-top:var(--space-0) !important}.pt-0\\.5{padding-top:var(--space-0-5) !important}.pt-1{padding-top:var(--space-1) !important}.pt-2{padding-top:var(--space-2) !important}.pt-3{padding-top:var(--space-3) !important}.pt-4{padding-top:var(--space-4) !important}.pt-5{padding-top:var(--space-5) !important}.pt-6{padding-top:var(--space-6) !important}.pt-7{padding-top:var(--space-7) !important}.pt-8{padding-top:var(--space-8) !important}.pt-9{padding-top:var(--space-9) !important}.pt-10{padding-top:var(--space-10) !important}.pt-11{padding-top:var(--space-11) !important}.pt-12{padding-top:var(--space-12) !important}.pr-0{padding-right:var(--space-0) !important}.pr-0\\.5{padding-right:var(--space-0-5) !important}.pr-1{padding-right:var(--space-1) !important}.pr-2{padding-right:var(--space-2) !important}.pr-3{padding-right:var(--space-3) !important}.pr-4{padding-right:var(--space-4) !important}.pr-5{padding-right:var(--space-5) !important}.pr-6{padding-right:var(--space-6) !important}.pr-7{padding-right:var(--space-7) !important}.pr-8{padding-right:var(--space-8) !important}.pr-9{padding-right:var(--space-9) !important}.pr-10{padding-right:var(--space-10) !important}.pr-11{padding-right:var(--space-11) !important}.pr-12{padding-right:var(--space-12) !important}.pb-0{padding-bottom:var(--space-0) !important}.pb-0\\.5{padding-bottom:var(--space-0-5) !important}.pb-1{padding-bottom:var(--space-1) !important}.pb-2{padding-bottom:var(--space-2) !important}.pb-3{padding-bottom:var(--space-3) !important}.pb-4{padding-bottom:var(--space-4) !important}.pb-5{padding-bottom:var(--space-5) !important}.pb-6{padding-bottom:var(--space-6) !important}.pb-7{padding-bottom:var(--space-7) !important}.pb-8{padding-bottom:var(--space-8) !important}.pb-9{padding-bottom:var(--space-9) !important}.pb-10{padding-bottom:var(--space-10) !important}.pb-11{padding-bottom:var(--space-11) !important}.pb-12{padding-bottom:var(--space-12) !important}.pl-0{padding-left:var(--space-0) !important}.pl-0\\.5{padding-left:var(--space-0-5) !important}.pl-1{padding-left:var(--space-1) !important}.pl-2{padding-left:var(--space-2) !important}.pl-3{padding-left:var(--space-3) !important}.pl-4{padding-left:var(--space-4) !important}.pl-5{padding-left:var(--space-5) !important}.pl-6{padding-left:var(--space-6) !important}.pl-7{padding-left:var(--space-7) !important}.pl-8{padding-left:var(--space-8) !important}.pl-9{padding-left:var(--space-9) !important}.pl-10{padding-left:var(--space-10) !important}.pl-11{padding-left:var(--space-11) !important}.pl-12{padding-left:var(--space-12) !important}:host{display:-ms-flexbox;display:flex;border-radius:8px;position:relative;outline:none;width:100%;min-width:200px}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary .input__container{padding:4px 8px 9px}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828);-ms-flex-positive:1;flex-grow:1}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger .input__container{padding:4px 8px 9px}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828);-ms-flex-positive:1;flex-grow:1}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success .input__container{padding:4px 8px 9px}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828);-ms-flex-positive:1;flex-grow:1}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:0}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.input__icon{position:relative;height:100%;color:var(--color-content-disable, #595959);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px;padding-left:12px;cursor:pointer}.input__icon bds-icon{position:relative}.input__icon bds-icon:first-child{margin-right:8px}.input__icon::before{content:\"\";background:transparent;height:calc(100% - 2px);max-height:54px;width:70px;position:absolute;left:1px;top:1px;border-radius:8px 0px 0px 8px}.input__icon::after{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px;pointer-events:none}.input__icon:focus-visible{outline:none}.input__icon:focus-visible::after{border-color:var(--color-focus, #c226fb)}.input__country-code{color:var(--color-content-disable, #595959);padding-right:5px}.input:hover .input__icon::before,.input--pressed .input__icon::before{background:var(--color-surface-2, #ededed)}.select-phone-number__options{background:var(--color-surface-2, #ededed);width:100%;max-height:200px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;overflow-x:hidden;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.select-phone-number__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.select-phone-number__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.select-phone-number__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}";

const InputPhoneNumber = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsPhoneNumberChange = index.createEvent(this, "bdsPhoneNumberChange", 7);
    this.bdsInput = index.createEvent(this, "bdsInput", 7);
    this.bdsCancel = index.createEvent(this, "bdsCancel", 7);
    this.bdsFocus = index.createEvent(this, "bdsFocus", 7);
    this.bdsBlur = index.createEvent(this, "bdsBlur", 7);
    this.countries = {};
    this.refNativeInput = (el) => {
      this.nativeInput = el;
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.onFocus = () => {
      this.bdsFocus.emit();
      this.isPressed = true;
    };
    this.onBlur = () => {
      this.bdsBlur.emit();
      this.isPressed = false;
    };
    this.changedInputValue = async (ev) => {
      const input = ev.target;
      this.checkValidity();
      if (input) {
        this.text = input.value || '';
        this.numberValidation();
      }
      this.bdsInput.emit(ev);
    };
    this.toggle = () => {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
      }
    };
    this.handler = (event) => {
      const { value } = event.detail;
      this.value = value.code;
      this.selectedCountry = value.flag;
      this.isoCode = value.isoCode;
      this.bdsPhoneNumberChange.emit({
        value: this.text,
        code: this.value,
        isoCode: this.isoCode,
        country: this.selectedCountry,
      });
      this.toggle();
    };
    this.keyPressWrapper = (event) => {
      const isSelectElement = event.target.localName === 'bds-select';
      const isInputElement = event.target.localName === 'input';
      if (event.key === 'Enter' && !this.isOpen && (isSelectElement || isInputElement)) {
        this.toggle();
      }
    };
    this.isOpen = false;
    this.selectedCountry = undefined;
    this.isoCode = undefined;
    this.validationDanger = false;
    this.validationMesage = '';
    this.isPressed = false;
    this.options = [];
    this.text = '';
    this.value = '+55';
    this.danger = false;
    this.success = false;
    this.disabled = false;
    this.required = undefined;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.requiredErrorMessage = undefined;
    this.numberErrorMessage = undefined;
    this.dataTest = null;
    this.dtSelectFlag = null;
    this.label = 'Phone number';
    this.icon = '';
    this.language = 'pt_BR';
  }
  async removeFocus() {
    this.onBlur();
  }
  valueChanged() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
  }
  handleWindow(ev) {
    if (!this.el.contains(ev.target)) {
      this.isOpen = false;
    }
  }
  languageChanged() {
    this.updateCountries();
  }
  updateCountries() {
    switch (this.language) {
      case 'pt_BR':
        this.countries = countriesPt_BR;
        break;
      case 'en_US':
        this.countries = countriesEn_US;
        break;
      case 'es_ES':
        this.countries = countriesEs_ES;
        break;
      default:
        this.countries = countries;
        break;
    }
    const flagsNames = Object.keys(this.countries);
    const countryIndex = Object.values(this.countries).findIndex((country) => country.code === this.value);
    if (countryIndex !== -1) {
      this.selectedCountry = flagsNames[countryIndex];
    }
    else {
      this.selectedCountry = this.selectedCountry || flagsNames[0];
    }
    this.isoCode = this.isoCode || flagsNames[0];
  }
  componentWillRender() {
    this.updateCountries();
  }
  get childOptions() {
    return Array.from(this.el.querySelectorAll('bds-select-option'));
  }
  handleInputChange() {
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }
  numberValidation() {
    if (validations.numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
    else {
      this.validationDanger = false;
    }
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.toggle();
    }
  }
  async changeCountry(code, isoCode, flag) {
    this.value = code;
    this.selectedCountry = flag;
    this.isoCode = isoCode;
    this.bdsPhoneNumberChange.emit({
      value: this.text,
      code: this.value,
      isoCode: this.isoCode,
      country: this.selectedCountry,
    });
  }
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  renderIcon() {
    return (this.icon && (index.h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, index.h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  renderLabel() {
    return (this.label && (index.h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, index.h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  renderMessage() {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
    if (!message && this.validationDanger)
      message = this.validationMesage;
    const styles = this.danger || this.validationDanger
      ? 'input__message input__message--danger'
      : this.success
        ? 'input__message input__message--success'
        : 'input__message';
    return message ? (index.h("div", { class: styles, part: "input__message" }, index.h("div", { class: "input__message__icon" }, index.h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), index.h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message))) : null;
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const flagsNames = Object.keys(this.countries);
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, index.h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), index.h("div", { onClick: this.toggle, onKeyDown: this.handleKeyDown.bind(this), "data-test": this.dtSelectFlag, class: "input__icon", tabindex: "0" }, index.h("bds-icon", { size: "medium", theme: "solid", name: this.selectedCountry, color: "primary" }), index.h("bds-icon", { size: "x-small", name: iconArrow })), index.h("div", { class: "input__container" }, this.renderLabel(), index.h("div", { class: { input__container__wrapper: true } }, index.h("div", { class: "input__container__country-code" }, index.h("bds-typo", { "no-wrap": "true", variant: "fs-14" }, this.value)), index.h("input", { class: { input__container__text: true }, type: "phonenumber", required: this.required, pattern: "/^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$/", ref: this.refNativeInput, onInput: this.changedInputValue, onFocus: this.onFocus, onBlur: this.onBlur, value: this.text, disabled: this.disabled, "data-test": this.dataTest, ...{ maxlength: this.value === '+55' ? 25 : null } }))), this.success && index.h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "xxx-small" }), index.h("slot", { name: "input-right" })), this.renderMessage()), index.h("div", { class: {
        'select-phone-number__options': true,
        'select-phone-number__options--open': this.isOpen,
      } }, this.isOpen &&
      flagsNames.map((flag) => (index.h("bds-select-option", { key: flag, onOptionSelected: this.handler, selected: flag === this.selectedCountry, value: { code: this.countries[flag].code, isoCode: this.countries[flag].isoCode, flag }, status: this.countries[flag].isoCode }, this.countries[flag].name, " ", this.countries[flag].code))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "language": ["languageChanged"],
    "text": ["handleInputChange"]
  }; }
};
InputPhoneNumber.style = inputPhoneNumberCss;

exports.bds_input_phone_number = InputPhoneNumber;
