<script>
import { Datatable } from "@dbs/svelte-datatables"
import { t } from "$lib/Translations/index.js"
import IconChevronLeft from "~icons/heroicons-outline/chevron-left"
import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte"

/** @type {import('./$types').PageData} */
export let data;
$: ({ bibles } = data);

let historic = [
	"AARA94",
	"AAZANT",
	"ABHPOR",
	"ABNOOIA",
	"ABSNTP",
	"ACCIBS",
	"ACEIBS",
	"ACELAI",
	"ACHBSU",
	"ADADFB",
	"ADETBL",
	"ADIBSI",
	"ADJWBT",
	"ADYNTA",
	"ADZAMV",
	"AFR1893",
	"AFRABY",
	"AFRDLB",
	"AGRTBL",
	"AGUNVS",
	"AHK1991",
	"AHKTBS",
	"AIAWBT",
	"AII1514",
	"AII1885",
	"AIIAPNT",
	"AINB97",
	"AK1UBS",
	"AKA1905",
	"AKABSG",
	"AKANTB",
	"AKAUBS",
	"AKB1917",
	"AKBLAI",
	"AKBPOR",
	"AKEBSS",
	"AKLAKL",
	"ALEGSA",
	"ALEMAT",
	"ALEMLJ",
	"ALNGKK",
	"ALPPOR",
	"ALQKNP",
	"ALTALT",
	"ALU1925",
	"AMCGEN",
	"AMHEVG",
	"AMI1981",
	"AMULLB",
	"AOIBSA",
	"AOZLAI",
	"APBPSL",
	"APC1981",
	"APE1976",
	"APWWNT",
	"ARA1300",
	"ARAKZD",
	"ARASFG",
	"ARATMG",
	"ARAWMG",
	"ARAYUSU",
	"ARBB08",
	"ARBVDV",
	"AREBSA",
	"ARI1905",
	"ARNSBU",
	"ARPLUK",
	"ARWACT",
	"ARZPOR",
	"ASMAOT",
	"ASMATJ",
	"ATJANT",
	"ATQLAI",
	"ATYPSA",
	"AUYSCR",
	"AVU1986",
	"AWAIBS",
	"AWKEUL",
	"AYMSBU",
	"AZBGEN",
	"AZBUBS",
	"AZGTBL",
	"AZJBBE",
	"AZJBSA",
	"BAAGEN",
	"BAKBNT",
	"BAMLUK",
	"BANIBS",
	"BASPOR",
	"BASUBS",
	"BBCGOS",
	"BBCWBT",
	"BCCMAT",
	"BCIUBS",
	"BCNWBT",
	"BCQBEN",
	"BCYBFBS",
	"BEAOOT",
	"BELBBS",
	"BEMUBS",
	"BENBBS",
	"BENCAL",
	"BENCHI",
	"BENTBN",
	"BENWYC",
	"BEOBFB",
	"BEXWBT",
	"BFABSS",
	"BFQGOS",
	"BFT1908",
	"BGRBFB",
	"BGTGEN",
	"BGZBNT",
	"BHBBNT",
	"BHBPOR",
	"BHPLAI",
	"BIMWBT",
	"BIS1988",
	"BIUFUL",
	"BJRWBT",
	"BKLLAI",
	"BLAGEN",
	"BLAMAT",
	"BLBBFBS",
	"BLTBLT",
	"BLTN13",
	"BLWWBT",
	"BLZLAI",
	"BMBFUL",
	"BNCPOR",
	"BNGGEN",
	"BNGPOR",
	"BNOPOR",
	"BODCTV",
	"BODPOR",
	"BONGEN",
	"BRENTT",
	"BRHGEN",
	"BRIBRI",
	"BRXBSI",
	"BSNTBL",
	"BSQBSL",
	"BTDLAI",
	"BTHBSM",
	"BTSLAI",
	"BTXLAI",
	"BTXPOR",
	"BUGLAI",
	"BUGPOR",
	"BUKLBT",
	"BUL1221",
	"BULBNT",
	"BULERV",
	"BULPBR07",
	"BUMBSC",
	"BUNPOR",
	"BVZYSS",
	"BXKK68",
	"BXRIBT",
	"BYNEWT",
	"BZDWBT",
	"CABPOR",
	"CAKSMJ",
	"CAOWBT",
	"CAPSBB",
	"CAQPOR",
	"CARBSS",
	"CAT1888",
	"CATCNT",
	"CDHOCB",
	"CDOMDC",
	"CDOMDR",
	"CEB1904",
	"CEBPVV",
	"CEBRPV",
	"CES1917",
	"CESB85",
	"CESK13",
	"CFMCFM",
	"CFMGEN",
	"CHACHA",
	"CHAUBS",
	"CHDWBT",
	"CHEIBT",
	"CHHPOR",
	"CHK1892",
	"CHOCNT",
	"CHOPEN",
	"CHOPOT",
	"CHPCNT",
	"CHRCNT",
	"CHRROT",
	"CHU1275",
	"CHU1700",
	"CHVIBT",
	"CHYCHB",
	"CHYPOR",
	"CIWCNT",
	"CJKCFB",
	"CJSIBT",
	"CKBOLD",
	"CKBSOR",
	"CKTIBT",
	"CLCMRK",
	"CLDBFB",
	"CMNCOT",
	"CMNEMN",
	"CMNLMV",
	"CMNMMV",
	"CMNNMNT",
	"CNHBSI",
	"CNTTBL",
	"CNWBSM",
	"COKWBT",
	"COPNNT",
	"COPPSA",
	"COPSNT",
	"CPXHRB",
	"CRCPOR",
	"CRECMB",
	"CRECNT",
	"CRHIBT",
	"CRKCMB",
	"CRKGEN",
	"CRKWCB",
	"CRKWCV",
	"CRNPDR",
	"CRWIBS",
	"CRXNNT",
	"CSYCLB",
	"CTACFB",
	"CTDGEN",
	"CTDSZK",
	"CTUCTI",
	"CULWBT",
	"CUTWBT",
	"CUXCFB",
	"CYMBCN",
	"CYMBFBS",
	"CYMCTB",
	"CYMNTA",
	"CYMSALE",
	"CZOPOR",
	"CZTMBS",
	"DAKDNT",
	"DAKDWW",
	"DANB71",
	"DANN27",
	"DANNWB",
	"DEDWBT",
	"DENARC",
	"DENPOR",
	"DEU1460",
	"DEUCARO",
	"DEUDIET",
	"DEUL45",
	"DEUODE",
	"DEUSTRE",
	"DEUWEIZ",
	"DEUZAIN",
	"DGRCBS",
	"DHVPOR",
	"DIBBFBS",
	"DIGTBL",
	"DIKTBL",
	"DIPBSS",
	"DISDIS",
	"DIVACT",
	"DLGIBT",
	"DOBWBT",
	"DOHPOR",
	"DOPN01",
	"DSBOLD",
	"DSHGEN",
	"DTPBSM",
	"DUHOLD",
	"DUHPOR",
	"DUNPOR",
	"DYIIBS",
	"DYUAKK",
	"DZOEHP",
	"EFIEFI",
	"EFIGEN",
	"EKK1887",
	"EKKGEN",
	"ELLTGV",
	"EMSJ14",
	"ENG1650",
	"ENGABU",
	"ENGACS",
	"ENGAME",
	"ENGANT",
	"ENGASV",
	"ENGBALL",
	"ENGBAR",
	"ENGBAX",
	"ENGBAY",
	"ENGBRAM",
	"ENGBSB",
	"ENGCAM",
	"ENGCCS",
	"ENGCHE",
	"ENGCNC",
	"ENGCOM",
	"ENGCPDV",
	"ENGCSPB",
	"ENGCVD",
	"ENGDBY",
	"ENGDEW",
	"ENGDNT",
	"ENGDRB",
	"ENGDRBCR",
	"ENGEMP",
	"ENGFAM",
	"ENGFFB",
	"ENGFOLS",
	"ENGGNV",
	"ENGGOD",
	"ENGGRB",
	"ENGHBP",
	"ENGHPB",
	"ENGJEFF",
	"ENGJESPT",
	"ENGJSF",
	"ENGJWH",
	"ENGKENT",
	"ENGKJV",
	"ENGKJV69",
	"ENGKJVPCE",
	"ENGKNT",
	"ENGLIB",
	"ENGLIT",
	"ENGLOW",
	"ENGLOYD",
	"ENGLTVM",
	"ENGMAC",
	"ENGMASO",
	"ENGMOFF",
	"ENGMONT",
	"ENGMRB",
	"ENGMTB",
	"ENGMUR",
	"ENGMVB",
	"ENGNCN",
	"ENGNEWB",
	"ENGNFB",
	"ENGNOR",
	"ENGNOY",
	"ENGNSB",
	"ENGPAL",
	"ENGPED",
	"ENGPHO",
	"ENGPICT",
	"ENGPNT",
	"ENGPOET",
	"ENGPRO",
	"ENGPSB",
	"ENGQKR",
	"ENGREV",
	"ENGRNT",
	"ENGROT",
	"ENGSCB",
	"ENGSCT",
	"ENGSHA",
	"ENGSHAW",
	"ENGSINA",
	"ENGSOT",
	"ENGSTEV",
	"ENGTHB",
	"ENGTLO",
	"ENGTORR",
	"ENGTVB",
	"ENGTWE",
	"ENGTYN",
	"ENGW850",
	"ENGWBR",
	"ENGWEEK",
	"ENGWELL",
	"ENGWES",
	"ENGWEST",
	"ENGWEY",
	"ENGWHI",
	"ENGWHS",
	"ENGWIL",
	"ENGWNT",
	"ENGWOB",
	"ENGWOR",
	"ENGWORR",
	"ENGWY1810",
	"ENGWYC",
	"ENGYAW",
	"ENGYLT",
	"ENXDBL",
	"EPOLDN",
	"EPOLLZ",
	"ERGBSSP",
	"ERKPOR",
	"ESIBLI",
	"ESKWBT",
	"ESQPOR",
	"ESUABS",
	"EVEIBT",
	"EVNIBT",
	"EWEB11",
	"FAODBS",
	"FATBSG",
	"FIJBSP",
	"FIJVMB",
	"FINBPR",
	"FINNCB",
	"FINPYH",
	"FLAHBO",
	"FRAH06",
	"FRALCF",
	"FRALSB",
	"FRALSG",
	"FRAM44",
	"FRAMAR",
	"FRAOLI",
	"FRAOST",
	"FRASAC",
	"FRASYN",
	"FRYFBD",
	"FRYPOR",
	"FUTPOR",
	"GAABSG",
	"GAAGOO",
	"GAAPOR",
	"GAGCNT",
	"GAXGAX",
	"GBILAI",
	"GBOLBT",
	"GBVGEN",
	"GBYHAY",
	"GEZPOR",
	"GGWNEW",
	"GILBPG",
	"GILGEN",
	"GILGIL",
	"GILOLD",
	"GLA1891",
	"GLAOLD",
	"GLASGM",
	"GLDIBT",
	"GLEBED",
	"GLEN27",
	"GLKGLK",
	"GLVGLV",
	"GMHFURT",
	"GMHKOBE",
	"GMHMENT",
	"GMHPAUP",
	"GMHRORE",
	"GNNPOR",
	"GOANEW",
	"GOGBST",
	"GOHLEO",
	"GOHOTTH",
	"GOHWEIS",
	"GONPOR",
	"GORLAI",
	"GOTARGE",
	"GOTGTP",
	"GOTPOR",
	"GRBGGN",
	"GRCALEX",
	"GRCAURE",
	"GRCBERA",
	"GRCCRAM",
	"GRCDIAT",
	"GRCERAS",
	"GRCGRIE",
	"GRCMARG",
	"GRCNA28",
	"GRCRENT",
	"GRCSCRI",
	"GRCSEPT",
	"GRCSTEP",
	"GRCSWET",
	"GRCTFP",
	"GRCTISH",
	"GRCTRE",
	"GRCTREB",
	"GRCTREG",
	"GRCTRIG",
	"GRCTXR",
	"GRCVATI",
	"GRCWEST",
	"GRCWHN",
	"GRCWHT",
	"GRTBBS",
	"GSO1948",
	"GUJERV",
	"GUJGOV",
	"GULWBT",
	"GUMTBL",
	"GUPPOR",
	"GUWNVS",
	"GUZGUZ",
	"GVCTBL",
	"GVRPOR",
	"GVRWEST",
	"GWICNT",
	"GWIRMN",
	"GWITKU",
	"GWIWBT",
	"GYNPOR",
	"HAIHSH",
	"HAKONT",
	"HATSBH",
	"HAUBSN",
	"HAUPOR",
	"HAWHNT",
	"HAWPDF",
	"HBOALEP",
	"HBOCAIR",
	"HBODAMA",
	"HBODSS",
	"HBOLENI",
	"HCHWBT",
	"HEBALXE",
	"HEBCERV",
	"HEBGINS",
	"HEBHAFT",
	"HEBHEPT",
	"HEBHEX",
	"HEBLET",
	"HEBLISB",
	"HEBMASP",
	"HEBN01",
	"HEBOMT",
	"HEBPOR",
	"HEBRABB",
	"HEBSOS",
	"HEBTOLE",
	"HILHLG",
	"HILHPV",
	"HILOLD",
	"HINBSI",
	"HINERV",
	"HINHKYM",
	"HINTGH",
	"HIXWBT",
	"HLBFBI",
	"HLTBSM",
	"HMOPNG",
	"HMRFUL",
	"HMTGEN",
	"HNJASI",
	"HNJHNJ",
	"HNSPOR",
	"HNSWBT",
	"HOCIYA",
	"HRVHNZ",
	"HRVPSA",
	"HUIPNG",
	"HUNOLD",
	"HUNRKV",
	"HUSLLB",
	"HUSWBT",
	"HUVTBL",
	"HVNLAI",
	"HYEAJG",
	"HYEAMB",
	"HYEANT",
	"HYEART",
	"HYEB17",
	"HYEB95",
	"HYEJGC",
	"HYEMWA",
	"HYENAG",
	"HYEPCC",
	"HYESGI",
	"HYETRG",
	"HYEVNG",
	"IAIBFBS",
	"IBATIV",
	"IBOILB",
	"IBOPOR",
	"ICRWBT",
	"IFAGEN",
	"IGEWBT",
	"IGLBSN",
	"IJSPOR",
	"IKEGIN",
	"IKUPOR",
	"ILKPOR",
	"ILOGNB",
	"ILONGN",
	"ILOOLD",
	"IRKBST",
	"ISLCE",
	"ISLIBS",
	"ISLINT",
	"ISLLDB",
	"ISOFUL",
	"ITA1495",
	"ITAD85",
	"ITAGDB",
	"ITAVUL",
	"ITLIBT",
	"IUMPEN",
	"IUMTBN",
	"IVBIBS",
	"IWSWBT",
	"IXLCOT",
	"IXLSIL",
	"IXLWBN",
	"IXLWBT",
	"JAEYHB",
	"JAVKST",
	"JAVNRF",
	"JAVOLD",
	"JICWBT",
	"JMDWBT",
	"JPNKYZ",
	"JPNN65",
	"JPNNIT",
	"JPNSHIH",
	"JVNIBS",
	"JVNTBL",
	"KAAIBT",
	"KABLAT",
	"KACCLB",
	"KALKNT",
	"KAMKKB",
	"KANERV",
	"KANOKV",
	"KAPIBT",
	"KASFUL",
	"KASOLD",
	"KATG92",
	"KATGBS",
	"KATGNT",
	"KATOLD",
	"KAZKAZ",
	"KDTGEN",
	"KEBDIK",
	"KEEMJA",
	"KEOGEN",
	"KFFIEM",
	"KGRLAI",
	"KHABIB",
	"KHAOLD",
	"KHAPOR",
	"KHKGEN",
	"KHMKSV",
	"KHMUBS",
	"KIJPNG",
	"KIKBSK",
	"KIKOKHW",
	"KIRBSK",
	"KIUBSK",
	"KJHARV",
	"KKITBS",
	"KLGPOR",
	"KLNRKV",
	"KMBBLI",
	"KMOWBT",
	"KMRK05",
	"KMRKKN",
	"KNGK05",
	"KNGK91",
	"KNGPOR",
	"KNKPOR",
	"KNNKNN",
	"KNOBSL",
	"KNVARA",
	"KONNGW",
	"KORNES",
	"KORSYS",
	"KORTKV",
	"KOSABS",
	"KOSEFB",
	"KPYLUK",
	"KQEPOR",
	"KQNFUL",
	"KRCLIO",
	"KRLNEW",
	"KRUOLD",
	"KSDPNG",
	"KSWOKV",
	"KSWSGW",
	"KTBBSE",
	"KTMWBT",
	"KTU1910",
	"KUAO74",
	"KUNBIB",
	"KVNWBT",
	"KVOPOR",
	"KVXNEW",
	"KWIWBT",
	"KWKPOR",
	"KWNK87",
	"KXXGEN",
	"KYUWBT",
	"KZFLAI",
	"KZITDS",
	"LACTBL",
	"LADPOR",
	"LAMABT",
	"LAOSSR",
	"LAOUBS",
	"LATAPOC",
	"LATARTO",
	"LATASHB",
	"LATAUGU",
	"LATAURE",
	"LATBAMB",
	"LATBENE",
	"LATBEZA",
	"LATBOBB",
	"LATBSV",
	"LATCARR",
	"LATCLAR",
	"LATCORV",
	"LATEBER",
	"LATECHT",
	"LATELLE",
	"LATFLEM",
	"LATGALL",
	"LATGERM",
	"LATGIGA",
	"LATGOLD",
	"LATGUT",
	"LATHEIR",
	"LATHENR",
	"LATHEX",
	"LATHONO",
	"LATINGO",
	"LATISAB",
	"LATKRAM",
	"LATLORS",
	"LATMAGD",
	"LATMAIN",
	"LATMICH",
	"LATMORA",
	"LATNGB",
	"LATNONN",
	"LATNURE",
	"LATOTTA",
	"LATOTTO",
	"LATPASS",
	"LATPAUP",
	"LATPOLL",
	"LATPURP",
	"LATRATI",
	"LATREIC",
	"LATSCHI",
	"LATSEVI",
	"LATTEGE",
	"LATTORY",
	"LATUTA",
	"LATVSB",
	"LATWEIH",
	"LATWEIM",
	"LATWEIN",
	"LAVLVR",
	"LBKWBT",
	"LBWLAI",
	"LCHB63",
	"LEFTBL",
	"LEPNTP",
	"LEWLAI",
	"LEXWBT",
	"LGGFUL",
	"LHUTBS",
	"LIALBT",
	"LIFDEV",
	"LINCLV",
	"LINDRC",
	"LINPOR",
	"LISTBS",
	"LISTCM",
	"LITBSL",
	"LITLTZ",
	"LITN05",
	"LJPLAI",
	"LLPGEN",
	"LLPJHN",
	"LLPNET",
	"LLUGEN",
	"LMNBSI",
	"LNDBSM",
	"LOAPOR",
	"LOLOLD",
	"LOZBSZ",
	"LUEUBS",
	"LUGBSU",
	"LUGLUG",
	"LUN1936",
	"LUNC62",
	"LUSBIV",
	"LUYGEN",
	"LUYUBS",
	"LVSCHL",
	"LWOWBT",
	"LWWMAT",
	"MADLAI",
	"MAHABS",
	"MAHBEB",
	"MAHN95",
	"MAHUBS",
	"MAIWBT",
	"MAKLAI",
	"MALETR",
	"MALMOV",
	"MALVSM",
	"MAMSBG",
	"MANOLD",
	"MAOMAO",
	"MAROLD",
	"MARTBN",
	"MASMAS",
	"MAZTBL",
	"MBSGEN",
	"MEHNTP",
	"MEJTBL",
	"MENGOS",
	"MERMER",
	"MFPLAI",
	"MFPOLD",
	"MFYWBT",
	"MGDUBS",
	"MGIGEN",
	"MHWT86",
	"MHXM09",
	"MHYLAI",
	"MIBWBT",
	"MICGEP",
	"MICN71",
	"MIKSGN",
	"MINLAI",
	"MIRTBL",
	"MJWBSI",
	"MJWPOR",
	"MKD1574",
	"MKDFREI",
	"MKDKYIV",
	"MKDMKV",
	"MKDOLD",
	"MKDORSH",
	"MKDTBN",
	"MKIPOR",
	"MKNUBB",
	"MKSTBL",
	"MLAPOR",
	"MLGDPV",
	"MLGMNT",
	"MLGOLD",
	"MLGRCV",
	"MLTSNT",
	"MMNGEN",
	"MNCLBT",
	"MNIFBL",
	"MNPMHB",
	"MNXLAI",
	"MOGLAI",
	"MOHFGM",
	"MOHNTC",
	"MOHOLD",
	"MOHPOR",
	"MONARN",
	"MONMON",
	"MONOLD",
	"MPJBSA",
	"MQJWBT",
	"MQYIBS",
	"MRHPOR",
	"MRI1868",
	"MRLMNT",
	"MRVGOS",
	"MRWNVS",
	"MSBWBT",
	"MSMWPS",
	"MTTOLWW",
	"MUSMNT",
	"MUSPOR",
	"MVCAEM",
	"MVEMNT",
	"MVFARI",
	"MVOFUL",
	"MVPLAI",
	"MVVFUL",
	"MWPPOR",
	"MWPWBT",
	"MWVLAI",
	"MWWHDV",
	"MYABCL",
	"MYABJB",
	"MYBABT",
	"MYBBSC",
	"MYEPOR",
	"MYUWBT",
	"MYXBSU",
	"MZWNVS",
	"NAGNBP",
	"NAUGEN",
	"NAVABS",
	"NAVNAV",
	"NBIGEN",
	"NBLBSSA",
	"NCBOLD",
	"NDCBSZ",
	"NDEBSZ",
	"NDOBSN",
	"NEZHOG",
	"NEZPOR",
	"NGADRC",
	"NGUOLD",
	"NGUTBL",
	"NIAIBS",
	"NIAOLD",
	"NIJLAI",
	"NIJOLD",
	"NIUBSSP",
	"NJHGEN",
	"NJMCLB",
	"NJOOLD",
	"NLCLAI",
	"NLDDSV",
	"NLDGNB",
	"NLDOLD",
	"NLGPOR",
	"NMEJHN",
	"NMZBFBS",
	"NNIMAR",
	"NOGIBT",
	"NORNBS",
	"NORNCB",
	"NPIB08",
	"NPIERV",
	"NPYLAI",
	"NSABSI",
	"NSKNNT",
	"NSOBSSA",
	"NSTBSI",
	"NUSBSS",
	"NYACCB",
	"NYARNV",
	"NYDBSK",
	"NYFPOR",
	"NYNBSU",
	"NYOBSU",
	"NZIBSG",
	"NZMBSI",
	"OBOBLI",
	"OBOBSP",
	"ODUGEN",
	"OGOBSN",
	"OJBCBS",
	"OJCOLD",
	"OJIB75",
	"OJIJ54",
	"OJIPOR",
	"OJWPOR",
	"OMAPOR",
	"OODTBL",
	"ORCGEN",
	"OREWBT",
	"ORIOLD",
	"ORITBN",
	"ORIWTC",
	"OSSIBTD",
	"OSSOLD",
	"OTDLAI",
	"OTEGEN",
	"OTETBL",
	"OTMWBT",
	"OTWPOR",
	"PADWBT",
	"PAGOLD",
	"PAGPBS",
	"PAMPBS",
	"PANOLD",
	"PANPOR",
	"PANTBN",
	"PANWTC",
	"PAONAB",
	"PAPOLD",
	"PAPPAP",
	"PBULEYD",
	"PBUOLD",
	"PCKBSI",
	"PESOPV",
	"PESTHN",
	"PESTPV",
	"PEXGEN",
	"PEXMRK",
	"PIRGEN",
	"PISWBT",
	"PMFGLP",
	"PNEPNT",
	"POL1923",
	"POLBSP",
	"POLPBG",
	"PONOLD",
	"PONSSP",
	"PORBAP",
	"PORBARR",
	"PORFIGU",
	"PORWBT",
	"POTL44",
	"PPKLAI",
	"PQMOLD",
	"PRSTDV",
	"PSELAI",
	"PSTBIB",
	"PTULAI",
	"PWNGEN",
	"QUBPBS",
	"QUCWBT",
	"QUE1715",
	"QUGSBE",
	"QWCUBS",
	"QXPCAM",
	"RAGBSK67",
	"RAGRNT",
	"RARMKA",
	"RELBTL",
	"RMLPOR",
	"RMYKRNT",
	"RMYRMY",
	"ROH1818",
	"ROHPOR",
	"RONCORN",
	"RONOLD",
	"ROWUBB",
	"RTMPOR",
	"RUFOLD",
	"RUSOLD",
	"RUSPERE",
	"RUSS76",
	"RUSTONK",
	"SAGUBS",
	"SAHPSA",
	"SAMPOR",
	"SANDSB",
	"SASLAI",
	"SATCLV",
	"SBDABB",
	"SCOPSA",
	"SCOSNT",
	"SDALAI",
	"SDOHSH",
	"SEEGOS",
	"SEHWBT",
	"SGCGEN",
	"SGZWBT",
	"SHNSHN",
	"SHRBSZ",
	"SHUATL",
	"SINNRV",
	"SINOLD",
	"SINTOV",
	"SJATBL",
	"SJMGEN",
	"SLKROH",
	"SLV1904",
	"SMOBSP",
	"SMOOLD",
	"SMSNEW",
	"SNABSZ",
	"SNASUV",
	"SND1890",
	"SNDCLB",
	"SNGPOR",
	"SNLPOR",
	"SOMB13",
	"SOMSIM",
	"SOTB89",
	"SPADHH",
	"SPALBS",
	"SPALSE",
	"SPAR02",
	"SPARV09",
	"SPARVC",
	"SPASEV",
	"SPYIBS",
	"SQIALB",
	"SRBBSI",
	"SRMIBS",
	"SRPERV",
	"SRPVDS",
	"SRQWBT",
	"SSLVSSV",
	"SSWS96",
	"SSXPNG",
	"SUKBST",
	"SUKPOR",
	"SUNIBS",
	"SUNOLD",
	"SUNTSV",
	"SURGEN",
	"SWE1526",
	"SWEBDHS",
	"SWES17",
	"SWH1909",
	"SWHKSB",
	"SWHPOR",
	"SWHSUV",
	"SXNLAI",
	"SXNPOR",
	"SYRGOSP",
	"SYROLD",
	"SZBLAI",
	"TAH1847",
	"TAHBSSP",
	"TAMCLV",
	"TAMOLD",
	"TAMWTC",
	"TANPOR",
	"TATIBT",
	"TAYTKN",
	"TBLWBT",
	"TBYLAI",
	"TCZ1983",
	"TELERV",
	"TELOLD",
	"TELTEL",
	"TEMBSL",
	"TEMPOR",
	"TEOBSU",
	"TETTET",
	"TGAPOR",
	"TGKIBC",
	"TGLBFL",
	"TGLMBB",
	"TGLTAB",
	"THAERV",
	"THATBS",
	"TIHTNT",
	"TIRTBI",
	"TIVB64",
	"TIWWBT",
	"TLBLAI",
	"TLDLAI",
	"TMFMAR",
	"TNAWBT",
	"TONOLD",
	"TPIPNG",
	"TPMWBT",
	"TPTTBL",
	"TQOBFBS",
	"TQOTQO",
	"TRPOLD",
	"TRVBSC",
	"TSCOLD",
	"TSGPOR",
	"TSIJHN",
	"TSN1890",
	"TSNB87",
	"TSNSERO",
	"TSNTNT",
	"TSOT89",
	"TUKC02",
	"TUKPOR",
	"TULNBT",
	"TULPOR",
	"TUMNEW",
	"TUR1665",
	"TUR1819",
	"TUR1857",
	"TURBST",
	"TURPOR",
	"TUVBSSP",
	"TUVUBS",
	"TWINTP",
	"TWLBFBS",
	"TWULAI",
	"TYVIBT",
	"TZETOT",
	"TZJEAS",
	"TZJWES",
	"UDUBAM",
	"UIGARA",
	"UIGCYR",
	"UIGKGR",
	"UKIPOR",
	"UKROSTR",
	"UNMGOS21",
	"UNROLD",
	"URDB43",
	"URDBSI",
	"URDERV",
	"URDFGB",
	"URDOLD",
	"URHUBS",
	"USPWBT",
	"UZBUMK",
	"VAP1967",
	"VENB98",
	"VENOLD",
	"VIECOV",
	"VIEWTC",
	"WADOLD",
	"WAMPJN",
	"WARSPV",
	"WEDPNG",
	"WEWLAI",
	"WINS07",
	"WOLOLD",
	"WOLWNT",
	"WUUFGA",
	"WUUNNT",
	"WUURNT",
	"WUUSUN",
	"XALIBT",
	"XBRLAI",
	"XHOOLD",
	"XKLKNT",
	"XMGXFB",
	"XNNWOG",
	"XONNVR",
	"YAGGOS",
	"YAOBFBS",
	"YAQTBL",
	"YIDOLD",
	"YLILAI",
	"YORBSN",
	"YOROLD",
	"YORUBS",
	"YRKIBT",
	"YUEHKBS",
	"YVATBL",
	"ZIMGEN",
	"ZLM1906",
	"ZLMABS",
	"ZLMKEA",
	"ZNEDRC",
	"ZOMZIV",
	"ZPLTBL",
	"ZULB59",
	"ZULB93",
]

bibles = bibles.filter((bible) => historic.includes(bible.id))

let rows
</script>

<svelte:head>
	<title>{$t("bible.bible_historic_title")} | {$t("common.org_title")}</title>
</svelte:head>

<div class="flex-left">
	<Breadcrumbs
		breadcrumbs="{[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: '#', title: $t('bible.bible_historic_title') },
		]}" />
</div>

<div class="dbs-heading">
	<div class="title">
		<h2>{$t("bible.bible_historic_subtitle")}</h2>
		<h1>{$t("bible.bible_historic_title")}</h1>
	</div>
	<div class="caption">{$t("bible.bible_historic_caption")}</div>
</div>

<div class="mx-auto py-8 lg:w-4/5">
	<Datatable
		classList="relative"
		data="{bibles}"
		bind:dataRows="{rows}"
		placeholder="{$t('Filter')}">
		<thead>
			<th data-name="id" data-key="id" class="hidden">id</th>
			<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
			<th
				data-name="language"
				data-key="(row) => row.ln + ' ' + row.iso"
				class="sortable">
				{$t("common.Language")}
			</th>
			<th
				data-name="title"
				data-key="(row) => row.tt + ' ' + row.tv"
				class="sortable">
				{$t("common.Title")}
			</th>
			<th
				data-name="country"
				data-key="(row) => row.cn"
				class="sortable hidden md:table-cell">
				{$t("common.Country")}
			</th>
			<th data-name="country_id" data-key="ci" class="hidden">country id</th>
			<th data-name="date" data-key="dt" class="sortable hidden md:table-cell">
				{$t("common.Date")}
			</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					<tr>
						<td class="hidden whitespace-nowrap px-6 py-4 text-stone-900">
							{row.id}
						</td>
						<td class="whitespace-nowrap px-6 py-4 text-stone-900">
							<a href="/languages/{row.id}">
								<div class="text-sm text-stone-900 dark:text-stone-300">
									{row.ln}
								</div>
								<div class="text-xs italic text-stone-500">
									{row.iso}
								</div>
							</a>
						</td>
						<td class="px-6 py-4">
							<a
								class="flex justify-between"
								href="https://archive.org/details/{row.id}_DBS_HS/">
								<div
									class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-900 dark:text-stone-300">
									{row.tt}
									<div class="text-stone-500">{row.tv ?? ""}</div>
								</div>
								<IconChevronLeft class="inline-flex h-5 w-5" />
							</a>
						</td>
						<td
							class="hidden whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">
							<svg class="inline-block h-5 w-5">
								<use href="/img/flags.svg#{row.ci}" xlink:href="#{row.ci}">
								</use>
							</svg>
							<span class="text-sm text-stone-900 dark:text-stone-300">
								{row.cn}
							</span>
						</td>
						<td class="hidden whitespace-nowrap px-6 py-4 text-stone-900">
							{row.ci}
						</td>
						<td
							class="hidden whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">
							{row.dt}
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</Datatable>
</div>
