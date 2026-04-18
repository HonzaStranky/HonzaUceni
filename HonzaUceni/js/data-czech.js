// ============================================
// CZECH DATA - Čeština (4.-9. třída)
// ============================================

GRADE_TOPICS.czech = {
    '4': ['cz4_velka','cz4_iy','cz4_podst','cz4_slovesa','cz4_abeceda'],
    '5': ['cz5_predpony','cz5_shoda','cz5_vety','cz5_slovdruh','cz5_vetclen'],
    '6': ['cz6_podst2','cz6_prid','cz6_zajmena','cz6_cislovky','cz6_pravopis'],
    '7': ['cz7_slovesa2','cz7_vetsloz','cz7_souveti','cz7_slohut','cz7_frazeol'],
    '8': ['cz8_skladba','cz8_vyznsl','cz8_slohut2','cz8_literdruh','cz8_jazykved'],
    '9': ['cz9_vyvoj','cz9_slohut3','cz9_slovotv','cz9_vetne','cz9_mluvnice']
};

TOPIC_NAMES.cz4_velka='🔠 Velká písmena'; TOPIC_NAMES.cz4_iy='📝 Vyjmenovaná slova';
TOPIC_NAMES.cz4_podst='📖 Podstatná jména'; TOPIC_NAMES.cz4_slovesa='✏️ Slovesa';
TOPIC_NAMES.cz4_abeceda='🔤 Abeceda a hlásky';
TOPIC_NAMES.cz5_predpony='📝 Předpony'; TOPIC_NAMES.cz5_shoda='✅ Shoda podmětu s přísudkem';
TOPIC_NAMES.cz5_vety='💬 Druhy vět'; TOPIC_NAMES.cz5_slovdruh='📚 Slovní druhy';
TOPIC_NAMES.cz5_vetclen='📝 Větné členy';
TOPIC_NAMES.cz6_podst2='📖 Podst. jména - vzory'; TOPIC_NAMES.cz6_prid='📝 Přídavná jména';
TOPIC_NAMES.cz6_zajmena='👤 Zájmena'; TOPIC_NAMES.cz6_cislovky='🔢 Číslovky';
TOPIC_NAMES.cz6_pravopis='✏️ Pravopis';
TOPIC_NAMES.cz7_slovesa2='📝 Slovesa - časy'; TOPIC_NAMES.cz7_vetsloz='🔗 Věta jednoduchá/souvětí';
TOPIC_NAMES.cz7_souveti='📝 Souvětí'; TOPIC_NAMES.cz7_slohut='📄 Slohové útvary';
TOPIC_NAMES.cz7_frazeol='💬 Frazeologie';
TOPIC_NAMES.cz8_skladba='📐 Skladba'; TOPIC_NAMES.cz8_vyznsl='📖 Význam slov';
TOPIC_NAMES.cz8_slohut2='📄 Sloh pokročilý'; TOPIC_NAMES.cz8_literdruh='📚 Literární druhy';
TOPIC_NAMES.cz8_jazykved='🔬 Jazykověda';
TOPIC_NAMES.cz9_vyvoj='📜 Vývoj jazyka'; TOPIC_NAMES.cz9_slohut3='📄 Slohové postupy';
TOPIC_NAMES.cz9_slovotv='🔤 Slovotvorba'; TOPIC_NAMES.cz9_vetne='📝 Větné rozbory';
TOPIC_NAMES.cz9_mluvnice='📐 Mluvnice opakování';

// 4. TŘÍDA
DATA.cz4_velka=[
    {q:'Hlavní město ČR: _raha',a:'Praha',h:'Doplň velké písmeno:'},{q:'Řeka: _ltava',a:'Vltava',h:'Doplň:'},
    {q:'Město: _rno',a:'Brno',h:'Doplň:'},{q:'Hora: _něžka',a:'Sněžka',h:'Doplň:'},
    {q:'Řeka: _orava',a:'Morava',h:'Doplň:'},{q:'Město: _strava',a:'Ostrava',h:'Doplň:'},
    {q:'Řeka: _abe',a:'Labe',h:'Doplň:'},{q:'Město: _lzeň',a:'Plzeň',h:'Doplň:'},
    {q:'Pohoří: _eseniky',a:'Jeseníky',h:'Doplň:'},{q:'Město: _arlovy Vary',a:'Karlovy Vary',h:'Doplň:'},
    {q:'Přehrada: _ipno',a:'Lipno',h:'Doplň:'},{q:'Město: _lomouc',a:'Olomouc',h:'Doplň:'},
    {q:'Hrad: _arlštejn',a:'Karlštejn',h:'Doplň:'},{q:'Země: _esko',a:'Česko',h:'Doplň:'},
    {q:'Kontinent: _vropa',a:'Evropa',h:'Doplň:'}
];
DATA.cz4_iy=[
    {q:'B_t (existovat): y/i?',a:'y',h:'Vyjmenovaná po B:'},{q:'B_dlít (bydlet): y/i?',a:'y',h:'Vyjmenovaná po B:'},
    {q:'M_t (vlastnit): y/i?',a:'í',h:'Vyjmenovaná po M:'},{q:'S_r (tvaroh): y/i?',a:'y',h:'Vyjmenovaná po S:'},
    {q:'V_brat (zvolit): y/i?',a:'y',h:'Vyjmenovaná po V:'},{q:'P_skat (psát): y/i?',a:'í',h:'Po P:'},
    {q:'L_že (sportovní): y/i?',a:'y',h:'Vyjmenovaná po L:'},{q:'M_dlo (k mytí): y/i?',a:'y',h:'Vyjmenovaná po M:'},
    {q:'S_pat (spát): y/i?',a:'y',h:'Vyjmenovaná po S:'},{q:'Z_ma (roční období): y/i?',a:'i',h:'Po Z:'},
    {q:'V_tr (vítr): y/i?',a:'í',h:'Po V:'},{q:'B_k (zvíře): y/i?',a:'y',h:'Vyjmenovaná po B:'},
    {q:'L_stek (z rostliny): y/i?',a:'i',h:'Po L:'},{q:'P_vo (nápoj): y/i?',a:'i',h:'Po P:'},
    {q:'S_n (potomek): y/i?',a:'y',h:'Vyjmenovaná po S:'}
];
DATA.cz4_podst=[
    {q:'Pes je rod...?',a:'muzsky',h:'Rod (mužský/ženský/střední):'},{q:'Kočka je rod...?',a:'zensky',h:'Rod:'},
    {q:'Dítě je rod...?',a:'stredni',h:'Rod:'},{q:'Stůl je rod...?',a:'muzsky',h:'Rod:'},
    {q:'Kniha je rod...?',a:'zensky',h:'Rod:'},{q:'Město je rod...?',a:'stredni',h:'Rod:'},
    {q:'Auto je rod...?',a:'stredni',h:'Rod:'},{q:'Učitelka je rod...?',a:'zensky',h:'Rod:'},
    {q:'Les je rod...?',a:'muzsky',h:'Rod:'},{q:'Okno je rod...?',a:'stredni',h:'Rod:'},
    {q:'Kolik pádů má čeština?',a:'7',h:'Odpověz:'},{q:'1. pád se ptáme...',a:'kdo co',h:'Otázka 1. pádu:'},
    {q:'Množné číslo od „dítě"',a:'deti',h:'Mn. číslo:'},{q:'2. pád: bez koho, bez...?',a:'ceho',h:'Doplň otázku:'},
    {q:'4. pád: vidím koho,...?',a:'co',h:'Doplň otázku:'}
];
DATA.cz4_slovesa=[
    {q:'Dělat - minulý čas (on)',a:'delal',h:'Časuj:'},{q:'Psát - minulý čas (ona)',a:'psala',h:'Časuj:'},
    {q:'Jít - přítomný čas (já)',a:'jdu',h:'Časuj:'},{q:'Být - přítomný čas (my)',a:'jsme',h:'Časuj:'},
    {q:'Mluvit - přítomný čas (ty)',a:'mluvis',h:'Časuj:'},{q:'Číst - přítomný čas (on)',a:'cte',h:'Časuj:'},
    {q:'Spát - přítomný čas (já)',a:'spim',h:'Časuj:'},{q:'Jíst - přítomný čas (ty)',a:'jis',h:'Časuj:'},
    {q:'Infinitiv od „čtu"',a:'cist',h:'Infinitiv:'},{q:'Infinitiv od „píšu"',a:'psat',h:'Infinitiv:'},
    {q:'Infinitiv od „běžím"',a:'bezet',h:'Infinitiv:'},{q:'Infinitiv od „spím"',a:'spat',h:'Infinitiv:'},
    {q:'Infinitiv od „jím"',a:'jist',h:'Infinitiv:'},{q:'Být - budoucí čas (já)',a:'budu',h:'Časuj:'},
    {q:'Dělat - budoucí čas (oni)',a:'budou delat',h:'Časuj:'}
];
DATA.cz4_abeceda=[
    {q:'Kolik písmen má česká abeceda?',a:'42',h:'Odpověz:'},{q:'Samohlásky jsou: a,e,i,...,u (doplň)',a:'o',h:'Doplň samohlásku:'},
    {q:'Kolik samohlásek je v češtině?',a:'5',h:'Krátkých samohlásek:'},{q:'Ž je souhláska...? (znělá/neznělá)',a:'znela',h:'Odpověz:'},
    {q:'P je souhláska...? (znělá/neznělá)',a:'neznela',h:'Odpověz:'},{q:'Č,Ř,Š,Ž jsou souhlásky...?',a:'znele',h:'Znělé/neznělé:'},
    {q:'Di,Ti,Ni jsou slabiky...?',a:'mekke',h:'Měkké/tvrdé:'},{q:'Dy,Ty,Ny jsou slabiky...?',a:'tvrde',h:'Měkké/tvrdé:'},
    {q:'Spočítej slabiky: ko-čka',a:'2',h:'Kolik slabik:'},{q:'Spočítej slabiky: au-to-mo-bil',a:'4',h:'Kolik slabik:'},
    {q:'Spočítej slabiky: pes',a:'1',h:'Kolik slabik:'},{q:'Párová souhláska k B je...?',a:'p',h:'Znělá-neznělá:'},
    {q:'Párová souhláska k D je...?',a:'t',h:'Znělá-neznělá:'},{q:'Párová souhláska k G je...?',a:'k',h:'Znělá-neznělá:'},
    {q:'Párová souhláska k Z je...?',a:'s',h:'Znělá-neznělá:'}
];

// 5. TŘÍDA
DATA.cz5_predpony=[
    {q:'s_jet (dolů): s/z?',a:'sjet',h:'Předpona s-/z-:'},{q:'z_lepšit: s/z?',a:'zlepsit',h:'Předpona s-/z-:'},
    {q:'s_bírat: s/z?',a:'sbirat',h:'Předpona:'},{q:'z_účastnit se: s/z?',a:'zucastnit',h:'Předpona:'},
    {q:'s_hodit se: s/z?',a:'shodovat',h:'Předpona:'},{q:'z_pracovat: s/z?',a:'zpracovat',h:'Předpona:'},
    {q:'Před_tat: před/přet?',a:'predcitat',h:'Předpona:'},{q:'Roz_ít: roz/ros?',a:'rozsirit',h:'Předpona:'},
    {q:'Předpona VY- ve slově „vyjít" značí?',a:'ven',h:'Směr:'},{q:'Předpona PŘI- značí?',a:'priblizeni',h:'Význam:'},
    {q:'Předpona OD- značí?',a:'vzdaleni',h:'Význam:'},{q:'Předpona ROZ- značí?',a:'na vice casti',h:'Význam:'},
    {q:'Předpona NAD- značí?',a:'nahoru',h:'Význam:'},{q:'Předpona POD- značí?',a:'dolu',h:'Význam:'},
    {q:'Kolik předpon může mít slovo?',a:'vice',h:'Jednu/více:'}
];
DATA.cz5_shoda=[
    {q:'Kluci běžel_: i/y?',a:'i',h:'Shoda:'},{q:'Dívky zpíval_: i/y?',a:'y',h:'Shoda:'},{q:'Ženy pracoval_: i/y?',a:'y',h:'Shoda:'},
    {q:'Chlapci hráli/hrály?',a:'hrali',h:'Shoda:'},{q:'Sestry přišly/přišli?',a:'prisly',h:'Shoda:'},
    {q:'Psi štěkal_: i/y?',a:'i',h:'Shoda (muž.živ.):'},{q:'Stromy rostl_: y/i?',a:'y',h:'Shoda (muž.neživ.):'},
    {q:'Kočky spál_: i/y?',a:'y',h:'Shoda (žen. rod):'},{q:'Děti si hrál_: i/y?',a:'y',h:'Shoda (stř. rod):'},
    {q:'Ptáci zpíval_: i/y?',a:'i',h:'Shoda (muž.živ.):'},{q:'Města rostl_: i/y?',a:'a',h:'Shoda (stř. rod):'},
    {q:'Vlci výl_: i/y?',a:'i',h:'Shoda:'},{q:'Květ_ny rozkvetl_: i/y?',a:'y',h:'Shoda:'},
    {q:'Koně běžel_: i/y?',a:'i',h:'Shoda (muž.živ.):'},{q:'Auta jezdil_: i/y?',a:'a',h:'Shoda:'}
];
DATA.cz5_vety=[
    {q:'Věta: „Pojď sem!" je...?',a:'rozkazovaci',h:'Druh věty:'},{q:'Věta: „Kde bydlíš?" je...?',a:'tazaci',h:'Druh věty:'},
    {q:'Věta: „Prší." je...?',a:'oznamovaci',h:'Druh věty:'},{q:'Věta: „Kéž by přestalo pršet!" je...?',a:'praci',h:'Druh věty:'},
    {q:'Na konci oznamovací věty je...?',a:'tecka',h:'Interpunkce:'},{q:'Na konci tázací věty je...?',a:'otaznik',h:'Interpunkce:'},
    {q:'Na konci zvolací/rozkazovací je...?',a:'vykricnik',h:'Interpunkce:'},{q:'Věta: „To je krása!" je...?',a:'zvolaci',h:'Druh:'},
    {q:'Oznamovací věta sděluje...?',a:'informaci',h:'Co sděluje:'},{q:'Tázací věta se...?',a:'pta',h:'Co dělá:'},
    {q:'Rozkazovací věta vyjadřuje...?',a:'rozkaz',h:'Co vyjadřuje:'},{q:'Přací věta vyjadřuje...?',a:'prani',h:'Co vyjadřuje:'},
    {q:'„Neběhej!" - druh věty?',a:'rozkazovaci',h:'Druh:'},{q:'„Kolik je hodin?" - druh?',a:'tazaci',h:'Druh:'},
    {q:'„Škola začíná v 8." - druh?',a:'oznamovaci',h:'Druh:'}
];
DATA.cz5_slovdruh=[
    {q:'Kolik slovních druhů má čeština?',a:'10',h:'Odpověz:'},{q:'„pes" je jaký slovní druh?',a:'podstatne jmeno',h:'Urči:'},
    {q:'„velký" je jaký slovní druh?',a:'pridavne jmeno',h:'Urči:'},{q:'„běží" je jaký slovní druh?',a:'sloveso',h:'Urči:'},
    {q:'„já" je jaký slovní druh?',a:'zajmeno',h:'Urči:'},{q:'„pět" je jaký slovní druh?',a:'cislovka',h:'Urči:'},
    {q:'„rychle" je jaký slovní druh?',a:'prislovce',h:'Urči:'},{q:'„a, nebo" je jaký slovní druh?',a:'spojka',h:'Urči:'},
    {q:'„v, na, pod" je jaký slovní druh?',a:'predlozka',h:'Urči:'},{q:'„ach, hele" je jaký slovní druh?',a:'citoslovce',h:'Urči:'},
    {q:'Slovní druh č. 1?',a:'podstatne jmeno',h:'Pořadí:'},{q:'Slovní druh č. 2?',a:'pridavne jmeno',h:'Pořadí:'},
    {q:'Slovní druh č. 5?',a:'sloveso',h:'Pořadí:'},{q:'„ale, protože" - slovní druh?',a:'spojka',h:'Urči:'},
    {q:'„hezky" - slovní druh?',a:'prislovce',h:'Urči:'}
];
DATA.cz5_vetclen=[
    {q:'Podmět ve větě je...?',a:'kdo co',h:'Ptáme se:'},{q:'Přísudek vyjadřuje...?',a:'co dela',h:'Co vyjadřuje:'},
    {q:'Předmět se ptáme...? pádem',a:'2 3 4 6 7',h:'Jakými pády:'},{q:'Přívlastek rozvíjí...?',a:'podstatne jmeno',h:'Co rozvíjí:'},
    {q:'Příslovečné určení rozvíjí...?',a:'sloveso',h:'Co rozvíjí:'},{q:'„Pes běží." - podmět?',a:'pes',h:'Urči podmět:'},
    {q:'„Pes běží." - přísudek?',a:'bezi',h:'Urči přísudek:'},{q:'Podmět a přísudek = základ...?',a:'vety',h:'Základ čeho:'},
    {q:'„Velký pes běží." - přívlastek?',a:'velky',h:'Urči přívlastek:'},{q:'PU místa odpovídá na...?',a:'kde',h:'Na jakou otázku:'},
    {q:'PU času odpovídá na...?',a:'kdy',h:'Otázka:'},{q:'PU způsobu odpovídá na...?',a:'jak',h:'Otázka:'},
    {q:'Základní větné členy jsou...? (kolik)',a:'2',h:'Kolik:'},{q:'„Čtu knihu." - předmět?',a:'knihu',h:'Urči:'},
    {q:'Rozvíjející větné členy jsou...? (kolik)',a:'3',h:'Kolik:'}
];

// 6. TŘÍDA
DATA.cz6_podst2=[
    {q:'Vzor pro „hrad"?',a:'hrad',h:'Muž. neživ.:'},{q:'Vzor pro „muž"?',a:'muz',h:'Muž. živ.:'},
    {q:'Vzor pro „žena"?',a:'zena',h:'Žen. rod:'},{q:'Vzor pro „město"?',a:'mesto',h:'Stř. rod:'},
    {q:'Vzor pro „kuře"?',a:'kure',h:'Stř. rod:'},{q:'Vzor pro „růže"?',a:'ruze',h:'Žen. rod:'},
    {q:'Vzor pro „píseň"?',a:'pisen',h:'Žen. rod:'},{q:'Vzor pro „předseda"?',a:'predseda',h:'Muž. živ.:'},
    {q:'Vzor pro „soudce"?',a:'soudce',h:'Muž. živ.:'},{q:'Vzor pro „moře"?',a:'more',h:'Stř. rod:'},
    {q:'Vzor pro „stavení"?',a:'staveni',h:'Stř. rod:'},{q:'Vzor pro „kost"?',a:'kost',h:'Žen. rod:'},
    {q:'Vzor pro „stroj"?',a:'stroj',h:'Muž. neživ.:'},{q:'Vzor pro „les"?',a:'hrad',h:'Muž. neživ. vzor:'},
    {q:'Vzor pro „pán"?',a:'pan',h:'Muž. živ.:'}
];
DATA.cz6_prid=[
    {q:'Tvrdé přídavné jméno - vzor?',a:'mlady',h:'Vzor:'},{q:'Měkké přídavné jméno - vzor?',a:'jarni',h:'Vzor:'},
    {q:'„velký" - tvrdé/měkké?',a:'tvrde',h:'Skloňování:'},{q:'„letní" - tvrdé/měkké?',a:'mekke',h:'Skloňování:'},
    {q:'„krásný" - tvrdé/měkké?',a:'tvrde',h:'Skloňování:'},{q:'„dnešní" - tvrdé/měkké?',a:'mekke',h:'Skloňování:'},
    {q:'1. stupeň od „malý"',a:'maly',h:'Stupňování:'},{q:'2. stupeň od „malý"',a:'mensi',h:'Stupňování:'},
    {q:'3. stupeň od „malý"',a:'nejmensi',h:'Stupňování:'},{q:'2. stupeň od „velký"',a:'vetsi',h:'Stupňování:'},
    {q:'3. stupeň od „dobrý"',a:'nejlepsi',h:'Stupňování:'},{q:'2. stupeň od „špatný"',a:'horsi',h:'Stupňování:'},
    {q:'Přídavné jm. odpovídá na: jaký,...?',a:'ktery',h:'Otázka:'},{q:'„Matčin" je přívlastkové...?',a:'privlastnovaci',h:'Druh:'},
    {q:'„Hezký" - 2. stupeň?',a:'hezci',h:'Stupňování:'}
];
DATA.cz6_zajmena=[
    {q:'Osobní zájmeno 1. os. j.č.?',a:'ja',h:'Doplň:'},{q:'Osobní zájmeno 2. os. j.č.?',a:'ty',h:'Doplň:'},
    {q:'Osobní zájmeno 3. os. j.č. (on)?',a:'on',h:'Doplň:'},{q:'Osobní zájmeno 1. os. mn.č.?',a:'my',h:'Doplň:'},
    {q:'Přivlastňovací zájmeno k „já"?',a:'muj',h:'Doplň:'},{q:'Přivlastňovací zájmeno k „ty"?',a:'tvuj',h:'Doplň:'},
    {q:'Ukazovací zájmeno: _en (ten)',a:'ten',h:'Doplň:'},{q:'Tázací zájmeno: _do? (kdo)',a:'kdo',h:'Doplň:'},
    {q:'Vztažné zájmeno: který,...?',a:'jenz',h:'Další vztažné:'},{q:'Neurčité zájmeno: ně_do',a:'nekdo',h:'Doplň:'},
    {q:'Záporné zájmeno: ni_do',a:'nikdo',h:'Doplň:'},{q:'Zvratné zájmeno?',a:'se',h:'Doplň:'},
    {q:'Zvratné přivlastňovací?',a:'svuj',h:'Doplň:'},{q:'„Mě/mně" - 2. pád?',a:'mne',h:'Tvar:'},
    {q:'„Mě/mně" - 3. pád?',a:'mne',h:'Tvar:'}
];
DATA.cz6_cislovky=[
    {q:'„pět" - druh číslovky?',a:'zakladni',h:'Druh:'},{q:'„pátý" - druh číslovky?',a:'radova',h:'Druh:'},
    {q:'„pětkrát" - druh číslovky?',a:'nasobna',h:'Druh:'},{q:'„patery" - druh číslovky?',a:'druhova',h:'Druh:'},
    {q:'Základní číslovky odpovídají na: kolik?',a:'kolik',h:'Otázka:'},{q:'Řadové číslovky odpovídají na?',a:'kolikaty',h:'Otázka:'},
    {q:'Číslovka „sto" se píše...?',a:'dohromady',h:'Zvlášť/dohromady:'},{q:'Dvě stě se píše...?',a:'zvlast',h:'Zvlášť/dohromady:'},
    {q:'Kolik je tucet?',a:'12',h:'Odpověz:'},{q:'Kolik je kopa?',a:'60',h:'Odpověz:'},
    {q:'Řadové číslovky se píší s...?',a:'teckou',h:'S čím:'},{q:'1. je číslovka...?',a:'radova',h:'Druh:'},
    {q:'100 je číslovka...?',a:'zakladni',h:'Druh:'},{q:'Poprvé je číslovka...?',a:'nasobna',h:'Druh:'},
    {q:'Číslovky se skloňují? (ano/ne)',a:'ano',h:'Odpověz:'}
];
DATA.cz6_pravopis=[
    {q:'Psaní ú/ů: k_ra (kůra)',a:'kura',h:'Doplň ú/ů:'},{q:'Psaní ú/ů: _nor (únor)',a:'unor',h:'Doplň:'},
    {q:'mě/mně: za_stnat (zaměstnat)',a:'zamestnat',h:'Doplň:'},{q:'mě/mně: při_t (připomenout)',a:'pripomenout',h:'Doplň:'},
    {q:'„Bychom" se píše...?',a:'dohromady',h:'Zvlášť/dohromady:'},{q:'„Aby" se píše...?',a:'dohromady',h:'Zvlášť/dohromady:'},
    {q:'Čárka před „a" v souvětí? (ano/ne)',a:'ne',h:'Odpověz:'},{q:'Čárka před „ale"? (ano/ne)',a:'ano',h:'Odpověz:'},
    {q:'Čárka před „protože"? (ano/ne)',a:'ano',h:'Odpověz:'},{q:'Čárka před „že"? (ano/ne)',a:'ano',h:'Odpověz:'},
    {q:'Čárka před „nebo"? (ano/ne)',a:'ne',h:'Odpověz:'},{q:'Čárka před „který"? (ano/ne)',a:'ano',h:'Odpověz:'},
    {q:'Předpona s-/z-: _pracovat',a:'zpracovat',h:'Doplň:'},{q:'Předpona s-/z-: _kopírovat',a:'zkopirovat',h:'Doplň:'},
    {q:'Předpona s-/z-: _hodit (dolů)',a:'shodit',h:'Doplň:'}
];

// 7. TŘÍDA
DATA.cz7_slovesa2=[
    {q:'Kolik časů má čeština?',a:'3',h:'Odpověz:'},{q:'Minulý čas se tvoří pomocí...?',a:'l pricesti',h:'Jak:'},
    {q:'Budoucí čas prostý: po_du',a:'pojedu',h:'Doplň:'},{q:'Budoucí čas složený: budu + ...?',a:'infinitiv',h:'Doplň:'},
    {q:'Trpný rod: dům byl posta_en',a:'postaven',h:'Doplň:'},{q:'Činný rod: stavitel posta_il dům',a:'postavil',h:'Doplň:'},
    {q:'Kolik osob má sloveso?',a:'3',h:'Odpověz:'},{q:'Kolik čísel má sloveso?',a:'2',h:'Odpověz:'},
    {q:'Rozkazovací způsob od „jít": _di!',a:'jdi',h:'Doplň:'},{q:'Podmiňovací způsob: dělal _ych',a:'bych',h:'Doplň:'},
    {q:'Oznamovací způsob sděluje...?',a:'skutecnost',h:'Co:'},{q:'Slovesný vid „psát" je...?',a:'nedokonavy',h:'Vid:'},
    {q:'Slovesný vid „napsat" je...?',a:'dokonavy',h:'Vid:'},{q:'Infinitiv končí na...?',a:'t',h:'Na jaké písmeno:'},
    {q:'Pomocné sloveso v min. čase je...?',a:'byt',h:'Které:'}
];
DATA.cz7_vetsloz=[
    {q:'Jednoduchá věta má... přísudek',a:'jeden',h:'Kolik:'},{q:'Souvětí má... přísudků (min.)',a:'dva',h:'Kolik min.:'},
    {q:'Věty v souvětí spojují...?',a:'spojky',h:'Čím:'},{q:'Souvětí souřadné spojují sp. ...?',a:'souradici',h:'Jaké:'},
    {q:'Souvětí podřadné spojují sp. ...?',a:'podradici',h:'Jaké:'},{q:'„a, ale, nebo" jsou spojky...?',a:'souradici',h:'Druh:'},
    {q:'„že, protože, aby" jsou spojky...?',a:'podradici',h:'Druh:'},{q:'Hlavní věta může stát...?',a:'samostatne',h:'Jak:'},
    {q:'Vedlejší věta nemůže stát...?',a:'samostatne',h:'Jak:'},{q:'Kolik vět: „Přišel a řekl."?',a:'2',h:'Kolik vět:'},
    {q:'Kolik vět: „Řekl, že přijde."?',a:'2',h:'Kolik vět:'},{q:'Kolik vět: „Prší."?',a:'1',h:'Kolik vět:'},
    {q:'Čárkou oddělujeme věty v...?',a:'souveti',h:'V čem:'},{q:'Před „a" v souvětí souřadném čárka?',a:'ne',h:'Ano/ne:'},
    {q:'Před „ale" čárka?',a:'ano',h:'Ano/ne:'}
];
DATA.cz7_souveti=[
    {q:'Souřadné souvětí slučovací: spojka?',a:'a',h:'Typická spojka:'},{q:'Souřadné stupňovací: spojka?',a:'ba dokonce',h:'Typická spojka:'},
    {q:'Souřadné odporovací: spojka?',a:'ale',h:'Typická spojka:'},{q:'Souřadné vylučovací: spojka?',a:'nebo',h:'Typická spojka:'},
    {q:'Podřadné účelové: spojka?',a:'aby',h:'Typická spojka:'},{q:'Podřadné příčinné: spojka?',a:'protoze',h:'Typická spojka:'},
    {q:'Podřadné časové: spojka?',a:'kdyz',h:'Typická spojka:'},{q:'Podřadné podmínkové: spojka?',a:'jestlize',h:'Typická spojka:'},
    {q:'VV podmětná zastupuje...?',a:'podmet',h:'Větný člen:'},{q:'VV předmětná zastupuje...?',a:'predmet',h:'Větný člen:'},
    {q:'VV přívlastková zastupuje...?',a:'privlastek',h:'Větný člen:'},{q:'VV příslovečná zastupuje...?',a:'pu',h:'Větný člen:'},
    {q:'„Kdo se bojí, nesmí do lesa" - VV?',a:'podmetna',h:'Druh VV:'},{q:'„Řekl, že přijde" - VV?',a:'predmetna',h:'Druh VV:'},
    {q:'Kolik druhů VV existuje?',a:'5',h:'Odpověz:'}
];
DATA.cz7_slohut=[
    {q:'Dopis začíná...?',a:'oslovenim',h:'Čím:'},{q:'Dopis končí...?',a:'podpisem',h:'Čím:'},
    {q:'Popis postupu popisuje...?',a:'postup',h:'Co:'},{q:'Vypravování je slohový...?',a:'utvar',h:'Co:'},
    {q:'Zpráva informuje o...?',a:'udalosti',h:'O čem:'},{q:'Oznámení sděluje...?',a:'informaci',h:'Co:'},
    {q:'V popisu používáme přídavná...?',a:'jmena',h:'Co:'},{q:'Vypravování má...? (úvod/stať/závěr)',a:'3 casti',h:'Kolik:'},
    {q:'Charakteristika popisuje...?',a:'vlastnosti',h:'Co:'},{q:'Životopis obsahuje...?',a:'udaje o zivote',h:'Co:'},
    {q:'Dialog je...?',a:'rozhovor',h:'Co to je:'},{q:'Monolog je...?',a:'promluva jednoho',h:'Co to je:'},
    {q:'Slohový postup popisný slouží k...?',a:'popisu',h:'K čemu:'},{q:'Informační styl najdeme v...?',a:'novinach',h:'Kde:'},
    {q:'Umělecký styl najdeme v...?',a:'literature',h:'Kde:'}
];
DATA.cz7_frazeol=[
    {q:'„Mít máslo na hlavě" znamená?',a:'mit vinu',h:'Význam:'},{q:'„Být v sedmém nebi" znamená?',a:'byt stastny',h:'Význam:'},
    {q:'„Nosit dříví do lesa" znamená?',a:'delat zbytecne',h:'Význam:'},{q:'„Ležet na srdci" znamená?',a:'trapit',h:'Význam:'},
    {q:'„Hodit flintu do žita" znamená?',a:'vzdat se',h:'Význam:'},{q:'„Mít pod čepicí" znamená?',a:'byt chytry',h:'Význam:'},
    {q:'„Brát nohy na ramena" znamená?',a:'uteci',h:'Význam:'},{q:'„Držet palce" znamená?',a:'prat stesti',h:'Význam:'},
    {q:'„Mít plné zuby" znamená?',a:'byt znudeny',h:'Význam:'},{q:'„Chodit kolem horké kaše" znamená?',a:'vyhybat se',h:'Význam:'},
    {q:'„Být v obraze" znamená?',a:'byt informovany',h:'Význam:'},{q:'„Mít na kahánku" znamená?',a:'byt v nebezpeci',h:'Význam:'},
    {q:'„Jako by mu z oka vypadl" znamená?',a:'podobny',h:'Význam:'},{q:'„Mít za ušima" znamená?',a:'byt sibalsky',h:'Význam:'},
    {q:'„Lézt na nervy" znamená?',a:'otravovat',h:'Význam:'}
];

// 8. TŘÍDA
DATA.cz8_skladba=[
    {q:'Podmět a přísudek tvoří...?',a:'zakladni skladebn par',h:'Co:'},{q:'Přívlastek shodný stojí...? podst. jm.',a:'pred',h:'Kde:'},
    {q:'Přívlastek neshodný stojí...? podst. jm.',a:'za',h:'Kde:'},{q:'Doplněk závisí na...? čl.',a:'dvou',h:'Na kolika:'},
    {q:'Příslovečné určení místa: otázka?',a:'kde',h:'Otázka:'},{q:'PU času: otázka?',a:'kdy',h:'Otázka:'},
    {q:'PU způsobu: otázka?',a:'jak',h:'Otázka:'},{q:'PU příčiny: otázka?',a:'proc',h:'Otázka:'},
    {q:'Přístavek je volně připojený...?',a:'privlastek',h:'Co:'},{q:'Vsuvka je věta...? do jiné věty',a:'vlozena',h:'Co:'},
    {q:'Několikanásobný podmět má...? podmětů',a:'vice',h:'Kolik:'},{q:'Významový přísudek je tvořen...?',a:'plnovyznamovym slovesem',h:'Čím:'},
    {q:'Jmenný přísudek je tvořen...?',a:'sponovym sl a jmenem',h:'Čím:'},{q:'Přísudek slovesný = ...?',a:'sloveso',h:'Co:'},
    {q:'Nevyjádřený podmět poznáme z...?',a:'koncovky',h:'Z čeho:'}
];
DATA.cz8_vyznsl=[
    {q:'Synonymum je slovo...?',a:'stejneho vyznamu',h:'Jaké:'},{q:'Antonymum je slovo...?',a:'opacneho vyznamu',h:'Jaké:'},
    {q:'Homonymum je slovo...?',a:'stejne formy jineho vyzn',h:'Jaké:'},{q:'Synonymum k „velký"?',a:'obrovský',h:'Synonymum:'},
    {q:'Antonymum k „horký"?',a:'studeny',h:'Antonymum:'},{q:'Homonymum „koruna" - 2 významy?',a:'penize a na hlave',h:'Dva významy:'},
    {q:'Slova jednoznačná mají...? význam',a:'jeden',h:'Kolik:'},{q:'Slova mnohoznačná mají...? významů',a:'vice',h:'Kolik:'},
    {q:'Přenesený význam se nazývá...?',a:'metafora',h:'Jak:'},{q:'Metonymie je přenos na základě...?',a:'vecne souvislosti',h:'Čeho:'},
    {q:'Slova citově zabarvená jsou...?',a:'expresivni',h:'Jaká:'},{q:'Archaismy jsou slova...?',a:'zastarala',h:'Jaká:'},
    {q:'Neologismy jsou slova...?',a:'nova',h:'Jaká:'},{q:'Odborné výrazy se nazývají...?',a:'terminy',h:'Jak:'},
    {q:'Slangová slova patří ke skupině...?',a:'nespisovne',h:'Jaké:'}
];
DATA.cz8_slohut2=[
    {q:'Úvaha vyjadřuje...?',a:'nazory',h:'Co:'},{q:'Výklad vysvětluje...?',a:'odborne',h:'Jak:'},
    {q:'Fejeton je...? žánr',a:'publicisticky',h:'Jaký:'},{q:'Referát se píše o...?',a:'odbornem tematu',h:'O čem:'},
    {q:'Recenze hodnotí...?',a:'dilo',h:'Co:'},{q:'Slohový postup úvahový slouží k...?',a:'uvazovani',h:'K čemu:'},
    {q:'Informační postup slouží k...?',a:'informovani',h:'K čemu:'},{q:'Popisný postup slouží k...?',a:'popisu',h:'K čemu:'},
    {q:'Vyprávěcí postup slouží k...?',a:'vypraveni',h:'K čemu:'},{q:'Funkční styl prostěsdělovací je...?',a:'bezny',h:'Jaký:'},
    {q:'Publicistický styl se používá v...?',a:'mediich',h:'Kde:'},{q:'Administrativní styl = styl...?',a:'uredni',h:'Jaký:'},
    {q:'Odborný styl se používá ve...?',a:'vede',h:'Kde:'},{q:'Umělecký styl se používá v...?',a:'literature',h:'Kde:'},
    {q:'Esej je útvar stylu...?',a:'odborneho',h:'Jakého:'}
];
DATA.cz8_literdruh=[
    {q:'3 základní literární druhy?',a:'epika lyrika drama',h:'Vyjmenuj:'},{q:'Epika vypráví...?',a:'pribeh',h:'Co:'},
    {q:'Lyrika vyjadřuje...?',a:'city',h:'Co:'},{q:'Drama se...?',a:'hraje',h:'Co:'},{q:'Román je...? forma',a:'dlouha',h:'Jaká:'},
    {q:'Povídka je...? forma',a:'kratka',h:'Jaká:'},{q:'Báseň patří do...?',a:'lyriky',h:'Kam:'},
    {q:'Pohádka patří do...?',a:'epiky',h:'Kam:'},{q:'Komedie patří do...?',a:'dramatu',h:'Kam:'},
    {q:'Tragédie patří do...?',a:'dramatu',h:'Kam:'},{q:'Rým je shoda hlásek na konci...?',a:'versu',h:'Čeho:'},
    {q:'Verš je jeden...?',a:'radek basne',h:'Co:'},{q:'Strofa je skupina...?',a:'versu',h:'Čeho:'},
    {q:'Metafora je...?',a:'preneseni vyznamu',h:'Co:'},{q:'Přirovnání obsahuje slovo...?',a:'jako',h:'Jaké:'}
];
DATA.cz8_jazykved=[
    {q:'Fonetika studuje...?',a:'hlasky',h:'Co:'},{q:'Morfologie studuje...?',a:'tvary slov',h:'Co:'},
    {q:'Syntax studuje...?',a:'skladbu vet',h:'Co:'},{q:'Lexikologie studuje...?',a:'slovni zasobu',h:'Co:'},
    {q:'Stylistika studuje...?',a:'styl',h:'Co:'},{q:'Sémantika studuje...?',a:'vyznam slov',h:'Co:'},
    {q:'Dialektologie studuje...?',a:'nareci',h:'Co:'},{q:'Pravopis se nazývá...?',a:'ortografie',h:'Jak:'},
    {q:'Český jazyk patří do skupiny...?',a:'slovanskych',h:'Jaké:'},{q:'Západoslovanské jazyky: č, s, ...?',a:'polstina',h:'Další:'},
    {q:'Slovanské jazyky patří do rodiny...?',a:'indoevropske',h:'Jaké:'},{q:'Spisovná čeština se nazývá...?',a:'spisovny jazyk',h:'Jak:'},
    {q:'Nářečí se nazývá...?',a:'dialekt',h:'Jak:'},{q:'Obecná čeština je...?',a:'nespisovna',h:'Jaká:'},
    {q:'Slovník pravopisný = ...?',a:'pravidla',h:'Jak se nazývá:'}
];

// 9. TŘÍDA
DATA.cz9_vyvoj=[
    {q:'Staroslověnština přišla s...?',a:'cyrilem a metodem',h:'S kým:'},{q:'Cyril a Metoděj přišli roku...?',a:'863',h:'Rok:'},
    {q:'Hlaholice je...?',a:'pismo',h:'Co:'},{q:'Bible kralická je z...? století',a:'16',h:'Století:'},
    {q:'Jan Hus reformoval...?',a:'pravopis',h:'Co:'},{q:'Národní obrození bylo v...? století',a:'19',h:'Století:'},
    {q:'Josef Dobrovský napsal...?',a:'mluvnici',h:'Co:'},{q:'Josef Jungmann sestavil...?',a:'slovnik',h:'Co:'},
    {q:'Čeština patří do...? jazyků',a:'slovanskych',h:'Jaké skupiny:'},{q:'Praslovanština je...? jazyk',a:'spolecny predek',h:'Co:'},
    {q:'Nejstarší české věty jsou...?',a:'glosy',h:'Co:'},{q:'Kroniku českou napsal...?',a:'kosmas',h:'Kdo:'},
    {q:'Čeština je úřední jazyk...?',a:'ceske republiky',h:'Kde:'},{q:'Slovenština je češtině...?',a:'nejblizsi',h:'Jaká:'},
    {q:'Latina byla jazykem...?',a:'vzdelani',h:'Čeho:'}
];
DATA.cz9_slohut3=[
    {q:'Postup informační sděluje...?',a:'fakta',h:'Co:'},{q:'Postup vyprávěcí líčí...?',a:'dej',h:'Co:'},
    {q:'Postup popisný zachycuje...?',a:'vzhled',h:'Co:'},{q:'Postup výkladový objasňuje...?',a:'souvislosti',h:'Co:'},
    {q:'Postup úvahový hodnotí...?',a:'a zamysli se',h:'Co dělá:'},{q:'Žádost je útvar...? stylu',a:'administrativniho',h:'Jakého:'},
    {q:'Protokol je útvar...? stylu',a:'administrativniho',h:'Jakého:'},{q:'Fejeton je útvar...? stylu',a:'publicistickeho',h:'Jakého:'},
    {q:'Přednáška je útvar...? stylu',a:'odborneho',h:'Jakého:'},{q:'Povídka je útvar...? stylu',a:'umeleckeho',h:'Jakého:'},
    {q:'Motivační dopis slouží k...?',a:'presvedceni',h:'K čemu:'},{q:'Strukturovaný životopis obsahuje...?',a:'udaje',h:'Co:'},
    {q:'Anotace je krátký...?',a:'obsah',h:'Co:'},{q:'Teze jsou hlavní...?',a:'myšlenky',h:'Co:'},
    {q:'Komentář hodnotí...?',a:'udalost',h:'Co:'}
];
DATA.cz9_slovotv=[
    {q:'Kořen slova „domek" je...?',a:'dom',h:'Kořen:'},{q:'Přípona slova „domek" je...?',a:'ek',h:'Přípona:'},
    {q:'Předpona slova „přestavba" je...?',a:'pre',h:'Předpona:'},{q:'Kořen slova „vodní" je...?',a:'vod',h:'Kořen:'},
    {q:'Odvozování je tvoření slov pomocí...?',a:'predpon a pripon',h:'Čím:'},{q:'Skládání je spojení...? kořenů',a:'dvou',h:'Kolika:'},
    {q:'Zkratka ČR znamená...?',a:'ceska republika',h:'Co:'},{q:'Slovo „lesník" je odvozeno od...?',a:'les',h:'Od čeho:'},
    {q:'Slovo „vodovod" je tvořeno...?',a:'skladanim',h:'Jak:'},{q:'Slovo „překrásný" má předponu...?',a:'pre',h:'Jakou:'},
    {q:'Koncovka se mění při...?',a:'sklonovani',h:'Při čem:'},{q:'Základové slovo k „učitel" je...?',a:'ucit',h:'Jaké:'},
    {q:'Slovotvorný základ = kořen + ...?',a:'pripona',h:'Co:'},{q:'Slovo „zeměpis" je tvořeno...?',a:'skladanim',h:'Jak:'},
    {q:'Slovo „bezdomovec" má předponu...?',a:'bez',h:'Jakou:'}
];
DATA.cz9_vetne=[
    {q:'Podmět + přísudek = ...?',a:'zaklad vety',h:'Co:'},{q:'VV podmětná nahrazuje...?',a:'podmet',h:'Co:'},
    {q:'VV přísudková nahrazuje...?',a:'prisudek',h:'Co:'},{q:'VV předmětná nahrazuje...?',a:'predmet',h:'Co:'},
    {q:'VV přívlastková nahrazuje...?',a:'privlastek',h:'Co:'},{q:'VV příslovečná nahrazuje...?',a:'pu',h:'Co:'},
    {q:'Souřadné souvětí má věty...?',a:'rovnocenne',h:'Jaké:'},{q:'Podřadné souvětí má větu hlavní a...?',a:'vedlejsi',h:'Jakou:'},
    {q:'Přímá řeč se píše v...?',a:'uvozovkach',h:'V čem:'},{q:'Nepřímá řeč začíná spojkou...?',a:'ze',h:'Jakou:'},
    {q:'Větný ekvivalent nemá...?',a:'prisudek',h:'Co:'},{q:'Elipsa je...? věta',a:'neuplna',h:'Jaká:'},
    {q:'Oslovení je...? větný člen',a:'samostatny',h:'Jaký:'},{q:'Parenteze = ...?',a:'vsuvka',h:'Co:'},
    {q:'Kolik vět: „Přišel, viděl, zvítězil."?',a:'3',h:'Kolik:'}
];
DATA.cz9_mluvnice=[
    {q:'Kolik pádů má čeština?',a:'7',h:'Kolik:'},{q:'1. pád: kdo,...?',a:'co',h:'Doplň:'},{q:'Kolik rodů má čeština?',a:'3',h:'Kolik:'},
    {q:'Kolik vzorů muž. živ.?',a:'4',h:'Kolik (pán,muž,předseda,soudce):'},{q:'Kolik vzorů žen. rodu?',a:'4',h:'Kolik (žena,růže,píseň,kost):'},
    {q:'Kolik vzorů stř. rodu?',a:'4',h:'Kolik (město,moře,kuře,stavení):'},{q:'Kolik slovních druhů?',a:'10',h:'Kolik:'},
    {q:'Ohebné slovní druhy: kolik?',a:'5',h:'Kolik:'},{q:'Neohebné slovní druhy: kolik?',a:'5',h:'Kolik:'},
    {q:'Slovesa se...?',a:'casují',h:'Co se s nimi děje:'},{q:'Podstatná jména se...?',a:'sklonuji',h:'Co:'},
    {q:'Vid dokonavý = děj...?',a:'ukonceny',h:'Jaký:'},{q:'Vid nedokonavý = děj...?',a:'probiha',h:'Jaký:'},
    {q:'Trpný rod: „je psán" = ...?',a:'opisny',h:'Jaký tvar:'},{q:'Zvratný tvar trpného rodu: „píše se"',a:'zvratny',h:'Jaký:'}
];
