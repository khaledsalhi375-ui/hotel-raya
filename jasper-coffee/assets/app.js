/* Jasper Café — demo site behaviour
   - EN/AR translations (static text via [data-i18n], menu rendered from data)
   - Open-now status in Asia/Qatar time
   - Accessible menu tabs, mobile nav, pre-order form validation, scroll reveals */

(function () {
  "use strict";

  // TODO: replace every placeholder below with the café's real details.
  var BRANCHES = [
    { id: "moq", open: 7, close: 24 },   // Mall of Qatar — 7 AM to 12 AM [verify]
    { id: "pearl", open: 8, close: 24 }  // The Pearl, UDC – The Oyster — 8 AM to 12 AM [verify]
  ];

  var IMG = function (id, w) {
    return "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + (w || 640) + "&q=70";
  };

  // TODO: prices are indicative placeholders (QAR). Photos are Unsplash stand-ins.
  var MENU = {
    signatures: [
      { key: "dream", price: 32, img: "1461023058943-07fcbe16d735", tag: true },
      { key: "icedLatte", price: 24, img: "1517701604599-bb29b565090c" },
      { key: "matcha", price: 26, img: "1515823064-d6e0c04616a7" },
      { key: "karkade", price: 18, img: "1556679343-c7306c1976bc" }
    ],
    coffee: [
      { key: "espresso", price: 14, img: "1510591509098-f4fdc6d0ff04" },
      { key: "americano", price: 16, img: "1551030173-122aabc4489c" },
      { key: "flatWhite", price: 22, img: "1577968897966-3d4325b36b61" },
      { key: "cappuccino", price: 22, img: "1572442388796-11668a67e53d" },
      { key: "spanish", price: 25, img: "1541167760496-1628856ab772" },
      { key: "v60", price: 28, img: "1495474472287-4d71bcdd2085" }
    ],
    breakfast: [
      { key: "benedict", price: 48, img: "1525351484163-7529414344d8", tag: true },
      { key: "feta", price: 38, img: "1528735602780-2552fd46c7af" },
      { key: "frenchToast", price: 42, img: "1484723091739-30a097e8f929" }
    ],
    sweets: [
      { key: "tiramisu", price: 34, img: "1571877227200-a0d98ea607e9" },
      { key: "banoffee", price: 36, img: "1488477181946-6428a0291777" },
      { key: "shortcake", price: 34, img: "1565958011703-44f9829ba187" },
      { key: "dulce", price: 32, img: "1551024601-bec78aea704b" }
    ]
  };

  var T = {
    en: {
      "meta.title": "Jasper Café — Specialty Coffee in Doha | Mall of Qatar & The Pearl",
      "meta.desc": "Specialty coffee, fresh bakes and light bites at Jasper Café, Mall of Qatar and The Pearl (UDC – The Oyster), Doha.",
      skip: "Skip to main content",
      "nav.label": "Main",
      "nav.menu": "Menu",
      "nav.branches": "Branches",
      "nav.about": "About",
      "nav.order": "Order",
      "nav.toggle": "Open menu",
      "nav.toggleClose": "Close menu",
      "lang.switch": "Switch to Arabic",
      "cta.order": "Order now",
      "hero.eyebrow": "Specialty coffee · Doha",
      "hero.title": "Fresh bakes, specialty coffee & a view that speaks for itself.",
      "hero.lede": "Two homes in Doha: Mall of Qatar and the waterfront at The Pearl. Come for the Jasper Dream, stay for the skyline.",
      "hero.cta1": "View menu",
      "hero.cta2": "Find us",
      "status.openUntil": "Open now · {branch} until {time}",
      "status.closedOpens": "Closed now · Opens {time} at {branch}",
      "status.open": "Open now · until {time}",
      "status.closed": "Closed · opens {time}",
      "sig.eyebrow": "Only at Jasper",
      "sig.title": "Meet the Jasper Dream",
      "sig.quote": "“A magical concoction that will transport your senses — a unique and unforgettable coffee experience, crafted exclusively at Jasper.”",
      "sig.badge": "Signature",
      "sig.alsoTitle": "Also loved",
      "sig.cta": "See the full menu",
      "menu.eyebrow": "Our menu",
      "menu.title": "Crafted in-house, all day",
      "menu.lede": "Specialty coffee, bright signatures, breakfast plates and a counter full of bakes. Halal certified.",
      "menu.tabs": "Menu categories",
      "menu.signatures": "Signatures",
      "menu.coffee": "Coffee",
      "menu.breakfast": "Breakfast",
      "menu.sweets": "Sweets",
      "menu.note": "Prices are indicative and shown in Qatari riyals. Ask our baristas about today’s seasonal specials.",
      "menu.popular": "Guest favourite",
      currency: "QAR {n}",
      "br.eyebrow": "Visit us",
      "br.title": "Two branches, one Jasper",
      "br.lede": "Open every day from morning until midnight.",
      "br.moq.name": "Mall of Qatar",
      "br.moq.address": "Mall of Qatar, Al Rayyan, Doha",
      "br.moq.hours": "Daily · 7:00 AM – 12:00 AM",
      "br.moq.chip1": "Inside the mall",
      "br.moq.chip2": "Family friendly",
      "br.moq.alt": "Bright café counter with pastries and coffee cups",
      "br.pearl.name": "The Pearl · UDC – The Oyster",
      "br.pearl.address": "The Oyster, UDC, The Pearl-Qatar, Doha",
      "br.pearl.hours": "Daily · 8:00 AM – 12:00 AM",
      "br.pearl.chip1": "Waterfront views",
      "br.pearl.chip2": "Skyline terrace",
      "br.pearl.chip3": "Valet parking",
      "br.pearl.alt": "Café terrace by the water at golden hour",
      "br.directions": "Get directions",
      "br.call": "Call",
      "br.addressLabel": "Address",
      "br.hoursLabel": "Opening hours",
      "about.eyebrow": "Our story",
      "about.title": "A modern café with a warm heart",
      "about.p1": "Jasper started with a simple idea: coffee worth crossing the city for, served somewhere you want to stay. Every signature is developed in-house, every bake comes out of the oven daily, and every cup is made with care.",
      "about.p2": "From early-morning flat whites at Mall of Qatar to sunset iced lattes on the water at The Pearl, Jasper is where Doha slows down.",
      "about.cat": "Keep an eye out for our resident cat. She has strong opinions about which table has the best view.",
      "about.alt1": "Barista pouring latte art",
      "about.alt2": "Freshly baked pastries on a counter",
      "rev.eyebrow": "Guests say",
      "rev.title": "Loved across Doha",
      "rev.1": "“The iced latte is honestly one of the best I’ve had in Doha, and the Rusk Benedict is a must.”",
      "rev.1by": "Sara M. · The Pearl",
      "rev.2": "“Beautiful view of the skyline, perfect coffee and the atmosphere is just different. Our new weekend spot.”",
      "rev.2by": "Ahmed K. · The Pearl",
      "rev.3": "“Jasper Dream lives up to the name. Great place to meet friends after shopping at Mall of Qatar.”",
      "rev.3by": "Noor A. · Mall of Qatar",
      "rev.sample": "Sample reviews for demo purposes.",
      "rev.stars": "Rated 5 out of 5",
      "ig.title": "@jasper.doha",
      "ig.follow": "Follow on Instagram",
      "ig.alt": "Jasper Café Instagram photo",
      "order.eyebrow": "Order & celebrate",
      "order.title": "Jasper, wherever you are",
      "order.lede": "Get your favourites delivered, or pre-order a whole cake for your next celebration.",
      "order.deliveryTitle": "Delivered to your door",
      "order.deliveryText": "Order Jasper favourites through Talabat or Snoonu anywhere in Doha.",
      "form.title": "Pre-order a cake",
      "form.intro": "Tell us what you’re celebrating and we’ll confirm by phone within a day.",
      "form.required": "Required",
      "form.name": "Full name",
      "form.phone": "Phone number",
      "form.phoneHint": "Qatar mobile, e.g. +974 5555 1234",
      "form.date": "Pickup date",
      "form.dateHint": "Please order at least 2 days ahead.",
      "form.branch": "Pickup branch",
      "form.cake": "Cake",
      "form.cakeChoose": "Choose a cake",
      "form.cake1": "Strawberry Shortcake",
      "form.cake2": "Tiramisu",
      "form.cake3": "Banoffee",
      "form.cake4": "Dulce de Leche",
      "form.notes": "Message on the cake / notes",
      "form.notesHint": "Optional",
      "form.submit": "Send pre-order request",
      "form.sending": "Sending…",
      "form.success": "Thank you! Your request was received (demo only, nothing was sent). We’ll call you to confirm.",
      "err.name": "Please enter your name.",
      "err.phone": "Enter a valid Qatar phone number, e.g. +974 5555 1234.",
      "err.date": "Choose a date at least 2 days from today.",
      "err.cake": "Please choose a cake.",
      "footer.tagline": "Specialty coffee, fresh bakes and light bites in Doha.",
      "footer.visit": "Visit",
      "footer.explore": "Explore",
      "footer.follow": "Follow",
      "footer.rights": "© {y} Jasper Café. All rights reserved.",
      "footer.demo": "Demo website — content subject to confirmation.",
      "items.dream.name": "Jasper Dream",
      "items.dream.desc": "Our secret signature. Layered, creamy and crafted exclusively at Jasper.",
      "items.icedLatte.name": "Iced Latte",
      "items.icedLatte.desc": "Double shot of specialty espresso over cold milk and ice.",
      "items.matcha.name": "Matcha Latte",
      "items.matcha.desc": "Ceremonial-grade matcha whisked with your choice of milk.",
      "items.karkade.name": "Karkade",
      "items.karkade.desc": "Chilled hibiscus infusion, bright and refreshing.",
      "items.espresso.name": "Espresso",
      "items.espresso.desc": "Single-origin, pulled short and sweet.",
      "items.americano.name": "Americano",
      "items.americano.desc": "Espresso lengthened with hot water. Hot or iced.",
      "items.flatWhite.name": "Flat White",
      "items.flatWhite.desc": "Velvety microfoam over a double ristretto.",
      "items.cappuccino.name": "Cappuccino",
      "items.cappuccino.desc": "Classic balance of espresso, milk and foam.",
      "items.spanish.name": "Spanish Latte",
      "items.spanish.desc": "Espresso with condensed milk for a smooth, sweet finish.",
      "items.v60.name": "V60 Pour-over",
      "items.v60.desc": "Hand-brewed filter coffee. Ask about today’s beans.",
      "items.benedict.name": "Rusk Benedict",
      "items.benedict.desc": "Poached eggs and hollandaise on toasted rusk, with hash browns.",
      "items.feta.name": "Feta Cheese Sandwich",
      "items.feta.desc": "Creamy feta, tomato, cucumber and herbs on fresh bread.",
      "items.frenchToast.name": "French Toast Bread",
      "items.frenchToast.desc": "Thick-cut brioche, caramelised and served with berries.",
      "items.tiramisu.name": "Tiramisu Loaf",
      "items.tiramisu.desc": "Espresso-soaked sponge and mascarpone in a sliceable loaf.",
      "items.banoffee.name": "Banoffee Montage",
      "items.banoffee.desc": "Banana, toffee and cream layered on a biscuit base.",
      "items.shortcake.name": "Strawberry Shortcake",
      "items.shortcake.desc": "Light sponge, fresh strawberries and whipped cream.",
      "items.dulce.name": "Dulce de Leche Cake",
      "items.dulce.desc": "Soft layers with slow-cooked caramel cream."
    },
    ar: {
      "meta.title": "جاسبر كافيه — قهوة مختصة في الدوحة | مول قطر واللؤلؤة",
      "meta.desc": "قهوة مختصة ومخبوزات طازجة ووجبات خفيفة في جاسبر كافيه، مول قطر واللؤلؤة (UDC – الأويستر)، الدوحة.",
      skip: "انتقل إلى المحتوى الرئيسي",
      "nav.label": "القائمة الرئيسية",
      "nav.menu": "المنيو",
      "nav.branches": "الفروع",
      "nav.about": "من نحن",
      "nav.order": "اطلب",
      "nav.toggle": "افتح القائمة",
      "nav.toggleClose": "أغلق القائمة",
      "lang.switch": "التبديل إلى الإنجليزية",
      "cta.order": "اطلب الآن",
      "hero.eyebrow": "قهوة مختصة · الدوحة",
      "hero.title": "مخبوزات طازجة، قهوة مختصة، وإطلالة تتحدث عن نفسها.",
      "hero.lede": "فرعان في الدوحة: مول قطر والواجهة البحرية في اللؤلؤة. تعال من أجل جاسبر دريم، وابقَ من أجل الإطلالة.",
      "hero.cta1": "تصفّح المنيو",
      "hero.cta2": "موقعنا",
      "status.openUntil": "مفتوح الآن · {branch} حتى {time}",
      "status.closedOpens": "مغلق الآن · يفتح {time} في {branch}",
      "status.open": "مفتوح الآن · حتى {time}",
      "status.closed": "مغلق · يفتح {time}",
      "sig.eyebrow": "حصرياً في جاسبر",
      "sig.title": "تعرّف على جاسبر دريم",
      "sig.quote": "«مزيج ساحر سيأخذ حواسك في رحلة — تجربة قهوة فريدة لا تُنسى، مُحضّرة حصرياً في جاسبر.»",
      "sig.badge": "مشروبنا المميز",
      "sig.alsoTitle": "مفضّلات أخرى",
      "sig.cta": "شاهد المنيو كاملاً",
      "menu.eyebrow": "المنيو",
      "menu.title": "يُحضّر لدينا، طوال اليوم",
      "menu.lede": "قهوة مختصة، مشروبات مميزة، أطباق فطور، ومخبوزات طازجة. حلال معتمد.",
      "menu.tabs": "أقسام المنيو",
      "menu.signatures": "المميزة",
      "menu.coffee": "القهوة",
      "menu.breakfast": "الفطور",
      "menu.sweets": "الحلويات",
      "menu.note": "الأسعار تقريبية بالريال القطري. اسأل الباريستا عن عروض اليوم الموسمية.",
      "menu.popular": "المفضّل لدى الضيوف",
      currency: "{n} ر.ق",
      "br.eyebrow": "زورونا",
      "br.title": "فرعان، وجاسبر واحد",
      "br.lede": "مفتوح يومياً من الصباح حتى منتصف الليل.",
      "br.moq.name": "مول قطر",
      "br.moq.address": "مول قطر، الريان، الدوحة",
      "br.moq.hours": "يومياً · 7:00 ص – 12:00 منتصف الليل",
      "br.moq.chip1": "داخل المول",
      "br.moq.chip2": "مناسب للعائلات",
      "br.moq.alt": "كاونتر مقهى مشرق مع مخبوزات وأكواب قهوة",
      "br.pearl.name": "اللؤلؤة · UDC – الأويستر",
      "br.pearl.address": "الأويستر، UDC، اللؤلؤة-قطر، الدوحة",
      "br.pearl.hours": "يومياً · 8:00 ص – 12:00 منتصف الليل",
      "br.pearl.chip1": "إطلالة بحرية",
      "br.pearl.chip2": "تراس على الأفق",
      "br.pearl.chip3": "خدمة صف السيارات",
      "br.pearl.alt": "تراس مقهى بجانب البحر وقت الغروب",
      "br.directions": "الاتجاهات",
      "br.call": "اتصل",
      "br.addressLabel": "العنوان",
      "br.hoursLabel": "ساعات العمل",
      "about.eyebrow": "قصتنا",
      "about.title": "مقهى عصري بقلب دافئ",
      "about.p1": "بدأ جاسبر بفكرة بسيطة: قهوة تستحق أن تعبر المدينة من أجلها، في مكان تحب أن تبقى فيه. كل مشروب مميز نطوّره بأنفسنا، وكل المخبوزات تخرج من الفرن يومياً، وكل كوب يُحضّر بعناية.",
      "about.p2": "من فلات وايت الصباح في مول قطر إلى آيس لاتيه الغروب على الماء في اللؤلؤة، جاسبر هو المكان الذي تتمهّل فيه الدوحة.",
      "about.cat": "انتبه لقطّتنا المقيمة، فلديها رأي واضح في أي طاولة تملك أجمل إطلالة.",
      "about.alt1": "باريستا يرسم على اللاتيه",
      "about.alt2": "مخبوزات طازجة على الكاونتر",
      "rev.eyebrow": "آراء الضيوف",
      "rev.title": "محبوب في كل الدوحة",
      "rev.1": "«الآيس لاتيه من أفضل ما جربت في الدوحة، والرسك بنديكت لا بد منه.»",
      "rev.1by": "سارة م. · اللؤلؤة",
      "rev.2": "«إطلالة رائعة على الأبراج، قهوة ممتازة وأجواء مختلفة. مكاننا الجديد في نهاية الأسبوع.»",
      "rev.2by": "أحمد ك. · اللؤلؤة",
      "rev.3": "«جاسبر دريم على قدر اسمه. مكان رائع للقاء الأصدقاء بعد التسوق في مول قطر.»",
      "rev.3by": "نور ع. · مول قطر",
      "rev.sample": "آراء نموذجية لأغراض العرض.",
      "rev.stars": "تقييم 5 من 5",
      "ig.title": "@jasper.doha",
      "ig.follow": "تابعنا على إنستغرام",
      "ig.alt": "صورة من إنستغرام جاسبر كافيه",
      "order.eyebrow": "اطلب واحتفل",
      "order.title": "جاسبر، أينما كنت",
      "order.lede": "اطلب مفضّلاتك توصيلاً، أو احجز كيكة كاملة لمناسبتك القادمة.",
      "order.deliveryTitle": "توصيل حتى بابك",
      "order.deliveryText": "اطلب من جاسبر عبر طلبات أو سنونو في أي مكان في الدوحة.",
      "form.title": "احجز كيكة مسبقاً",
      "form.intro": "أخبرنا بمناسبتك وسنتصل بك للتأكيد خلال يوم.",
      "form.required": "مطلوب",
      "form.name": "الاسم الكامل",
      "form.phone": "رقم الهاتف",
      "form.phoneHint": "رقم جوال قطري، مثل ‎+974 5555 1234",
      "form.date": "تاريخ الاستلام",
      "form.dateHint": "يرجى الطلب قبل يومين على الأقل.",
      "form.branch": "فرع الاستلام",
      "form.cake": "الكيكة",
      "form.cakeChoose": "اختر كيكة",
      "form.cake1": "كيكة الفراولة",
      "form.cake2": "تيراميسو",
      "form.cake3": "بانوفي",
      "form.cake4": "دولسي دي ليتشي",
      "form.notes": "عبارة على الكيكة / ملاحظات",
      "form.notesHint": "اختياري",
      "form.submit": "أرسل طلب الحجز",
      "form.sending": "جارٍ الإرسال…",
      "form.success": "شكراً لك! تم استلام طلبك (نسخة تجريبية، لم يُرسل شيء). سنتصل بك للتأكيد.",
      "err.name": "يرجى إدخال اسمك.",
      "err.phone": "أدخل رقم هاتف قطري صحيح، مثل ‎+974 5555 1234.",
      "err.date": "اختر تاريخاً بعد يومين على الأقل من اليوم.",
      "err.cake": "يرجى اختيار كيكة.",
      "footer.tagline": "قهوة مختصة، مخبوزات طازجة ووجبات خفيفة في الدوحة.",
      "footer.visit": "زورونا",
      "footer.explore": "استكشف",
      "footer.follow": "تابعنا",
      "footer.rights": "© {y} جاسبر كافيه. جميع الحقوق محفوظة.",
      "footer.demo": "موقع تجريبي — المحتوى بانتظار التأكيد.",
      "items.dream.name": "جاسبر دريم",
      "items.dream.desc": "مشروبنا السري المميز. طبقات كريمية، يُحضّر حصرياً في جاسبر.",
      "items.icedLatte.name": "آيس لاتيه",
      "items.icedLatte.desc": "شوت مزدوج من الإسبريسو المختص على حليب بارد وثلج.",
      "items.matcha.name": "ماتشا لاتيه",
      "items.matcha.desc": "ماتشا فاخرة مخفوقة مع الحليب الذي تختاره.",
      "items.karkade.name": "كركديه",
      "items.karkade.desc": "منقوع الكركديه البارد، منعش ومميز.",
      "items.espresso.name": "إسبريسو",
      "items.espresso.desc": "حبوب أحادية المصدر، قصير وحلو.",
      "items.americano.name": "أمريكانو",
      "items.americano.desc": "إسبريسو مع ماء ساخن. حار أو بارد.",
      "items.flatWhite.name": "فلات وايت",
      "items.flatWhite.desc": "رغوة حليب ناعمة فوق ريستريتو مزدوج.",
      "items.cappuccino.name": "كابتشينو",
      "items.cappuccino.desc": "توازن كلاسيكي بين الإسبريسو والحليب والرغوة.",
      "items.spanish.name": "سبانيش لاتيه",
      "items.spanish.desc": "إسبريسو مع الحليب المكثف لمذاق ناعم وحلو.",
      "items.v60.name": "V60 تقطير",
      "items.v60.desc": "قهوة مقطّرة يدوياً. اسأل عن حبوب اليوم.",
      "items.benedict.name": "رسك بنديكت",
      "items.benedict.desc": "بيض مسلوق وصوص هولنديز على الرسك المحمّص، مع الهاش براون.",
      "items.feta.name": "ساندويتش جبنة فيتا",
      "items.feta.desc": "فيتا كريمية مع طماطم وخيار وأعشاب على خبز طازج.",
      "items.frenchToast.name": "فرنش توست",
      "items.frenchToast.desc": "بريوش سميك مكرمل يُقدّم مع التوت.",
      "items.tiramisu.name": "تيراميسو لوف",
      "items.tiramisu.desc": "إسفنج منقوع بالإسبريسو مع الماسكاربوني.",
      "items.banoffee.name": "بانوفي مونتاج",
      "items.banoffee.desc": "موز وتوفي وكريمة على قاعدة بسكويت.",
      "items.shortcake.name": "كيكة الفراولة",
      "items.shortcake.desc": "إسفنج خفيف مع فراولة طازجة وكريمة مخفوقة.",
      "items.dulce.name": "كيكة دولسي دي ليتشي",
      "items.dulce.desc": "طبقات طرية مع كريمة الكراميل المطبوخ ببطء."
    }
  };

  var lang = "en";
  var activeTab = "signatures";
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(key, vars) {
    var s = (T[lang] && T[lang][key]) || T.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
    return s;
  }

  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  function fmtHour(h) {
    h = h % 24;
    if (lang === "ar") {
      if (h === 0) return "12 منتصف الليل";
      return (h % 12 || 12) + (h < 12 ? " ص" : " م");
    }
    if (h === 0) return "12 AM";
    return (h % 12 || 12) + (h < 12 ? " AM" : " PM");
  }

  function price(n) { return t("currency", { n: n }); }

  // ---------- i18n ----------
  function applyLang(next) {
    lang = next === "ar" ? "ar" : "en";
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("meta.title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });

    var toggle = document.getElementById("lang-toggle");
    toggle.textContent = lang === "ar" ? "EN" : "ع";
    toggle.setAttribute("aria-label", t("lang.switch"));
    toggle.setAttribute("lang", lang === "ar" ? "en" : "ar");

    var y = document.getElementById("year-line");
    if (y) y.textContent = t("footer.rights", { y: new Date().getFullYear() });

    syncNavToggleLabel();
    renderMenu();
    renderSignatureList();
    updateStatus();
    store("jasper-lang", lang);
  }

  // ---------- Images: fall back to warm gradient if a photo fails ----------
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (img && img.tagName === "IMG" && img.parentElement && img.parentElement.classList.contains("ph")) {
      img.parentElement.classList.add("img-failed");
      img.style.visibility = "hidden";
    }
  }, true);

  function photo(id, alt, w, eager) {
    return '<div class="ph"><img src="' + IMG(id, w) + '" alt="' + alt.replace(/"/g, "&quot;") +
      '" width="' + (w || 640) + '" height="' + Math.round((w || 640) * 0.75) + '"' +
      (eager ? "" : ' loading="lazy"') + ' decoding="async"></div>';
  }

  // ---------- Menu ----------
  function renderMenu() {
    var grid = document.getElementById("menu-panel");
    if (!grid) return;
    grid.setAttribute("aria-labelledby", "tab-" + activeTab);
    grid.innerHTML = MENU[activeTab].map(function (item) {
      var name = t("items." + item.key + ".name");
      return '<li class="menu-card reveal-item">' +
        photo(item.img, name, 640) +
        '<div class="menu-card-body">' +
          '<div class="menu-card-top"><h3>' + name + '</h3><span class="price">' + price(item.price) + "</span></div>" +
          "<p>" + t("items." + item.key + ".desc") + "</p>" +
          (item.tag ? '<span class="tag">' + t("menu.popular") + "</span>" : "") +
        "</div></li>";
    }).join("");
    staggerIn(grid.querySelectorAll(".reveal-item"));
  }

  function renderSignatureList() {
    var list = document.getElementById("sig-list");
    if (!list) return;
    list.innerHTML = MENU.signatures.slice(1).map(function (item) {
      var name = t("items." + item.key + ".name");
      return '<li><div class="mini-thumb">' + photo(item.img, "", 120) + "</div>" +
        "<div><strong>" + name + "</strong><span>" + t("items." + item.key + ".desc") + "</span></div></li>";
    }).join("");
  }

  function staggerIn(nodes) {
    if (reduceMotion || !nodes.length || !nodes[0].animate) return;
    nodes.forEach(function (n, i) {
      n.animate(
        [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }],
        { duration: 320, delay: i * 50, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" }
      );
    });
  }

  function setupTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
    function select(tab, focus) {
      tabs.forEach(function (tb) {
        var on = tb === tab;
        tb.setAttribute("aria-selected", on ? "true" : "false");
        tb.tabIndex = on ? 0 : -1;
      });
      if (focus) tab.focus();
      if (activeTab !== tab.dataset.tab) {
        activeTab = tab.dataset.tab;
        renderMenu();
      }
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab, false); });
      tab.addEventListener("keydown", function (e) {
        var rtl = root.dir === "rtl";
        var next = null;
        if (e.key === "ArrowRight") next = rtl ? i - 1 : i + 1;
        else if (e.key === "ArrowLeft") next = rtl ? i + 1 : i - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        select(tabs[(next + tabs.length) % tabs.length], true);
      });
    });
  }

  // ---------- Open-now status (Asia/Qatar) ----------
  function qatarHour() {
    try {
      var parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Qatar", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
      var h = 0, m = 0;
      parts.forEach(function (p) { if (p.type === "hour") h = +p.value; if (p.type === "minute") m = +p.value; });
      return (h % 24) + m / 60;
    } catch (e) {
      var d = new Date();
      return ((d.getUTCHours() + 3) % 24) + d.getUTCMinutes() / 60;
    }
  }

  function isOpen(b, now) { return now >= b.open && now < b.close; }

  function updateStatus() {
    var now = qatarHour();
    var hero = document.getElementById("hero-status");
    var heroText = document.getElementById("hero-status-text");
    var openB = BRANCHES.filter(function (b) { return isOpen(b, now); })[0];
    if (openB) {
      hero.classList.remove("is-closed");
      heroText.textContent = t("status.openUntil", { branch: t("br." + openB.id + ".name"), time: fmtHour(openB.close) });
    } else {
      var first = BRANCHES.slice().sort(function (a, b) { return a.open - b.open; })[0];
      hero.classList.add("is-closed");
      heroText.textContent = t("status.closedOpens", { branch: t("br." + first.id + ".name"), time: fmtHour(first.open) });
    }
    BRANCHES.forEach(function (b) {
      var el = document.getElementById("status-" + b.id);
      if (!el) return;
      var open = isOpen(b, now);
      el.classList.toggle("is-closed", !open);
      el.querySelector("span:last-child").textContent = open
        ? t("status.open", { time: fmtHour(b.close) })
        : t("status.closed", { time: fmtHour(b.open) });
    });
  }

  // ---------- Header & mobile nav ----------
  var nav, navToggle;
  function syncNavToggleLabel() {
    if (!navToggle) return;
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", t(open ? "nav.toggleClose" : "nav.toggle"));
  }
  function setNav(open) {
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    syncNavToggleLabel();
  }
  function setupNav() {
    nav = document.getElementById("site-nav");
    navToggle = document.getElementById("menu-toggle");
    navToggle.addEventListener("click", function () { setNav(navToggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setNav(false); navToggle.focus(); }
    });

    var header = document.querySelector(".site-header");
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
        ticking = false;
      });
    }, { passive: true });

    // Highlight the section in view
    if ("IntersectionObserver" in window) {
      var links = {};
      nav.querySelectorAll("a[href^='#']").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting || !links[en.target.id]) return;
          Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
          links[en.target.id].setAttribute("aria-current", "true");
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  // ---------- Scroll reveal ----------
  function setupReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    root.classList.add("js-motion");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  // ---------- Pre-order form ----------
  function setupForm() {
    var form = document.getElementById("preorder-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    var submit = document.getElementById("form-submit");
    var dateInput = form.elements.date;

    var min = new Date(Date.now() + 2 * 864e5);
    var minStr = min.toISOString().slice(0, 10);
    dateInput.min = minStr;

    var rules = {
      name: function (v) { return v.trim().length >= 2 ? "" : "err.name"; },
      phone: function (v) { return /^(\+?974)?\s*[3-7]\d{3}\s*\d{4}$/.test(v.replace(/[-()]/g, "").trim()) ? "" : "err.phone"; },
      date: function (v) { return v && v >= minStr ? "" : "err.date"; },
      cake: function (v) { return v ? "" : "err.cake"; }
    };

    function check(name) {
      var input = form.elements[name];
      var errKey = rules[name](input.value);
      var errEl = document.getElementById(name + "-error");
      input.setAttribute("aria-invalid", errKey ? "true" : "false");
      errEl.textContent = errKey ? t(errKey) : "";
      return !errKey;
    }

    Object.keys(rules).forEach(function (name) {
      var input = form.elements[name];
      input.addEventListener("blur", function () { if (input.value) check(name); });
      input.addEventListener("input", function () { if (input.getAttribute("aria-invalid") === "true") check(name); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.hidden = true;
      var firstBad = null;
      Object.keys(rules).forEach(function (name) { if (!check(name) && !firstBad) firstBad = form.elements[name]; });
      if (firstBad) { firstBad.focus(); return; }

      // Demo only: nothing is sent. TODO: connect to a real endpoint or WhatsApp.
      submit.disabled = true;
      var label = submit.querySelector("[data-i18n]");
      label.textContent = t("form.sending");
      label.setAttribute("data-i18n", "form.sending");
      var spin = document.createElement("span");
      spin.className = "spinner";
      spin.setAttribute("aria-hidden", "true");
      submit.prepend(spin);

      setTimeout(function () {
        spin.remove();
        submit.disabled = false;
        label.setAttribute("data-i18n", "form.submit");
        label.textContent = t("form.submit");
        form.reset();
        Object.keys(rules).forEach(function (n) { form.elements[n].removeAttribute("aria-invalid"); });
        status.hidden = false;
      }, 1100);
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", function () {
    setupNav();
    setupTabs();
    setupForm();
    var saved = store("jasper-lang");
    var browserAr = (navigator.language || "").toLowerCase().indexOf("ar") === 0;
    applyLang(saved || (browserAr ? "ar" : "en"));
    setupReveal();
    document.getElementById("lang-toggle").addEventListener("click", function () { applyLang(lang === "en" ? "ar" : "en"); });
    setInterval(updateStatus, 60000);
  });
})();
