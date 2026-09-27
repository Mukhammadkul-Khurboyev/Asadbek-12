export interface Property {
  id: string;
  title: string;
  category: 'uchastka' | 'dom' | 'villa';
  categoryLabel: string;
  priceUSD: number;
  location: {
    city: string;
    district: string;
    mahalla: string;
    address: string;
    landmark: string;
    metroDistance?: string;
  };
  specs: {
    sotix?: number; // for uchastka
    areaM2: number;
    rooms: number;
    bathrooms: number;
    floors: number;
    floorNumber?: number; // for apartments
    totalFloors?: number;
    parkingSpaces: number;
    ceilingHeight: string;
    yearBuilt: number;
  };
  features: string[];
  images: string[];
  mainImage: string;
  badge?: string;
  has3DTour: boolean;
  hasMortgage: boolean;
  installmentOption?: string;
  description: string;
  floorPlanRooms?: { name: string; size: string }[];
  agent: {
    name: string;
    role: string;
    phone: string;
    telegram: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    id: 'uchastka-mirzoulugbek-01',
    title: "Mirzo Ulug'bek · 8 Sotix Zamonaviy Neoklassik Hovli",
    category: 'uchastka',
    categoryLabel: 'Hashamatli Uchastka',
    priceUSD: 640000,
    location: {
      city: 'Toshkent',
      district: "Mirzo Ulug'bek",
      mahalla: 'Oltintepa mahallasi',
      address: 'Oltintepa 3-tor ko\'chasi, 24-uy',
      landmark: 'Buyuk Ipak Yo\'li metrosi yaqinida (1.2 km)',
      metroDistance: '5 daqiqa piyoda',
    },
    specs: {
      sotix: 8.2,
      areaM2: 580,
      rooms: 7,
      bathrooms: 5,
      floors: 3,
      parkingSpaces: 4,
      ceilingHeight: '3.8 metr',
      yearBuilt: 2025,
    },
    features: [
      '10x4m isitiladigan qishki va yozgi basseyn',
      'Yozgi oshxona, tandir va barbekyu zonasi',
      'Turk hamomi va fin saunasi',
      'Aqlli uy (Smart Home) to\'liq avtomatizatsiyasi',
      'Nemis Rehau 3 qavatli energetik derazalari',
      '100% Davlat Kadastr hujjatlari tayyor',
      'Qo\'riqlash va 16 ta 4K tungi kamera',
      'Zaxira generator (30 kVA) va 2 tonnalik suv zaxirasi'
    ],
    mainImage: '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg',
    images: [
      '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg',
      '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
      '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg',
      '/src/assets/images/interior_penthouse_living_1790354800827.jpg'
    ],
    badge: 'Saralangan VIP',
    has3DTour: true,
    hasMortgage: true,
    installmentOption: "Egasidan 12 oylik to'lov rejasi mavjud",
    description: "Toshkentning eng nufuzli Mirzo Ulug'bek tumanida joylashgan premium darajadagi 8 sotixlik shaxsiy rezidensiya. Bino pishiq g'ishtdan qurilgan bo'lib, fasadi tabiiy travertin va granit toshlar bilan bezatilgan. Hovlida mevali va manzarali daraxtlar, landshaft dizayni, avtomatik purkagichlar va dam olish gazebosi joylashgan. Yashash maydoni 580 m², har bir yotoqxona o'z garderob va sanuzeliga ega.",
    floorPlanRooms: [
      { name: 'Katta mehmonxona zali', size: '78 m²' },
      { name: 'Oshxona va oshxona-oroli', size: '36 m²' },
      { name: 'Master yotoqxona + vanna', size: '44 m²' },
      { name: 'Mehmonlar yotoqxonasi (3 ta)', size: '82 m²' },
      { name: 'SPA zona, sauna va basseyn', size: '95 m²' },
      { name: 'Yopiq avtoturargoh', size: '60 m²' }
    ],
    agent: {
      name: "Jasur Rahimov",
      role: "Bosh Ko'chmas Mulk Eksperti",
      phone: "+998 90 980-00-11",
      telegram: "@jasur_saroyrealty"
    }
  },
  {
    id: 'uchastka-yunusobod-02',
    title: 'Yunusobod · 6 Sotix Mualliflik Yevro-Hovlisi',
    category: 'uchastka',
    categoryLabel: 'Zamonaviy Hovli',
    priceUSD: 410000,
    location: {
      city: 'Toshkent',
      district: 'Yunusobod',
      mahalla: 'Hasanboy / 19-mavze atrofi',
      address: 'Nurafshon shoh ko\'chasi tarmoq',
      landmark: 'Shahriston metrosiga 7 daqiqa',
      metroDistance: '7 daqiqa',
    },
    specs: {
      sotix: 6.0,
      areaM2: 420,
      rooms: 6,
      bathrooms: 4,
      floors: 2,
      parkingSpaces: 3,
      ceilingHeight: '3.6 metr',
      yearBuilt: 2024,
    },
    features: [
      'Yopiq va ochiq landshaftli hovli',
      'Fransuz kaminli keng mehmonxona zali',
      'Yozgi ayvon va favvora',
      'Gaz, elektr (3 faza) va markaziy kanalizatsiya',
      'Italiya kafel va sanitar texnikasi',
      'Bolalar maydonchasi va yashil zona'
    ],
    mainImage: '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
    images: [
      '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
      '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg',
      '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg'
    ],
    badge: 'Yangi Savdo',
    has3DTour: true,
    hasMortgage: true,
    description: "Yunusobod tumanidagi sokin va xavfsiz elit mahallada yangi qurilgan zamonaviy uchastka. Oila uchun barcha sharoitlar muhayyo: keng xonalar, tabiiy yorug'lik, yozgi oshxona, qishki bog' va avtomatik darvozalar.",
    floorPlanRooms: [
      { name: 'Birinchi qavat mehmonxona', size: '58 m²' },
      { name: 'Oshxona-oshxona', size: '28 m²' },
      { name: 'Ikkinchi qavat 4 ta yotoqxona', size: '120 m²' },
      { name: 'Hovli ayvoni va terassa', size: '45 m²' }
    ],
    agent: {
      name: "Dilshod Karimov",
      role: "Uchastkalar Bo'limi Boshlig'i",
      phone: "+998 97 740-44-22",
      telegram: "@dilshod_realty"
    }
  },
  {
    id: 'dom-tashkentcity-03',
    title: 'Tashkent City · 4-Xonali Panoramik Penthaus',
    category: 'dom',
    categoryLabel: "Ko'p Qavatli Zamonaviy Dom",
    priceUSD: 365000,
    location: {
      city: 'Toshkent',
      district: 'Shayxontohur',
      mahalla: 'Tashkent City',
      address: 'Boulevard majmuasi, 7-blok',
      landmark: 'Hilton mehmonxonasi va Park ro\'parasida',
      metroDistance: '2 daqiqa (Paxtakor/Xalqlar Do\'stligi)',
    },
    specs: {
      areaM2: 195,
      rooms: 4,
      bathrooms: 3,
      floors: 1,
      floorNumber: 18,
      totalFloors: 22,
      parkingSpaces: 2,
      ceilingHeight: '3.6 metr',
      yearBuilt: 2025,
    },
    features: [
      'Tashkent City parkiga 180° panoramik manzara',
      'Mualliflik dizaynerlik ta\'miri va to\'liq mebel',
      'Yopiq konsyerj xizmati 24/7',
      'Yer osti 2 ta mashina uchun ajratilgan parking',
      'Miele va Bosch maishiy texnikalari',
      'Fitnes zal va rezidentlar uchun shaxsiy hovli'
    ],
    mainImage: '/src/assets/images/interior_penthouse_living_1790354800827.jpg',
    images: [
      '/src/assets/images/interior_penthouse_living_1790354800827.jpg',
      '/src/assets/images/domlar_novostroyka_tower_1790354787711.jpg',
      '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg'
    ],
    badge: 'Tashkent City',
    has3DTour: true,
    hasMortgage: true,
    installmentOption: "Developer tomonidan 24 oy foizsiz bo'lib to'lash",
    description: "Toshkentning yuragi — Tashkent City hududidagi eng nufuzli minorada joylashgan panoramik penthaus. Katta vitraj derazalar orqali shahar favvoralari va park maydoni to'liq ko'rinadi. Italiya marmari, tosh stol ustilari, akustik izolyatsiya va shaxsiy lift kartasi.",
    floorPlanRooms: [
      { name: 'Panoramik Living Room', size: '64 m²' },
      { name: 'Oshxona va ovqatlanish zali', size: '26 m²' },
      { name: 'Master Bedroom + Walk-in Closet', size: '38 m²' },
      { name: 'Bolalar xonasi', size: '24 m²' },
      { name: 'Mehmonxona / Kabinet', size: '22 m²' }
    ],
    agent: {
      name: "Shahnoza Alimova",
      role: "Premium Kvartiralar Bo'yicha Maslahatchi",
      phone: "+998 93 510-15-50",
      telegram: "@shahnoza_saroy"
    }
  },
  {
    id: 'dom-mirzo-novostroyka-04',
    title: "Mirzo Ulug'bek · 'Skyline Residence' 3-Xonali Yangi Uy",
    category: 'dom',
    categoryLabel: "Novostroyka Kvartira",
    priceUSD: 175000,
    location: {
      city: 'Toshkent',
      district: "Mirzo Ulug'bek",
      mahalla: 'Buyuk Ipak Yo\'li',
      address: 'Mustaqillik shoh ko\'chasi',
      landmark: 'Gorkiy maydoni va Ecopark yaqinida',
      metroDistance: '4 daqiqa',
    },
    specs: {
      areaM2: 125,
      rooms: 3,
      bathrooms: 2,
      floors: 1,
      floorNumber: 9,
      totalFloors: 16,
      parkingSpaces: 1,
      ceilingHeight: '3.4 metr',
      yearBuilt: 2025,
    },
    features: [
      'Keng ochiq shahar balkon-terrassasi',
      'Yevropa liftlari (KONE, Finlyandiya)',
      'Markaziy isitish va avtonom qozonxona',
      'Avtomobilsiz xavfsiz yashil hovli',
      'Ipotekaga beriladi (Davlat va tijorat banklari)',
      'Maktab, bog\'cha va supermarketlar piyoda 2 daqiqa'
    ],
    mainImage: '/src/assets/images/domlar_novostroyka_tower_1790354787711.jpg',
    images: [
      '/src/assets/images/domlar_novostroyka_tower_1790354787711.jpg',
      '/src/assets/images/interior_penthouse_living_1790354800827.jpg',
      '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg'
    ],
    badge: 'Ipotekaga Mos',
    has3DTour: true,
    hasMortgage: true,
    installmentOption: "Boshlang'ich to'lov 25%, qolgani 36 oy",
    description: "Mirzo Ulug'bek tumanining gavjum va ekologik toza hududida joylashgan zamonaviy 'Skyline Residence' majmuasi. Yuqori qavatdagi ushbu xonadon keng rejalashtirishga, baland shiftlarga va sokin muhitga ega.",
    floorPlanRooms: [
      { name: 'Katta oshxona-zal', size: '42 m²' },
      { name: 'Asosiy yotoqxona', size: '24 m²' },
      { name: 'Bolalar xonasi', size: '20 m²' },
      { name: 'Balkon-terassa', size: '12 m²' }
    ],
    agent: {
      name: "Jasur Rahimov",
      role: "Bosh Ko'chmas Mulk Eksperti",
      phone: "+998 90 980-00-11",
      telegram: "@jasur_saroyrealty"
    }
  },
  {
    id: 'uchastka-qibray-05',
    title: 'Qibray / Oltintepa Yo\'li · 12 Sotix Grand Rezidensiya',
    category: 'villa',
    categoryLabel: 'Grand Villa & Uchastka',
    priceUSD: 890000,
    location: {
      city: 'Toshkent viloyati / Qibray',
      district: 'Qibray',
      mahalla: 'Salar nufuzli sohili',
      address: 'Salar daryo bo\'yi elit maskani',
      landmark: 'Botanika bog\'iga 10 daqiqa',
      metroDistance: '15 daqiqa avtomobilda',
    },
    specs: {
      sotix: 12.0,
      areaM2: 750,
      rooms: 9,
      bathrooms: 7,
      floors: 3,
      parkingSpaces: 6,
      ceilingHeight: '4.0 metr',
      yearBuilt: 2025,
    },
    features: [
      '12 sotix shaxsiy botanika bog\'i va sharshara',
      'Yopiq va ochiq 2 ta isitiladigan basseyn',
      'Shaxsiy kinoteatr va bilyard xonasi',
      'Tennis va basketbol uchun mini-kort',
      'Qorovulxona va xizmatchilar uchun alohida uy',
      'Mustaqil quyosh panellari (20 kVt)',
      '100% tayyor to\'liq yashash uchun'
    ],
    mainImage: '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg',
    images: [
      '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg',
      '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg',
      '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
      '/src/assets/images/interior_penthouse_living_1790354800827.jpg'
    ],
    badge: 'Eksklyuziv Mulk',
    has3DTour: true,
    hasMortgage: false,
    description: "Toshkent shahridan 10 daqiqalik masofada joylashgan haqiqiy shohona saroy. Toza havo, daryo bo'yi sokinligi va zamonaviy arxitektura uyg'unligi. 12 sotix yer maydonida 750 m² lik 3 qavatli imorat qad rostlagan.",
    floorPlanRooms: [
      { name: 'Katta qabul zali', size: '110 m²' },
      { name: 'Italiya kaminli kutubxona', size: '40 m²' },
      { name: 'Master yotoqxona suiti (2 ta)', size: '120 m²' },
      { name: 'Yer osti kinoteatri va bilyard', size: '90 m²' },
      { name: 'Ichki qishki basseyn va sauna', size: '85 m²' }
    ],
    agent: {
      name: "Dilshod Karimov",
      role: "Uchastkalar Bo'limi Boshlig'i",
      phone: "+998 97 740-44-22",
      telegram: "@dilshod_realty"
    }
  },
  {
    id: 'uchastka-chilonzor-06',
    title: 'Chilonzor / Dombrabod · 5 Sotix Yevro-Uchastka',
    category: 'uchastka',
    categoryLabel: 'Zamonaviy Uchastka',
    priceUSD: 330000,
    location: {
      city: 'Toshkent',
      district: 'Chilonzor',
      mahalla: 'Dombrabod mahallasi',
      address: 'Dombrabod 4-tor ko\'cha',
      landmark: 'Chilonzor metrosiga 5 daqiqa',
      metroDistance: '5 daqiqa',
    },
    specs: {
      sotix: 5.0,
      areaM2: 360,
      rooms: 5,
      bathrooms: 4,
      floors: 2,
      parkingSpaces: 2,
      ceilingHeight: '3.5 metr',
      yearBuilt: 2024,
    },
    features: [
      'G\'ishtli mustahkam bino, poydevori seysmik mustahkam',
      'Yozgi oshxona va mangal zonasi',
      'Avtomatlashtirilgan garaj darvozasi',
      'Barcha qavatlarda issiq pol tizimi',
      'Sokin, keng ko\'cha, do\'stona qo\'shnilar'
    ],
    mainImage: '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
    images: [
      '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
      '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg',
      '/src/assets/images/interior_penthouse_living_1790354800827.jpg'
    ],
    badge: 'Qulay Narx',
    has3DTour: true,
    hasMortgage: true,
    description: "Chilonzor tumanining eng talabgir Dombrabod mahallasida yangi 2 qavatli ixcham va juda shinam hovli. Maydoni 5 sotix, 360 m² yashash hududi, 5 ta keng yorug' xona va shinam ichki hovli.",
    floorPlanRooms: [
      { name: 'Keng zal', size: '50 m²' },
      { name: 'Oshxona', size: '24 m²' },
      { name: 'Yotoqxonalar (4 ta)', size: '100 m²' },
      { name: 'Qishki ayvon', size: '30 m²' }
    ],
    agent: {
      name: "Jasur Rahimov",
      role: "Bosh Ko'chmas Mulk Eksperti",
      phone: "+998 90 980-00-11",
      telegram: "@jasur_saroyrealty"
    }
  }
];

export const DISTRICTS = [
  'Barcha tumanlar',
  "Mirzo Ulug'bek",
  'Yunusobod',
  'Shayxontohur',
  'Chilonzor',
  'Yakkasaroy',
  'Yashnobod',
  'Qibray',
  'Bo\'stonliq / Chorvoq'
];

export const TOUR_VIEWPOINTS = [
  {
    id: 'facade',
    name: 'Bosh Fasad & Basseyn',
    time: 'Oltin Soat (Dusk)',
    description: 'Zamonaviy fasad, 10x4m isitiladigan basseyn va zangori landshaft yoritgichlari',
    image: '/src/assets/images/hero_cinematic_mansion_1790354752721.jpg',
    hotspots: [
      { id: 'h1', x: 48, y: 72, title: 'Isitiladigan Infinity Basseyn', desc: 'Avtomatik suv tozalash, xrom terapiyali LED yoritish va doimiy 28°C harorat' },
      { id: 'h2', x: 38, y: 40, title: 'Panoramik Shisha Fasad', desc: 'Germaniya Reynaers alyuminiy profillari va 3 qavatli energetik oyna' },
      { id: 'h3', x: 78, y: 55, title: 'Landshaft Yoritish Tizimi', desc: 'Italiya dizaynidagi avtomatlashtirilgan tungi arxitektura projektorlari' }
    ]
  },
  {
    id: 'courtyard',
    name: 'Ichki Hovli & Yozgi Ayvon',
    time: 'Kunduzgi Tabiiy Yorug\'lik',
    description: 'Qulay dam olish ayvoni, marmar favvora, yapon maysazori va yozgi oshxona',
    image: '/src/assets/images/uchastka_modern_courtyard_1790354770585.jpg',
    hotspots: [
      { id: 'h4', x: 50, y: 65, title: 'Marmar Favvora va Hovuz', desc: 'Sokin suv shildirashi va tabiiy mikroklimat yaratuvchi kompozitsiya' },
      { id: 'h5', x: 22, y: 50, title: 'Yozgi Milliy Oshxona', desc: 'Tandir, o\'choq, qozonxona va professional barbekyu panjarasi' },
      { id: 'h6', x: 75, y: 40, title: 'Travertin Tosh Qoplamasi', desc: 'Tabiiy Eron travertini, namlik va sovuqqa 100% bardoshli' }
    ]
  },
  {
    id: 'night',
    name: '3D Tungi Masterplan Ko\'rinish',
    time: 'Tungi 4K Yoritish',
    description: 'Tungi arxitektura, avtomobillar kiring-chiqish yo\'li va xavfsizlik perimetri',
    image: '/src/assets/images/cinematic_3d_estate_night_1790354817023.jpg',
    hotspots: [
      { id: 'h7', x: 55, y: 35, title: '4K Tungi Xavfsizlik Kameralari', desc: 'Hikvision AI sun\'iy intellektli harakat datchiklari va to\'liq perimetr' },
      { id: 'h8', x: 30, y: 75, title: 'Keng Kirish Darvozasi', desc: 'Italiya Came avtomatik motori va smartfon orqali boshqaruv' }
    ]
  },
  {
    id: 'interior',
    name: 'Zal & Penthaus Zali',
    time: 'Panoramik Shahar Ko\'rinishi',
    description: 'Ikki qavat balandligidagi shift, tabiiy marmar kamin va keng shahar ko\'rinishi',
    image: '/src/assets/images/interior_penthouse_living_1790354800827.jpg',
    hotspots: [
      { id: 'h9', x: 52, y: 58, title: 'Tabiiy Calacatta Marmar', desc: 'Italiyadan keltirilgan yaxlit plitalar va yashirin ambient yoritish' },
      { id: 'h10', x: 25, y: 45, title: 'Akustik Devor Panellari', desc: 'Bang & Olufsen audio tizimiga moslashtirilgan ovoz izolyatsiyasi' }
    ]
  },
  {
    id: 'tower',
    name: 'Turar-Joy Majmuasi (Domlar)',
    time: 'Oltin Soat Shom Payti',
    description: 'Ko\'p qavatli premium minoralar, bolalar maydonchasi va savdo xiyoboni',
    image: '/src/assets/images/domlar_novostroyka_tower_1790354787711.jpg',
    hotspots: [
      { id: 'h11', x: 45, y: 30, title: 'Tezyurar KONE Liftlari', desc: '2 m/s tezlikda ishlovchi shovqinsiz finlyandiya liftlari' },
      { id: 'h12', x: 60, y: 80, title: 'Xususiy Sayr Bog\'i', desc: 'Faqatgina rezidentlar uchun ruxsat berilgan 1 gektarlik ekopark' }
    ]
  }
];

export const DISTRICT_MAP_HIGHLIGHTS = [
  {
    name: "Mirzo Ulug'bek",
    description: 'Diplomatik va eng yashil tuman, Oltintepa, Qorasuv va Yalang\'och hududlari',
    avgUchastkaPrice: '$45,000 / sotix',
    avgDomPrice: '$1,650 / m²',
    popularFor: 'Katta uchastkalar, sokin muhit, xalqaro maktablar',
    propertiesCount: 14,
    coords: '41.332, 69.324'
  },
  {
    name: 'Yunusobod',
    description: 'Rivojlangan infratuzilma, metro liniyalari va yangi zamonaviy hovli qishloqlari',
    avgUchastkaPrice: '$38,000 / sotix',
    avgDomPrice: '$1,400 / m²',
    popularFor: 'Oila uchun qulay hovlilar, metro yaqinligi',
    propertiesCount: 19,
    coords: '41.365, 69.288'
  },
  {
    name: 'Shayxontohur (Tashkent City)',
    description: 'Toshkentning eng nufuzli biznes markazi, hashamatli osmono\'par binolar',
    avgUchastkaPrice: '$60,000 / sotix',
    avgDomPrice: '$2,400 / m²',
    popularFor: 'Panoramik penthauslar, biznes sinf xonadonlar',
    propertiesCount: 8,
    coords: '41.316, 69.245'
  },
  {
    name: 'Qibray / Bo\'stonliq (Dam olish & Villalar)',
    description: 'Tog\' havosi, toza daryo sohillari va dacha-villalar maskani',
    avgUchastkaPrice: '$22,000 / sotix',
    avgDomPrice: '$1,100 / m²',
    popularFor: 'Keng maydonli dachalar, 10-20 sotixli saroylar',
    propertiesCount: 11,
    coords: '41.410, 69.450'
  }
];
