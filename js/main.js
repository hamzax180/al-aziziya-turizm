/* ── TRANSLATIONS ── */
const TRANSLATIONS = {
  en: {
    nav_home:"Home", nav_svc:"Services", nav_fleet:"Fleet", nav_dest:"Destinations",
    nav_why:"About", nav_lic:"License", nav_book:"Book Now ✈",
    hero_tag:"Premium Travel Agency — Istanbul",
    hero_t1:"Your Journey", hero_t2:"Starts", hero_t3:"Here",
    hero_sub:"Trusted by thousands of travelers from UAE, Saudi Arabia, Qatar & beyond. Full packages, flights, hotels, and VIP transfers — all in one place.",
    hero_btn1:"✈ Book Your Trip", hero_btn2:"Explore Turkey →",
    stat1:"Happy Trips", stat2:"Destinations", stat3:"Years Exp.", stat4:"Certified",
    btn_book:"Book Your Trip", btn_wa:"Chat on WhatsApp",
    stat_trips:"Happy Trips", stat_dest:"Destinations", stat_exp:"Years Exp.", stat_cert:"Certified",
    svc_eye:"What We Offer",
    svc_t1:"Our Premium", svc_t2:"Services",
    svc_sub:"From luxury transfers to full travel packages — we handle everything so you can enjoy your journey.",
    svc1_name:"Full Trip Packages", svc1_desc:"Flights + Hotel + Transport — everything handled for you.",
    svc2_name:"Flight Tickets", svc2_desc:"Best fares on international & domestic routes.",
    svc3_name:"Hotel Booking", svc3_desc:"Curated stays from budget to luxury across Turkey.",
    svc4_name:"Car with Driver", svc4_desc:"Private VIP transfers, city tours, and airport pickups.",
    fleet_eye:"Our Fleet",
    fleet_t1:"Comfortable &", fleet_t2:"Premium Vehicles",
    fleet_sub:"All our vehicles are modern, air-conditioned, and maintained to the highest standard for your comfort.",
    fleet_cta:"Book a Transfer →",
    dest_eye:"Top Destinations",
    dest_t1:"Explore", dest_t2:"Turkey",
    dest_sub:"From the fairy chimneys of Cappadocia to the beaches of Antalya.",
    dest_btn:"View All Destinations →",
    dest1_d:"The city between two continents — history, cuisine, and culture.",
    dest2_d:"Fairy chimneys, hot air balloons, and underground cities.",
    dest3_d:"Mediterranean beaches, ancient ruins, and luxury resorts.",
    dest4_d:"Silk Road history, thermal baths, and mountain scenery.",
    dest5_d:"Lakes, forests, and Ottoman villages — nature's retreat.",
    why_eye:"Why Choose Us",
    why_t1:"Trusted by", why_t2:"Thousands",
    why_sub:"We've been serving international travelers since 2012 with dedication, reliability, and care.",
    why1_t:"TÜRSAB Certified", why1_d:"Officially licensed by the Turkish Ministry of Culture & Tourism.",
    why2_t:"Arabic-Speaking Team", why2_d:"Our staff speaks Arabic, Turkish, and English — no language barriers.",
    why3_t:"All-Inclusive Packages", why3_d:"Flights, hotels, transfers — we handle everything so you don't have to.",
    why4_t:"24/7 WhatsApp Support", why4_d:"We're always available to assist you, day or night.",
    w1_t:"TÜRSAB Certified", w1_d:"Officially licensed by the Turkish Ministry of Culture & Tourism.",
    w2_t:"Arabic-Speaking Team", w2_d:"Our staff speaks Arabic, Turkish, and English — no language barriers.",
    w3_t:"All-Inclusive Packages", w3_d:"Flights, hotels, transfers — we handle everything so you don't have to.",
    w4_t:"24/7 WhatsApp Support", w4_d:"We're always available to assist you, day or night.",
    w5_t:"Best Price Guarantee", w5_d:"Competitive rates with no hidden fees. Quality service at fair prices.",
    cli_eye:"Our Clients", cli_t1:"Travelers From", cli_t2:"Around the World",
    cli_sub:"We proudly serve guests from UAE, Saudi Arabia, Qatar, Kuwait, and beyond.",
    clients_eye:"Our Clients",
    clients_t1:"Travelers From", clients_t2:"Around the World",
    con_eye:"Get In Touch", con_t1:"Contact", con_t2:"Us",
    contact_eye:"Get In Touch",
    contact_t1:"Contact", contact_t2:"Us",
    wa_t:"Chat on WhatsApp", cert_eye:"— Official Certification",
    cert_t1:"TÜRSAB", cert_t2:"Licensed",
    cert_sub:"Officially licensed by the Turkish Ministry of Culture & Tourism.",
    since_lbl:"Operating Since", since_d:"12+ years of excellence",
    inq_title:"Book Your Trip", inq_sub:"Fill in the form below and we will contact you on WhatsApp within a few hours.",
    inq_name:"Full Name *", inq_phone:"Phone / WhatsApp *",
    inq_nationality:"Nationality", inq_service:"Service Needed",
    inq_date_from:"Travel Date (From)", inq_date_to:"Travel Date (To)",
    inq_adults:"Number of Adults", inq_dest:"Destination", inq_dest_lbl:"Destination",
    inq_notes:"Additional Notes", inq_submit:"Send Inquiry via WhatsApp ✈", inq_submit_short:"Inquire now →",
    inq_success_t:"Inquiry Sent!", inq_success_d:"We'll contact you on WhatsApp within a few hours. Thank you for choosing Al Aziziya Turizm!",
    back_home:"← Back to Home",
    footer_copy:"© 2025 Al Aziziya Turizm · Istanbul, Turkey",
    footer_lic:"TÜRSAB No. 15904 · Ömer Çeçen Turizm Seyahat Acentası",
    
    wa_new_inq: "*NEW BOOKING INQUIRY — Al Aziziya Turizm*",
    wa_name: "Name", wa_phone: "Phone/WhatsApp", wa_nat: "Nationality", wa_svc: "Service",
    wa_from: "Travel From", wa_to: "Travel To", wa_adults: "Adults", wa_dest: "Destination",
    wa_notes: "Notes", wa_sent: "Sent via alaziziyaturizm.com",
    
    opt_uae: "🇦🇪 United Arab Emirates", opt_ksa: "🇸🇦 Saudi Arabia", opt_qat: "🇶🇦 Qatar",
    opt_kuw: "🇰🇼 Kuwait", opt_bah: "🇧🇭 Bahrain", opt_oma: "🇴🇲 Oman", opt_ind: "🇮🇩 Indonesia",
    opt_mal: "🇲🇾 Malaysia", opt_tur: "🇹🇷 Turkey", opt_oth: "Other",
    opt_svc_full: "Full Package (Flights + Hotel + Transfer)",
    opt_svc_flight: "Flight Tickets Only",
    opt_svc_hotel: "Hotel Booking",
    opt_svc_car: "Car with Driver",
    opt_dest_ist: "Istanbul", opt_dest_cap: "Cappadocia", opt_dest_ant: "Antalya",
    opt_dest_bur: "Bursa", opt_dest_sap: "Sapanca", opt_dest_tra: "Trabzon", opt_dest_mult: "Multiple Cities",
  },
  ar: {
    nav_home:"الرئيسية", nav_svc:"خدماتنا", nav_fleet:"أسطولنا", nav_dest:"الوجهات",
    nav_why:"من نحن", nav_lic:"الترخيص", nav_book:"احجز الآن ✈",
    hero_tag:"وكالة سفر متميزة — إسطنبول",
    hero_t1:"رحلتك", hero_t2:"تبدأ", hero_t3:"من هنا",
    hero_sub:"موثوق من آلاف المسافرين من الإمارات والسعودية وقطر وغيرها. باقات شاملة، تذاكر، فنادق ونقل VIP — كل شيء في مكان واحد.",
    hero_btn1:"✈ احجز رحلتك", hero_btn2:"اكتشف تركيا ←",
    stat1:"رحلة ناجحة", stat2:"وجهة سياحية", stat3:"سنة خبرة", stat4:"معتمد",
    btn_book:"احجز رحلتك", btn_wa:"تواصل عبر واتساب",
    stat_trips:"رحلة ناجحة", stat_dest:"وجهة سياحية", stat_exp:"سنة خبرة", stat_cert:"معتمد",
    svc_eye:"ما نقدمه",
    svc_t1:"خدماتنا", svc_t2:"المميزة",
    svc_sub:"من التنقلات الفاخرة إلى الباقات السياحية الشاملة — نتكفل بكل شيء لتستمتع برحلتك.",
    svc1_name:"باقات سياحية شاملة", svc1_desc:"طيران + فندق + مواصلات — كل شيء مرتب لك.",
    svc2_name:"تذاكر الطيران", svc2_desc:"أفضل أسعار الرحلات الدولية والمحلية.",
    svc3_name:"حجز الفنادق", svc3_desc:"إقامات مختارة من الاقتصادية إلى الفاخرة في تركيا.",
    svc4_name:"سيارة مع سائق", svc4_desc:"نقل VIP خاص وجولات المدينة واستقبال المطار.",
    fleet_eye:"أسطولنا",
    fleet_t1:"مركبات مريحة &", fleet_t2:"راقية",
    fleet_sub:"جميع مركباتنا مكيفة وحديثة وتخضع لأعلى معايير الصيانة لراحتك.",
    fleet_cta:"احجز تنقلاً ←",
    dest_eye:"أبرز الوجهات",
    dest_t1:"اكتشف", dest_t2:"تركيا",
    dest_sub:"من كهوف كابادوكيا الساحرة إلى شواطئ أنطاليا الخلابة.",
    dest_btn:"عرض جميع الوجهات ←",
    dest1_d:"المدينة بين قارتين — تاريخ وثقافة ومطبخ رائع.",
    dest2_d:"المداخن الصخرية والمناطيد الهوائية والمدن تحت الأرض.",
    dest3_d:"شواطئ البحر المتوسط والأطلال الأثرية والمنتجعات الفاخرة.",
    dest4_d:"تاريخ طريق الحرير والحمامات الحرارية والمناظر الجبلية.",
    dest5_d:"بحيرات وغابات وقرى عثمانية — ملاذ الطبيعة.",
    why_eye:"لماذا نحن",
    why_t1:"موثوق من", why_t2:"الآلاف",
    why_sub:"نخدم المسافرين الدوليين منذ 2012 بالتفاني والموثوقية والاهتمام.",
    why1_t:"معتمد من TÜRSAB", why1_d:"مرخص رسمياً من وزارة الثقافة والسياحة التركية.",
    why2_t:"فريق ناطق بالعربية", why2_d:"فريقنا يتكلم العربية والتركية والإنجليزية — لا حواجز لغوية.",
    why3_t:"باقات شاملة", why3_d:"طيران وفنادق ونقل — نتولى كل شيء نيابةً عنك.",
    why4_t:"دعم واتساب 24/7", why4_d:"متاحون دائماً لمساعدتك في أي وقت.",
    w1_t:"معتمد من TÜRSAB", w1_d:"مرخص رسمياً من وزارة الثقافة والسياحة التركية.",
    w2_t:"فريق ناطق بالعربية", w2_d:"فريقنا يتكلم العربية والتركية والإنجليزية — لا حواجز لغوية.",
    w3_t:"باقات شاملة", w3_d:"طيران وفنادق ونقل — نتولى كل شيء.",
    w4_t:"دعم واتساب 24/7", w4_d:"متاحون دائماً لمساعدتك في أي وقت من الليل أو النهار.",
    w5_t:"ضمان أفضل سعر", w5_d:"أسعار تنافسية بدون رسوم خفية. خدمة بجودة عالية بأسعار عادلة.",
    cli_eye:"عملاؤنا", cli_t1:"مسافرون من", cli_t2:"حول العالم",
    cli_sub:"نفتخر بخدمة ضيوفنا من الإمارات والسعودية وقطر والكويت وغيرها.",
    clients_eye:"عملاؤنا",
    clients_t1:"مسافرون من", clients_t2:"حول العالم",
    con_eye:"تواصل معنا", con_t1:"اتصل", con_t2:"بنا",
    contact_eye:"تواصل معنا",
    contact_t1:"اتصل", contact_t2:"بنا",
    wa_t:"تواصل عبر واتساب", cert_eye:"— شهادة رسمية",
    cert_t1:"TÜRSAB", cert_t2:"معتمد",
    cert_sub:"مرخص رسمياً من وزارة الثقافة والسياحة التركية.",
    since_lbl:"نعمل منذ", since_d:"+12 سنة من التميز",
    inq_title:"احجز رحلتك", inq_sub:"املأ النموذج أدناه وسنتواصل معك عبر واتساب خلال ساعات قليلة.",
    inq_name:"الاسم الكامل *", inq_phone:"الهاتف / واتساب *",
    inq_nationality:"الجنسية", inq_service:"الخدمة المطلوبة",
    inq_date_from:"تاريخ السفر (من)", inq_date_to:"تاريخ السفر (إلى)",
    inq_adults:"عدد البالغين", inq_dest:"الوجهة", inq_dest_lbl:"الوجهة",
    inq_notes:"ملاحظات إضافية", inq_submit:"إرسال الاستفسار عبر واتساب ✈", inq_submit_short:"استفسر الآن ←",
    inq_success_t:"تم إرسال الاستفسار!", inq_success_d:"سنتواصل معك عبر واتساب خلال ساعات قليلة. شكراً لاختيارك العزيزية للسياحة!",
    back_home:"→ العودة إلى الرئيسية",
    footer_copy:"© 2025 العزيزية للسياحة · إسطنبول، تركيا",
    footer_lic:"TÜRSAB رقم 15904 · عمر تشيتشن للسياحة والسفر",
    
    wa_new_inq: "*طلب حجز جديد — العزيزية للسياحة*",
    wa_name: "الاسم", wa_phone: "الهاتف/واتساب", wa_nat: "الجنسية", wa_svc: "الخدمة",
    wa_from: "تاريخ السفر (من)", wa_to: "تاريخ السفر (إلى)", wa_adults: "البالغين", wa_dest: "الوجهة",
    wa_notes: "ملاحظات", wa_sent: "مرسل عبر alaziziyaturizm.com",
    
    opt_uae: "🇦🇪 الإمارات العربية المتحدة", opt_ksa: "🇸🇦 المملكة العربية السعودية", opt_qat: "🇶🇦 قطر",
    opt_kuw: "🇰🇼 الكويت", opt_bah: "🇧🇭 البحرين", opt_oma: "🇴🇲 عُمان", opt_ind: "🇮🇩 إندونيسيا",
    opt_mal: "🇲🇾 ماليزيا", opt_tur: "🇹🇷 تركيا", opt_oth: "أخرى",
    opt_svc_full: "باقة شاملة (طيران + فندق + تنقلات)",
    opt_svc_flight: "تذاكر طيران فقط",
    opt_svc_hotel: "حجز فندق",
    opt_svc_car: "سيارة مع سائق",
    opt_dest_ist: "إسطنبول", opt_dest_cap: "كابادوكيا", opt_dest_ant: "أنطاليا",
    opt_dest_bur: "بورصة", opt_dest_sap: "سبانجا", opt_dest_tra: "طرابزون", opt_dest_mult: "مدن متعددة",
  },
  tr: {
    nav_home:"Ana Sayfa", nav_svc:"Hizmetler", nav_fleet:"Araçlar", nav_dest:"Destinasyonlar",
    nav_why:"Hakkımızda", nav_lic:"Lisans", nav_book:"Rezervasyon ✈",
    hero_tag:"Premium Seyahat Acentası — İstanbul",
    hero_t1:"Yolculuğunuz", hero_t2:"Burada", hero_t3:"Başlıyor",
    hero_sub:"BAE, Suudi Arabistan, Katar ve çevreden binlerce gezgin tarafından güvenilen acentamız. Uçuş, otel, transfer — hepsi bir arada.",
    hero_btn1:"✈ Rezervasyon Yap", hero_btn2:"Türkiye'yi Keşfet →",
    stat1:"Mutlu Seyahat", stat2:"Destinasyon", stat3:"Yıl Deneyim", stat4:"Sertifikalı",
    btn_book:"Rezervasyon Yap", btn_wa:"WhatsApp'tan Yaz",
    stat_trips:"Mutlu Seyahat", stat_dest:"Destinasyon", stat_exp:"Yıl Deneyim", stat_cert:"Sertifikalı",
    svc_eye:"Hizmetlerimiz",
    svc_t1:"Premium", svc_t2:"Hizmetlerimiz",
    svc_sub:"Lüks transferlerden tam paket turlara kadar — her şeyi biz hallederiz, siz sadece keyif çıkarın.",
    svc1_name:"Tam Paket Turlar", svc1_desc:"Uçuş + Otel + Transfer — her şey ayarlanmış.",
    svc2_name:"Uçak Bileti", svc2_desc:"Uluslararası ve yurt içi en uygun fiyatlar.",
    svc3_name:"Otel Rezervasyonu", svc3_desc:"Türkiye genelinde bütçe ile lüks arasında seçkin konaklama.",
    svc4_name:"Şoförlü Araç", svc4_desc:"Özel VIP transfer, şehir turları ve havalimanı karşılama.",
    fleet_eye:"Araçlarımız",
    fleet_t1:"Konforlu &", fleet_t2:"Premium Araçlar",
    fleet_sub:"Tüm araçlarımız modern, klimalı ve en yüksek bakım standartlarında konforunuz için hazır.",
    fleet_cta:"Transfer Rezervasyonu →",
    dest_eye:"Popüler Destinasyonlar",
    dest_t1:"Türkiye'yi", dest_t2:"Keşfet",
    dest_sub:"Kapadokya'nın peri bacalarından Antalya'nın plajlarına kadar.",
    dest_btn:"Tüm Destinasyonları Gör →",
    dest1_d:"İki kıta arasındaki şehir — tarih, mutfak ve kültür.",
    dest2_d:"Peri bacaları, sıcak hava balonları ve yeraltı şehirleri.",
    dest3_d:"Akdeniz plajları, antik kalıntılar ve lüks tatil köyleri.",
    dest4_d:"İpek Yolu tarihi, kaplıcalar ve dağ manzaraları.",
    dest5_d:"Göller, ormanlar ve Osmanlı köyleri — doğanın sığınağı.",
    why_eye:"Neden Biz",
    why_t1:"Binlerce Kişi", why_t2:"Güveniyor",
    why_sub:"2012'den beri uluslararası gezginlere özveri ve güvenilirlikle hizmet veriyoruz.",
    why1_t:"TÜRSAB Sertifikalı", why1_d:"Türkiye Kültür ve Turizm Bakanlığı tarafından resmi lisanslı.",
    why2_t:"Arapça Konuşan Ekip", why2_d:"Ekibimiz Arapça, Türkçe ve İngilizce konuşuyor — dil engeli yok.",
    why3_t:"Her Şey Dahil Paketler", why3_d:"Uçuş, otel, transfer — her şeyi biz organize ediyoruz.",
    why4_t:"7/24 WhatsApp Destek", why4_d:"Gece gündüz yardıma hazırız.",
    w1_t:"TÜRSAB Sertifikalı", w1_d:"Türkiye Kültür ve Turizm Bakanlığı tarafından resmi lisanslı.",
    w2_t:"Arapça Konuşan Ekip", w2_d:"Ekibimiz Arapça, Türkçe ve İngilizce konuşuyor — dil engeli yok.",
    w3_t:"Her Şey Dahil Paketler", w3_d:"Uçuş, otel, transfer — her şeyi biz organize ediyoruz.",
    w4_t:"7/24 WhatsApp Destek", w4_d:"Gece gündüz yardıma hazırız.",
    w5_t:"En İyi Fiyat Garantisi", w5_d:"Gizli ücret yok, rekabetçi fiyatlar. Kaliteli hizmet, adil fiyat.",
    cli_eye:"Müşterilerimiz", cli_t1:"Dünyanın Her Yerinden", cli_t2:"Gezginler",
    cli_sub:"BAE, Suudi Arabistan, Katar, Kuveyt ve daha pek çok ülkeden misafirlerimize hizmet veriyoruz.",
    clients_eye:"Müşterilerimiz",
    clients_t1:"Dünyanın Her Yerinden", clients_t2:"Gezginler",
    con_eye:"İletişim", con_t1:"Bize", con_t2:"Ulaşın",
    contact_eye:"İletişim",
    contact_t1:"Bize", contact_t2:"Ulaşın",
    wa_t:"WhatsApp'tan Yaz", cert_eye:"— Resmi Sertifika",
    cert_t1:"TÜRSAB", cert_t2:"Lisanslı",
    cert_sub:"Türkiye Kültür ve Turizm Bakanlığı tarafından resmi olarak lisanslanmıştır.",
    since_lbl:"Kuruluş Yılı", since_d:"12+ yıllık mükemmellik",
    inq_title:"Rezervasyon Yap", inq_sub:"Aşağıdaki formu doldurun, birkaç saat içinde WhatsApp üzerinden sizinle iletişime geçeceğiz.",
    inq_name:"Adınız Soyadınız *", inq_phone:"Telefon / WhatsApp *",
    inq_nationality:"Uyruk", inq_service:"İstenen Hizmet",
    inq_date_from:"Seyahat Tarihi (Başlangıç)", inq_date_to:"Seyahat Tarihi (Bitiş)",
    inq_adults:"Yetişkin Sayısı", inq_dest:"Destinasyon", inq_dest_lbl:"Destinasyon",
    inq_notes:"Ek Notlar", inq_submit:"WhatsApp ile Talep Gönder ✈",
    inq_success_t:"Talebiniz Alındı!", inq_success_d:"Birkaç saat içinde WhatsApp üzerinden sizinle iletişime geçeceğiz. Al Aziziya Turizm'i seçtiğiniz için teşekkürler!",
    back_home:"← Ana Sayfaya Dön",
    footer_copy:"© 2025 Al Aziziya Turizm · İstanbul, Türkiye",
    footer_lic:"TÜRSAB No. 15904 · Ömer Çeçen Turizm Seyahat Acentası",
    
    wa_new_inq: "*YENİ REZERVASYON TALEBİ — Al Aziziya Turizm*",
    wa_name: "İsim", wa_phone: "Telefon/WhatsApp", wa_nat: "Uyruk", wa_svc: "Hizmet",
    wa_from: "Seyahat Tarihi (Gidiş)", wa_to: "Seyahat Tarihi (Dönüş)", wa_adults: "Yetişkinler", wa_dest: "Destinasyon",
    wa_notes: "Notlar", wa_sent: "alaziziyaturizm.com üzerinden gönderildi",
    
    opt_uae: "🇦🇪 Birleşik Arap Emirlikleri", opt_ksa: "🇸🇦 Suudi Arabistan", opt_qat: "🇶🇦 Katar",
    opt_kuw: "🇰🇼 Kuveyt", opt_bah: "🇧🇭 Bahreyn", opt_oma: "🇴🇲 Umman", opt_ind: "🇮🇩 Endonezya",
    opt_mal: "🇲🇾 Malezya", opt_tur: "🇹🇷 Türkiye", opt_oth: "Diğer",
    opt_svc_full: "Tam Paket (Uçuş + Otel + Transfer)",
    opt_svc_flight: "Sadece Uçak Bileti",
    opt_svc_hotel: "Otel Rezervasyonu",
    opt_svc_car: "Şoförlü Araç",
    opt_dest_ist: "İstanbul", opt_dest_cap: "Kapadokya", opt_dest_ant: "Antalya",
    opt_dest_bur: "Bursa", opt_dest_sap: "Sapanca", opt_dest_tra: "Trabzon", opt_dest_mult: "Birden Fazla Şehir",
  }
};

let currentLang = localStorage.getItem('al_aziziya_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('al_aziziya_lang', lang);
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('.tkey').forEach(el => {
    const key = el.dataset.key;
    if (t && t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.lpill').forEach(p => {
    p.classList.toggle('on', p.textContent.toLowerCase() === lang);
  });
  // RTL for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('stuck', window.scrollY > 60);

  // Side planes
  const pl = document.getElementById('plane-left');
  const pr = document.getElementById('plane-right');
  if (pl && pr) {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    pl.style.opacity = pr.style.opacity = window.scrollY > 200 ? '0.55' : '0';
    pl.style.top = pr.style.top = (20 + pct * 60) + '%';
  }
});

/* ── MOBILE MENU ── */
function toggleMenu() {
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob-menu');
  if (ham && mob) {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  }
}

function closeMobNav() {
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob-menu');
  if (ham) ham.classList.remove('open');
  if (mob) mob.classList.remove('open');
}

/* ── SCROLL TO SECTION ── */
function scrollToSec(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('on');
  });
}, { threshold: 0.12 });

function initReveal() {
  document.querySelectorAll('.rv,.rvl,.rvr').forEach(r => obs.observe(r));
}

/* ── LOADER ── */
function hideLoader() {
  const ldr = document.getElementById('ldr');
  if (ldr) setTimeout(() => ldr.classList.add('off'), 900);
}

/* ── THREE.JS PARTICLE CANVAS ── */
function initThree() {
  const canvas = document.getElementById("three-bg");
  if (!canvas || typeof THREE === "undefined") return;
  const R = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "low-power" });
  R.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  R.setSize(innerWidth, innerHeight);
  const S = new THREE.Scene(), C = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 800);
  C.position.z = 28;
  S.add(new THREE.AmbientLight(0x5BC8F5, 0.3));
  const dl = new THREE.DirectionalLight(0xFFD600, 0.9);
  dl.position.set(10, 8, 8);
  S.add(dl);
  const pl = new THREE.PointLight(0x5BC8F5, 1.8, 50);
  pl.position.set(-10, 5, 8);
  S.add(pl);
  const sg = new THREE.BufferGeometry(), sp = new Float32Array(500 * 3);
  for (let i = 0; i < 500 * 3; i++) sp[i] = (Math.random() - .5) * 120;
  sg.setAttribute("position", new THREE.BufferAttribute(sp, 3));
  S.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.5 })));
  const pg = new THREE.Group();
  const bm = new THREE.MeshPhongMaterial({ color: 0x1a2a3a, shininess: 100 });
  const ym = new THREE.MeshPhongMaterial({ color: 0xFFD600, shininess: 140, side: THREE.DoubleSide });
  const bm2 = new THREE.MeshPhongMaterial({ color: 0x5BC8F5, shininess: 120, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.4, 7.5, 16), bm);
  body.rotation.z = Math.PI / 2;
  pg.add(body);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.4, 2.2, 14), new THREE.MeshPhongMaterial({ color: 0x5BC8F5, shininess: 200 }));
  nose.rotation.z = -Math.PI / 2;
  nose.position.x = 4.8;
  pg.add(nose);
  const tc = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.6, 14), bm);
  tc.rotation.z = Math.PI / 2;
  tc.position.x = -4.4;
  pg.add(tc);
  const ws = new THREE.Shape();
  ws.moveTo(0, 0); ws.lineTo(1.8, 0); ws.lineTo(3.2, -6); ws.lineTo(0.6, -4.5); ws.lineTo(0, 0);
  const wT = new THREE.Mesh(new THREE.ShapeGeometry(ws), ym);
  wT.position.set(0.6, 0, -0.65);
  pg.add(wT);
  const wB = wT.clone();
  wB.scale.z = -1;
  wB.position.z = 0.65;
  pg.add(wB);
  const vts = new THREE.Shape();
  vts.moveTo(0, 0); vts.lineTo(-2.2, 0); vts.lineTo(-1.7, 2.8); vts.lineTo(0.4, 2.8); vts.lineTo(0, 0);
  const vt = new THREE.Mesh(new THREE.ShapeGeometry(vts), bm2);
  vt.position.set(-3, 0.5, 0);
  vt.rotation.x = Math.PI / 2;
  pg.add(vt);
  const hs = new THREE.Shape();
  hs.moveTo(0, 0); hs.lineTo(-1, 0); hs.lineTo(-2, -2.7); hs.lineTo(0.3, -2); hs.lineTo(0, 0);
  const hT = new THREE.Mesh(new THREE.ShapeGeometry(hs), ym);
  hT.position.set(-3.1, 0.1, -0.35);
  pg.add(hT);
  const hB = hT.clone();
  hB.scale.z = -1;
  hB.position.z = 0.35;
  pg.add(hB);
  [-2.7, 2.7].forEach(z => {
    const e = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.3, 1.3, 12), bm);
    e.rotation.z = Math.PI / 2;
    e.position.set(0.9, -0.65, z);
    pg.add(e);
    const g = new THREE.Mesh(new THREE.CircleGeometry(0.28, 12), new THREE.MeshPhongMaterial({ color: 0xFFD600, emissive: 0xFFD600, emissiveIntensity: 0.5 }));
    g.rotation.y = Math.PI / 2;
    g.position.set(-0.1, -0.65, z);
    pg.add(g);
  });
  pg.position.set(-42, -20, -5);
  pg.rotation.y = -0.3;
  pg.rotation.z = 0.3;
  S.add(pg);
  const trN = 160, trG = new THREE.BufferGeometry(), trP = new Float32Array(trN * 3);
  trG.setAttribute("position", new THREE.BufferAttribute(trP, 3));
  const trM = new THREE.PointsMaterial({ color: 0x5BC8F5, size: 0.18, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  S.add(new THREE.Points(trG, trM));
  const trH = [];
  const rg = new THREE.Group();
  [[5, 0x5BC8F5, 0.08], [8.5, 0xFFD600, 0.06], [12, 0x5BC8F5, 0.04]].forEach(([r, c, op], i) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.05, 6, 60), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: op }));
    m.rotation.x = Math.PI / 2 + (i * 0.3);
    rg.add(m);
  });
  rg.position.set(-6, 0, -6);
  S.add(rg);
  let phase = "intro", iT = 0;
  const clk = new THREE.Clock();
  let mx = 0, my = 0;
  document.addEventListener("mousemove", e => { mx = (e.clientX / innerWidth - .5) * 2; my = -(e.clientY / innerHeight - .5) * 2; }, { passive: true });
  function eOut(t) { return 1 - Math.pow(1 - t, 3); }
  let raf;
  function anim() {
    if (!document.getElementById("page-home").classList.contains("active")) { raf = requestAnimationFrame(anim); return; }
    raf = requestAnimationFrame(anim);
    const dt = clk.getDelta(), el = clk.getElapsedTime();
    if (phase === "intro") {
      iT = Math.min(iT + dt * 0.36, 1);
      const t = eOut(iT);
      pg.position.x = THREE.MathUtils.lerp(-42, 5, t);
      pg.position.y = THREE.MathUtils.lerp(-20, 1.5, t);
      pg.position.z = THREE.MathUtils.lerp(-5, 2, t);
      pg.rotation.z = THREE.MathUtils.lerp(0.3, 0, t);
      pg.rotation.y = THREE.MathUtils.lerp(-0.3, 0.15, t);
      pg.scale.setScalar(THREE.MathUtils.lerp(0.2, 1, t));
      trM.opacity = t * 0.6;
      if (iT >= 1) phase = "cruise";
    }
    if (phase === "cruise") {
      pg.position.y = 1.5 + Math.sin(el * 0.65) * 0.9;
      pg.rotation.z = Math.sin(el * 0.48) * 0.05;
      pg.rotation.y = 0.15 + mx * 0.09;
      pg.rotation.x = my * 0.055;
      pg.position.x = 5 + mx * 1.6;
    }
    const wp = new THREE.Vector3();
    pg.getWorldPosition(wp);
    trH.unshift({ x: wp.x - 3.5, y: wp.y + (Math.random() - .5) * 0.09, z: wp.z });
    if (trH.length > trN) trH.pop();
    const ta = trG.attributes.position.array;
    for (let i = 0; i < trH.length; i++) {
      ta[i * 3] = trH[i].x + (Math.random() - .5) * 0.1;
      ta[i * 3 + 1] = trH[i].y + (Math.random() - .5) * 0.07;
      ta[i * 3 + 2] = trH[i].z;
    }
    trG.attributes.position.needsUpdate = true;
    rg.children.forEach((r, i) => { r.rotation.z += dt * (i % 2 === 0 ? .16 : -.12); });
    R.render(S, C);
  }
  anim();
  window.addEventListener("resize", () => { C.aspect = innerWidth / innerHeight; C.updateProjectionMatrix(); R.setSize(innerWidth, innerHeight); }, { passive: true });
}

window.addEventListener("load", () => {
  const s = document.createElement("script");
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  s.onload = initThree;
  document.head.appendChild(s);
});

/* ── WHATSAPP INQUIRY SUBMISSION ── */
const WHATSAPP_NUMBER = '905438183463';

function submitInquiry(e) {
  e.preventDefault();

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];

  const name    = document.getElementById('f-name')?.value || '';
  const phone   = document.getElementById('f-phone')?.value || '';

  const cSel    = document.getElementById('f-country');
  const country = cSel ? cSel.options[cSel.selectedIndex].text : '';

  const sSel    = document.getElementById('f-service');
  const service = sSel ? sSel.options[sSel.selectedIndex].text : '';

  const dateFrom = document.getElementById('f-date-from')?.value || '';
  const dateTo   = document.getElementById('f-date-to')?.value || '';
  const adults   = document.getElementById('f-adults')?.value || '1';

  const dSel = document.getElementById('f-dest');
  const dest = dSel ? dSel.options[dSel.selectedIndex].text : '';

  const notes = document.getElementById('f-notes')?.value || '';

  // ── Save to MongoDB via Vercel API (fire-and-forget) ──
  const inquiryData = {
    name, phone,
    nationality: country,
    service,
    dateFrom,
    dateTo,
    adults,
    destination: dest,
    notes,
    lang: currentLang || 'en'
  };

  fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiryData)
  }).catch(err => console.warn('Could not save inquiry to database:', err));
  // ─────────────────────────────────────────────────────

  // Build WhatsApp message in selected language
  const lines = [
    t.wa_new_inq || '*NEW BOOKING INQUIRY — Al Aziziya Turizm*',
    '',
    `*${t.wa_name || 'Name'}:* ${name}`,
    `*${t.wa_phone || 'Phone/WhatsApp'}:* ${phone}`,
    `*${t.wa_nat || 'Nationality'}:* ${country}`,
    `*${t.wa_svc || 'Service'}:* ${service}`,
    dateFrom ? `*${t.wa_from || 'Travel From'}:* ${dateFrom}` : null,
    dateTo   ? `*${t.wa_to || 'Travel To'}:*   ${dateTo}`   : null,
    `*${t.wa_adults || 'Adults'}:* ${adults}`,
    dest  ? `*${t.wa_dest || 'Destination'}:* ${dest}` : null,
    notes ? `*${t.wa_notes || 'Notes'}:* ${notes}` : null,
    '',
    `_${t.wa_sent || 'Sent via alaziziyaturizm.com'}_`
  ].filter(Boolean).join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
  window.open(url, '_blank');

  // Show success state
  const formBody = document.getElementById('inq-form-body');
  const success  = document.getElementById('inq-success');
  if (formBody) formBody.style.display = 'none';
  if (success)  success.style.display = 'block';
}

/* ── INQUIRY PAGE SETUP ── */
function initInquiryPage() {
  // Read URL params to pre-fill destination and hero
  const params = new URLSearchParams(window.location.search);
  const city   = params.get('city') || 'istanbul';
  const service = params.get('service') || '';

  const CITIES = {
    cappadocia: { title:'Trip to Cappadocia', icon:'🎈', art:'art-cappadocia', dest:'Cappadocia', sub:'Plan your Cappadocia adventure — hot air balloons, cave hotels, fairy chimneys.' },
    istanbul:   { title:'Book Your Trip',      icon:'✈️', art:'art-istanbul',   dest:'Istanbul',   sub:'Our team will arrange flights, hotels, transfers and more for you.' },
    antalya:    { title:'Trip to Antalya',     icon:'🏖️', art:'art-antalya',   dest:'Antalya',    sub:'Discover Antalya — turquoise Mediterranean coast, ancient ruins, and luxury resorts.' },
    bursa:      { title:'Trip to Bursa',       icon:'🕌', art:'art-bursa',      dest:'Bursa',      sub:'Experience Bursa — Ottoman heritage, Green Mosque, Uludağ mountain, and fresh air.' },
    sapanca:    { title:'Trip to Sapanca',     icon:'🌿', art:'art-sapanca',    dest:'Sapanca',    sub:'Escape to Sapanca — peaceful lakeside retreats, forests, and nature walks.' }
  };

  const info = CITIES[city] || CITIES.istanbul;

  // Set hero content
  const iconEl  = document.getElementById('inq-icon');
  const titleEl = document.getElementById('inq-title');
  const subEl   = document.getElementById('inq-sub');
  const artEl   = document.getElementById('inq-art');

  if (iconEl)  iconEl.textContent  = info.icon;
  if (titleEl) titleEl.textContent = info.title;
  if (subEl)   subEl.textContent   = info.sub;
  if (artEl)   artEl.className     = `inq-hero-art ${info.art}`;

  // Pre-fill destination select
  const destSel = document.getElementById('f-dest');
  if (destSel && info.dest) {
    for (let opt of destSel.options) {
      if (opt.value.toLowerCase() === info.dest.toLowerCase()) {
        opt.selected = true;
        break;
      }
    }
  }

  // Pre-fill service if passed
  if (service) {
    const svcSel = document.getElementById('f-service');
    if (svcSel) {
      for (let opt of svcSel.options) {
        if (opt.value.toLowerCase().includes(service.toLowerCase())) {
          opt.selected = true;
          break;
        }
      }
    }
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
  initReveal();
  // initThree is called by the dynamically injected script now

  // Set language from localStorage
  if (currentLang && currentLang !== 'en') {
    setLang(currentLang);
  }

  // Check if on inquiry page
  if (document.getElementById('inq-icon')) {
    initInquiryPage();
  }

  // Set min date for travel date inputs
  const today = new Date().toISOString().split('T')[0];
  const df = document.getElementById('f-date-from');
  const dt = document.getElementById('f-date-to');
  if (df) df.min = today;
  if (dt) dt.min = today;
  if (df) df.addEventListener('change', () => { if (dt) dt.min = df.value; });
});

/* ── ROUTING ── */
window.showHome = function() {
  if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    window.location.href = 'index.html';
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
};

window.scrollToSec = function(id) {
  if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    window.location.href = 'index.html#' + id;
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Handle \`scrollTo('id')\` which is used in nav
const originalScrollTo = window.scrollTo;
window.scrollTo = function() {
  if (arguments.length === 1 && typeof arguments[0] === 'string') {
    window.scrollToSec(arguments[0]);
  } else {
    originalScrollTo.apply(window, arguments);
  }
};

window.openInquiry = function(opts) {
  let url = 'inquiry.html?';
  if (opts.dest) url += 'city=' + encodeURIComponent(opts.dest.toLowerCase()) + '&';
  if (opts.service) url += 'service=' + encodeURIComponent(opts.service) + '&';
  window.location.href = url;
};

window.openCityInquiry = function(city) {
  window.location.href = 'inquiry.html?city=' + encodeURIComponent(city);
};
