<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

import Fuse from "fuse.js"

let biblelibraries = [
	{
		iso: "acm",
		country_id: "IQ",
		country: "Iraq",
		lang: "Mesopotamian Arabic",
	},
	{ iso: "acu", country_id: "EC", country: "Ecuador", lang: "Achuar-Shiwiar" },
	{ iso: "amh", country_id: "ET", country: "Ethiopia", lang: "Amharic" },
	{ iso: "amu", country_id: "MX", country: "Mexico", lang: "Guerrero Amuzgo" },
	{ iso: "apd", country_id: "SD", country: "Sudan", lang: "Sudanese Arabic" },
	{ iso: "arb", country_id: "SA", country: "Saudi Arabia", lang: "Arabic" },
	{ iso: "arh", country_id: "CO", country: "Colombia", lang: "Arhuaco" },
	{ iso: "arz", country_id: "EG", country: "Egypt", lang: "Egyptian Arabic" },
	{ iso: "asm", country_id: "IN", country: "India", lang: "Assamese" },
	{ iso: "auc", country_id: "EC", country: "Ecuador", lang: "Waorani" },
	{ iso: "awa", country_id: "IN", country: "India", lang: "Awadhi" },
	{
		iso: "ayp",
		country_id: "IQ",
		country: "Iraq",
		lang: "North Mesopotamian Arabic",
	},
	{ iso: "azb", country_id: "IR", country: "Iran", lang: "South Azerbaijani" },
	{
		iso: "azd",
		country_id: "MX",
		country: "Mexico",
		lang: "Eastern Durango Nahuatl",
	},
	{ iso: "aze", country_id: "AZ", country: "Azerbaijan", lang: "Azerbaijani" },
	{
		iso: "azg",
		country_id: "MX",
		country: "Mexico",
		lang: "San Pedro Amuzgos Amuzgo",
	},
	{
		iso: "azj",
		country_id: "AZ",
		country: "Azerbaijan",
		lang: "North Azerbaijani",
	},
	{
		iso: "azz",
		country_id: "MX",
		country: "Mexico",
		lang: "Highland Puebla Nahuatl",
	},
	{ iso: "bam", country_id: "ML", country: "Mali", lang: "Bambara" },
	{
		iso: "bcc",
		country_id: "PK",
		country: "Pakistan",
		lang: "Southern Balochi",
	},
	{ iso: "ben", country_id: "BD", country: "Bangladesh", lang: "Bengali" },
	{ iso: "bft", country_id: "PK", country: "Pakistan", lang: "Balti" },
	{ iso: "bfz", country_id: "IN", country: "India", lang: "Mahasu Pahari" },
	{ iso: "bgc", country_id: "IN", country: "India", lang: "Haryanvi" },
	{
		iso: "bgn",
		country_id: "PK",
		country: "Pakistan",
		lang: "Western Balochi",
	},
	{
		iso: "bgp",
		country_id: "PK",
		country: "Pakistan",
		lang: "Eastern Balochi",
	},
	{ iso: "bgs", country_id: "PH", country: "Philippines", lang: "Tagabawa" },
	{ iso: "bhd", country_id: "IN", country: "India", lang: "Bhadrawahi" },
	{ iso: "bik", country_id: "PH", country: "Philippines", lang: "Bikol" },
	{ iso: "bod", country_id: "CN", country: "China", lang: "Tibetan" },
	{ iso: "bos", country_id: "BA", country: "Bosnia", lang: "Bosnian" },
	{ iso: "bqi", country_id: "IR", country: "Iran", lang: "Bakhtiari" },
	{ iso: "brh", country_id: "PK", country: "Pakistan", lang: "Brahui" },
	{ iso: "caa", country_id: "GT", country: "Guatemala", lang: "Chortí" },
	{ iso: "cac", country_id: "GT", country: "Guatemala", lang: "Chuj" },
	{ iso: "cbi", country_id: "EC", country: "Ecuador", lang: "Chachi" },
	{
		iso: "cco",
		country_id: "MX",
		country: "Mexico",
		lang: "Comaltepec Chinantec",
	},
	{ iso: "cdh", country_id: "IN", country: "India", lang: "Chambeali" },
	{ iso: "ceb", country_id: "PH", country: "Philippines", lang: "Cebuano" },
	{ iso: "cfm", country_id: "MM", country: "Myanmar", lang: "Falam Chin" },
	{
		iso: "chd",
		country_id: "MX",
		country: "Mexico",
		lang: "Highland Oaxaca Chontal",
	},
	{ iso: "chf", country_id: "MX", country: "Mexico", lang: "Tabasco Chontal" },
	{
		iso: "chq",
		country_id: "MX",
		country: "Mexico",
		lang: "Quiotepec Chinantec",
	},
	{
		iso: "chz",
		country_id: "MX",
		country: "Mexico",
		lang: "Ozumacín Chinantec",
	},
	{
		iso: "ckb",
		country_id: "IQ",
		country: "Iraq",
		lang: "Central Kurdish - Sorani",
	},
	{
		iso: "cld",
		country_id: "IQ",
		country: "Iraq",
		lang: "Chaldean Neo-Aramaic",
	},
	{ iso: "cle", country_id: "MX", country: "Mexico", lang: "Lealao Chinantec" },
	{ iso: "cmn", country_id: "CN", country: "China", lang: "Mandarin Chinese" },
	{ iso: "cnh", country_id: "MM", country: "Myanmar", lang: "Hakha Chin" },
	{ iso: "cnl", country_id: "MX", country: "Mexico", lang: "Lalana Chinantec" },
	{
		iso: "cnt",
		country_id: "MX",
		country: "Mexico",
		lang: "Tepetotutla Chinantec",
	},
	{ iso: "cof", country_id: "EC", country: "Ecuador", lang: "Colorado" },
	{ iso: "con", country_id: "EC", country: "Ecuador", lang: "Cofán" },
	{
		iso: "cpa",
		country_id: "MX",
		country: "Mexico",
		lang: "Palantla Chinantec",
	},
	{ iso: "crn", country_id: "MX", country: "Mexico", lang: "El Nayar Cora" },
	{
		iso: "cso",
		country_id: "MX",
		country: "Mexico",
		lang: "Sochiapam Chinantec",
	},
	{
		iso: "cta",
		country_id: "MX",
		country: "Mexico",
		lang: "Tataltepec Chatino",
	},
	{ iso: "ctd", country_id: "MM", country: "Myanmar", lang: "Tedim Chin" },
	{
		iso: "ctl",
		country_id: "MX",
		country: "Mexico",
		lang: "Tlacoatzintepec Chinantec",
	},
	{
		iso: "ctp",
		country_id: "MX",
		country: "Mexico",
		lang: "Western Highland Chatino",
	},
	{ iso: "ctu", country_id: "MX", country: "Mexico", lang: "Chol" },
	{ iso: "cuc", country_id: "MX", country: "Mexico", lang: "Usila Chinantec" },
	{ iso: "cut", country_id: "MX", country: "Mexico", lang: "Teutila Cuicatec" },
	{
		iso: "cux",
		country_id: "MX",
		country: "Mexico",
		lang: "Tepeuxila Cuicatec",
	},
	{ iso: "cya", country_id: "MX", country: "Mexico", lang: "Nopala Chatino" },
	{ iso: "daw", country_id: "PH", country: "Philippines", lang: "Davawenyo" },
	{ iso: "deu", country_id: "DE", country: "Germany", lang: "German" },
	{ iso: "dgo", country_id: "IN", country: "India", lang: "Dogri" },
	{ iso: "div", country_id: "MV", country: "Maldives", lang: "Dhivehi" },
	{ iso: "dsh", country_id: "ET", country: "Ethiopia", lang: "Daasanach" },
	{ iso: "dzo", country_id: "BT", country: "Bhutan", lang: "Dzongkha" },
	{
		iso: "ell",
		country_id: "GR",
		country: "Greece",
		lang: "Modern Greek (1453-)",
	},
	{ iso: "eng", country_id: "GB", country: "United Kingdom", lang: "English" },
	{ iso: "ewe", country_id: "GH", country: "Ghana", lang: "Ewe" },
	{ iso: "fra", country_id: "FR", country: "France", lang: "French" },
	{ iso: "fuf", country_id: "GN", country: "Guinea", lang: "Pular" },
	{
		iso: "gax",
		country_id: "ET",
		country: "Ethiopia",
		lang: "Borana-Arsi-Guji Oromo",
	},
	{
		iso: "gaz",
		country_id: "ET",
		country: "Ethiopia",
		lang: "West Central Oromo",
	},
	{ iso: "gbk", country_id: "IN", country: "India", lang: "Gaddi" },
	{ iso: "glk", country_id: "IR", country: "Iran", lang: "Gilaki" },
	{ iso: "guj", country_id: "IN", country: "India", lang: "Gujarati" },
	{ iso: "hac", country_id: "IR", country: "Iran", lang: "Gurani" },
	{ iso: "haz", country_id: "AF", country: "Afghanistan", lang: "Hazaragi" },
	{ iso: "hch", country_id: "MX", country: "Mexico", lang: "Huichol" },
	{ iso: "hin", country_id: "IN", country: "India", lang: "Hindi" },
	{ iso: "hop", country_id: "US", country: "United States", lang: "Hopi" },
	{ iso: "hus", country_id: "MX", country: "Mexico", lang: "Huastec" },
	{
		iso: "huv",
		country_id: "MX",
		country: "Mexico",
		lang: "San Mateo Del Mar Huave",
	},
	{ iso: "hye", country_id: "AM", country: "Armenia", lang: "Armenian" },
	{ iso: "ind", country_id: "ID", country: "Indonesia", lang: "Indonesian" },
	{ iso: "jac", country_id: "GT", country: "Guatemala", lang: "Popti'" },
	{ iso: "jiv", country_id: "EC", country: "Ecuador", lang: "Shuar" },
	{ iso: "jpn", country_id: "JP", country: "Japan", lang: "Japanese" },
	{ iso: "kac", country_id: "MM", country: "Myanmar", lang: "Kachin" },
	{ iso: "kan", country_id: "IN", country: "India", lang: "Kannada" },
	{ iso: "kao", country_id: "ML", country: "Mali", lang: "Xaasongaxango" },
	{ iso: "kat", country_id: "GE", country: "Georgia", lang: "Georgian" },
	{ iso: "kek", country_id: "GT", country: "Guatemala", lang: "Kekchí" },
	{ iso: "kfs", country_id: "IN", country: "India", lang: "Bilaspuri" },
	{ iso: "kfx", country_id: "IN", country: "India", lang: "Kullu Pahari" },
	{ iso: "khk", country_id: "MN", country: "Mongolia", lang: "Halh Mongolian" },
	{ iso: "khm", country_id: "KH", country: "Cambodia", lang: "Khmer" },
	{ iso: "kin", country_id: "RW", country: "Rwanda", lang: "Kinyarwanda" },
	{ iso: "kjb", country_id: "GT", country: "Guatemala", lang: "Q'anjob'al" },
	{
		iso: "kmr",
		country_id: "TR",
		country: "Turkey",
		lang: "Northern Kurdish - Kurmanji",
	},
	{ iso: "kng", country_id: "CD", country: "DR Congo", lang: "Koongo" },
	{
		iso: "knj",
		country_id: "GT",
		country: "Guatemala",
		lang: "Western Kanjobal",
	},
	{
		iso: "kno",
		country_id: "SL",
		country: "Sierra Leone",
		lang: "Kono (Sierra Leone)",
	},
	{ iso: "kog", country_id: "CO", country: "Colombia", lang: "Cogui" },
	{ iso: "kor", country_id: "KR", country: "South Korea", lang: "Korean" },
	{ iso: "kri", country_id: "SL", country: "Sierra Leone", lang: "Krio" },
	{ iso: "ksw", country_id: "MM", country: "Myanmar", lang: "S'gaw Karen" },
	{ iso: "kyu", country_id: "MM", country: "Myanmar", lang: "Western Kayah" },
	{ iso: "lac", country_id: "MX", country: "Mexico", lang: "Lacandon" },
	{ iso: "lao", country_id: "LA", country: "Laos", lang: "Lao" },
	{
		iso: "lia",
		country_id: "SL",
		country: "Sierra Leone",
		lang: "West-Central Limba",
	},
	{ iso: "lrc", country_id: "IR", country: "Iran", lang: "Northern Luri" },
	{
		iso: "maa",
		country_id: "MX",
		country: "Mexico",
		lang: "San Jerónimo Tecóatl Mazatec",
	},
	{
		iso: "maj",
		country_id: "MX",
		country: "Mexico",
		lang: "Jalapa De Díaz Mazatec",
	},
	{ iso: "mal", country_id: "IN", country: "India", lang: "Malayalam" },
	{ iso: "mam", country_id: "GT", country: "Guatemala", lang: "Mam" },
	{
		iso: "maq",
		country_id: "MX",
		country: "Mexico",
		lang: "Chiquihuitlán Mazatec",
	},
	{ iso: "mar", country_id: "IN", country: "India", lang: "Marathi" },
	{ iso: "mau", country_id: "MX", country: "Mexico", lang: "Huautla Mazatec" },
	{ iso: "maz", country_id: "MX", country: "Mexico", lang: "Central Mazahua" },
	{ iso: "mbp", country_id: "CO", country: "Colombia", lang: "Malayo" },
	{ iso: "mco", country_id: "MX", country: "Mexico", lang: "Coatlán Mixe" },
	{
		iso: "men",
		country_id: "SL",
		country: "Sierra Leone",
		lang: "Mende (Sierra Leone)",
	},
	{
		iso: "mib",
		country_id: "MX",
		country: "Mexico",
		lang: "Atatláhuca Mixtec",
	},
	{ iso: "mie", country_id: "MX", country: "Mexico", lang: "Ocotepec Mixtec" },
	{
		iso: "mig",
		country_id: "MX",
		country: "Mexico",
		lang: "San Miguel El Grande Mixtec",
	},
	{ iso: "mih", country_id: "MX", country: "Mexico", lang: "Chayuco Mixtec" },
	{ iso: "mil", country_id: "MX", country: "Mexico", lang: "Peñoles Mixtec" },
	{
		iso: "mio",
		country_id: "MX",
		country: "Mexico",
		lang: "Pinotepa Nacional Mixtec",
	},
	{ iso: "mir", country_id: "MX", country: "Mexico", lang: "Isthmus Mixe" },
	{
		iso: "mit",
		country_id: "MX",
		country: "Mexico",
		lang: "Southern Puebla Mixtec",
	},
	{
		iso: "miz",
		country_id: "MX",
		country: "Mexico",
		lang: "Coatzospan Mixtec",
	},
	{
		iso: "mjc",
		country_id: "MX",
		country: "Mexico",
		lang: "San Juan Colorado Mixtec",
	},
	{ iso: "mjl", country_id: "IN", country: "India", lang: "Mandeali" },
	{
		iso: "mks",
		country_id: "MX",
		country: "Mexico",
		lang: "Silacayoapan Mixtec",
	},
	{ iso: "mpm", country_id: "MX", country: "Mexico", lang: "Yosondúa Mixtec" },
	{ iso: "mto", country_id: "MX", country: "Mexico", lang: "Totontepec Mixe" },
	{
		iso: "mvf",
		country_id: "CN",
		country: "China",
		lang: "Peripheral Mongolian",
	},
	{ iso: "mwk", country_id: "ML", country: "Mali", lang: "Kita Maninkakan" },
	{ iso: "mwq", country_id: "MM", country: "Myanmar", lang: "Mün Chin" },
	{ iso: "mxb", country_id: "MX", country: "Mexico", lang: "Tezoatlán Mixtec" },
	{
		iso: "mxp",
		country_id: "MX",
		country: "Mexico",
		lang: "Tlahuitoltepec Mixe",
	},
	{ iso: "mxq", country_id: "MX", country: "Mexico", lang: "Juquila Mixe" },
	{
		iso: "mxt",
		country_id: "MX",
		country: "Mexico",
		lang: "Jamiltepec Mixtec",
	},
	{
		iso: "mxv",
		country_id: "MX",
		country: "Mexico",
		lang: "Metlatónoc Mixtec",
	},
	{ iso: "mya", country_id: "MM", country: "Myanmar", lang: "Burmese" },
	{
		iso: "nch",
		country_id: "MX",
		country: "Mexico",
		lang: "Central Huasteca Nahuatl",
	},
	{
		iso: "ncj",
		country_id: "MX",
		country: "Mexico",
		lang: "Northern Puebla Nahuatl",
	},
	{
		iso: "ncl",
		country_id: "MX",
		country: "Mexico",
		lang: "Michoacán Nahuatl",
	},
	{ iso: "nep", country_id: "NP", country: "Nepal", lang: "Nepali" },
	{ iso: "ngu", country_id: "MX", country: "Mexico", lang: "Guerrero Nahuatl" },
	{
		iso: "nhe",
		country_id: "MX",
		country: "Mexico",
		lang: "Eastern Huasteca Nahuatl",
	},
	{
		iso: "nhg",
		country_id: "MX",
		country: "Mexico",
		lang: "Tetelcingo Nahuatl",
	},
	{
		iso: "nhi",
		country_id: "MX",
		country: "Mexico",
		lang: "Zacatlán-Ahuacatlán-Tepetzintla Nahuatl",
	},
	{
		iso: "nhw",
		country_id: "MX",
		country: "Mexico",
		lang: "Western Huasteca Nahuatl",
	},
	{
		iso: "nhy",
		country_id: "MX",
		country: "Mexico",
		lang: "Northern Oaxaca Nahuatl",
	},
	{ iso: "nlv", country_id: "MX", country: "Mexico", lang: "Orizaba Nahuatl" },
	{
		iso: "npl",
		country_id: "MX",
		country: "Mexico",
		lang: "Southeastern Puebla Nahuatl",
	},
	{
		iso: "ntp",
		country_id: "MX",
		country: "Mexico",
		lang: "Northern Tepehuan",
	},
	{ iso: "nya", country_id: "MW", country: "Malawi", lang: "Nyanja" },
	{ iso: "nyj", country_id: "CD", country: "DR Congo", lang: "Nyanga" },
	{
		iso: "ood",
		country_id: "US",
		country: "United States",
		lang: "Tohono O'odham",
	},
	{ iso: "ori", country_id: "IN", country: "India", lang: "Oriya" },
	{ iso: "ote", country_id: "MX", country: "Mexico", lang: "Mezquital Otomi" },
	{
		iso: "otm",
		country_id: "MX",
		country: "Mexico",
		lang: "Eastern Highland Otomi",
	},
	{ iso: "otn", country_id: "MX", country: "Mexico", lang: "Tenango Otomi" },
	{ iso: "otq", country_id: "MX", country: "Mexico", lang: "Querétaro Otomi" },
	{
		iso: "ots",
		country_id: "MX",
		country: "Mexico",
		lang: "Estado de México Otomi",
	},
	{ iso: "pan", country_id: "IN", country: "India", lang: "Panjabi" },
	{
		iso: "pbt",
		country_id: "AF",
		country: "Afghanistan",
		lang: "Southern Pashto",
	},
	{
		iso: "pbu",
		country_id: "PK",
		country: "Pakistan",
		lang: "Northern Pashto",
	},
	{ iso: "pes", country_id: "IR", country: "Iran", lang: "Iranian Persian" },
	{ iso: "pia", country_id: "MX", country: "Mexico", lang: "Pima Bajo" },
	{ iso: "pid", country_id: "VE", country: "Venezuela", lang: "Piaroa" },
	{
		iso: "pls",
		country_id: "MX",
		country: "Mexico",
		lang: "San Marcos Tlacoyalco Popoloca",
	},
	{
		iso: "pnb",
		country_id: "PK",
		country: "Pakistan",
		lang: "Western Panjabi",
	},
	{
		iso: "poe",
		country_id: "MX",
		country: "Mexico",
		lang: "San Juan Atzingo Popoloca",
	},
	{
		iso: "poi",
		country_id: "MX",
		country: "Mexico",
		lang: "Highland Popoluca",
	},
	{ iso: "por", country_id: "PT", country: "Portugal", lang: "Portuguese" },
	{ iso: "prs", country_id: "AF", country: "Afghanistan", lang: "Dari" },
	{
		iso: "qug",
		country_id: "EC",
		country: "Ecuador",
		lang: "Chimborazo Highland Quichua",
	},
	{
		iso: "qvz",
		country_id: "EC",
		country: "Ecuador",
		lang: "Northern Pastaza Quichua",
	},
	{
		iso: "qxr",
		country_id: "EC",
		country: "Ecuador",
		lang: "Cañar Highland Quichua",
	},
	{ iso: "rel", country_id: "KE", country: "Kenya", lang: "Rendille" },
	{ iso: "ron", country_id: "RO", country: "Romania", lang: "Romanian" },
	{ iso: "sei", country_id: "MX", country: "Mexico", lang: "Seri" },
	{ iso: "sey", country_id: "EC", country: "Ecuador", lang: "Secoya" },
	{ iso: "sgd", country_id: "PH", country: "Philippines", lang: "Surigaonon" },
	{ iso: "shn", country_id: "MM", country: "Myanmar", lang: "Shan" },
	{ iso: "sin", country_id: "LK", country: "Sri Lanka", lang: "Sinhala" },
	{ iso: "snk", country_id: "ML", country: "Mali", lang: "Soninke" },
	{ iso: "som", country_id: "SO", country: "Somalia", lang: "Somali" },
	{ iso: "spa", country_id: "ES", country: "Spain", lang: "Spanish" },
	{ iso: "sqi", country_id: "AL", country: "Albania", lang: "Albanian" },
	{ iso: "srr", country_id: "SN", country: "Senegal", lang: "Serer" },
	{
		iso: "stp",
		country_id: "MX",
		country: "Mexico",
		lang: "Southeastern Tepehuan",
	},
	{ iso: "sus", country_id: "GN", country: "Guinea", lang: "Susu" },
	{
		iso: "swc",
		country_id: "CD",
		country: "Democratic Republic of the Congo",
		lang: "Congo Swahili",
	},
	{
		iso: "swh",
		country_id: "TZ",
		country: "Tanzania",
		lang: "Swahili (Coastal)",
	},
	{
		iso: "tac",
		country_id: "MX",
		country: "Mexico",
		lang: "Lowland Tarahumara",
	},
	{ iso: "tam", country_id: "IN", country: "India", lang: "Tamil" },
	{
		iso: "tar",
		country_id: "MX",
		country: "Mexico",
		lang: "Central Tarahumara",
	},
	{
		iso: "tee",
		country_id: "MX",
		country: "Mexico",
		lang: "Huehuetla Tepehua",
	},
	{ iso: "tel", country_id: "IN", country: "India", lang: "Telugu" },
	{ iso: "tem", country_id: "SL", country: "Sierra Leone", lang: "Timne" },
	{ iso: "tgl", country_id: "PH", country: "Philippines", lang: "Tagalog" },
	{ iso: "tha", country_id: "TH", country: "Thailand", lang: "Thai" },
	{ iso: "tir", country_id: "ET", country: "Ethiopia", lang: "Tigrinya" },
	{
		iso: "tku",
		country_id: "MX",
		country: "Mexico",
		lang: "Upper Necaxa Totonac",
	},
	{ iso: "toc", country_id: "MX", country: "Mexico", lang: "Coyutla Totonac" },
	{ iso: "toj", country_id: "MX", country: "Mexico", lang: "Tojolabal" },
	{
		iso: "too",
		country_id: "MX",
		country: "Mexico",
		lang: "Xicotepec De Juárez Totonac",
	},
	{ iso: "top", country_id: "MX", country: "Mexico", lang: "Papantla Totonac" },
	{ iso: "tos", country_id: "MX", country: "Mexico", lang: "Highland Totonac" },
	{
		iso: "tpt",
		country_id: "MX",
		country: "Mexico",
		lang: "Tlachichilco Tepehua",
	},
	{ iso: "trc", country_id: "MX", country: "Mexico", lang: "Copala Triqui" },
	{ iso: "tsz", country_id: "MX", country: "Mexico", lang: "Purepecha" },
	{ iso: "ttc", country_id: "GT", country: "Guatemala", lang: "Tektiteko" },
	{ iso: "tuv", country_id: "KE", country: "Kenya", lang: "Turkana" },
	{ iso: "tzh", country_id: "MX", country: "Mexico", lang: "Tzeltal" },
	{ iso: "tzo", country_id: "MX", country: "Mexico", lang: "Tzotzil" },
	{ iso: "urd", country_id: "PK", country: "Pakistan", lang: "Urdu" },
	{
		iso: "uzs",
		country_id: "AF",
		country: "Afghanistan",
		lang: "Southern Uzbek",
	},
	{ iso: "vie", country_id: "VN", country: "Vietnam", lang: "Vietnamese" },
	{ iso: "vmy", country_id: "MX", country: "Mexico", lang: "Ayautla Mazatec" },
	{ iso: "wol", country_id: "SN", country: "Senegal", lang: "Wolof" },
	{ iso: "xnr", country_id: "IN", country: "India", lang: "Kangri" },
	{
		iso: "xtd",
		country_id: "MX",
		country: "Mexico",
		lang: "Diuxi-Tilantongo Mixtec",
	},
	{
		iso: "xtm",
		country_id: "MX",
		country: "Mexico",
		lang: "Magdalena Peñasco Mixtec",
	},
	{ iso: "yao", country_id: "MW", country: "Malawi", lang: "Yao" },
	{ iso: "yaq", country_id: "MX", country: "Mexico", lang: "Yaqui" },
	{ iso: "yor", country_id: "NG", country: "Nigeria", lang: "Yoruba" },
	{ iso: "yua", country_id: "MX", country: "Mexico", lang: "Yucateco" },
	{
		iso: "zaa",
		country_id: "MX",
		country: "Mexico",
		lang: "Sierra de Juárez Zapotec",
	},
	{
		iso: "zab",
		country_id: "MX",
		country: "Mexico",
		lang: "Western Tlacolula Valley Zapotec",
	},
	{ iso: "zac", country_id: "MX", country: "Mexico", lang: "Ocotlán Zapotec" },
	{ iso: "zad", country_id: "MX", country: "Mexico", lang: "Cajonos Zapotec" },
	{ iso: "zai", country_id: "MX", country: "Mexico", lang: "Isthmus Zapotec" },
	{
		iso: "zam",
		country_id: "MX",
		country: "Mexico",
		lang: "Miahuatlán Zapotec",
	},
	{
		iso: "zao",
		country_id: "MX",
		country: "Mexico",
		lang: "Ozolotepec Zapotec",
	},
	{ iso: "zar", country_id: "MX", country: "Mexico", lang: "Rincón Zapotec" },
	{
		iso: "zas",
		country_id: "MX",
		country: "Mexico",
		lang: "Santo Domingo Albarradas Zapotec",
	},
	{ iso: "zat", country_id: "MX", country: "Mexico", lang: "Tabaa Zapotec" },
	{ iso: "zav", country_id: "MX", country: "Mexico", lang: "Yatzachi Zapotec" },
	{ iso: "zaw", country_id: "MX", country: "Mexico", lang: "Mitla Zapotec" },
	{
		iso: "zca",
		country_id: "MX",
		country: "Mexico",
		lang: "Coatecas Altas Zapotec",
	},
	{
		iso: "zos",
		country_id: "MX",
		country: "Mexico",
		lang: "Francisco León Zoque",
	},
	{ iso: "zpc", country_id: "MX", country: "Mexico", lang: "Choapan Zapotec" },
	{
		iso: "zpi",
		country_id: "MX",
		country: "Mexico",
		lang: "Santa María Quiegolani Zapotec",
	},
	{ iso: "zpl", country_id: "MX", country: "Mexico", lang: "Lachixío Zapotec" },
	{ iso: "zpm", country_id: "MX", country: "Mexico", lang: "Mixtepec Zapotec" },
	{ iso: "zpo", country_id: "MX", country: "Mexico", lang: "Amatlán Zapotec" },
	{ iso: "zpq", country_id: "MX", country: "Mexico", lang: "Zoogocho Zapotec" },
	{ iso: "zpu", country_id: "MX", country: "Mexico", lang: "Yalálag Zapotec" },
	{
		iso: "zpv",
		country_id: "MX",
		country: "Mexico",
		lang: "Chichicapan Zapotec",
	},
	{
		iso: "zpz",
		country_id: "MX",
		country: "Mexico",
		lang: "Texmelucan Zapotec",
	},
	{ iso: "zsm", country_id: "MY", country: "Malaysia", lang: "Standard Malay" },
	{
		iso: "zsr",
		country_id: "MX",
		country: "Mexico",
		lang: "Southern Rincon Zapotec",
	},
	{
		iso: "ztq",
		country_id: "MX",
		country: "Mexico",
		lang: "Quioquitani-Quierí Zapotec",
	},
	{ iso: "zty", country_id: "MX", country: "Mexico", lang: "Yatee Zapotec" },
]

let query = ""
let results = [...biblelibraries]
let engine = new Fuse(biblelibraries, {
	shouldSort: true,
	includeMatches: true,
	threshold: 0.3, // At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
	location: 0, // Determines approximately where in the text is the pattern expected to be found
	distance: 50, // Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8
	maxPatternLength: 12,
	minMatchCharLength: 1,
	keys: ["lang", "iso", "country", "country_id"],
})
let filter = function () {
	if (query == "") {
		results = biblelibraries
	} else {
		results = engine.search(query).slice(0, 100)
	}
}
</script>

<svelte:head>
	<title>{$t("common.Bible Libraries")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner
		title={$t("common.Bible Libraries")}
		subtitle=""
		caption={$t("libraries.bible_caption")}
		breadcrumbs={[
			{ link: `/libraries`, title: $t('common.Libraries') },
			{ link: '#', title: $t('common.Bible Libraries') },
		]}
		subnav={[
			{title:$t("common.Overview"),url:'/libraries/'},
			{title:$t("common.Treasures Libraries"),url:'/libraries/treasures'},
			{title:$t("common.Bible") + " " + $t("common.Libraries"),url:'/libraries/bible',selected:true},
			{title:$t("common.FAQs"),url:'/libraries/faqs'},
		]} />



<section id="container" class="mx-auto max-w-5xl">

	<input
		type="search"
		placeholder="{$t('libraries.bible_filter')}..."
		bind:value="{query}"
		on:input="{filter}"
		autocomplete
		class="mx-auto  my-6 block w-1/3 rounded-sm bg-[url('/img/icons/filter.png')] bg-[length:15px_15px] bg-[top_8px_right_8px] bg-no-repeat py-1.5 px-2
			text-sm leading-5 text-gray-700 placeholder-gray-400 drop-shadow-md focus:border-gray-600
			focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:bg-gray-200" />

	<p class="mx-12 mb-4 text-center text-sm text-red-500">
		Titles are for reference only. Working links are coming soon. Contact us to order.
	</p>

	<div
		class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7">
		{#each results as bl}
			<a
				href="#"
				target="_blank"
				rel="noopener noreferrer"
				class="flex rounded-lg  border border-gray-400 bg-slate-100
					      text-gray-700 drop-shadow-lg
					     hover:bg-slate-600 hover:text-white dark:border-black
 						 dark:bg-slate-800 dark:text-gray-200
						 dark:hover:bg-slate-600">
				<div class="relative m-2 h-16 w-full">
					<h3 class="w-10/12 font-semibold leading-tight ">
						{bl.lang ?? bl.item.lang}
					</h3>
					<span
						class="absolute bottom-0 left-0 text-right text-xs uppercase leading-snug">
						{bl.iso ?? bl.item.iso}
					</span>
					<svg class="absolute top-0 right-0 h-7 w-9 drop-shadow-lg">
						<use
							href="/img/flags.svg#{bl.country_id ?? bl.item.country_id}"
							xlink:href="#{bl.country_id ?? bl.item.country_id}">
						</use>
					</svg>
					<span
						class="absolute bottom-0  right-0 text-right text-sm leading-snug">
						{bl.country ?? bl.item.country}
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
