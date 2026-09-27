/* Jasper — demo site behaviour
   - EN/AR translations (static text via [data-i18n], menu rendered from data)
   - Open-now status in Asia/Qatar time
   - Accessible menu tabs, mobile nav, ticker pause, cake form validation, scroll reveals */

(function () {
  "use strict";

  // Hours from the @jasper.doha Instagram bio.
  var BRANCHES = [
    { id: "moq", open: 7, close: 24 },   // Mall of Qatar 7AM – 12AM
    { id: "pearl", open: 8, close: 24 }  // UDC Oyster 8AM – 12AM
  ];

  // Item names come from Jasper's Instagram posts and delivery listings.
  // TODO: prices are indicative placeholders (QAR); confirm with the owner.
  var MENU = {
    signatures: [
      { key: "dream", price: 32, img: "cold-brew", tag: true },
      { key: "smoothies", price: 28, img: "smoothies" },
      { key: "icedLatte", price: 24, img: "iced-car" },
      { key: "matcha", price: 26, img: "approved-spread" }
    ],
    coffee: [
      { key: "flatWhite", price: 22, img: "latte-art" },
      { key: "spanish", price: 25, img: "iced-porsche" },
      { key: "coldBrew", price: 24, img: "cold-brew" },
      { key: "latte", price: 22, img: "lunch-spread" }
    ],
    food: [
      { key: "caesar", price: 42, img: "sandwich-tray", tag: true },
      { key: "dailyToss", price: 45, img: "daily-toss" },
      { key: "sandwichSel", price: 38, img: "sandwiches" },
      { key: "wraps", price: 36, img: "wraps-porsche" },
      { key: "bowl", price: 32, img: "bowl-porsche" }
    ],
    bakery: [
      { key: "croissant", price: 16, img: "freshly-baked" },
      { key: "chocCroissant", price: 22, img: "choc-croissant", tag: true },
      { key: "pastries", price: 18, img: "croissant-tray" },
      { key: "trayBakes", price: 20, img: "pastry-tray" }
    ]
  };

  var T = {
    en: {
      "meta.title": "Jasper — Specialty Coffee in Doha | Mall of Qatar & UDC Oyster, The Pearl",
      "meta.desc": "Another day — same perfect coffee. Specialty coffee, fresh bakes, sandwiches and J cakes at Jasper, Mall of Qatar and UDC Oyster, The Pearl, Doha.",
      skip: "Skip to main content",
      "nav.label": "Main",
      "nav.menu": "Menu",
      "nav.branches": "Locations",
      "nav.drops": "Drops",
      "nav.about": "About",
      "nav.order": "J Cakes",
      "nav.toggle": "Open menu",
      "nav.toggleClose": "Close menu",
      "lang.switch": "Switch to Arabic",
      "cta.order": "Order now",
      "hero.eyebrow": "Specialty coffee · Doha",
      "hero.title": "Another day — same perfect coffee.",
      "hero.lede": "Specialty coffee, freshly baked pastries, loaded sandwiches and J cakes. Now at Mall of Qatar and UDC Oyster, The Pearl.",
      "hero.cta1": "View menu",
      "hero.cta2": "Find us",
      "ticker.label": "Highlights",
      "ticker.pause": "Pause scrolling text",
      "ticker.play": "Play scrolling text",
      "ticker.1": "Freshly baked",
      "ticker.2": "Specialty coffee",
      "ticker.3": "Summer smoothies",
      "ticker.4": "J cakes",
      "ticker.5": "Limited drops",
      "ticker.6": "The daily toss",
      "status.openUntil": "Open now · {branch} until {time}",
      "status.closedOpens": "Closed now · Opens {time} at {branch}",
      "status.open": "Open now · until {time}",
      "status.closed": "Closed · opens {time}",
      "sig.eyebrow": "Only at Jasper",
      "sig.title": "Meet the Jasper Dream",
      "sig.quote": "“A magical concoction that will transport your senses — a unique and unforgettable coffee experience, crafted exclusively at Jasper.”",
      "sig.badge": "Signature",
      "sig.alt": "Cold brew poured over ice in a ribbed glass",
      "sig.cta": "See the full menu",
      "menu.eyebrow": "The menu",
      "menu.title": "Made fresh, all day",
      "menu.lede": "Coffee, smoothies, loaded sandwiches, salads and a counter full of bakes. Halal certified.",
      "menu.tabs": "Menu categories",
      "menu.signatures": "Signatures",
      "menu.coffee": "Coffee",
      "menu.food": "Food",
      "menu.bakery": "Bakery",
      "menu.note": "Prices are indicative and shown in Qatari riyals. Ask the crew about this week’s drops.",
      "menu.popular": "Fan favourite",
      currency: "QAR {n}",
      "br.eyebrow": "Visit us",
      "br.title": "Two spots, one Jasper",
      "br.lede": "Open every day, from morning until midnight.",
      "br.moq.name": "Mall of Qatar",
      "br.moq.address": "Mall of Qatar, Al Rayyan, Doha",
      "br.moq.hours": "Daily · 7 AM – 12 AM",
      "br.moq.chip1": "Early opening",
      "br.moq.chip2": "Inside the mall",
      "br.moq.alt": "Jasper's silver ghost mascot outside the Mall of Qatar entrance",
      "br.pearl.name": "UDC Oyster · The Pearl",
      "br.pearl.address": "The Oyster, UDC, The Pearl-Qatar, Doha",
      "br.pearl.hours": "Daily · 8 AM – 12 AM",
      "br.pearl.chip1": "Waterfront",
      "br.pearl.chip2": "Skyline views",
      "br.pearl.chip3": "Valet parking",
      "br.pearl.alt": "Jet ski on the water in front of the Doha skyline",
      "br.directions": "Get directions",
      "br.allLocations": "All locations",
      "br.addressLabel": "Address",
      "br.hoursLabel": "Opening hours",
      "drops.eyebrow": "Jasper goods",
      "drops.title": "Limited drops",
      "drops.lede": "Bags, tags and tees in Jasper blue. Released in small batches, in-store only, gone when they’re gone.",
      "drops.item1": "Weekender duffel",
      "drops.item2": "Ghost luggage tags",
      "drops.item3": "Coffee Club tees",
      "drops.alt1": "Navy Jasper duffel bag with embroidered patches",
      "drops.alt2": "Three navy luggage tags with the Jasper ghost",
      "drops.alt3": "Friends in Jasper Coffee Club tees with iced drinks by the water",
      "about.year": "Year — and more to go",
      "about.eyebrow": "Our story",
      "about.title": "Made in Doha, served in blue",
      "about.p1": "Jasper started with one promise: another day, the same perfect coffee. Every pastry is baked fresh, every sandwich is built to order, and every cup is poured by a crew that loves what they do.",
      "about.p2": "One year in, we’ve grown from Mall of Qatar to the waterfront at UDC Oyster, with summer drops, smoothies and J cakes along the way.",
      "about.ghost": "Spot the silver ghost. Our mascot turns up everywhere from Mall of Qatar to the passenger seat.",
      "about.alt1": "The Jasper crew in blue aprons and caps celebrating one year",
      "about.alt2": "The silver ghost mascot sitting in a car with a Jasper iced coffee",
      "rev.eyebrow": "Guests say",
      "rev.title": "Loved across Doha",
      "rev.1": "“The iced latte is honestly one of the best I’ve had in Doha, and the Rusk Benedict is a must.”",
      "rev.1by": "Sara M. · UDC Oyster",
      "rev.2": "“Perfect coffee, a view of the skyline and an atmosphere that feels different. Our new weekend spot.”",
      "rev.2by": "Ahmed K. · UDC Oyster",
      "rev.3": "“The chicken caesar sandwich is huge and the double chocolate croissant is dangerous. Great stop after Mall of Qatar.”",
      "rev.3by": "Noor A. · Mall of Qatar",
      "rev.sample": "Sample reviews for demo purposes.",
      "rev.stars": "Rated 5 out of 5",
      "ig.followers": "9.7K followers on Instagram",
      "ig.follow": "Follow on Instagram",
      "ig.alt1": "Jasper smoothies lined up on a white car",
      "ig.alt2": "Stack of double chocolate croissants",
      "ig.alt3": "Iced latte resting on a white sports car",
      "ig.alt4": "J's chicken salad, The Daily Toss",
      "ig.alt5": "Sandwiches in Jasper wrappers",
      "ig.alt6": "Table spread of sandwiches, salads and drinks with a Jasper Approved stamp",
      "order.eyebrow": "Order & celebrate",
      "order.title": "J cakes & delivery",
      "order.lede": "Pre-order a whole J cake for your next celebration, or get your Jasper favourites delivered.",
      "order.cakesTitle": "Cake pre-orders",
      "order.cakesText": "Call or message us to reserve your J cake.",
      "order.deliveryTitle": "Delivered to your door",
      "order.deliveryText": "Order Jasper through Talabat or Snoonu anywhere in Doha.",
      "form.title": "Request a J cake",
      "form.intro": "Tell us what you’re celebrating and we’ll call to confirm.",
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
      "form.submit": "Send request",
      "form.sending": "Sending…",
      "form.success": "Thank you! Your request was received (demo only, nothing was sent). We’ll call you to confirm.",
      "err.name": "Please enter your name.",
      "err.phone": "Enter a valid Qatar phone number, e.g. +974 5555 1234.",
      "err.date": "Choose a date at least 2 days from today.",
      "err.cake": "Please choose a cake.",
      "footer.tagline": "Another day — same perfect coffee.",
      "footer.call": "Call Jasper",
      "footer.visit": "Visit",
      "footer.explore": "Explore",
      "footer.cakes": "J cakes",
      "footer.rights": "© {y} Jasper. All rights reserved.",
      "footer.demo": "Demo website — content subject to confirmation.",
      "items.dream.name": "Jasper Dream",
      "items.dream.desc": "Our secret signature, crafted exclusively at Jasper.",
      "items.smoothies.name": "Summer Smoothies",
      "items.smoothies.desc": "Seasonal fruit blends from the Jasper summer drop.",
      "items.icedLatte.name": "Iced Latte",
      "items.icedLatte.desc": "Double shot over cold milk and ice, in the blue-logo cup.",
      "items.matcha.name": "Matcha Latte",
      "items.matcha.desc": "Whisked matcha with your choice of milk. Hot or iced.",
      "items.flatWhite.name": "Flat White",
      "items.flatWhite.desc": "Velvety microfoam over a double ristretto.",
      "items.spanish.name": "Spanish Latte",
      "items.spanish.desc": "Espresso with condensed milk, smooth and sweet.",
      "items.coldBrew.name": "Cold Brew",
      "items.coldBrew.desc": "Slow-steeped and poured over ice.",
      "items.latte.name": "Latte",
      "items.latte.desc": "Classic espresso and steamed milk.",
      "items.caesar.name": "Chicken Caesar Sandwich",
      "items.caesar.desc": "Jasper’s loaded caesar on toasted bread.",
      "items.dailyToss.name": "J’s Chicken Salad",
      "items.dailyToss.desc": "The Daily Toss: grilled chicken over fresh greens.",
      "items.sandwichSel.name": "Sandwich Selection",
      "items.sandwichSel.desc": "Toasted, stacked and pressed. Ask what’s on today.",
      "items.wraps.name": "Jasper Wraps",
      "items.wraps.desc": "Grab-and-go favourites in the Jasper wrapper.",
      "items.bowl.name": "Yogurt & Granola Bowl",
      "items.bowl.desc": "Creamy yogurt, granola and fresh berries.",
      "items.croissant.name": "Butter Croissant",
      "items.croissant.desc": "Freshly baked every morning.",
      "items.chocCroissant.name": "Double Chocolate Croissant",
      "items.chocCroissant.desc": "Chocolate dough, chocolate filling, chocolate drizzle.",
      "items.pastries.name": "Sweet Buns",
      "items.pastries.desc": "Filled brioche and cruffins from the morning bake.",
      "items.trayBakes.name": "Savoury Pastries",
      "items.trayBakes.desc": "Cheese-topped bakes, fresh from the tray."
    },
    ar: {
      "meta.title": "جاسبر — قهوة مختصة في الدوحة | مول قطر و UDC أويستر، اللؤلؤة",
      "meta.desc": "يوم جديد — نفس القهوة المثالية. قهوة مختصة ومخبوزات طازجة وساندويتشات وكيكات J في جاسبر، مول قطر و UDC أويستر، اللؤلؤة.",
      skip: "انتقل إلى المحتوى الرئيسي",
      "nav.label": "القائمة الرئيسية",
      "nav.menu": "المنيو",
      "nav.branches": "الفروع",
      "nav.drops": "الإصدارات",
      "nav.about": "من نحن",
      "nav.order": "كيكات J",
      "nav.toggle": "افتح القائمة",
      "nav.toggleClose": "أغلق القائمة",
      "lang.switch": "التبديل إلى الإنجليزية",
      "cta.order": "اطلب الآن",
      "hero.eyebrow": "قهوة مختصة · الدوحة",
      "hero.title": "يوم جديد — نفس القهوة المثالية.",
      "hero.lede": "قهوة مختصة، مخبوزات طازجة، ساندويتشات غنية وكيكات J. الآن في مول قطر و UDC أويستر، اللؤلؤة.",
      "hero.cta1": "تصفّح المنيو",
      "hero.cta2": "موقعنا",
      "ticker.label": "أبرز ما لدينا",
      "ticker.pause": "إيقاف النص المتحرك",
      "ticker.play": "تشغيل النص المتحرك",
      "ticker.1": "مخبوز طازجاً",
      "ticker.2": "قهوة مختصة",
      "ticker.3": "سموذي الصيف",
      "ticker.4": "كيكات J",
      "ticker.5": "إصدارات محدودة",
      "ticker.6": "سلطة اليوم",
      "status.openUntil": "مفتوح الآن · {branch} حتى {time}",
      "status.closedOpens": "مغلق الآن · يفتح {time} في {branch}",
      "status.open": "مفتوح الآن · حتى {time}",
      "status.closed": "مغلق · يفتح {time}",
      "sig.eyebrow": "حصرياً في جاسبر",
      "sig.title": "تعرّف على جاسبر دريم",
      "sig.quote": "«مزيج ساحر سيأخذ حواسك في رحلة — تجربة قهوة فريدة لا تُنسى، مُحضّرة حصرياً في جاسبر.»",
      "sig.badge": "مميز",
      "sig.alt": "كولد برو يُسكب على الثلج في كوب زجاجي",
      "sig.cta": "شاهد المنيو كاملاً",
      "menu.eyebrow": "المنيو",
      "menu.title": "طازج طوال اليوم",
      "menu.lede": "قهوة، سموذي، ساندويتشات غنية، سلطات ومخبوزات طازجة. حلال معتمد.",
      "menu.tabs": "أقسام المنيو",
      "menu.signatures": "المميزة",
      "menu.coffee": "القهوة",
      "menu.food": "الطعام",
      "menu.bakery": "المخبوزات",
      "menu.note": "الأسعار تقريبية بالريال القطري. اسأل الفريق عن إصدارات هذا الأسبوع.",
      "menu.popular": "الأكثر طلباً",
      currency: "{n} ر.ق",
      "br.eyebrow": "زورونا",
      "br.title": "فرعان، وجاسبر واحد",
      "br.lede": "مفتوح يومياً من الصباح حتى منتصف الليل.",
      "br.moq.name": "مول قطر",
      "br.moq.address": "مول قطر، الريان، الدوحة",
      "br.moq.hours": "يومياً · 7 ص – 12 منتصف الليل",
      "br.moq.chip1": "يفتح مبكراً",
      "br.moq.chip2": "داخل المول",
      "br.moq.alt": "شبح جاسبر الفضي أمام مدخل مول قطر",
      "br.pearl.name": "UDC أويستر · اللؤلؤة",
      "br.pearl.address": "الأويستر، UDC، اللؤلؤة-قطر، الدوحة",
      "br.pearl.hours": "يومياً · 8 ص – 12 منتصف الليل",
      "br.pearl.chip1": "على الواجهة البحرية",
      "br.pearl.chip2": "إطلالة على الأبراج",
      "br.pearl.chip3": "خدمة صف السيارات",
      "br.pearl.alt": "دراجة مائية أمام أبراج الدوحة",
      "br.directions": "الاتجاهات",
      "br.allLocations": "جميع المواقع",
      "br.addressLabel": "العنوان",
      "br.hoursLabel": "ساعات العمل",
      "drops.eyebrow": "منتجات جاسبر",
      "drops.title": "إصدارات محدودة",
      "drops.lede": "حقائب وميداليات وتيشيرتات بلون جاسبر الأزرق. كميات محدودة، في الفروع فقط، وتنفد بسرعة.",
      "drops.item1": "حقيبة السفر",
      "drops.item2": "ميداليات الشبح",
      "drops.item3": "تيشيرتات كوفي كلوب",
      "drops.alt1": "حقيبة جاسبر كحلية بشعارات مطرزة",
      "drops.alt2": "ثلاث بطاقات أمتعة كحلية عليها شبح جاسبر",
      "drops.alt3": "أصدقاء بتيشيرتات جاسبر كوفي كلوب ومشروبات باردة على البحر",
      "about.year": "سنة — والقادم أكثر",
      "about.eyebrow": "قصتنا",
      "about.title": "صُنع في الدوحة، يُقدّم بالأزرق",
      "about.p1": "بدأ جاسبر بوعد واحد: يوم جديد، ونفس القهوة المثالية. كل المخبوزات طازجة، وكل ساندويتش يُحضّر عند الطلب، وكل كوب يُسكب بيد فريق يحب ما يفعل.",
      "about.p2": "بعد عام، انتقلنا من مول قطر إلى الواجهة البحرية في UDC أويستر، مع إصدارات الصيف والسموذي وكيكات J.",
      "about.ghost": "ابحث عن الشبح الفضي. تميمتنا تظهر في كل مكان، من مول قطر إلى مقعد السيارة.",
      "about.alt1": "فريق جاسبر بمرايل وقبعات زرقاء يحتفل بمرور عام",
      "about.alt2": "الشبح الفضي في سيارة مع آيس كوفي من جاسبر",
      "rev.eyebrow": "آراء الضيوف",
      "rev.title": "محبوب في كل الدوحة",
      "rev.1": "«الآيس لاتيه من أفضل ما جربت في الدوحة، والرسك بنديكت لا بد منه.»",
      "rev.1by": "سارة م. · UDC أويستر",
      "rev.2": "«قهوة مثالية، إطلالة على الأبراج وأجواء مختلفة. مكاننا الجديد في نهاية الأسبوع.»",
      "rev.2by": "أحمد ك. · UDC أويستر",
      "rev.3": "«ساندويتش سيزر الدجاج ضخم، وكرواسون الشوكولاتة المزدوجة خطير. محطة رائعة بعد مول قطر.»",
      "rev.3by": "نور ع. · مول قطر",
      "rev.sample": "آراء نموذجية لأغراض العرض.",
      "rev.stars": "تقييم 5 من 5",
      "ig.followers": "9.7 ألف متابع على إنستغرام",
      "ig.follow": "تابعنا على إنستغرام",
      "ig.alt1": "سموذي جاسبر مصفوفة على سيارة بيضاء",
      "ig.alt2": "كرواسون الشوكولاتة المزدوجة",
      "ig.alt3": "آيس لاتيه على سيارة رياضية بيضاء",
      "ig.alt4": "سلطة الدجاج من جاسبر",
      "ig.alt5": "ساندويتشات في أغلفة جاسبر",
      "ig.alt6": "طاولة ساندويتشات وسلطات ومشروبات مع ختم جاسبر",
      "order.eyebrow": "اطلب واحتفل",
      "order.title": "كيكات J والتوصيل",
      "order.lede": "احجز كيكة J كاملة لمناسبتك القادمة، أو اطلب مفضّلاتك من جاسبر توصيلاً.",
      "order.cakesTitle": "حجز الكيك",
      "order.cakesText": "اتصل بنا أو راسلنا لحجز كيكة J.",
      "order.deliveryTitle": "توصيل حتى بابك",
      "order.deliveryText": "اطلب جاسبر عبر طلبات أو سنونو في أي مكان في الدوحة.",
      "form.title": "اطلب كيكة J",
      "form.intro": "أخبرنا بمناسبتك وسنتصل بك للتأكيد.",
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
      "form.submit": "أرسل الطلب",
      "form.sending": "جارٍ الإرسال…",
      "form.success": "شكراً لك! تم استلام طلبك (نسخة تجريبية، لم يُرسل شيء). سنتصل بك للتأكيد.",
      "err.name": "يرجى إدخال اسمك.",
      "err.phone": "أدخل رقم هاتف قطري صحيح، مثل ‎+974 5555 1234.",
      "err.date": "اختر تاريخاً بعد يومين على الأقل من اليوم.",
      "err.cake": "يرجى اختيار كيكة.",
      "footer.tagline": "يوم جديد — نفس القهوة المثالية.",
      "footer.call": "اتصل بجاسبر",
      "footer.visit": "زورونا",
      "footer.explore": "استكشف",
      "footer.cakes": "كيكات J",
      "footer.rights": "© {y} جاسبر. جميع الحقوق محفوظة.",
      "footer.demo": "موقع تجريبي — المحتوى بانتظار التأكيد.",
      "items.dream.name": "جاسبر دريم",
      "items.dream.desc": "مشروبنا السري المميز، يُحضّر حصرياً في جاسبر.",
      "items.smoothies.name": "سموذي الصيف",
      "items.smoothies.desc": "خلطات فواكه موسمية من إصدار الصيف.",
      "items.icedLatte.name": "آيس لاتيه",
      "items.icedLatte.desc": "شوت مزدوج على حليب بارد وثلج، في كوب الشعار الأزرق.",
      "items.matcha.name": "ماتشا لاتيه",
      "items.matcha.desc": "ماتشا مخفوقة مع الحليب الذي تختاره. حار أو بارد.",
      "items.flatWhite.name": "فلات وايت",
      "items.flatWhite.desc": "رغوة حليب ناعمة فوق ريستريتو مزدوج.",
      "items.spanish.name": "سبانيش لاتيه",
      "items.spanish.desc": "إسبريسو مع الحليب المكثف، ناعم وحلو.",
      "items.coldBrew.name": "كولد برو",
      "items.coldBrew.desc": "منقوع ببطء ويُسكب على الثلج.",
      "items.latte.name": "لاتيه",
      "items.latte.desc": "إسبريسو كلاسيكي مع حليب مبخّر.",
      "items.caesar.name": "ساندويتش سيزر الدجاج",
      "items.caesar.desc": "سيزر جاسبر الغني على خبز محمّص.",
      "items.dailyToss.name": "سلطة الدجاج من J",
      "items.dailyToss.desc": "سلطة اليوم: دجاج مشوي على خضار طازجة.",
      "items.sandwichSel.name": "تشكيلة الساندويتشات",
      "items.sandwichSel.desc": "محمّصة ومحشوة ومضغوطة. اسأل عن ساندويتش اليوم.",
      "items.wraps.name": "لفائف جاسبر",
      "items.wraps.desc": "مفضّلات سريعة في غلاف جاسبر.",
      "items.bowl.name": "زبادي وجرانولا",
      "items.bowl.desc": "زبادي كريمي مع جرانولا وتوت طازج.",
      "items.croissant.name": "كرواسون بالزبدة",
      "items.croissant.desc": "مخبوز طازجاً كل صباح.",
      "items.chocCroissant.name": "كرواسون الشوكولاتة المزدوجة",
      "items.chocCroissant.desc": "عجينة شوكولاتة، حشوة شوكولاتة، وصوص شوكولاتة.",
      "items.pastries.name": "مخبوزات حلوة",
      "items.pastries.desc": "بريوش محشو وكروفن من خبز الصباح.",
      "items.trayBakes.name": "معجنات مالحة",
      "items.trayBakes.desc": "معجنات بالجبن طازجة من الفرن."
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
    syncTickerLabel();
    renderMenu();
    renderSignatureList();
    updateStatus();
    store("jasper-lang", lang);
  }

  // ---------- Images: fall back to an ice tile if a photo fails ----------
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (img && img.tagName === "IMG" && img.parentElement && img.parentElement.classList.contains("ph")) {
      img.parentElement.classList.add("img-failed");
      img.style.visibility = "hidden";
    }
  }, true);

  function photo(name, alt) {
    return '<div class="ph"><img src="assets/img/' + name + '.webp" alt="' + alt.replace(/"/g, "&quot;") +
      '" width="368" height="490" loading="lazy" decoding="async"></div>';
  }

  // ---------- Menu ----------
  function renderMenu() {
    var grid = document.getElementById("menu-panel");
    if (!grid) return;
    grid.setAttribute("aria-labelledby", "tab-" + activeTab);
    grid.innerHTML = MENU[activeTab].map(function (item) {
      var name = t("items." + item.key + ".name");
      return '<li class="menu-card reveal-item">' +
        photo(item.img, name) +
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
      return '<li><div class="mini-thumb">' + photo(item.img, "") + "</div>" +
        "<strong>" + t("items." + item.key + ".name") + "</strong></li>";
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

  // ---------- Ticker pause (WCAG 2.2.2) ----------
  var ticker, tickerBtn;
  function syncTickerLabel() {
    if (!tickerBtn) return;
    var paused = tickerBtn.getAttribute("aria-pressed") === "true";
    tickerBtn.setAttribute("aria-label", t(paused ? "ticker.play" : "ticker.pause"));
    tickerBtn.querySelector("use").setAttribute("href", paused ? "#i-play" : "#i-pause");
  }
  function setupTicker() {
    ticker = document.getElementById("ticker");
    tickerBtn = document.getElementById("ticker-pause");
    if (!ticker || !tickerBtn) return;
    tickerBtn.addEventListener("click", function () {
      var paused = tickerBtn.getAttribute("aria-pressed") !== "true";
      tickerBtn.setAttribute("aria-pressed", paused ? "true" : "false");
      ticker.classList.toggle("is-paused", paused);
      syncTickerLabel();
    });
    ticker.addEventListener("focusin", function () { ticker.classList.add("is-paused"); });
    ticker.addEventListener("focusout", function () {
      if (tickerBtn.getAttribute("aria-pressed") !== "true") ticker.classList.remove("is-paused");
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

  // ---------- Cake request form ----------
  function setupForm() {
    var form = document.getElementById("preorder-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    var submit = document.getElementById("form-submit");
    var dateInput = form.elements.date;

    var minStr = new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10);
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

      // Demo only: nothing is sent. TODO: connect to WhatsApp (+974 7081 0856) or a form endpoint.
      submit.disabled = true;
      var label = submit.querySelector("[data-i18n]");
      label.setAttribute("data-i18n", "form.sending");
      label.textContent = t("form.sending");
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
    setupTicker();
    setupForm();
    var saved = store("jasper-lang");
    var browserAr = (navigator.language || "").toLowerCase().indexOf("ar") === 0;
    applyLang(saved || (browserAr ? "ar" : "en"));
    setupReveal();
    document.getElementById("lang-toggle").addEventListener("click", function () { applyLang(lang === "en" ? "ar" : "en"); });
    setInterval(updateStatus, 60000);
  });
})();
