import type { Service, SubService } from "@/types";

// Sub-services for each category
const mobileSubServices: SubService[] = [
  { name: "Screen Replacement",       desc: "Cracked or unresponsive display replaced with quality parts",             icon: "🖥️",  price: "₹500–₹3,500" },
  { name: "Battery Replacement",      desc: "Swollen or draining battery replaced with 6-month warranty",              icon: "🔋",  price: "₹400–₹1,500" },
  { name: "Charging Port Repair",     desc: "Loose, bent or broken charging port fixed or replaced",                   icon: "🔌",  price: "₹300–₹800"   },
  { name: "Speaker & Mic Repair",     desc: "No sound, muffled audio or mic not working — fixed on the spot",         icon: "🔊",  price: "₹300–₹700"   },
  { name: "Back Glass / Cover",       desc: "Shattered back glass or broken cover professionally replaced",            icon: "📱",  price: "₹300–₹1,200" },
  { name: "Water Damage Repair",      desc: "Thorough internal cleaning and component restoration after water damage", icon: "💧",  price: "₹500–₹2,000" },
  { name: "Software Fix & Flashing",  desc: "Hang, boot loops, crashes, or data recovery — all software issues",      icon: "💻",  price: "₹200–₹500"   },
  { name: "Camera Repair",            desc: "Blurry, black or broken front or rear camera fixed",                     icon: "📷",  price: "₹400–₹1,800" },
  { name: "Headphone Jack Repair",    desc: "No audio output from headphones — jack cleaned or replaced",             icon: "🎧",  price: "₹200–₹500"   },
  { name: "SIM / SD Card Slot Repair",desc: "SIM not detected or SD card slot damaged — repaired same day",           icon: "📟",  price: "₹250–₹600"   },
];

const laptopSubServices: SubService[] = [
  { name: "Screen Replacement",       desc: "Cracked, flickering or dead laptop screen replaced at your home",        icon: "🖥️",  price: "₹2,500–₹8,000" },
  { name: "Battery Replacement",      desc: "Laptop not holding charge — genuine battery fitted with warranty",        icon: "🔋",  price: "₹1,500–₹4,500" },
  { name: "Keyboard Replacement",     desc: "Dead keys, spilled liquid or broken keyboard — full replacement",        icon: "⌨️",  price: "₹800–₹2,500"   },
  { name: "RAM Upgrade",              desc: "Slow laptop made faster with 8GB, 16GB or 32GB RAM upgrade",             icon: "💾",  price: "₹1,800–₹5,000" },
  { name: "SSD / HDD Upgrade",        desc: "Replace slow HDD with fast SSD — data safely migrated",                 icon: "💿",  price: "₹2,500–₹8,000" },
  { name: "Virus & Malware Removal",  desc: "Full system scan, virus removal and security setup",                     icon: "🛡️",  price: "₹500–₹1,000"   },
  { name: "OS Installation",          desc: "Windows 10/11, Linux or macOS clean install with all drivers",           icon: "🪟",  price: "₹500–₹1,000"   },
  { name: "Cooling Fan Repair",       desc: "Overheating laptop — fan cleaned or replaced, thermal paste reapplied",  icon: "🌀",  price: "₹600–₹1,500"   },
  { name: "Hinge Repair",             desc: "Broken or stiff lid hinge repaired or replaced",                        icon: "🔧",  price: "₹500–₹2,000"   },
  { name: "Motherboard Diagnostics",  desc: "No power, short circuit or component failure — board-level diagnosis",   icon: "🔬",  price: "₹500 diag" },
];

const pickupSubServices: SubService[] = [
  { name: "Same-Day Pickup",          desc: "Device collected from your address — usually within 1–2 hours",          icon: "🚗",  price: "Free"  },
  { name: "Same-Day Return",          desc: "Repaired device delivered back the same day in most cases",              icon: "📦",  price: "Free"  },
  { name: "20km Free Zone",           desc: "Free pickup & delivery within 20km across South Bengaluru",             icon: "📍",  price: "Free"  },
  { name: "WhatsApp Tracking",        desc: "Live updates on repair status — from collection to delivery",           icon: "💬",  price: "Free"  },
  { name: "Secure Handling",          desc: "Your device is handled carefully and a receipt is provided at pickup",   icon: "🔒",  price: "Free"  },
  { name: "All Devices Accepted",     desc: "Mobile phones, tablets, laptops, smartwatches — all accepted",          icon: "📱",  price: "Free"  },
];

const accessoriesSubServices: SubService[] = [
  { name: "Phone Cases & Covers",     desc: "Hard, soft, flip and clear covers for all phone models",                icon: "📱",  price: "₹99–₹499"  },
  { name: "Fast Chargers",            desc: "Original and compatible fast chargers for all brands",                  icon: "⚡",  price: "₹199–₹799" },
  { name: "Type-C & Lightning Cables",desc: "Braided, original-grade cables in 1m and 2m lengths",                  icon: "🔌",  price: "₹99–₹399"  },
  { name: "Bluetooth Earphones",      desc: "TWS earbuds and over-ear headphones — all price ranges",               icon: "🎧",  price: "₹299–₹1,999"},
  { name: "Power Banks",              desc: "10,000 mAh to 20,000 mAh power banks with fast charging",              icon: "🔋",  price: "₹799–₹2,499"},
  { name: "Screen Protectors",        desc: "Tempered glass and plastic screen protectors for all models",          icon: "🛡️",  price: "₹49–₹299"  },
  { name: "OTG & Adapters",           desc: "USB OTG, Type-C to 3.5mm, HDMI and multi-port adapters",              icon: "🔄",  price: "₹99–₹499"  },
  { name: "Pop Sockets & Holders",    desc: "Phone grips, ring holders, car mounts and kickstands",                 icon: "💡",  price: "₹99–₹349"  },
];

const temperedGlassSubServices: SubService[] = [
  { name: "Standard Tempered Glass",  desc: "Clear 9H hardness flat tempered glass — bubble-free fitting",           icon: "🛡️",  price: "₹99–₹199"  },
  { name: "UV Curved Glass",          desc: "Edge-to-edge curved UV glass for Samsung S and Note series",            icon: "✨",  price: "₹199–₹499" },
  { name: "Privacy Glass",            desc: "Anti-spy glass — only visible straight-on, perfect for commuters",     icon: "👁️",  price: "₹149–₹399" },
  { name: "Matte Anti-Glare Glass",   desc: "Fingerprint-resistant matte finish — ideal for outdoor use",            icon: "🌥️",  price: "₹149–₹349" },
  { name: "Full-Glue Edge-to-Edge",   desc: "Adhesive on full surface for seamless, gap-free coverage",             icon: "📐",  price: "₹149–₹299" },
  { name: "Back Glass Protection",    desc: "Tempered glass for phone back to prevent scratches and cracks",         icon: "📱",  price: "₹99–₹249"  },
];

const simCardSubServices: SubService[] = [
  { name: "New SIM Connection",       desc: "Brand new Airtel, Jio, Vi or BSNL connection activated at your home",  icon: "📡",  price: "Free"     },
  { name: "Number Portability (MNP)", desc: "Switch operator while keeping your existing mobile number",            icon: "🔁",  price: "Free"     },
  { name: "5G SIM Upgrade",           desc: "Upgrade from 4G to 5G SIM — same number, same balance",               icon: "5️⃣",  price: "Free"     },
  { name: "Home KYC Verification",    desc: "Aadhaar-based eKYC done at your doorstep — no paperwork hassle",      icon: "✅",  price: "Free"     },
  { name: "Recharge & Data Plans",    desc: "Best plan recommendations and recharge assistance for all operators",  icon: "📊",  price: "Free"     },
  { name: "Corporate / Bulk SIMs",    desc: "Multiple SIMs for offices or teams — handled at your location",       icon: "🏢",  price: "Contact"  },
];

const mobileLoansSubServices: SubService[] = [
  { name: "New Phone on EMI",         desc: "All major brands on 3–24 month EMI with low down payment",             icon: "📱",  price: "₹0 EMI starts" },
  { name: "Zero Down Payment",        desc: "Eligible customers can get a new phone with ₹0 down payment",         icon: "🎁",  price: "Subject to approval" },
  { name: "Home Loan Application",    desc: "Loan form filled and submitted at your home — no need to visit branch", icon: "🏠", price: "Free service" },
  { name: "Exchange Old Phone",       desc: "Get best exchange value for your old phone — added to down payment",  icon: "🔄",  price: "Best price" },
  { name: "Corporate / Bulk Orders",  desc: "Multiple phones for teams or offices — bulk pricing available",       icon: "🏢",  price: "Contact us" },
  { name: "1-Hour Delivery",          desc: "Phone delivered within 1 hour of loan approval — straight to your door",icon: "⚡", price: "Free delivery" },
];

export const services: Service[] = [
  {
    id: "mobile-repair",
    slug: "mobile-repair",
    title: "Mobile Repairing at Your Home",
    shortTitle: "Mobile Repair",
    shortDesc: "Screen, battery, software — fixed at your door.",
    description:
      "Our certified technician comes directly to your home or office and repairs your mobile in front of you. Screen replacements done in under 45 minutes.",
    icon: "Smartphone",
    image: "/images/services/mobile-repair.webp",
    features: ["Screen Replacement", "Battery Change", "Software Fix", "Charging Port Repair"],
    subServices: mobileSubServices,
    ctaMessage: "Hi, I need mobile repair at home",
    badge: "Most Popular",
    badgeColor: "saffron",
    heroTagline: "Screen Cracked? We Fix It at Your Door in 45 Minutes",
    fullDescription:
      "Don't waste time traveling to a repair shop. Our certified mobile repair technician arrives at your home or office across South Bengaluru and fixes your phone right in front of you. We carry all genuine parts — screens, batteries, charging ports — for all major brands including Samsung, iPhone, OnePlus, Oppo, Vivo, Realme, and Redmi. Screen replacements are typically done in under 45 minutes. You pay only after the repair is complete.",
    faqs: [
      {
        q: "How long does a screen replacement take?",
        a: "Most screen replacements are completed in 30–45 minutes at your doorstep.",
      },
      {
        q: "Do you carry parts for all phone brands?",
        a: "Yes — we stock parts for Samsung, iPhone, OnePlus, Oppo, Vivo, Realme, Redmi, and most other brands.",
      },
      {
        q: "Is there a warranty on the repair?",
        a: "All our repairs come with a 6-month warranty on parts and labour.",
      },
      {
        q: "Do I need to pay before the repair?",
        a: "No advance payment required. You pay only after you are satisfied with the repair.",
      },
      {
        q: "What areas do you cover?",
        a: "We cover all of South Bengaluru within a 20km radius — Electronic City, Hosa Road, GK Layout, HSR Layout, BTM Layout, JP Nagar and more.",
      },
    ],
    metaTitle: "Mobile Repair at Home — Electronic City & South Bengaluru | AS MS",
    metaDescription:
      "Doorstep mobile repair in Electronic City, Hosa Road, GK Layout. Screen replacement, battery change, software fix — certified technician at your home. Pay after repair.",
  },
  {
    id: "laptop-repair",
    slug: "laptop-repair",
    title: "Laptop Repair at Your Doorstep",
    shortTitle: "Laptop Repair",
    shortDesc: "All brands. All issues. We come to you.",
    description:
      "HP, Dell, Lenovo, Asus, MacBook — we repair all laptops at your doorstep. Screen replacements, battery changes, keyboard fixes and OS installations.",
    icon: "Laptop",
    image: "/images/services/laptop-repair.webp",
    features: ["Screen Replacement", "Battery Change", "Keyboard Repair", "OS Installation"],
    subServices: laptopSubServices,
    ctaMessage: "Hi, I need laptop repair at home",
    badge: "New",
    badgeColor: "blue",
    heroTagline: "Laptop Not Working? Our Technician Comes to You",
    fullDescription:
      "Whether your laptop screen is broken, battery won't hold charge, keyboard has failed, or Windows needs reinstalling — our expert technician comes to your home and fixes it. We service all brands: HP, Dell, Lenovo, Asus, Acer, MacBook, and more. No need to pack up your laptop and travel. We bring the tools, parts, and expertise directly to your doorstep across South Bengaluru.",
    faqs: [
      {
        q: "Do you repair MacBooks as well?",
        a: "Yes, we repair MacBooks along with all Windows laptop brands including HP, Dell, Lenovo, Asus, and Acer.",
      },
      {
        q: "Can you reinstall Windows or macOS at home?",
        a: "Absolutely. We can install or reinstall Windows, Linux, or macOS at your doorstep — including driver setup.",
      },
      {
        q: "How long does a laptop screen replacement take?",
        a: "Most laptop screen replacements are completed in 45–90 minutes depending on the model.",
      },
      {
        q: "What if you need to order a part for my laptop?",
        a: "If we don't have your part in stock, we order it and return for the repair — usually within 1–2 days.",
      },
    ],
    metaTitle: "Laptop Repair at Home — All Brands | AS MS Electronic City",
    metaDescription:
      "Doorstep laptop repair in South Bengaluru — HP, Dell, Lenovo, MacBook. Screen, battery, keyboard, OS installation. Certified technician at your home. Pay after repair.",
  },
  {
    id: "free-pickup",
    slug: "free-pickup",
    title: "Free Pickup & Delivery",
    shortTitle: "Free Pickup",
    shortDesc: "We collect, fix, and return — you relax.",
    description:
      "Can't wait at home? No problem. We pick up your device, repair it at our shop, and deliver it back — all for free within our 20km service zone.",
    icon: "Truck",
    image: "/images/services/pickup.webp",
    features: ["Free Collection", "Free Delivery", "20km Zone", "Same-Day Return"],
    subServices: pickupSubServices,
    ctaMessage: "Hi, I need free pickup and delivery for repair",
    heroTagline: "Can't Wait at Home? We Collect, Fix & Return for Free",
    fullDescription:
      "Our free pickup and delivery service is perfect when you can't wait at home. Simply WhatsApp us, and our technician collects your device from your address, repairs it at our shop in GK Layout, and delivers it back — all at no extra charge within our 20km service zone. Most repairs are returned the same day.",
    faqs: [
      {
        q: "Is the pickup and delivery really free?",
        a: "Yes — both collection and delivery are completely free within our 20km South Bengaluru service zone.",
      },
      {
        q: "How long will my device be away?",
        a: "Most repairs are completed and returned the same day. Complex repairs may take up to 24 hours.",
      },
      {
        q: "How do I track my device?",
        a: "We keep you updated via WhatsApp from the moment we collect your device to when it is ready for delivery.",
      },
      {
        q: "Do you cover my area?",
        a: "We cover all of South Bengaluru within 20km — Electronic City, Hosa Road, HSR Layout, BTM Layout, JP Nagar, Sarjapur Road and more.",
      },
    ],
    metaTitle: "Free Device Pickup & Delivery — South Bengaluru | AS MS",
    metaDescription:
      "Free mobile and laptop pickup and delivery for repair in South Bengaluru. We collect, fix, and return your device. Same-day turnaround within 20km.",
  },
  {
    id: "accessories",
    slug: "accessories",
    title: "Mobile Accessories — Home Delivery",
    shortTitle: "Accessories",
    shortDesc: "Cases, chargers, earphones — delivered to your door.",
    description:
      "All mobile phone accessories available for home delivery. Genuine chargers, premium cases, earphones, cables and more — delivered same day.",
    icon: "ShoppingBag",
    image: "/images/services/accessories.webp",
    features: ["Chargers & Cables", "Cases & Covers", "Earphones", "Screen Protectors"],
    subServices: accessoriesSubServices,
    ctaMessage: "Hi, I want to order mobile accessories",
    badgeColor: "saffron",
    heroTagline: "All Mobile Accessories Delivered to Your Home",
    fullDescription:
      "From a fast charger to a premium phone case, we deliver all mobile accessories right to your address in South Bengaluru. We stock genuine and compatible chargers, Type-C and Lightning cables, Bluetooth earphones, wired headphones, phone cases for all models, screen protectors, power banks, and more. Same-day delivery available — just WhatsApp us your model and what you need.",
    faqs: [
      {
        q: "Do you stock accessories for all phone models?",
        a: "Yes — we carry accessories for all major brands and models. WhatsApp us your model number and we'll confirm availability.",
      },
      {
        q: "Are the chargers and cables genuine?",
        a: "We stock both OEM (original) and high-quality compatible accessories. We clearly tell you which is which before you buy.",
      },
      {
        q: "Can I get same-day delivery?",
        a: "Yes, same-day delivery is available for most accessories within our 20km service zone.",
      },
      {
        q: "What if the accessory doesn't fit my phone?",
        a: "We accept exchanges if the accessory is in unused condition. WhatsApp us and we'll sort it out.",
      },
    ],
    metaTitle: "Mobile Accessories Home Delivery — South Bengaluru | AS MS",
    metaDescription:
      "Order mobile accessories with same-day home delivery in South Bengaluru. Chargers, cables, earphones, cases, screen protectors. WhatsApp to order.",
  },
  {
    id: "tempered-glass",
    slug: "tempered-glass",
    title: "Tempered Glass — Home Fitting Free",
    shortTitle: "Tempered Glass",
    shortDesc: "UV, flat, matt — delivered and fitted free at home.",
    description:
      "Get your tempered glass delivered and professionally fitted at your home — completely free. Choose from UV Glass, Flat Glass or Matt Finish.",
    icon: "Shield",
    image: "/images/services/tempered-glass.webp",
    features: ["UV Glass", "Flat Glass", "Matt Finish", "Free Fitting"],
    subServices: temperedGlassSubServices,
    ctaMessage: "Hi, I need tempered glass fitting at home",
    badge: "Free Fitting",
    badgeColor: "emerald",
    heroTagline: "Tempered Glass Delivered & Fitted at Your Home — Free",
    fullDescription:
      "Protect your phone screen without leaving home. We deliver the right tempered glass for your phone model and fit it professionally at your doorstep — at no extra charge. Choose from UV Glass (edge-to-edge curved), Flat Glass, or Anti-Glare Matt Finish. Our technician cleans the screen and ensures a bubble-free, perfectly aligned fit every time.",
    faqs: [
      {
        q: "Is the fitting really free?",
        a: "Yes — professional fitting at your home is completely free with every tempered glass purchase.",
      },
      {
        q: "What types of glass do you offer?",
        a: "We offer UV Glass (curved/edge-to-edge), Flat Tempered Glass, and Matt Anti-Glare Finish.",
      },
      {
        q: "Do you have glass for all phone models?",
        a: "We stock glass for most popular models. WhatsApp us your phone model and we'll confirm availability.",
      },
      {
        q: "What if there are bubbles after fitting?",
        a: "We guarantee a bubble-free fit. If you notice bubbles after we leave, we'll come back and re-fit it for free.",
      },
    ],
    metaTitle: "Tempered Glass Home Fitting Free — South Bengaluru | AS MS",
    metaDescription:
      "Get tempered glass delivered and professionally fitted at your home in South Bengaluru. UV Glass, Flat Glass, Matt Finish — fitting is completely free.",
  },
  {
    id: "sim-cards",
    slug: "sim-cards",
    title: "SIM Cards — All Operators at Home",
    shortTitle: "SIM Cards",
    shortDesc: "Airtel, Jio, Vi, BSNL — new, port, or activate at home.",
    description:
      "Get any SIM card activated at your doorstep. New connections, porting, and KYC all done at home — Airtel, Jio, Vi and BSNL.",
    icon: "Signal",
    image: "/images/services/sim-cards.webp",
    features: ["Airtel · Jio · Vi · BSNL", "New Connection", "SIM Porting", "Home KYC & Activation"],
    subServices: simCardSubServices,
    ctaMessage: "Hi, I need a new SIM card at home",
    heroTagline: "New SIM Card or Port — Activated at Your Doorstep",
    fullDescription:
      "Skip the telecom store. We bring SIM cards from all operators — Airtel, Jio, Vi, and BSNL — directly to your home. Whether you need a new connection, want to port your existing number, or need to upgrade to 4G/5G, our representative handles the entire KYC process and activation at your doorstep. Fast, hassle-free, and convenient.",
    faqs: [
      {
        q: "Which operators do you offer?",
        a: "We offer SIM cards from Airtel, Jio, Vi (Vodafone Idea), and BSNL.",
      },
      {
        q: "Can I port my existing number at home?",
        a: "Yes — we handle the entire MNP (Mobile Number Portability) porting process at your doorstep.",
      },
      {
        q: "What documents do I need for a new SIM?",
        a: "You need a valid government-issued photo ID (Aadhaar, PAN, Voter ID) and a recent photograph for eKYC.",
      },
      {
        q: "How long does SIM activation take?",
        a: "Most SIMs are activated within 2–4 hours of completing KYC. Porting usually takes 24–48 hours.",
      },
    ],
    metaTitle: "SIM Card Home Activation — Airtel Jio Vi BSNL | AS MS South Bengaluru",
    metaDescription:
      "Get any SIM card activated at your home in South Bengaluru. New connections, SIM porting, home KYC — Airtel, Jio, Vi, BSNL.",
  },
  {
    id: "mobile-loans",
    slug: "mobile-loans",
    title: "Mobile Phone on Loan — At Home",
    shortTitle: "Mobile Loans",
    shortDesc: "New phone on EMI. Loan filled at home. Delivered in 1 hr.",
    description:
      "Get a brand-new mobile phone on easy EMI. We fill your loan application at your home and deliver the phone within 1 hour of approval. All brands available.",
    icon: "CreditCard",
    image: "/images/services/mobile-loans.webp",
    features: ["All Brands", "Easy EMI", "Loan at Home", "1-Hour Delivery"],
    subServices: mobileLoansSubServices,
    ctaMessage: "Hi, I want a mobile phone on EMI",
    badge: "1-Hr Delivery",
    badgeColor: "saffron",
    heroTagline: "New Phone on EMI — Loan at Home, Delivered in 1 Hour",
    fullDescription:
      "Want a new phone but prefer to pay in instalments? We make it easy. Our representative comes to your home, helps you fill the EMI loan application, and once approved, your brand-new phone is delivered within 1 hour. All major brands available — Samsung, iPhone, OnePlus, Vivo, Oppo, Realme, Redmi and more. Low down payment, flexible EMI tenures.",
    faqs: [
      {
        q: "Which phone brands are available on EMI?",
        a: "We offer all major brands — Samsung, iPhone, OnePlus, Vivo, Oppo, Realme, Redmi, and more.",
      },
      {
        q: "What documents are needed for the loan?",
        a: "You need a valid Aadhaar card, PAN card, and recent bank statement or salary slip.",
      },
      {
        q: "What is the minimum down payment?",
        a: "Down payment varies by brand and model but typically starts from ₹0–₹1,000 depending on your credit profile.",
      },
      {
        q: "How quickly is the phone delivered?",
        a: "Once your loan is approved, we deliver the phone within 1 hour to your address.",
      },
      {
        q: "Is there any processing fee?",
        a: "Processing fees depend on the finance partner and loan amount. We clearly explain all charges before you sign.",
      },
    ],
    metaTitle: "Mobile Phone on EMI Loan at Home — South Bengaluru | AS MS",
    metaDescription:
      "Get a brand-new phone on EMI with loan application at your home in South Bengaluru. All brands, easy EMI, delivered within 1 hour of approval.",
  },
];
