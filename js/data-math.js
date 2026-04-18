// ============================================
// MATH DATA - Matematika (4.-9. třída)
// ============================================

GRADE_TOPICS.math = {
    '4': ['math4_nasobilka','math4_scitani','math4_odcitani','math4_zaokrouhlovani','math4_geometrie'],
    '5': ['math5_deleni','math5_zlomky','math5_prevody','math5_obvod','math5_obsah'],
    '6': ['math6_desetinna','math6_zlomky2','math6_procenta','math6_uhly','math6_trojuhelnik'],
    '7': ['math7_pomery','math7_celacisla','math7_rovnice','math7_ctverec','math7_kruh'],
    '8': ['math8_mocniny','math8_odmocniny','math8_pythagoras','math8_rovnice2','math8_procenta2'],
    '9': ['math9_funkce','math9_soustavy','math9_kvadrat','math9_telesa','math9_statistika']
};

TOPIC_NAMES.math4_nasobilka='✖️ Násobilka'; TOPIC_NAMES.math4_scitani='➕ Sčítání'; TOPIC_NAMES.math4_odcitani='➖ Odčítání';
TOPIC_NAMES.math4_zaokrouhlovani='🔄 Zaokrouhlování'; TOPIC_NAMES.math4_geometrie='📐 Geometrie základy';
TOPIC_NAMES.math5_deleni='➗ Dělení'; TOPIC_NAMES.math5_zlomky='🍕 Zlomky základy'; TOPIC_NAMES.math5_prevody='📏 Převody jednotek';
TOPIC_NAMES.math5_obvod='📐 Obvod'; TOPIC_NAMES.math5_obsah='📊 Obsah';
TOPIC_NAMES.math6_desetinna='🔢 Desetinná čísla'; TOPIC_NAMES.math6_zlomky2='🍕 Zlomky pokročilé'; TOPIC_NAMES.math6_procenta='💯 Procenta';
TOPIC_NAMES.math6_uhly='📐 Úhly'; TOPIC_NAMES.math6_trojuhelnik='🔺 Trojúhelník';
TOPIC_NAMES.math7_pomery='⚖️ Poměry'; TOPIC_NAMES.math7_celacisla='🔢 Celá čísla'; TOPIC_NAMES.math7_rovnice='📝 Rovnice';
TOPIC_NAMES.math7_ctverec='⬜ Čtyřúhelníky'; TOPIC_NAMES.math7_kruh='⭕ Kruh';
TOPIC_NAMES.math8_mocniny='📈 Mocniny'; TOPIC_NAMES.math8_odmocniny='📉 Odmocniny'; TOPIC_NAMES.math8_pythagoras='📐 Pythagorova věta';
TOPIC_NAMES.math8_rovnice2='📝 Rovnice pokročilé'; TOPIC_NAMES.math8_procenta2='💯 Procenta pokročilé';
TOPIC_NAMES.math9_funkce='📊 Funkce'; TOPIC_NAMES.math9_soustavy='📝 Soustavy rovnic'; TOPIC_NAMES.math9_kvadrat='📐 Kvadratická rovnice';
TOPIC_NAMES.math9_telesa='🧊 Tělesa'; TOPIC_NAMES.math9_statistika='📊 Statistika';

// 4. TŘÍDA
DATA.math4_nasobilka=[
    {q:'7 × 8',a:'56',h:'Vypočítej:'},{q:'6 × 9',a:'54',h:'Vypočítej:'},{q:'8 × 4',a:'32',h:'Vypočítej:'},{q:'9 × 3',a:'27',h:'Vypočítej:'},
    {q:'5 × 7',a:'35',h:'Vypočítej:'},{q:'6 × 6',a:'36',h:'Vypočítej:'},{q:'8 × 9',a:'72',h:'Vypočítej:'},{q:'7 × 4',a:'28',h:'Vypočítej:'},
    {q:'9 × 9',a:'81',h:'Vypočítej:'},{q:'3 × 8',a:'24',h:'Vypočítej:'},{q:'6 × 7',a:'42',h:'Vypočítej:'},{q:'5 × 9',a:'45',h:'Vypočítej:'},
    {q:'8 × 8',a:'64',h:'Vypočítej:'},{q:'7 × 7',a:'49',h:'Vypočítej:'},{q:'4 × 9',a:'36',h:'Vypočítej:'}
];
DATA.math4_scitani=[
    {q:'345 + 278',a:'623',h:'Sečti:'},{q:'156 + 489',a:'645',h:'Sečti:'},{q:'723 + 198',a:'921',h:'Sečti:'},{q:'467 + 355',a:'822',h:'Sečti:'},
    {q:'589 + 234',a:'823',h:'Sečti:'},{q:'812 + 179',a:'991',h:'Sečti:'},{q:'256 + 744',a:'1000',h:'Sečti:'},{q:'403 + 298',a:'701',h:'Sečti:'},
    {q:'675 + 125',a:'800',h:'Sečti:'},{q:'388 + 412',a:'800',h:'Sečti:'},{q:'199 + 301',a:'500',h:'Sečti:'},{q:'547 + 263',a:'810',h:'Sečti:'},
    {q:'666 + 234',a:'900',h:'Sečti:'},{q:'128 + 872',a:'1000',h:'Sečti:'},{q:'451 + 349',a:'800',h:'Sečti:'}
];
DATA.math4_odcitani=[
    {q:'500 - 237',a:'263',h:'Odečti:'},{q:'800 - 456',a:'344',h:'Odečti:'},{q:'1000 - 387',a:'613',h:'Odečti:'},{q:'723 - 458',a:'265',h:'Odečti:'},
    {q:'600 - 183',a:'417',h:'Odečti:'},{q:'945 - 678',a:'267',h:'Odečti:'},{q:'412 - 198',a:'214',h:'Odečti:'},{q:'750 - 375',a:'375',h:'Odečti:'},
    {q:'1000 - 555',a:'445',h:'Odečti:'},{q:'834 - 567',a:'267',h:'Odečti:'},{q:'900 - 123',a:'777',h:'Odečti:'},{q:'567 - 289',a:'278',h:'Odečti:'},
    {q:'700 - 350',a:'350',h:'Odečti:'},{q:'999 - 111',a:'888',h:'Odečti:'},{q:'643 - 287',a:'356',h:'Odečti:'}
];
DATA.math4_zaokrouhlovani=[
    {q:'Zaokrouhli 347 na desítky',a:'350',h:'Zaokrouhli:'},{q:'Zaokrouhli 582 na desítky',a:'580',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 635 na stovky',a:'600',h:'Zaokrouhli:'},{q:'Zaokrouhli 850 na stovky',a:'900',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 1234 na tisíce',a:'1000',h:'Zaokrouhli:'},{q:'Zaokrouhli 7500 na tisíce',a:'8000',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 445 na desítky',a:'450',h:'Zaokrouhli:'},{q:'Zaokrouhli 199 na stovky',a:'200',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 55 na desítky',a:'60',h:'Zaokrouhli:'},{q:'Zaokrouhli 2750 na tisíce',a:'3000',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 915 na desítky',a:'920',h:'Zaokrouhli:'},{q:'Zaokrouhli 3456 na stovky',a:'3500',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 74 na desítky',a:'70',h:'Zaokrouhli:'},{q:'Zaokrouhli 650 na stovky',a:'700',h:'Zaokrouhli:'},
    {q:'Zaokrouhli 1550 na tisíce',a:'2000',h:'Zaokrouhli:'}
];
DATA.math4_geometrie=[
    {q:'Kolik stran má čtverec?',a:'4',h:'Odpověz:'},{q:'Kolik stran má trojúhelník?',a:'3',h:'Odpověz:'},
    {q:'Kolik vrcholů má obdélník?',a:'4',h:'Odpověz:'},{q:'Kolik stran má šestiúhelník?',a:'6',h:'Odpověz:'},
    {q:'Jaký úhel má pravý úhel? (stupňů)',a:'90',h:'Odpověz:'},{q:'Kolik cm je 1 m?',a:'100',h:'Odpověz:'},
    {q:'Kolik mm je 1 cm?',a:'10',h:'Odpověz:'},{q:'Kolik stran má pětiúhelník?',a:'5',h:'Odpověz:'},
    {q:'Obvod čtverce se stranou 5 cm',a:'20',h:'Vypočítej (cm):'},{q:'Kolik os souměrnosti má čtverec?',a:'4',h:'Odpověz:'},
    {q:'Kolik úhlů má trojúhelník?',a:'3',h:'Odpověz:'},{q:'Obvod obdélníku 3×7 cm',a:'20',h:'Vypočítej (cm):'},
    {q:'Kolik m je 1 km?',a:'1000',h:'Odpověz:'},{q:'Součet úhlů v trojúhelníku (°)',a:'180',h:'Odpověz:'},
    {q:'Kolik stěn má krychle?',a:'6',h:'Odpověz:'}
];

// 5. TŘÍDA
DATA.math5_deleni=[
    {q:'144 ÷ 12',a:'12',h:'Vyděl:'},{q:'256 ÷ 16',a:'16',h:'Vyděl:'},{q:'180 ÷ 15',a:'12',h:'Vyděl:'},{q:'225 ÷ 15',a:'15',h:'Vyděl:'},
    {q:'360 ÷ 18',a:'20',h:'Vyděl:'},{q:'420 ÷ 21',a:'20',h:'Vyděl:'},{q:'192 ÷ 8',a:'24',h:'Vyděl:'},{q:'336 ÷ 14',a:'24',h:'Vyděl:'},
    {q:'504 ÷ 12',a:'42',h:'Vyděl:'},{q:'288 ÷ 9',a:'32',h:'Vyděl:'},{q:'450 ÷ 25',a:'18',h:'Vyděl:'},{q:'675 ÷ 27',a:'25',h:'Vyděl:'},
    {q:'810 ÷ 45',a:'18',h:'Vyděl:'},{q:'560 ÷ 35',a:'16',h:'Vyděl:'},{q:'396 ÷ 22',a:'18',h:'Vyděl:'}
];
DATA.math5_zlomky=[
    {q:'1/2 + 1/2',a:'1',h:'Sečti zlomky:'},{q:'1/4 + 1/4',a:'1/2',h:'Sečti zlomky:'},{q:'1/3 + 1/3',a:'2/3',h:'Sečti zlomky:'},
    {q:'3/4 - 1/4',a:'1/2',h:'Odečti zlomky:'},{q:'1/2 + 1/4',a:'3/4',h:'Sečti zlomky:'},{q:'2/5 + 1/5',a:'3/5',h:'Sečti zlomky:'},
    {q:'5/6 - 1/6',a:'4/6',h:'Odečti zlomky:'},{q:'1/8 + 3/8',a:'1/2',h:'Sečti zlomky:'},{q:'7/10 - 3/10',a:'4/10',h:'Odečti zlomky:'},
    {q:'Kolik je polovina z 20?',a:'10',h:'Vypočítej:'},{q:'Kolik je čtvrtina z 40?',a:'10',h:'Vypočítej:'},{q:'Kolik je třetina z 30?',a:'10',h:'Vypočítej:'},
    {q:'1/2 z 50',a:'25',h:'Vypočítej:'},{q:'1/5 z 100',a:'20',h:'Vypočítej:'},{q:'3/4 z 16',a:'12',h:'Vypočítej:'}
];
DATA.math5_prevody=[
    {q:'2 km = ? m',a:'2000',h:'Převeď:'},{q:'3 m = ? cm',a:'300',h:'Převeď:'},{q:'5 cm = ? mm',a:'50',h:'Převeď:'},
    {q:'1500 m = ? km (des. číslo)',a:'1.5',h:'Převeď:'},{q:'2 hodiny = ? minut',a:'120',h:'Převeď:'},{q:'3 kg = ? g',a:'3000',h:'Převeď:'},
    {q:'500 cl = ? l',a:'5',h:'Převeď:'},{q:'2 l = ? ml',a:'2000',h:'Převeď:'},{q:'1 t = ? kg',a:'1000',h:'Převeď:'},
    {q:'90 minut = ? hodin (des.)',a:'1.5',h:'Převeď:'},{q:'250 cm = ? m (des.)',a:'2.5',h:'Převeď:'},{q:'4500 g = ? kg (des.)',a:'4.5',h:'Převeď:'},
    {q:'1 den = ? hodin',a:'24',h:'Převeď:'},{q:'1 hodina = ? sekund',a:'3600',h:'Převeď:'},{q:'10 mm = ? cm',a:'1',h:'Převeď:'}
];
DATA.math5_obvod=[
    {q:'Obvod čtverce, a=6 cm',a:'24',h:'O = 4·a (cm):'},{q:'Obvod čtverce, a=11 cm',a:'44',h:'O = 4·a (cm):'},
    {q:'Obvod obdélníku 5×8 cm',a:'26',h:'O = 2·(a+b) (cm):'},{q:'Obvod obdélníku 12×3 cm',a:'30',h:'O = 2·(a+b) (cm):'},
    {q:'Obvod obdélníku 7×4 cm',a:'22',h:'O = 2·(a+b) (cm):'},{q:'Obvod čtverce, a=15 cm',a:'60',h:'O = 4·a (cm):'},
    {q:'Obvod obdélníku 10×6 cm',a:'32',h:'O = 2·(a+b) (cm):'},{q:'Obvod čtverce, a=9 cm',a:'36',h:'O = 4·a (cm):'},
    {q:'Obvod obdélníku 20×5 cm',a:'50',h:'O = 2·(a+b) (cm):'},{q:'Obvod čtverce, a=25 cm',a:'100',h:'O = 4·a (cm):'},
    {q:'Obvod obdélníku 8×3 cm',a:'22',h:'O = 2·(a+b) (cm):'},{q:'Obvod obdélníku 15×10 cm',a:'50',h:'O = 2·(a+b) (cm):'},
    {q:'Obvod čtverce, a=13 cm',a:'52',h:'O = 4·a (cm):'},{q:'Obvod obdélníku 9×6 cm',a:'30',h:'O = 2·(a+b) (cm):'},
    {q:'Obvod čtverce, a=20 cm',a:'80',h:'O = 4·a (cm):'}
];
DATA.math5_obsah=[
    {q:'Obsah čtverce, a=5 cm (cm²)',a:'25',h:'S = a² :'},{q:'Obsah čtverce, a=8 cm (cm²)',a:'64',h:'S = a² :'},
    {q:'Obsah obdélníku 6×4 cm (cm²)',a:'24',h:'S = a·b :'},{q:'Obsah obdélníku 10×3 cm (cm²)',a:'30',h:'S = a·b :'},
    {q:'Obsah čtverce, a=12 cm (cm²)',a:'144',h:'S = a² :'},{q:'Obsah obdélníku 7×5 cm (cm²)',a:'35',h:'S = a·b :'},
    {q:'Obsah obdélníku 9×8 cm (cm²)',a:'72',h:'S = a·b :'},{q:'Obsah čtverce, a=10 cm (cm²)',a:'100',h:'S = a² :'},
    {q:'Obsah obdélníku 15×4 cm (cm²)',a:'60',h:'S = a·b :'},{q:'Obsah čtverce, a=7 cm (cm²)',a:'49',h:'S = a² :'},
    {q:'Obsah obdélníku 11×6 cm (cm²)',a:'66',h:'S = a·b :'},{q:'Obsah obdélníku 20×5 cm (cm²)',a:'100',h:'S = a·b :'},
    {q:'Obsah čtverce, a=9 cm (cm²)',a:'81',h:'S = a² :'},{q:'Obsah obdélníku 13×3 cm (cm²)',a:'39',h:'S = a·b :'},
    {q:'Obsah čtverce, a=15 cm (cm²)',a:'225',h:'S = a² :'}
];

// 6. TŘÍDA
DATA.math6_desetinna=[
    {q:'0.5 + 0.3',a:'0.8',h:'Sečti:'},{q:'1.2 + 0.8',a:'2',h:'Sečti:'},{q:'3.5 - 1.2',a:'2.3',h:'Odečti:'},
    {q:'2.7 + 1.3',a:'4',h:'Sečti:'},{q:'5.0 - 2.5',a:'2.5',h:'Odečti:'},{q:'0.6 × 3',a:'1.8',h:'Vynásob:'},
    {q:'1.5 × 4',a:'6',h:'Vynásob:'},{q:'0.25 × 8',a:'2',h:'Vynásob:'},{q:'7.2 ÷ 3',a:'2.4',h:'Vyděl:'},
    {q:'4.8 ÷ 4',a:'1.2',h:'Vyděl:'},{q:'9.9 - 3.3',a:'6.6',h:'Odečti:'},{q:'0.4 + 0.6',a:'1',h:'Sečti:'},
    {q:'2.5 × 2',a:'5',h:'Vynásob:'},{q:'6.3 ÷ 9',a:'0.7',h:'Vyděl:'},{q:'0.1 + 0.9',a:'1',h:'Sečti:'}
];
DATA.math6_zlomky2=[
    {q:'1/2 + 1/3 (společný jm.)',a:'5/6',h:'Sečti:'},{q:'2/3 + 1/6',a:'5/6',h:'Sečti:'},{q:'3/4 - 1/2',a:'1/4',h:'Odečti:'},
    {q:'1/3 × 3',a:'1',h:'Vynásob:'},{q:'2/5 × 10',a:'4',h:'Vynásob:'},{q:'1/2 × 1/2',a:'1/4',h:'Vynásob:'},
    {q:'3/4 × 2/3',a:'1/2',h:'Vynásob:'},{q:'1/3 + 2/3',a:'1',h:'Sečti:'},{q:'5/8 - 3/8',a:'1/4',h:'Odečti:'},
    {q:'Zkrať 4/8',a:'1/2',h:'Zkrať zlomek:'},{q:'Zkrať 6/9',a:'2/3',h:'Zkrať zlomek:'},{q:'Zkrať 10/15',a:'2/3',h:'Zkrať zlomek:'},
    {q:'1/4 + 3/4',a:'1',h:'Sečti:'},{q:'2/3 - 1/3',a:'1/3',h:'Odečti:'},{q:'Zkrať 12/16',a:'3/4',h:'Zkrať zlomek:'}
];
DATA.math6_procenta=[
    {q:'10 % z 200',a:'20',h:'Vypočítej:'},{q:'50 % z 80',a:'40',h:'Vypočítej:'},{q:'25 % z 120',a:'30',h:'Vypočítej:'},
    {q:'20 % z 500',a:'100',h:'Vypočítej:'},{q:'1 % z 300',a:'3',h:'Vypočítej:'},{q:'75 % z 40',a:'30',h:'Vypočítej:'},
    {q:'5 % z 200',a:'10',h:'Vypočítej:'},{q:'30 % z 50',a:'15',h:'Vypočítej:'},{q:'15 % z 200',a:'30',h:'Vypočítej:'},
    {q:'Kolik % je 25 z 100?',a:'25',h:'Kolik %?'},{q:'Kolik % je 3 z 10?',a:'30',h:'Kolik %?'},{q:'Kolik % je 1 z 4?',a:'25',h:'Kolik %?'},
    {q:'40 % z 250',a:'100',h:'Vypočítej:'},{q:'60 % z 50',a:'30',h:'Vypočítej:'},{q:'80 % z 125',a:'100',h:'Vypočítej:'}
];
DATA.math6_uhly=[
    {q:'Pravý úhel má kolik °?',a:'90',h:'Odpověz:'},{q:'Přímý úhel má kolik °?',a:'180',h:'Odpověz:'},{q:'Plný úhel má kolik °?',a:'360',h:'Odpověz:'},
    {q:'Ostrý úhel je menší než °?',a:'90',h:'Odpověz:'},{q:'Tupý úhel je větší než °?',a:'90',h:'Odpověz:'},
    {q:'Dva vedlejší úhly mají součet °',a:'180',h:'Odpověz:'},{q:'Dva vrcholové úhly jsou?',a:'shodne',h:'Odpověz (shodné/různé):'},
    {q:'Součet úhlů v trojúhelníku °',a:'180',h:'Odpověz:'},{q:'60° + 70° + ? = 180°',a:'50',h:'Dopočítej °:'},
    {q:'90° + 45° + ? = 180°',a:'45',h:'Dopočítej °:'},{q:'Kolik ° má 1/4 plného úhlu?',a:'90',h:'Odpověz:'},
    {q:'Kolik ° má 1/2 přímého úhlu?',a:'90',h:'Odpověz:'},{q:'40° + ? = 90°',a:'50',h:'Doplněk do 90°:'},
    {q:'120° + ? = 180°',a:'60',h:'Doplněk do 180°:'},{q:'Kolik ° má 1/3 přímého úhlu?',a:'60',h:'Odpověz:'}
];
DATA.math6_trojuhelnik=[
    {q:'Součet úhlů v △ je °',a:'180',h:'Odpověz:'},{q:'Rovnostranný △ má úhly po °',a:'60',h:'Odpověz:'},
    {q:'Pravoúhlý △ má jeden úhel °',a:'90',h:'Odpověz:'},{q:'Obvod △ se stranami 3,4,5 cm',a:'12',h:'Vypočítej (cm):'},
    {q:'Obvod △ se stranami 5,5,5 cm',a:'15',h:'Vypočítej (cm):'},{q:'△ s úhly 60°,60°,? °',a:'60',h:'Dopočítej:'},
    {q:'△ s úhly 90°,45°,? °',a:'45',h:'Dopočítej:'},{q:'△ s úhly 30°,60°,? °',a:'90',h:'Dopočítej:'},
    {q:'Obsah △, z=10, v=6 cm (cm²)',a:'30',h:'S = z·v/2 :'},{q:'Obsah △, z=8, v=5 cm (cm²)',a:'20',h:'S = z·v/2 :'},
    {q:'Obsah △, z=12, v=4 cm (cm²)',a:'24',h:'S = z·v/2 :'},{q:'Rovnoramenný △ má ? shodné strany',a:'2',h:'Odpověz:'},
    {q:'△ s úhly 80°,50°,? °',a:'50',h:'Dopočítej:'},{q:'Obvod △ se stranami 7,8,9 cm',a:'24',h:'Vypočítej (cm):'},
    {q:'Obsah △, z=14, v=6 cm (cm²)',a:'42',h:'S = z·v/2 :'}
];

// 7. TŘÍDA
DATA.math7_pomery=[
    {q:'Poměr 4:6 zkrať',a:'2:3',h:'Zkrať:'},{q:'Poměr 10:15 zkrať',a:'2:3',h:'Zkrať:'},{q:'Poměr 8:12 zkrať',a:'2:3',h:'Zkrať:'},
    {q:'Poměr 6:9 zkrať',a:'2:3',h:'Zkrať:'},{q:'Poměr 15:20 zkrať',a:'3:4',h:'Zkrať:'},{q:'Poměr 12:16 zkrať',a:'3:4',h:'Zkrať:'},
    {q:'Rozděl 100 v poměru 1:4. Menší?',a:'20',h:'Vypočítej:'},{q:'Rozděl 90 v poměru 1:2. Větší?',a:'60',h:'Vypočítej:'},
    {q:'Rozděl 60 v poměru 2:1. Větší?',a:'40',h:'Vypočítej:'},{q:'Poměr 25:50 zkrať',a:'1:2',h:'Zkrať:'},
    {q:'Rozděl 120 v poměru 3:1. Větší?',a:'90',h:'Vypočítej:'},{q:'Poměr 14:21 zkrať',a:'2:3',h:'Zkrať:'},
    {q:'Rozděl 200 v poměru 1:3. Menší?',a:'50',h:'Vypočítej:'},{q:'Poměr 9:12 zkrať',a:'3:4',h:'Zkrať:'},
    {q:'Rozděl 50 v poměru 2:3. Větší?',a:'30',h:'Vypočítej:'}
];
DATA.math7_celacisla=[
    {q:'(-3) + 5',a:'2',h:'Vypočítej:'},{q:'(-7) + (-3)',a:'-10',h:'Vypočítej:'},{q:'4 - 9',a:'-5',h:'Vypočítej:'},
    {q:'(-6) × 2',a:'-12',h:'Vypočítej:'},{q:'(-4) × (-3)',a:'12',h:'Vypočítej:'},{q:'(-8) + 8',a:'0',h:'Vypočítej:'},
    {q:'10 - 15',a:'-5',h:'Vypočítej:'},{q:'(-2) × (-5)',a:'10',h:'Vypočítej:'},{q:'(-12) ÷ 4',a:'-3',h:'Vypočítej:'},
    {q:'(-20) ÷ (-5)',a:'4',h:'Vypočítej:'},{q:'(-1) × 7',a:'-7',h:'Vypočítej:'},{q:'0 - 6',a:'-6',h:'Vypočítej:'},
    {q:'(-3) × (-3)',a:'9',h:'Vypočítej:'},{q:'5 + (-8)',a:'-3',h:'Vypočítej:'},{q:'(-15) ÷ 3',a:'-5',h:'Vypočítej:'}
];
DATA.math7_rovnice=[
    {q:'x + 5 = 12, x = ?',a:'7',h:'Vyřeš:'},{q:'x - 3 = 10, x = ?',a:'13',h:'Vyřeš:'},{q:'2x = 14, x = ?',a:'7',h:'Vyřeš:'},
    {q:'3x = 27, x = ?',a:'9',h:'Vyřeš:'},{q:'x + 8 = 20, x = ?',a:'12',h:'Vyřeš:'},{q:'x/2 = 6, x = ?',a:'12',h:'Vyřeš:'},
    {q:'4x = 36, x = ?',a:'9',h:'Vyřeš:'},{q:'x - 7 = 0, x = ?',a:'7',h:'Vyřeš:'},{q:'5x = 45, x = ?',a:'9',h:'Vyřeš:'},
    {q:'x + 15 = 30, x = ?',a:'15',h:'Vyřeš:'},{q:'x/3 = 8, x = ?',a:'24',h:'Vyřeš:'},{q:'2x + 1 = 11, x = ?',a:'5',h:'Vyřeš:'},
    {q:'3x - 6 = 9, x = ?',a:'5',h:'Vyřeš:'},{q:'x/4 = 5, x = ?',a:'20',h:'Vyřeš:'},{q:'2x + 4 = 20, x = ?',a:'8',h:'Vyřeš:'}
];
DATA.math7_ctverec=[
    {q:'Obvod čtverce a=14 cm',a:'56',h:'O = 4a (cm):'},{q:'Obsah čtverce a=11 cm (cm²)',a:'121',h:'S = a² :'},
    {q:'Úhlopříčka čtverce je 2 (kolik os soum.)',a:'4',h:'Odpověz:'},{q:'Obvod obdélníku 13×7 cm',a:'40',h:'O (cm):'},
    {q:'Obsah obdélníku 14×6 cm (cm²)',a:'84',h:'S (cm²):'},{q:'Obvod rovnoběžníku 8,5 cm strany',a:'26',h:'O (cm):'},
    {q:'Obsah rovnoběžníku a=10, v=4 (cm²)',a:'40',h:'S = a·v :'},{q:'Obsah lichoběžníku a=6,c=4,v=5 (cm²)',a:'25',h:'S=(a+c)·v/2:'},
    {q:'Obvod kosočtverce a=9 cm',a:'36',h:'O = 4a (cm):'},{q:'Obsah obdélníku 25×4 cm (cm²)',a:'100',h:'S (cm²):'},
    {q:'Součet vnitřních úhlů čtyřúhel. (°)',a:'360',h:'Odpověz:'},{q:'Obvod obdélníku 11×9 cm',a:'40',h:'O (cm):'},
    {q:'Obsah čtverce a=20 cm (cm²)',a:'400',h:'S = a² :'},{q:'Obsah obdélníku 16×5 cm (cm²)',a:'80',h:'S (cm²):'},
    {q:'Obvod čtverce a=18 cm',a:'72',h:'O = 4a (cm):'}
];
DATA.math7_kruh=[
    {q:'Průměr kruhu r=5 cm',a:'10',h:'d = 2r (cm):'},{q:'Poloměr kruhu d=14 cm',a:'7',h:'r = d/2 (cm):'},
    {q:'Obvod kruhu r=7 cm (zaokrouhli)',a:'44',h:'O ≈ 2·π·r :'},{q:'Obsah kruhu r=10 cm (zaokrouhli)',a:'314',h:'S ≈ π·r² :'},
    {q:'Obvod kruhu r=1 cm (zaokr. na jedno des.)',a:'6.3',h:'O ≈ 2·π·r :'},{q:'Průměr kruhu r=12 cm',a:'24',h:'d = 2r (cm):'},
    {q:'Kolikrát je π přibližně?',a:'3.14',h:'Odpověz:'},{q:'Poloměr kruhu d=20 cm',a:'10',h:'r = d/2 (cm):'},
    {q:'Obvod kruhu d=10 cm (zaokrouhli)',a:'31',h:'O ≈ π·d :'},{q:'Obsah kruhu r=5 cm (zaokrouhli)',a:'79',h:'S ≈ π·r² :'},
    {q:'Průměr kruhu r=25 cm',a:'50',h:'d = 2r (cm):'},{q:'Poloměr kruhu d=30 cm',a:'15',h:'r = d/2 (cm):'},
    {q:'Obsah kruhu r=3 cm (zaokrouhli)',a:'28',h:'S ≈ π·r² :'},{q:'Obvod kruhu r=14 cm (zaokrouhli)',a:'88',h:'O ≈ 2·π·r :'},
    {q:'Obsah kruhu r=1 cm (zaokrouhli)',a:'3',h:'S ≈ π·r² :'}
];

// 8. TŘÍDA
DATA.math8_mocniny=[
    {q:'2³',a:'8',h:'Vypočítej:'},{q:'3²',a:'9',h:'Vypočítej:'},{q:'5²',a:'25',h:'Vypočítej:'},{q:'4³',a:'64',h:'Vypočítej:'},
    {q:'10³',a:'1000',h:'Vypočítej:'},{q:'2⁵',a:'32',h:'Vypočítej:'},{q:'6²',a:'36',h:'Vypočítej:'},{q:'7²',a:'49',h:'Vypočítej:'},
    {q:'2⁴',a:'16',h:'Vypočítej:'},{q:'3³',a:'27',h:'Vypočítej:'},{q:'8²',a:'64',h:'Vypočítej:'},{q:'9²',a:'81',h:'Vypočítej:'},
    {q:'10²',a:'100',h:'Vypočítej:'},{q:'11²',a:'121',h:'Vypočítej:'},{q:'12²',a:'144',h:'Vypočítej:'}
];
DATA.math8_odmocniny=[
    {q:'√4',a:'2',h:'Odmocni:'},{q:'√9',a:'3',h:'Odmocni:'},{q:'√16',a:'4',h:'Odmocni:'},{q:'√25',a:'5',h:'Odmocni:'},
    {q:'√36',a:'6',h:'Odmocni:'},{q:'√49',a:'7',h:'Odmocni:'},{q:'√64',a:'8',h:'Odmocni:'},{q:'√81',a:'9',h:'Odmocni:'},
    {q:'√100',a:'10',h:'Odmocni:'},{q:'√121',a:'11',h:'Odmocni:'},{q:'√144',a:'12',h:'Odmocni:'},{q:'√169',a:'13',h:'Odmocni:'},
    {q:'√196',a:'14',h:'Odmocni:'},{q:'√225',a:'15',h:'Odmocni:'},{q:'√1',a:'1',h:'Odmocni:'}
];
DATA.math8_pythagoras=[
    {q:'a=3, b=4, c=?',a:'5',h:'c² = a²+b²:'},{q:'a=5, b=12, c=?',a:'13',h:'c² = a²+b²:'},{q:'a=6, b=8, c=?',a:'10',h:'c² = a²+b²:'},
    {q:'a=8, b=15, c=?',a:'17',h:'c² = a²+b²:'},{q:'a=9, b=12, c=?',a:'15',h:'c² = a²+b²:'},{q:'c=5, a=3, b=?',a:'4',h:'b² = c²-a²:'},
    {q:'c=13, a=5, b=?',a:'12',h:'b² = c²-a²:'},{q:'c=10, b=8, a=?',a:'6',h:'a² = c²-b²:'},{q:'a=7, b=24, c=?',a:'25',h:'c² = a²+b²:'},
    {q:'3²+4² = ?',a:'25',h:'Vypočítej:'},{q:'5²+12² = ?',a:'169',h:'Vypočítej:'},{q:'a=10, b=24, c=?',a:'26',h:'c² = a²+b²:'},
    {q:'c=15, a=9, b=?',a:'12',h:'b² = c²-a²:'},{q:'a=20, b=21, c=?',a:'29',h:'c² = a²+b²:'},{q:'c=17, a=8, b=?',a:'15',h:'b² = c²-a²:'}
];
DATA.math8_rovnice2=[
    {q:'3x + 2 = 17, x=?',a:'5',h:'Vyřeš:'},{q:'5x - 10 = 20, x=?',a:'6',h:'Vyřeš:'},{q:'2(x+3) = 16, x=?',a:'5',h:'Vyřeš:'},
    {q:'4x + 8 = 28, x=?',a:'5',h:'Vyřeš:'},{q:'7x = 49, x=?',a:'7',h:'Vyřeš:'},{q:'x/5 + 2 = 6, x=?',a:'20',h:'Vyřeš:'},
    {q:'3(x-1) = 15, x=?',a:'6',h:'Vyřeš:'},{q:'2x - 7 = 13, x=?',a:'10',h:'Vyřeš:'},{q:'6x + 3 = 33, x=?',a:'5',h:'Vyřeš:'},
    {q:'x/2 - 3 = 7, x=?',a:'20',h:'Vyřeš:'},{q:'4(x+2) = 24, x=?',a:'4',h:'Vyřeš:'},{q:'5x + 5 = 30, x=?',a:'5',h:'Vyřeš:'},
    {q:'8x - 16 = 0, x=?',a:'2',h:'Vyřeš:'},{q:'10x = 150, x=?',a:'15',h:'Vyřeš:'},{q:'3x + 9 = 30, x=?',a:'7',h:'Vyřeš:'}
];
DATA.math8_procenta2=[
    {q:'Základ=200, p=15%, hodnota?',a:'30',h:'Vypočítej:'},{q:'Základ=500, p=12%, hodnota?',a:'60',h:'Vypočítej:'},
    {q:'Hodnota=24, základ=120, p=?%',a:'20',h:'Kolik %?'},{q:'Hodnota=45, základ=300, p=?%',a:'15',h:'Kolik %?'},
    {q:'p=25%, hodnota=50, základ?',a:'200',h:'Vypočítej základ:'},{q:'Sleva 20 % z 500 Kč, kolik zaplatíš?',a:'400',h:'Vypočítej (Kč):'},
    {q:'Zdražení o 10 % z 300 Kč',a:'330',h:'Nová cena (Kč):'},{q:'Sleva 30 % z 200 Kč',a:'140',h:'Zaplatíš (Kč):'},
    {q:'1 % z 4500',a:'45',h:'Vypočítej:'},{q:'5 % z 1200',a:'60',h:'Vypočítej:'},{q:'Zdražení o 25 % z 80 Kč',a:'100',h:'Nová cena (Kč):'},
    {q:'Sleva 50 % z 360 Kč',a:'180',h:'Zaplatíš (Kč):'},{q:'Základ=800, p=35%, hodnota?',a:'280',h:'Vypočítej:'},
    {q:'3 % z 2000',a:'60',h:'Vypočítej:'},{q:'Sleva 15 % z 1000 Kč',a:'850',h:'Zaplatíš (Kč):'}
];

// 9. TŘÍDA
DATA.math9_funkce=[
    {q:'f(x)=2x, f(3)=?',a:'6',h:'Dosaď:'},{q:'f(x)=x+5, f(4)=?',a:'9',h:'Dosaď:'},{q:'f(x)=3x-1, f(2)=?',a:'5',h:'Dosaď:'},
    {q:'f(x)=x², f(4)=?',a:'16',h:'Dosaď:'},{q:'f(x)=x²-1, f(3)=?',a:'8',h:'Dosaď:'},{q:'f(x)=-2x, f(5)=?',a:'-10',h:'Dosaď:'},
    {q:'f(x)=x+10, f(0)=?',a:'10',h:'Dosaď:'},{q:'f(x)=2x+3, f(1)=?',a:'5',h:'Dosaď:'},{q:'f(x)=x², f(5)=?',a:'25',h:'Dosaď:'},
    {q:'Přímá úměrnost: y=kx, k=3, x=7, y=?',a:'21',h:'Dosaď:'},{q:'Nepřímá úm.: k=24, x=6, y=?',a:'4',h:'y=k/x:'},
    {q:'f(x)=4x-3, f(0)=?',a:'-3',h:'Dosaď:'},{q:'f(x)=x/2, f(8)=?',a:'4',h:'Dosaď:'},
    {q:'f(x)=x²+1, f(2)=?',a:'5',h:'Dosaď:'},{q:'f(x)=5x, f(-2)=?',a:'-10',h:'Dosaď:'}
];
DATA.math9_soustavy=[
    {q:'x+y=10, x-y=4. x=?',a:'7',h:'Vyřeš soustavu:'},{q:'x+y=10, x-y=4. y=?',a:'3',h:'Vyřeš soustavu:'},
    {q:'2x+y=7, x=2. y=?',a:'3',h:'Dosaď:'},{q:'x+3y=13, y=3. x=?',a:'4',h:'Dosaď:'},
    {q:'x+y=8, x-y=2. x=?',a:'5',h:'Vyřeš:'},{q:'x+y=8, x-y=2. y=?',a:'3',h:'Vyřeš:'},
    {q:'2x+y=11, x=3. y=?',a:'5',h:'Dosaď:'},{q:'x+y=20, x-y=6. x=?',a:'13',h:'Vyřeš:'},
    {q:'x+y=20, x-y=6. y=?',a:'7',h:'Vyřeš:'},{q:'3x=15, x=?',a:'5',h:'Vyřeš:'},
    {q:'x+y=15, 2x+y=22. x=?',a:'7',h:'Vyřeš:'},{q:'x+y=15, 2x+y=22. y=?',a:'8',h:'Vyřeš:'},
    {q:'x+2y=12, x=4. y=?',a:'4',h:'Dosaď:'},{q:'x+y=100, x-y=20. x=?',a:'60',h:'Vyřeš:'},
    {q:'x+y=100, x-y=20. y=?',a:'40',h:'Vyřeš:'}
];
DATA.math9_kvadrat=[
    {q:'x²=25, x>0, x=?',a:'5',h:'Vyřeš:'},{q:'x²=49, x>0, x=?',a:'7',h:'Vyřeš:'},{q:'x²=100, x>0, x=?',a:'10',h:'Vyřeš:'},
    {q:'x²-9=0, x>0, x=?',a:'3',h:'Vyřeš:'},{q:'x²-16=0, x>0, x=?',a:'4',h:'Vyřeš:'},{q:'x²=144, x>0, x=?',a:'12',h:'Vyřeš:'},
    {q:'x²=64, x>0, x=?',a:'8',h:'Vyřeš:'},{q:'x²-1=0, x>0, x=?',a:'1',h:'Vyřeš:'},{q:'x²=36, x>0, x=?',a:'6',h:'Vyřeš:'},
    {q:'2x²=50, x>0, x=?',a:'5',h:'Vyřeš:'},{q:'x²=81, x>0, x=?',a:'9',h:'Vyřeš:'},{q:'x²-4=0, x>0, x=?',a:'2',h:'Vyřeš:'},
    {q:'x²=400, x>0, x=?',a:'20',h:'Vyřeš:'},{q:'3x²=75, x>0, x=?',a:'5',h:'Vyřeš:'},{q:'x²=121, x>0, x=?',a:'11',h:'Vyřeš:'}
];
DATA.math9_telesa=[
    {q:'Objem krychle a=3 cm (cm³)',a:'27',h:'V = a³:'},{q:'Objem krychle a=5 cm (cm³)',a:'125',h:'V = a³:'},
    {q:'Objem kvádru 2×3×4 cm (cm³)',a:'24',h:'V = a·b·c:'},{q:'Objem kvádru 5×5×3 cm (cm³)',a:'75',h:'V = a·b·c:'},
    {q:'Povrch krychle a=4 cm (cm²)',a:'96',h:'S = 6·a²:'},{q:'Povrch krychle a=2 cm (cm²)',a:'24',h:'S = 6·a²:'},
    {q:'Kolik stěn má krychle?',a:'6',h:'Odpověz:'},{q:'Kolik hran má krychle?',a:'12',h:'Odpověz:'},
    {q:'Kolik vrcholů má krychle?',a:'8',h:'Odpověz:'},{q:'Objem kvádru 10×5×2 cm (cm³)',a:'100',h:'V = a·b·c:'},
    {q:'Objem krychle a=10 cm (cm³)',a:'1000',h:'V = a³:'},{q:'Povrch krychle a=5 cm (cm²)',a:'150',h:'S = 6·a²:'},
    {q:'Objem kvádru 6×4×3 cm (cm³)',a:'72',h:'V = a·b·c:'},{q:'Kolik stěn má kvádr?',a:'6',h:'Odpověz:'},
    {q:'Objem krychle a=1 cm (cm³)',a:'1',h:'V = a³:'}
];
DATA.math9_statistika=[
    {q:'Průměr: 2,4,6,8,10',a:'6',h:'Průměr:'},{q:'Průměr: 5,5,5,5,5',a:'5',h:'Průměr:'},{q:'Průměr: 10,20,30',a:'20',h:'Průměr:'},
    {q:'Medián: 1,3,5,7,9',a:'5',h:'Medián:'},{q:'Medián: 2,5,8,12,15',a:'8',h:'Medián:'},{q:'Modus: 1,2,2,3,4',a:'2',h:'Modus (nejčastější):'},
    {q:'Modus: 5,5,3,7,5',a:'5',h:'Modus:'},{q:'Průměr: 3,7,5,9,6',a:'6',h:'Průměr:'},{q:'Rozpětí: 2,5,8,3,10',a:'8',h:'Max-Min:'},
    {q:'Průměr: 100,200',a:'150',h:'Průměr:'},{q:'Medián: 3,7,9',a:'7',h:'Medián:'},{q:'Rozpětí: 1,1,1,10',a:'9',h:'Max-Min:'},
    {q:'Průměr: 4,4,4,4',a:'4',h:'Průměr:'},{q:'Medián: 10,20,30,40,50',a:'30',h:'Medián:'},{q:'Průměr: 0,10,20',a:'10',h:'Průměr:'}
];
