import { r as registerInstance, c as createEvent, h, g as getElement } from './index-611fd21e.js';
import { n as numberValidation } from './validations-b8451d75.js';

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
	name: "dominica",
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
	name: "kosovo",
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
	name: "macedônia",
	isoCode: "MK / MKD"
},
	"madagascar-flag": {
	code: "+261",
	name: "Madagáscar",
	isoCode: "MG / MDG"
},
	"malawi-flag": {
	code: "+265",
	name: "maláui",
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
	name: "maurício",
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
	name: "São marino",
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
	name: "tailândia",
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

const inputPhoneNumberCss = ".sc-bds-input-phone-number-h{display:block}.element_input.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-phone-number input.sc-bds-input-phone-number::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input.sc-bds-input-phone-number .bds-icon.sc-bds-input-phone-number{position:relative;z-index:1}.input--state-primary.sc-bds-input-phone-number{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number{position:relative}.input--state-primary.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary.sc-bds-input-phone-number:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-phone-number{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number .bds-icon.sc-bds-input-phone-number{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-phone-number .input__container.sc-bds-input-phone-number{padding:4px 8px 9px}.input--state-primary.sc-bds-input-phone-number .input__container__label.sc-bds-input-phone-number{color:var(--color-content-default, #454545)}.input--state-primary.sc-bds-input-phone-number .input__container__label--pressed.sc-bds-input-phone-number bds-typo.sc-bds-input-phone-number{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-phone-number .input__container__text.sc-bds-input-phone-number{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545);-ms-flex-positive:1;flex-grow:1}.input--state-danger.sc-bds-input-phone-number{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number{position:relative}.input--state-danger.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger.sc-bds-input-phone-number:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-phone-number{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number .bds-icon.sc-bds-input-phone-number{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-phone-number .input__container.sc-bds-input-phone-number{padding:4px 8px 9px}.input--state-danger.sc-bds-input-phone-number .input__container__label.sc-bds-input-phone-number{color:var(--color-delete, #e60f0f)}.input--state-danger.sc-bds-input-phone-number .input__container__label--pressed.sc-bds-input-phone-number bds-typo.sc-bds-input-phone-number{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-phone-number .input__container__text.sc-bds-input-phone-number{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545);-ms-flex-positive:1;flex-grow:1}.input--state-success.sc-bds-input-phone-number{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number{position:relative}.input--state-success.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success.sc-bds-input-phone-number:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed.sc-bds-input-phone-number{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed.sc-bds-input-phone-number .input__icon.sc-bds-input-phone-number .bds-icon.sc-bds-input-phone-number{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-phone-number .input__container.sc-bds-input-phone-number{padding:4px 8px 9px}.input--state-success.sc-bds-input-phone-number .input__container__label.sc-bds-input-phone-number{color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-phone-number .input__container__label--pressed.sc-bds-input-phone-number bds-typo.sc-bds-input-phone-number{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-phone-number .input__container__text.sc-bds-input-phone-number{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545);-ms-flex-positive:1;flex-grow:1}.input--state-disabled.sc-bds-input-phone-number{opacity:50%;pointer-events:none;cursor:not-allowed}.input.sc-bds-input-phone-number .icon-success.sc-bds-input-phone-number{color:var(--color-positive, #10603b);margin-left:4px}.input--label.sc-bds-input-phone-number{padding:0}.input__icon.sc-bds-input-phone-number{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-phone-number{padding:4px}.input__container.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-phone-number{display:-ms-flexbox;display:flex}.input__container__wrapper__chips.sc-bds-input-phone-number{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-phone-number::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-phone-number::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-phone-number{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-phone-number:focus{outline:0}.input__container__text.sc-bds-input-phone-number::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-phone-number:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-phone-number,.input__container__text[type=radio].sc-bds-input-phone-number{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-phone-number{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-phone-number::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-phone-number,.input__container__text[type=button].sc-bds-input-phone-number,.input__container__text[type=submit].sc-bds-input-phone-number{overflow:visible}.input__container__text.sc-bds-input-phone-number::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-phone-number::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-phone-number bds-typo.sc-bds-input-phone-number{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-phone-number .bds-icon.sc-bds-input-phone-number{color:var(--color-negative, #e60f0f)}.input__message--danger.sc-bds-input-phone-number .input__message__text.sc-bds-input-phone-number{color:var(--color-negative, #e60f0f)}.input__message--success.sc-bds-input-phone-number .input__message__icon.sc-bds-input-phone-number .bds-icon.sc-bds-input-phone-number{color:var(--color-positive, #10603b)}.input__message--success.sc-bds-input-phone-number .input__message__text.sc-bds-input-phone-number{color:var(--color-content-default, #454545)}.select-phone-number.sc-bds-input-phone-number{display:-ms-flexbox;display:flex;border-radius:8px;position:relative;outline:none;min-width:200px}.select-phone-number.sc-bds-input-phone-number bds-input.sc-bds-input-phone-number::part(input-container){position:relative}.select-phone-number__icon.sc-bds-input-phone-number{position:relative;height:100%;color:var(--color-content-disable, #636363);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px;padding-left:12px;cursor:pointer}.select-phone-number__icon.sc-bds-input-phone-number bds-icon.sc-bds-input-phone-number{position:relative}.select-phone-number__icon.sc-bds-input-phone-number bds-icon.sc-bds-input-phone-number:first-child{margin-right:8px}.select-phone-number__icon.sc-bds-input-phone-number::before{content:\"\";background:transparent;height:calc(100% - 2px);max-height:54px;width:70px;position:absolute;left:1px;top:1px;border-radius:8px 0px 0px 8px}.select-phone-number__icon.sc-bds-input-phone-number::after{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px;pointer-events:none}.select-phone-number__icon.sc-bds-input-phone-number:focus-visible{outline:none}.select-phone-number__icon.sc-bds-input-phone-number:focus-visible::after{border-color:var(--color-focus, #c226fb)}.select-phone-number__country-code.sc-bds-input-phone-number{color:var(--color-content-disable, #636363);padding-right:5px}.select-phone-number__options.sc-bds-input-phone-number{background:var(--color-surface-2, #e0e0e0);width:100%;max-height:200px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.select-phone-number__options.sc-bds-input-phone-number::-webkit-scrollbar{width:16px;background-color:transparent}.select-phone-number__options.sc-bds-input-phone-number::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select-phone-number__options--open.sc-bds-input-phone-number{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.select-phone-number.sc-bds-input-phone-number:hover .select-phone-number__icon.sc-bds-input-phone-number::before,.select-phone-number--pressed.sc-bds-input-phone-number .select-phone-number__icon.sc-bds-input-phone-number::before{background:var(--color-surface-2, #e0e0e0)}";

const InputPhoneNumber = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsPhoneNumberChange = createEvent(this, "bdsPhoneNumberChange", 7);
    this.bdsInput = createEvent(this, "bdsInput", 7);
    this.bdsCancel = createEvent(this, "bdsCancel", 7);
    this.bdsFocus = createEvent(this, "bdsFocus", 7);
    this.bdsBlur = createEvent(this, "bdsBlur", 7);
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
      const { detail: { value }, } = event;
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
    this.setFocusWrapper = () => {
      if (this.nativeInput) {
        this.nativeInput.focus();
        this.onBlur();
      }
    };
    this.removeFocusWrapper = (event) => {
      const isInputElement = event.relatedTarget.localName === 'bds-input';
      if (this.nativeInput && !isInputElement) {
        this.onBlur();
      }
    };
    this.keyPressWrapper = (event) => {
      const isSelectElement = event.target.localName === 'bds-select';
      const isInputElement = event.target.localName === 'input';
      switch (event.key) {
        case 'Enter':
          if (!this.isOpen && (isSelectElement || isInputElement)) {
            this.toggle();
          }
          break;
      }
    };
    this.isOpen = false;
    this.selectedCountry = undefined;
    this.isoCode = undefined;
    this.isPressed = false;
    this.validationDanger = false;
    this.validationMesage = '';
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
  componentWillRender() {
    const countries$1 = countries;
    const flagsNames = Object.keys(countries$1);
    this.selectedCountry = this.selectedCountry || flagsNames[0];
    this.isoCode = this.isoCode || flagsNames[0];
  }
  async connectedCallback() {
    for (const option of this.childOptions) {
      option.selected = this.value === option.value;
    }
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
    if (numberValidation(this.nativeInput.value)) {
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
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
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
    if (message) {
      return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    const iconArrow = this.isOpen ? 'arrow-up' : 'arrow-down';
    const countries$1 = countries;
    const flagsNames = Object.keys(countries$1);
    return (h("div", { class: {
        'select-phone-number': true,
        'select-phone-number--pressed': this.isPressed,
      }, onFocus: this.setFocusWrapper, onBlur: this.removeFocusWrapper, onKeyPress: this.keyPressWrapper }, h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { onClick: this.toggle, onKeyDown: this.handleKeyDown.bind(this), "data-test": this.dtSelectFlag, class: "select-phone-number__icon", tabindex: "0" }, h("bds-icon", { size: "medium", theme: "solid", name: this.selectedCountry, color: "primary" }), h("bds-icon", { size: "x-small", name: iconArrow })), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: { input__container__wrapper: true } }, h("div", { class: "select-phone-number__country-code" }, h("bds-typo", { "no-wrap": "true", variant: "fs-14" }, this.value)), h("input", Object.assign({ class: { input__container__text: true }, type: "phonenumber", required: this.required, pattern: "/^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$/", ref: this.refNativeInput, onInput: this.changedInputValue, onFocus: this.onFocus, onBlur: this.onBlur, value: this.text, disabled: this.disabled, "data-test": this.dataTest }, { maxlength: this.value === '+55' ? 25 : null })))), this.success && h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "xxx-small" }), h("slot", { name: "input-right" })), this.renderMessage()), h("div", { class: {
        'select-phone-number__options': true,
        'select-phone-number__options--open': this.isOpen,
      } }, this.isOpen &&
      flagsNames.map((flag) => (h("bds-select-option", { key: flag, onOptionSelected: this.handler, selected: flag == this.selectedCountry, value: { code: countries$1[flag].code, isoCode: countries$1[flag].isoCode, flag }, status: countries$1[flag].isoCode }, countries$1[flag].name, " ", countries$1[flag].code))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "text": ["handleInputChange"]
  }; }
};
InputPhoneNumber.style = inputPhoneNumberCss;

export { InputPhoneNumber as bds_input_phone_number };
