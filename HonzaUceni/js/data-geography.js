// ============================================
// GEOGRAPHY DATA - Zeměpis (4.-9. třída)
// ============================================

GRADE_TOPICS.geography = {
    '4': ['ze4_svetadily','ze4_oceany','ze4_cesko','ze4_kompas','ze4_krajina'],
    '5': ['ze5_evropa','ze5_vodstvo','ze5_povrch','ze5_podneni','ze5_mapy'],
    '6': ['ze6_zeme','ze6_litosfera','ze6_atmosfera','ze6_hydrosfera','ze6_biosfera'],
    '7': ['ze7_evrstaty','ze7_asie','ze7_afrika','ze7_amerika','ze7_australie'],
    '8': ['ze8_crhory','ze8_crriky','ze8_crmesta','ze8_crprumysl','ze8_crzemedelstvi'],
    '9': ['ze9_globalizace','ze9_obyvatelstvo','ze9_urbanizace','ze9_doprava','ze9_turismus']
};

TOPIC_NAMES.ze4_svetadily='🌍 Světadíly'; TOPIC_NAMES.ze4_oceany='🌊 Oceány'; TOPIC_NAMES.ze4_cesko='🇨🇿 Česko základy';
TOPIC_NAMES.ze4_kompas='🧭 Světové strany'; TOPIC_NAMES.ze4_krajina='🏞️ Krajina';
TOPIC_NAMES.ze5_evropa='🇪🇺 Evropa'; TOPIC_NAMES.ze5_vodstvo='💧 Vodstvo ČR'; TOPIC_NAMES.ze5_povrch='⛰️ Povrch ČR';
TOPIC_NAMES.ze5_podneni='🌤️ Podnebí'; TOPIC_NAMES.ze5_mapy='🗺️ Mapy a měřítko';
TOPIC_NAMES.ze6_zeme='🌎 Planeta Země'; TOPIC_NAMES.ze6_litosfera='🪨 Litosféra'; TOPIC_NAMES.ze6_atmosfera='🌬️ Atmosféra';
TOPIC_NAMES.ze6_hydrosfera='💧 Hydrosféra'; TOPIC_NAMES.ze6_biosfera='🌿 Biosféra';
TOPIC_NAMES.ze7_evrstaty='🇪🇺 Státy Evropy'; TOPIC_NAMES.ze7_asie='🌏 Asie'; TOPIC_NAMES.ze7_afrika='🌍 Afrika';
TOPIC_NAMES.ze7_amerika='🌎 Amerika'; TOPIC_NAMES.ze7_australie='🦘 Austrálie a Oceánie';
TOPIC_NAMES.ze8_crhory='⛰️ Hory ČR'; TOPIC_NAMES.ze8_crriky='🌊 Řeky ČR'; TOPIC_NAMES.ze8_crmesta='🏙️ Města ČR';
TOPIC_NAMES.ze8_crprumysl='🏭 Průmysl ČR'; TOPIC_NAMES.ze8_crzemedelstvi='🌾 Zemědělství ČR';
TOPIC_NAMES.ze9_globalizace='🌐 Globalizace'; TOPIC_NAMES.ze9_obyvatelstvo='👥 Obyvatelstvo'; TOPIC_NAMES.ze9_urbanizace='🏙️ Urbanizace';
TOPIC_NAMES.ze9_doprava='🚂 Doprava'; TOPIC_NAMES.ze9_turismus='✈️ Turismus';

// 4. TŘÍDA
DATA.ze4_svetadily=[
    {q:'Kolik je světadílů?',a:'6',h:'Kolik:'},{q:'Největší světadíl je...?',a:'asie',h:'Který:'},{q:'Nejmenší světadíl je...?',a:'australie',h:'Který:'},
    {q:'Africký kontinent leží většinou v...? pásmu',a:'tropickem',h:'Jakém:'},{q:'Evropa a Asie tvoří...?',a:'eurasii',h:'Co:'},
    {q:'Jižní Amerika je spojena se Severní...?',a:'amerikou',h:'Čím:'},{q:'Antarktida leží na...? pólu',a:'jiznim',h:'Jakém:'},
    {q:'Na kterém světadíle leží Česko?',a:'evropa',h:'Kde:'},{q:'Nil protéká světadílem...?',a:'afrika',h:'Kterým:'},
    {q:'Amazonie leží v...?',a:'jizni americe',h:'Kde:'},{q:'Sahara je poušť v...?',a:'africe',h:'Kde:'},
    {q:'Himaláje leží v...?',a:'asii',h:'Kde:'},{q:'Alpy leží v...?',a:'evrope',h:'Kde:'},
    {q:'Světadíl s tučňáky je...?',a:'antarktida',h:'Který:'},{q:'Kontinent s klokany je...?',a:'australie',h:'Který:'}
];
DATA.ze4_oceany=[
    {q:'Kolik je oceánů?',a:'5',h:'Kolik:'},{q:'Největší oceán je...?',a:'tichy',h:'Který:'},{q:'Nejmenší oceán je...?',a:'severni ledovy',h:'Který:'},
    {q:'Atlantský oceán leží mezi Evropou a...?',a:'amerikou',h:'Čím:'},{q:'Indický oceán leží jižně od...?',a:'asie',h:'Čeho:'},
    {q:'Oceán kolem jižního pólu je...?',a:'jizni',h:'Který:'},{q:'Tichý oceán je také nazýván...?',a:'pacifik',h:'Jak:'},
    {q:'Atlantský oceán se jmenuje podle...?',a:'atlase',h:'Podle čeho:'},{q:'Mariánský příkop je v...? oceánu',a:'tichem',h:'V jakém:'},
    {q:'Nejhlubší místo oceánů je...? příkop',a:'mariansky',h:'Jaký:'},{q:'Moře je část...?',a:'oceanu',h:'Čeho:'},
    {q:'Středozemní moře leží v...?',a:'evrope',h:'Kde:'},{q:'Slanost moře způsobují...?',a:'soli',h:'Co:'},
    {q:'Příliv a odliv způsobuje...?',a:'mesic',h:'Co:'},{q:'Korálovcové útesy žijí v...? vodách',a:'teplych',h:'V jakých:'}
];
DATA.ze4_cesko=[
    {q:'Hlavní město ČR je...?',a:'praha',h:'Jaké:'},{q:'ČR má...? krajů',a:'14',h:'Kolik:'},{q:'Česko sousedí s...? státy',a:'4',h:'Kolika:'},
    {q:'Nejvyšší hora ČR je...?',a:'snezka',h:'Jaká:'},{q:'Nejdelší řeka ČR je...?',a:'vltava',h:'Jaká:'},
    {q:'Česko leží v...? Evropě',a:'stredni',h:'V jaké:'},{q:'Prezident ČR sídlí na...?',a:'hradcanech',h:'Kde:'},
    {q:'Měna v ČR je...?',a:'koruna',h:'Jaká:'},{q:'Vlajka ČR má...? barvy',a:'3',h:'Kolik:'},
    {q:'Barvy české vlajky jsou bílá, červená a...?',a:'modra',h:'Jaká:'},{q:'Státní hymna ČR se jmenuje Kde domov...?',a:'muj',h:'Jaký:'},
    {q:'Největší přehrada v ČR je...?',a:'lipno',h:'Jaká:'},{q:'Česko nemá přístup k...?',a:'mori',h:'K čemu:'},
    {q:'Sousední stát na východě je...?',a:'slovensko',h:'Jaký:'},{q:'Sousední stát na severu je...?',a:'polsko',h:'Jaký:'}
];
DATA.ze4_kompas=[
    {q:'Kolik je hlavních světových stran?',a:'4',h:'Kolik:'},{q:'Sever je na kompasu...?',a:'nahore',h:'Kde:'},{q:'Jih je na kompasu...?',a:'dole',h:'Kde:'},
    {q:'Východ je na kompasu...?',a:'vpravo',h:'Kde:'},{q:'Západ je na kompasu...?',a:'vlevo',h:'Kde:'},
    {q:'Slunce vychází na...?',a:'vychode',h:'Kde:'},{q:'Slunce zapadá na...?',a:'zapade',h:'Kde:'},
    {q:'Severka (Polárka) ukazuje k...?',a:'severu',h:'Kam:'},{q:'Zkratka pro sever je...?',a:'s',h:'Jaká:'},
    {q:'Zkratka pro jih je...?',a:'j',h:'Jaká:'},{q:'Zkratka pro východ je...?',a:'v',h:'Jaká:'},
    {q:'Zkratka pro západ je...?',a:'z',h:'Jaká:'},{q:'Mezi severem a východem je...?',a:'severovychod',h:'Co:'},
    {q:'Kompas ukazuje pomocí...?',a:'magnetky',h:'Čeho:'},{q:'Na mapě je sever obvykle...?',a:'nahore',h:'Kde:'}
];
DATA.ze4_krajina=[
    {q:'Nížina má nadmořskou výšku do...? m',a:'200',h:'Kolik:'},{q:'Hora je vyvýšenina nad...? m n.m.',a:'1000',h:'Kolik:'},
    {q:'Řeka teče z...? do údolí',a:'hor',h:'Odkud:'},{q:'Jezero je voda stojatá nebo...?',a:'stojata',h:'Jaká:'},
    {q:'Les tvořený jehličnany je...?',a:'ihličnatý',h:'Jaký:'},{q:'Rovina je plochý...?',a:'terén',h:'Co:'},
    {q:'Potok je menší než...?',a:'reka',h:'Co:'},{q:'Údolí je mezi dvěma...?',a:'kopci',h:'Čím:'},
    {q:'Ostrov je obklopen...?',a:'vodou',h:'Čím:'},{q:'Poloostrov je z jedné strany spojen se...?',a:'souší',h:'S čím:'},
    {q:'Sopka je hora, ze které vytéká...?',a:'lava',h:'Co:'},{q:'Delta řeky je při...?',a:'usti',h:'Kde:'},
    {q:'Poušť má málo...?',a:'vody',h:'Čeho:'},{q:'Ledovec je masa...?',a:'ledu',h:'Čeho:'},
    {q:'Prales je hustý tropický...?',a:'les',h:'Co:'}
];

// 5. TŘÍDA
DATA.ze5_evropa=[
    {q:'Hlavní město Francie je...?',a:'pariz',h:'Jaké:'},{q:'Hlavní město Německa je...?',a:'berlin',h:'Jaké:'},
    {q:'Hlavní město Velké Británie je...?',a:'londyn',h:'Jaké:'},{q:'Hlavní město Itálie je...?',a:'rim',h:'Jaké:'},
    {q:'Hlavní město Španělska je...?',a:'madrid',h:'Jaké:'},{q:'Nejvyšší hora Evropy je...?',a:'mont blanc',h:'Jaká:'},
    {q:'Nejdelší řeka Evropy je...?',a:'volha',h:'Jaká:'},{q:'Největší evropský stát je...?',a:'rusko',h:'Jaký:'},
    {q:'Nejmenší stát Evropy je...?',a:'vatikan',h:'Jaký:'},{q:'EU má sídlo v...?',a:'bruselu',h:'Kde:'},
    {q:'Skandinávie zahrnuje Norsko, Švédsko a...?',a:'dansko',h:'Co:'},{q:'Británie je...?',a:'ostrov',h:'Co:'},
    {q:'Alpy procházejí...? státy',a:'8',h:'Kolika:'},{q:'Pyreneje oddělují Francii od...?',a:'spanelska',h:'Čeho:'},
    {q:'Dunaj protéká...? státy',a:'10',h:'Kolika:'}
];
DATA.ze5_vodstvo=[
    {q:'Nejdelší řeka ČR je...?',a:'vltava',h:'Jaká:'},{q:'Vltava se vlévá do...?',a:'labe',h:'Do čeho:'},
    {q:'Labe teče do...? moře',a:'severniho',h:'Jakého:'},{q:'Morava se vlévá do...?',a:'dunaje',h:'Do čeho:'},
    {q:'Dyje je přítok...?',a:'moravy',h:'Čeho:'},{q:'Přehrada Lipno je na řece...?',a:'vltave',h:'Na které:'},
    {q:'Sázava je přítok...?',a:'vltavy',h:'Čeho:'},{q:'Berounka se vlévá do Vltavy u...?',a:'prahy',h:'Kde:'},
    {q:'Odra teče do...? moře',a:'baltského',h:'Jakého:'},{q:'Ohře je přítok...?',a:'labe',h:'Čeho:'},
    {q:'Rozvodí odděluje...?',a:'povodi',h:'Co:'},{q:'Voda v ČR teče do...? moří',a:'3',h:'Kolika:'},
    {q:'Rybníky se nacházejí hlavně v...? Čechách',a:'jiznich',h:'V jakých:'},{q:'Největší rybník v ČR je...?',a:'rozmberk',h:'Jaký:'},
    {q:'Podzemní voda se nazývá...? voda',a:'podzemni',h:'Jaká:'}
];
DATA.ze5_povrch=[
    {q:'Sněžka měří...? m n.m.',a:'1603',h:'Kolik:'},{q:'Sněžka leží v...? horách',a:'krkonosich',h:'V jakých:'},
    {q:'Šumava leží na...? ČR',a:'jihozapade',h:'Kde:'},{q:'Polabí je...? kolem Labe',a:'nizina',h:'Co:'},
    {q:'Krušné hory leží na...? ČR',a:'severozapade',h:'Kde:'},{q:'Beskydy leží na...? ČR',a:'severovychode',h:'Kde:'},
    {q:'Českomoravská vrchovina leží ve...? ČR',a:'stredu',h:'Kde:'},{q:'Jizerské hory leží vedle...?',a:'krkonos',h:'Čeho:'},
    {q:'Praděd je nejvyšší hora...?',a:'jeseniku',h:'Čeho:'},{q:'Lysá hora je nejvyšší hora...?',a:'beskyd',h:'Čeho:'},
    {q:'Moravský kras je známý...?',a:'jeskynemi',h:'Čím:'},{q:'Propast Macocha je v...?',a:'moravskem krasu',h:'Kde:'},
    {q:'Pálava leží na jižní...?',a:'morave',h:'Kde:'},{q:'Krkonošský národní park chrání...?',a:'prírodu',h:'Co:'},
    {q:'Říp je slavná česká...?',a:'hora',h:'Co:'}
];
DATA.ze5_podneni=[
    {q:'ČR má...? podnebí',a:'mirne',h:'Jaké:'},{q:'Léto v ČR je od...? do srpna',a:'cervna',h:'Od:'},
    {q:'Zima v ČR je od...? do února',a:'prosince',h:'Od:'},{q:'Nejvíc prší v ČR v...?',a:'lete',h:'Kdy:'},
    {q:'Průměrná teplota v ČR je cca...? °C',a:'8',h:'Kolik:'},{q:'Na horách je teplota...? než v nížinách',a:'nizsi',h:'Jaká:'},
    {q:'Oceánské podnebí je...? než vnitrozemské',a:'mirnejsi',h:'Jaké:'},{q:'Podnebné pásy se dělí na tropický, mírný a...?',a:'polarni',h:'Jaký:'},
    {q:'Česko leží v...? podnebném pásmu',a:'mirnem',h:'V jakém:'},{q:'Klima = dlouhodobé...?',a:'pocasi',h:'Co:'},
    {q:'Počasí sleduje...?',a:'meteorolog',h:'Kdo:'},{q:'Srážky se měří v...?',a:'milimetrech',h:'V čem:'},
    {q:'Inverze = teplý vzduch je...? než studený',a:'výš',h:'Kde:'},{q:'Větry vanou od...? k nízkému tlaku',a:'vysokeho',h:'Od čeho:'},
    {q:'Mlha vzniká při...? rosném bodu',a:'ochlazeni',h:'Při čem:'}
];
DATA.ze5_mapy=[
    {q:'Měřítko mapy udává...? vzdálenosti',a:'zmenšení',h:'Co:'},{q:'Měřítko 1:100 000 znamená 1 cm = ...? km',a:'1',h:'Kolik:'},
    {q:'Vrstevnice spojují body se stejnou...?',a:'nadmorskou vyskou',h:'Čím:'},{q:'Modře se na mapě značí...?',a:'voda',h:'Co:'},
    {q:'Zeleně se na mapě značí...?',a:'lesy',h:'Co:'},{q:'Hnědě se na mapě značí...?',a:'kopce',h:'Co:'},
    {q:'Legenda mapy vysvětluje...?',a:'znacky',h:'Co:'},{q:'Orientace mapy = sever je...?',a:'nahore',h:'Kde:'},
    {q:'Glóbus je model...?',a:'zeme',h:'Čeho:'},{q:'Atlas je soubor...?',a:'map',h:'Čeho:'},
    {q:'GPS určuje...?',a:'polohu',h:'Co:'},{q:'Rovník dělí Zemi na...? polokoule',a:'dve',h:'Kolik:'},
    {q:'Poledník 0° prochází...?',a:'greenwichem',h:'Čím:'},{q:'Rovnoběžky jdou ve směru východ-...?',a:'zapad',h:'Kam:'},
    {q:'Zeměpisná šířka se měří od...?',a:'rovniku',h:'Od čeho:'}
];

// 6. TŘÍDA
DATA.ze6_zeme=[
    {q:'Země se otočí kolem své osy za...? hodin',a:'24',h:'Kolik:'},{q:'Zemská osa je nakloněna o...? °',a:'23.5',h:'Kolik:'},
    {q:'Oběh Země kolem Slunce trvá...? dnů',a:'365',h:'Kolik:'},{q:'Rovník je nejdelší...?',a:'rovnobezka',h:'Co:'},
    {q:'Země má tvar...?',a:'geoid',h:'Jaký:'},{q:'Sluneční soustava má...? planet',a:'8',h:'Kolik:'},
    {q:'Nejbližší planeta ke Slunci je...?',a:'merkur',h:'Jaká:'},{q:'Největší planeta je...?',a:'jupiter',h:'Jaká:'},
    {q:'Měsíc obíhá Zemi za cca...? dní',a:'28',h:'Kolik:'},{q:'Gravitace drží nás na...?',a:'zemi',h:'Kde:'},
    {q:'Sluneční soustava je v galaxii...?',a:'mlecna draha',h:'V jaké:'},{q:'Rok má...? měsíců',a:'12',h:'Kolik:'},
    {q:'Přestupný rok má...? dnů',a:'366',h:'Kolik:'},{q:'Časová pásma jsou...?',a:'24',h:'Kolik:'},
    {q:'Tropický pás leží kolem...?',a:'rovniku',h:'Kolem čeho:'}
];
DATA.ze6_litosfera=[
    {q:'Zemská kůra je...? vrstva Země',a:'svrchni',h:'Jaká:'},{q:'Pod kůrou je zemský...?',a:'plast',h:'Co:'},
    {q:'Jádro Země je...?',a:'žhavé',h:'Jaké:'},{q:'Tektonické desky se...?',a:'posouvají',h:'Co dělají:'},
    {q:'Zemětřesení vzniká pohybem...?',a:'desek',h:'Čeho:'},{q:'Richterova stupnice měří...?',a:'zemetreseni',h:'Co:'},
    {q:'Sopka vyvrhuje...?',a:'lavu',h:'Co:'},{q:'Magma pod povrchem se nazývá...?',a:'magma',h:'Jak:'},
    {q:'Nejvyšší hora světa je...?',a:'mount everest',h:'Jaká:'},{q:'Everest měří...? m n.m.',a:'8849',h:'Kolik:'},
    {q:'Eroze je...? hornin',a:'rozrusovani',h:'Co:'},{q:'Sedimentární horniny vznikají...?',a:'usazovanim',h:'Jak:'},
    {q:'Vyvřelé horniny vznikají z...?',a:'magmatu',h:'Z čeho:'},{q:'Přeměněné horniny vznikají tlakem a...?',a:'teplem',h:'Čím:'},
    {q:'Žula je...? hornina',a:'vyvrela',h:'Jaká:'}
];
DATA.ze6_atmosfera=[
    {q:'Atmosféra je...? obal Země',a:'plynny',h:'Jaký:'},{q:'Nejhojnější plyn v atmosféře je...?',a:'dusik',h:'Jaký:'},
    {q:'Kyslík tvoří cca...? % atmosféry',a:'21',h:'Kolik:'},{q:'Ozonová vrstva chrání před...?',a:'uv zarenim',h:'Před čím:'},
    {q:'Troposféra je...? vrstva atmosféry',a:'nejnizsi',h:'Jaká:'},{q:'Počasí se tvoří v...?',a:'troposfere',h:'Kde:'},
    {q:'Tlak vzduchu klesá s...?',a:'vyskou',h:'S čím:'},{q:'Barometr měří...?',a:'tlak vzduchu',h:'Co:'},
    {q:'Cirrus je typ...?',a:'oblaku',h:'Čeho:'},{q:'Vítr vzniká rozdílem...?',a:'tlaku',h:'Čeho:'},
    {q:'Skleníkový efekt způsobuje...?',a:'co2',h:'Co:'},{q:'Globální oteplování je růst...?',a:'teploty',h:'Čeho:'},
    {q:'Hurikán je silná tropická...?',a:'bourka',h:'Co:'},{q:'Tornádo je rotující...?',a:'vitr',h:'Co:'},
    {q:'Monzun je sezónní...?',a:'vitr',h:'Co:'}
];
DATA.ze6_hydrosfera=[
    {q:'Kolik % povrchu Země pokrývá voda?',a:'71',h:'Kolik:'},{q:'Slaná voda tvoří...? % veškeré vody',a:'97',h:'Kolik:'},
    {q:'Sladká voda tvoří jen...? %',a:'3',h:'Kolik:'},{q:'Největší zásobou sladké vody jsou...?',a:'ledovce',h:'Co:'},
    {q:'Koloběh vody zahrnuje výpar a...?',a:'srazky',h:'Co:'},{q:'Povodí řeky je oblast, ze které voda...?',a:'steka',h:'Co dělá:'},
    {q:'Ústí řeky = místo, kde se vlévá do...?',a:'more',h:'Do čeho:'},{q:'Průtok řeky se měří v...?',a:'m3/s',h:'V čem:'},
    {q:'Podzemní voda zásobuje...?',a:'studne',h:'Co:'},{q:'Pramen je místo, kde voda...?',a:'vyteka',h:'Co dělá:'},
    {q:'Záplavy vznikají při velkém...?',a:'desti',h:'Při čem:'},{q:'Tsunami je obří mořská...?',a:'vlna',h:'Co:'},
    {q:'Gejzír je horký podzemní...?',a:'pramen',h:'Co:'},{q:'Ledovec pokrývá většinu...?',a:'antarktidy',h:'Čeho:'},
    {q:'Mrtvé moře je nejslanější...?',a:'jezero',h:'Co:'}
];
DATA.ze6_biosfera=[
    {q:'Biosféra je oblast...?',a:'zivota',h:'Čeho:'},{q:'Tundra leží v...? oblastech',a:'polarnich',h:'V jakých:'},
    {q:'Tajga je...? les',a:'jehličnatý',h:'Jaký:'},{q:'Savana je travnatá...?',a:'planina',h:'Co:'},
    {q:'Tropický deštný les má...? srážek',a:'hodne',h:'Kolik:'},{q:'Step je suchá...?',a:'travnata oblast',h:'Co:'},
    {q:'Poušť má méně než...? mm srážek ročně',a:'250',h:'Kolik:'},{q:'Přírodní zóny závisí na...?',a:'podnebi',h:'Na čem:'},
    {q:'Mangrovy rostou v...? vodách',a:'slanýčh',h:'V jakých:'},{q:'Korálový útes je živý...?',a:'ekosystem',h:'Co:'},
    {q:'Deforestace je...? lesů',a:'kaceni',h:'Co:'},{q:'Ohrožený druh má riziko...?',a:'vyhynuti',h:'Čeho:'},
    {q:'Národní park chrání...?',a:'prírodu',h:'Co:'},{q:'Biodiverzita = rozmanitost...?',a:'druhu',h:'Čeho:'},
    {q:'Ekosystém tvoří živé organismy a...?',a:'prostredi',h:'Co:'}
];

// 7. TŘÍDA
DATA.ze7_evrstaty=[
    {q:'Hlavní město Polska je...?',a:'varsava',h:'Jaké:'},{q:'Hlavní město Rakouska je...?',a:'viden',h:'Jaké:'},
    {q:'Hlavní město Slovenska je...?',a:'bratislava',h:'Jaké:'},{q:'Hlavní město Řecka je...?',a:'ateny',h:'Jaké:'},
    {q:'Hlavní město Portugalska je...?',a:'lisabon',h:'Jaké:'},{q:'Hlavní město Švédska je...?',a:'stockholm',h:'Jaké:'},
    {q:'Hlavní město Norska je...?',a:'oslo',h:'Jaké:'},{q:'Hlavní město Finska je...?',a:'helsinki',h:'Jaké:'},
    {q:'Hlavní město Nizozemska je...?',a:'amsterdam',h:'Jaké:'},{q:'Hlavní město Belgie je...?',a:'brusel',h:'Jaké:'},
    {q:'Hlavní město Švýcarska je...?',a:'bern',h:'Jaké:'},{q:'Hlavní město Maďarska je...?',a:'budapest',h:'Jaké:'},
    {q:'Hlavní město Rumunska je...?',a:'bukurest',h:'Jaké:'},{q:'Hlavní město Chorvatska je...?',a:'zahreb',h:'Jaké:'},
    {q:'Hlavní město Irska je...?',a:'dublin',h:'Jaké:'}
];
DATA.ze7_asie=[
    {q:'Největší stát Asie je...?',a:'rusko',h:'Jaký:'},{q:'Nejlidnatější stát Asie je...?',a:'indie',h:'Jaký:'},
    {q:'Hlavní město Japonska je...?',a:'tokio',h:'Jaké:'},{q:'Hlavní město Číny je...?',a:'peking',h:'Jaké:'},
    {q:'Himaláje leží mezi Indií a...?',a:'cinou',h:'Čím:'},{q:'Nejdelší řeka Asie je...?',a:'jangcekiang',h:'Jaká:'},
    {q:'Hlavní město Indie je...?',a:'dillí',h:'Jaké:'},{q:'Blízký východ je bohatý na...?',a:'ropu',h:'Na co:'},
    {q:'Hlavní město Turecka je...?',a:'ankara',h:'Jaké:'},{q:'Sibiř leží v...?',a:'rusku',h:'Kde:'},
    {q:'Bajkal je nejhlubší...?',a:'jezero',h:'Co:'},{q:'Kaspické moře je největší...?',a:'jezero',h:'Co:'},
    {q:'Arabský poloostrov leží na...? východě',a:'blizkem',h:'Na jakém:'},{q:'Tajfuny ohrožují...? Asii',a:'vychodní',h:'Jakou:'},
    {q:'Hlavní město Jižní Koreje je...?',a:'soul',h:'Jaké:'}
];
DATA.ze7_afrika=[
    {q:'Největší stát Afriky je...?',a:'alzirsko',h:'Jaký:'},{q:'Nejlidnatější stát Afriky je...?',a:'nigerie',h:'Jaký:'},
    {q:'Nil je nejdelší řeka...?',a:'sveta',h:'Čeho:'},{q:'Sahara je největší...? poušť',a:'horka',h:'Jaká:'},
    {q:'Kilimandžáro leží v...?',a:'tanzanii',h:'Kde:'},{q:'Hlavní město Egypta je...?',a:'kahira',h:'Jaké:'},
    {q:'Hlavní město JAR je...?',a:'pretoria',h:'Jaké:'},{q:'Viktoriino jezero je největší v...?',a:'africe',h:'Kde:'},
    {q:'Madagaskar je velký...?',a:'ostrov',h:'Co:'},{q:'Safari znamená...?',a:'cesta',h:'Co:'},
    {q:'Suezský průplav spojuje Středozemní a...? moře',a:'rudé',h:'Jaké:'},{q:'Afrika leží na...? polokouli',a:'vychodni',h:'Na jaké:'},
    {q:'Rovník protíná Afriku...?',a:'stredem',h:'Kde:'},{q:'Kapverdské ostrovy leží u...? Afriky',a:'zapadni',h:'U jaké:'},
    {q:'Sahel je pás mezi Saharou a...?',a:'savanou',h:'Čím:'}
];
DATA.ze7_amerika=[
    {q:'Hlavní město USA je...?',a:'washington',h:'Jaké:'},{q:'Hlavní město Kanady je...?',a:'ottawa',h:'Jaké:'},
    {q:'Hlavní město Brazílie je...?',a:'brasilia',h:'Jaké:'},{q:'Hlavní město Mexika je...?',a:'mexico city',h:'Jaké:'},
    {q:'Amazonie je v...?',a:'jizni americe',h:'Kde:'},{q:'Amazonka je největší řeka co do...?',a:'průtoku',h:'Čeho:'},
    {q:'Andy jsou pohoří v...?',a:'jizni americe',h:'Kde:'},{q:'Skalnaté hory jsou v...?',a:'severni americe',h:'Kde:'},
    {q:'Panamský průplav spojuje dva...?',a:'oceany',h:'Co:'},{q:'Karibské moře leží v...? Americe',a:'stredni',h:'V jaké:'},
    {q:'Mississippi je dlouhá řeka v...?',a:'usa',h:'Kde:'},{q:'Niagárské vodopády leží mezi USA a...?',a:'kanadou',h:'Čím:'},
    {q:'Argentina leží na...? Ameriky',a:'jihu',h:'Kde:'},{q:'Hlavní město Argentiny je...?',a:'buenos aires',h:'Jaké:'},
    {q:'Hlavní město Peru je...?',a:'lima',h:'Jaké:'}
];
DATA.ze7_australie=[
    {q:'Hlavní město Austrálie je...?',a:'canberra',h:'Jaké:'},{q:'Největší město Austrálie je...?',a:'sydney',h:'Jaké:'},
    {q:'Austrálie je kontinent i...?',a:'stat',h:'Co:'},{q:'Velký bariérový útes je u...?',a:'australie',h:'Kde:'},
    {q:'Nový Zéland leží...? od Austrálie',a:'jihovychodni',h:'Kde:'},{q:'Hlavní město NZ je...?',a:'wellington',h:'Jaké:'},
    {q:'Outback je vnitrozemí...?',a:'australie',h:'Čeho:'},{q:'Uluru je slavná...?',a:'skala',h:'Co:'},
    {q:'Oceánie zahrnuje tisíce...?',a:'ostrovu',h:'Čeho:'},{q:'Původní obyvatelé Austrálie jsou...?',a:'aboriginci',h:'Kdo:'},
    {q:'Původní obyvatelé NZ jsou...?',a:'maorove',h:'Kdo:'},{q:'Austrálie leží na...? polokouli',a:'jizni',h:'Na jaké:'},
    {q:'V Austrálii žijí...? (vačnatci)',a:'klokani',h:'Kdo:'},{q:'Tasmánie je australský...?',a:'ostrov',h:'Co:'},
    {q:'Papua-Nová Guinea leží severně od...?',a:'australie',h:'Od čeho:'}
];

// 8. TŘÍDA
DATA.ze8_crhory=[
    {q:'Nejvyšší hora ČR je...?',a:'snezka',h:'Jaká:'},{q:'Sněžka má...? m n.m.',a:'1603',h:'Kolik:'},
    {q:'Praděd je v...?',a:'jeseniku',h:'Kde:'},{q:'Praděd má...? m n.m.',a:'1491',h:'Kolik:'},
    {q:'Lysá hora je v...?',a:'beskydech',h:'Kde:'},{q:'Lysá hora má...? m n.m.',a:'1323',h:'Kolik:'},
    {q:'Králický Sněžník měří...? m n.m.',a:'1424',h:'Kolik:'},{q:'Smrk v Jizerských horách má...? m n.m.',a:'1124',h:'Kolik:'},
    {q:'Klínovec je v...? horách',a:'krusnych',h:'V jakých:'},{q:'Sněžník leží na hranici s...?',a:'polskem',h:'S čím:'},
    {q:'Jeseníky leží na...? Moravě',a:'severni',h:'Na jaké:'},{q:'Šumava má nejvyšší horu...?',a:'plechy',h:'Jakou:'},
    {q:'České středohoří je...? pohoří',a:'sopečné',h:'Jaké:'},{q:'Říp měří...? m n.m.',a:'456',h:'Kolik:'},
    {q:'Orlické hory leží na...? ČR',a:'severovychode',h:'Kde:'}
];
DATA.ze8_crriky=[
    {q:'Labe pramení v...?',a:'krkonosich',h:'Kde:'},{q:'Vltava pramení na...?',a:'sumave',h:'Kde:'},
    {q:'Vltava měří cca...? km',a:'430',h:'Kolik:'},{q:'Labe opouští ČR u...?',a:'hřenska',h:'Kde:'},
    {q:'Morava pramení na...?',a:'kralickem snezniku',h:'Kde:'},{q:'Morava měří cca...? km',a:'354',h:'Kolik:'},
    {q:'Dyje je...? přítok Moravy',a:'levy',h:'Jaký:'},{q:'Sázava teče do...?',a:'vltavy',h:'Do čeho:'},
    {q:'Ohře teče do...?',a:'labe',h:'Do čeho:'},{q:'Svratka protéká...?',a:'brnem',h:'Čím:'},
    {q:'Jizera teče do Labe u...?',a:'celakovic',h:'Kde:'},{q:'Berounka se vlévá do Vltavy v...?',a:'praze',h:'Kde:'},
    {q:'Opava je přítok...?',a:'odry',h:'Čeho:'},{q:'Bečva je přítok...?',a:'moravy',h:'Čeho:'},
    {q:'Jihlava je přítok...?',a:'svratky',h:'Čeho:'}
];
DATA.ze8_crmesta=[
    {q:'Hlavní město ČR je...?',a:'praha',h:'Jaké:'},{q:'Praha má cca...? milionů obyvatel',a:'1.3',h:'Kolik:'},
    {q:'Druhé největší město ČR je...?',a:'brno',h:'Jaké:'},{q:'Třetí největší město ČR je...?',a:'ostrava',h:'Jaké:'},
    {q:'Plzeň je známá...?',a:'pivovarem',h:'Čím:'},{q:'Olomouc leží na...?',a:'morave',h:'Kde:'},
    {q:'Liberec leží pod...?',a:'jestedem',h:'Pod čím:'},{q:'Karlovy Vary jsou...? lázně',a:'svetove',h:'Jaké:'},
    {q:'Zlín byl město...?',a:'bati',h:'Koho:'},{q:'České Budějovice leží na...?',a:'vltave',h:'Na čem:'},
    {q:'Hradec Králové leží na...?',a:'labi',h:'Na čem:'},{q:'Pardubice jsou známé...?',a:'pernikem',h:'Čím:'},
    {q:'Ústí nad Labem leží v...? Čechách',a:'severnich',h:'V jakých:'},{q:'Jihlava leží na...?',a:'vysocine',h:'Na čem:'},
    {q:'Opava leží ve...? Slezsku',a:'ceskem',h:'V jakém:'}
];
DATA.ze8_crprumysl=[
    {q:'Automobilka Škoda sídlí v...?',a:'mlade boleslavi',h:'Kde:'},{q:'Plzeňský Prazdroj vyrábí...?',a:'pivo',h:'Co:'},
    {q:'Strojírenství je v ČR...? průmysl',a:'hlavni',h:'Jaký:'},{q:'Jaderná elektrárna Temelín je v...? Čechách',a:'jiznich',h:'V jakých:'},
    {q:'Dukovany je...? elektrárna',a:'jaderna',h:'Jaká:'},{q:'Mostecko je oblast těžby...?',a:'uhli',h:'Čeho:'},
    {q:'Ostravsko bylo centrum...? průmyslu',a:'hutniho',h:'Jakého:'},{q:'Sklářský průmysl je tradiční v...? Čechách',a:'severnich',h:'V jakých:'},
    {q:'Textilní průmysl byl silný v...?',a:'liberci',h:'Kde:'},{q:'Potravinářský průmysl zpracovává...?',a:'potraviny',h:'Co:'},
    {q:'Chemický průmysl ČR je soustředěn v...?',a:'pardubicich',h:'Kde:'},{q:'ČR vyváží hlavně...?',a:'auta',h:'Co:'},
    {q:'Energetika ČR využívá jádro a...?',a:'uhli',h:'Co:'},{q:'Větrné elektrárny jsou na...?',a:'kopcich',h:'Kde:'},
    {q:'IT průmysl roste zejména v...?',a:'praze',h:'Kde:'}
];
DATA.ze8_crzemedelstvi=[
    {q:'V Polabí se pěstuje hlavně...?',a:'obili',h:'Co:'},{q:'Chmelařství je tradiční v...?',a:'zatecku',h:'Kde:'},
    {q:'Vinohradnictví je na jižní...?',a:'morave',h:'Kde:'},{q:'Cukrová řepa se pěstuje v...?',a:'nizinach',h:'Kde:'},
    {q:'Brambory se pěstují v...? polohách',a:'vyšších',h:'V jakých:'},{q:'Rybníkářství je tradiční v...? Čechách',a:'jiznich',h:'V jakých:'},
    {q:'Největší plodina ČR je...?',a:'psenice',h:'Jaká:'},{q:'Řepka olejka barví pole...?',a:'zlute',h:'Jak:'},
    {q:'Chov prasat je součást...?',a:'zivocisne vyroby',h:'Čeho:'},{q:'Chov skotu probíhá hlavně na...?',a:'vysocine',h:'Kde:'},
    {q:'Drůbežárna chová...?',a:'slepice',h:'Co:'},{q:'Ovocnářství = pěstování...?',a:'ovoce',h:'Čeho:'},
    {q:'Lesní hospodářství se zabývá...?',a:'lesy',h:'Čím:'},{q:'ČR je soběstačná v...?',a:'obili',h:'V čem:'},
    {q:'Ekologické zemědělství nepoužívá...?',a:'chemii',h:'Co:'}
];

// 9. TŘÍDA
DATA.ze9_globalizace=[
    {q:'Globalizace je...? propojení světa',a:'celosvetove',h:'Jaké:'},{q:'Nadnárodní firmy působí ve více...?',a:'statech',h:'Kde:'},
    {q:'WTO je Světová...? organizace',a:'obchodni',h:'Jaká:'},{q:'MMF = Mezinárodní...? fond',a:'menovy',h:'Jaký:'},
    {q:'Rozvojové země mají nižší...?',a:'hdp',h:'Co:'},{q:'G7 sdružuje...? nejbohatších zemí',a:'7',h:'Kolik:'},
    {q:'OSN sídlí v...?',a:'new yorku',h:'Kde:'},{q:'NATO je...? aliance',a:'vojenska',h:'Jaká:'},
    {q:'Daňové ráje nabízejí nízké...?',a:'dane',h:'Co:'},{q:'Fair trade = spravedlivý...?',a:'obchod',h:'Co:'},
    {q:'Outsourcing = přesouvání práce do...?',a:'zahranici',h:'Kam:'},{q:'Internet je nástroj...?',a:'globalizace',h:'Čeho:'},
    {q:'Migrace = stěhování...?',a:'lidi',h:'Čeho:'},{q:'Rozvojová pomoc směřuje do...? zemí',a:'chudych',h:'Do jakých:'},
    {q:'Globální oteplování ohrožuje celou...?',a:'planetu',h:'Co:'}
];
DATA.ze9_obyvatelstvo=[
    {q:'Kolik obyvatel má Země (mld)?',a:'8',h:'Kolik:'},{q:'Nejlidnatější stát světa je...?',a:'indie',h:'Jaký:'},
    {q:'Hustota zalidnění = obyvatel na...?',a:'km2',h:'Na co:'},{q:'Porodnost = počet...? na 1000 obyvatel',a:'narozenych',h:'Čeho:'},
    {q:'Úmrtnost = počet...? na 1000 obyvatel',a:'zemrelych',h:'Čeho:'},{q:'Přirozený přírůstek = porodnost minus...?',a:'umrstnost',h:'Co:'},
    {q:'Demografický přechod popisuje...?',a:'vyvoj obyvatelstva',h:'Co:'},{q:'Stárnutí populace = roste podíl...?',a:'duchodcu',h:'Čeho:'},
    {q:'Většina lidí žije v...?',a:'asii',h:'Kde:'},{q:'Nejhustěji zalidněný stát je...?',a:'monako',h:'Jaký:'},
    {q:'Rasy se liší barvou...?',a:'kuze',h:'Čeho:'},{q:'Světové náboženství: křesťanství, islám a...?',a:'hinduismus',h:'Co:'},
    {q:'Jazyková rodina s nejvíce mluvčími je...?',a:'indoevropska',h:'Jaká:'},{q:'Gramotnost = schopnost...?',a:'cist a psat',h:'Co:'},
    {q:'HDI měří...? rozvoj',a:'lidsky',h:'Jaký:'}
];
DATA.ze9_urbanizace=[
    {q:'Urbanizace = stěhování do...?',a:'mest',h:'Kam:'},{q:'Většina lidí žije ve městech nebo na...?',a:'vesnici',h:'Kde:'},
    {q:'Megapole má více než...? mil. obyvatel',a:'10',h:'Kolik:'},{q:'Aglomerace = město s...?',a:'okolim',h:'S čím:'},
    {q:'Slumy jsou chudinské...?',a:'ctvrti',h:'Co:'},{q:'Suburbanizace = stěhování na...?',a:'predmesti',h:'Kam:'},
    {q:'Dopravní zácpy jsou problém...?',a:'mest',h:'Čeho:'},{q:'Smog je znečištěný...?',a:'vzduch',h:'Co:'},
    {q:'Zelené plochy ve městě zlepšují...?',a:'klima',h:'Co:'},{q:'Smart city využívá...?',a:'technologie',h:'Co:'},
    {q:'Tokio je největší...? světa',a:'aglomerace',h:'Co:'},{q:'Urbanizace je vyšší v...? zemích',a:'vyspelych',h:'V jakých:'},
    {q:'V Africe urbanizace...?',a:'roste',h:'Co dělá:'},{q:'Historická centra měst jsou...?',a:'chranena',h:'Jaká:'},
    {q:'Panelové sídliště je typické pro...?',a:'socialismus',h:'Pro co:'}
];
DATA.ze9_doprava=[
    {q:'Silniční doprava převáží nejvíce...?',a:'nakladu',h:'Čeho:'},{q:'Železniční doprava je...? než silniční',a:'ekologictejsi',h:'Jaká:'},
    {q:'Letecká doprava je nejrychlejší na...? vzdálenosti',a:'dlouhe',h:'Na jaké:'},{q:'Vodní doprava je nejlevnější pro...?',a:'tezhý naklad',h:'Pro co:'},
    {q:'Potrubní doprava přepravuje...?',a:'ropu',h:'Co:'},{q:'Dálnice D1 vede z Prahy do...?',a:'brna',h:'Kam:'},
    {q:'Letiště Václava Havla je v...?',a:'praze',h:'Kde:'},{q:'TGV je rychlovlak ve...?',a:'francii',h:'Kde:'},
    {q:'Šinkansen jezdí v...?',a:'japonsku',h:'Kde:'},{q:'Kontejnerová doprava převáží zboží v...?',a:'kontejnerech',h:'V čem:'},
    {q:'Největší námořní přístav Evropy je...?',a:'rotterdam',h:'Jaký:'},{q:'Suezský průplav zkracuje cestu z Evropy do...?',a:'asie',h:'Kam:'},
    {q:'Logistika řeší...? zboží',a:'prepravu',h:'Co:'},{q:'Elektromobilita = doprava na...?',a:'elektrinu',h:'Na co:'},
    {q:'MHD = městská hromadná...?',a:'doprava',h:'Co:'}
];
DATA.ze9_turismus=[
    {q:'Nejnavštěvovanější země světa je...?',a:'francie',h:'Jaká:'},{q:'UNESCO chrání světové...?',a:'dedictvi',h:'Co:'},
    {q:'Eiffelova věž stojí v...?',a:'parizi',h:'Kde:'},{q:'Koloseum stojí v...?',a:'rime',h:'Kde:'},
    {q:'Machu Picchu leží v...?',a:'peru',h:'Kde:'},{q:'Velká čínská zeď je v...?',a:'cine',h:'Kde:'},
    {q:'Taj Mahal stojí v...?',a:'indii',h:'Kde:'},{q:'Pyramidy jsou v...?',a:'egypte',h:'Kde:'},
    {q:'Socha svobody stojí v...?',a:'new yorku',h:'Kde:'},{q:'Pražský hrad je památka v...?',a:'praze',h:'Kde:'},
    {q:'Agroturismus = dovolená na...?',a:'farme',h:'Kde:'},{q:'Lázeňství využívá léčivé...?',a:'prameny',h:'Co:'},
    {q:'Masový turismus může...? přírodu',a:'ničit',h:'Co:'},{q:'Ekoturismus je šetrný k...?',a:'prírode',h:'K čemu:'},
    {q:'ČR láká turisty hlavně do...?',a:'prahy',h:'Kam:'}
];
