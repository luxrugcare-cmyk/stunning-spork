export const SITE_CONFIG = {
  name: "On The Spot Curtain Cleaning Specialists",
  shortName: "On The Spot",
  tagline: "Professional On-Site Curtain Cleaning",
  domain: "curtaincleaning.org",
  phone: "075 011 9200",
  phoneRaw: "+27750119200",
  phoneLink: "+27750119200",
  officePhone: "071 622 6723",
  officePhoneLink: "+27716226723",
  email: "info@curtaincleaning.org",
  address: "Martha North Rd, Randburg, Johannesburg 2194, South Africa",
  whatsapp: "075 011 9200",
  whatsappLink: "https://wa.me/27750119200",
  googleRating: 4.9,
  reviewCount: 500,
  clientsServed: "5,000+",
  yearsExperience: "15+",
  hours: {
    weekday: "Mon–Fri 07:00–18:00",
    saturday: "Sat 08:00–14:00",
  },
  social: {
    facebook: "https://facebook.com/curtaincleaning",
    instagram: "https://instagram.com/curtaincleaning",
    youtube: "https://youtube.com/@curtaincleaning",
    linkedin: "https://linkedin.com/company/curtaincleaning",
    tiktok: "https://tiktok.com/@curtaincleaning",
    pinterest: "https://pinterest.com/curtaincleaning",
    twitter: "https://twitter.com/curtaincleaning",
  },
};

export const TRUST_BADGES = [
  { icon: "Star", value: "4.9", label: "Google Rating" },
  { icon: "Users", value: "5,000+", label: "Clients Served" },
  { icon: "Shield", value: "No-Shrinkage", label: "Guarantee" },
  { icon: "Award", value: "Master Guarding", label: "Certified" },
  { icon: "Clock", value: "15+ Years", label: "Experience" },
];

export const SERVICES = [
  {
    id: "curtain-blind-cleaning",
    title: "Curtain & Blind Cleaning",
    shortDesc: "On-site dry cleaning for all curtain and blind types — no removal, no shrinkage guarantee.",
    description: "Professional on-site dry cleaning for every curtain and blind type. We clean your curtains where they hang — no removal, no risk of shrinkage, no disruption to your home or business. Our certified technicians inspect hardware, test fabric type, and apply fibre-specific dry-cleaning solvents for spotless results.",
    icon: "Curtains",
    features: ["All fabric types", "Hardware inspection included", "On-site dry cleaning", "100% no-shrinkage guarantee"],
    priceRange: "R800–R5,500",
    isPrimary: true,
  },
  {
    id: "mattress-sanitisation",
    title: "Deep Mattress Sanitisation",
    shortDesc: "Clinical-grade dust-mite extraction — eliminates 99.9% of allergens, bacteria, and dust mites.",
    description: "Hot-water extraction mattress cleaning that eliminates 99.9% of dust mites, bacteria, and allergens. The average mattress harbours 2 million dust mites. Our 5-step sanitisation process removes the 4.5kg of skin cells your mattress absorbs annually, leaving it clinically clean and hypoallergenic.",
    icon: "Bed",
    features: ["99.9% allergen removal", "Hot-water extraction", "Hypoallergenic treatment", "5-step process"],
    priceRange: "R600–R2,200",
    isPrimary: false,
  },
  {
    id: "upholstery-carpet-cleaning",
    title: "Upholstery & Carpet Cleaning",
    shortDesc: "Fabric-specific deep cleaning for sofas, chairs, and carpets with Master Guarding available.",
    description: "Professional deep-cleaning for sofas, office chairs, and carpets using fabric-specific chemicals. We offer both dry and wet cleaning options with Master Guarding protection available. Our technicians identify fabric type and apply the correct treatment for optimal results without damage.",
    icon: "Armchair",
    features: ["Fabric-specific chemicals", "Dry & wet options", "Master Guarding available", "All furniture types"],
    priceRange: "R500–R3,500",
    isPrimary: false,
  },
  {
    id: "master-guarding",
    title: "Master Guarding Protection",
    shortDesc: "12-month certified stain-repellent coating — fluoropolymer barrier keeps fabrics pristine.",
    description: "A 12-month certified stain protection applied on-site. This fluoropolymer barrier creates a hydrophobic and oleophobic shield on your fabrics, repelling both water-based and oil-based stains. Professionally applied by our certified technicians with annual renewal options.",
    icon: "Shield",
    features: ["12-month protection", "Fluoropolymer barrier", "Hydrophobic & oleophobic", "Professional application"],
    priceRange: "R450–R1,800",
    isPrimary: false,
  },
  {
    id: "fire-proofing",
    title: "Fire Proofing",
    shortDesc: "SANS-compliant fire retardant treatment with compliance certificates for commercial venues.",
    description: "SANS-compliant fire retardant treatment for hotels, theatres, healthcare facilities, schools, and corporate environments. Our certified process issues compliance certificates required by insurance and regulatory bodies. Essential for any venue with public foot traffic.",
    icon: "Flame",
    features: ["SANS compliant", "Fire compliance certificates", "5-step process", "Insurance & liability benefits"],
    priceRange: "R1,200–R4,500",
    isPrimary: false,
  },
  {
    id: "rug-care",
    title: "Persian & Oriental Rug Care",
    shortDesc: "Expert handling for hand-woven rugs with dye stability testing and specialist methods.",
    description: "Specialist care for hand-woven rugs with fibre-specific solutions. We perform dye stability testing before any treatment, use specialist cleaning methods appropriate to each rug type, and offer both on-site and collection service options. Your precious rugs deserve expert handling.",
    icon: "Square",
    features: ["Expert handling", "On-site or collection", "Dye stability testing", "6-step specialist process"],
    priceRange: "R900–R6,000",
    isPrimary: false,
  },
];

export const SECTORS = [
  {
    id: "hotels",
    title: "Hotels & Hospitality",
    shortDesc: "After-hours service, fire compliance certificates, and volume curtain care for hotels, B&Bs, and guesthouses.",
    color: "#6C3483",
    icon: "Hotel",
    features: ["After-hours cleaning", "Fire compliance certificates", "Volume curtain care", "Guest-ready turnaround"],
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    shortDesc: "Quarterly maintenance programmes, indoor air quality reports, and professional workspace curtain care.",
    color: "#0d9488",
    icon: "Building2",
    features: ["Quarterly maintenance", "Air quality reports", "Professional workspace care", "Minimal disruption"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    shortDesc: "Clinical-grade sanitisation, HAI prevention, and infection-control protocols for medical facilities.",
    color: "#16a34a",
    icon: "Heart",
    features: ["Clinical-grade sanitisation", "HAI prevention", "Infection-control protocols", "Medical compliance"],
  },
  {
    id: "education",
    title: "Schools & Education",
    shortDesc: "Holiday scheduling, allergen audits, and safe cleaning for schools, crèches, and universities.",
    color: "#ea580c",
    icon: "GraduationCap",
    features: ["Holiday scheduling", "Allergen audits", "Child-safe products", "Term-time flexibility"],
  },
  {
    id: "theatres",
    title: "Theatres & Venues",
    shortDesc: "Fire certificate compliance, acoustic restoration, and dark-week scheduling for performance venues.",
    color: "#6C3483",
    icon: "Drama",
    features: ["Fire certificate compliance", "Acoustic restoration", "Dark-week scheduling", "Stage curtain care"],
  },
  {
    id: "residential",
    title: "Residential",
    shortDesc: "No-shrinkage guarantee, hardware repair included, and expert care for home curtains and blinds.",
    color: "#0A369D",
    icon: "Home",
    features: ["No-shrinkage guarantee", "Hardware repair included", "All fabric types", "Convenient scheduling"],
  },
];

export const AREAS = [
  {
    id: "jhb-north",
    title: "Johannesburg North",
    suburbs: ["Sandton", "Randburg", "Fourways", "Bryanston", "Hyde Park", "Morningside", "Lone Hill", "Sunninghill", "Midstream"],
    focus: "Highveld dust & allergen removal",
    description: "Johannesburg's northern suburbs sit on the Highveld plateau, where dust and pollen settle on curtains year-round. Our on-site dry cleaning removes fine Highveld dust without shrinking delicate fabrics.",
  },
  {
    id: "jhb-east",
    title: "Johannesburg East",
    suburbs: ["Edenvale", "Bedfordview", "Boksburg", "Germiston", "Kempton Park", "Modderfontein", "Isando"],
    focus: "O.R. Tambo hotel corridor & industrial dust",
    description: "The O.R. Tambo hotel corridor demands after-hours cleaning that doesn't disrupt guests. Industrial dust from nearby manufacturing zones also requires specialised solvent treatment.",
  },
  {
    id: "jhb-south",
    title: "Johannesburg South",
    suburbs: ["Alberton", "Meyersdal", "Glenvista", "Mulbarton", "Bassonia", "Kibler Park", "Brackendowns"],
    focus: "Heavy drapes, velvet & chenille specialists",
    description: "Southern suburbs are known for their heavy drapes — velvet, chenille, and thick thermal curtains. Our technicians are specialists in deep-cleaning these dense fabrics without shrinkage.",
  },
  {
    id: "jhb-west",
    title: "Johannesburg West",
    suburbs: ["Roodepoort", "Florida", "Northcliff", "Weltevreden Park", "Constantia Kloof", "Honeydew", "Strubensvallei"],
    focus: "Mining dust legacy treatment",
    description: "The West Rand's mining heritage means residual mineral dust that ordinary cleaning can't shift. Our solvent-based dry cleaning extracts fine mining particles from deep within fabric fibres.",
  },
  {
    id: "jhb-central",
    title: "Johannesburg Central",
    suburbs: ["Rosebank", "Parktown", "Melville", "Greenside", "Parkhurst", "Auckland Park", "Braamfontein", "Houghton"],
    focus: "Heritage homes & Victorian drapes",
    description: "Central Johannesburg's heritage homes feature original Victorian and Edwardian drapes that require expert handling. Our technicians are trained in antique fabric care and restoration cleaning.",
  },
  {
    id: "pretoria-midrand",
    title: "Pretoria & Midrand",
    suburbs: ["Midrand", "Centurion", "Pretoria East", "Menlyn", "Waterkloof", "Hatfield", "Lynnwood", "Irene"],
    focus: "Jacaranda pollen & diplomatic residences",
    description: "Pretoria's famous jacarandas leave purple pollen stains on curtains each spring. We also service diplomatic residences that demand discretion and security-cleared technicians.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Free Assessment",
    description: "A certified technician visits your property to inspect fabric type, assess soiling levels, and provide an honest, no-obligation quote — completely free.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Pre-Treatment",
    description: "We identify and spot-treat stains, test fabric for colourfastness, and prepare your curtains with fibre-specific pre-conditioning agents.",
    icon: "Beaker",
  },
  {
    step: 3,
    title: "Deep Clean",
    description: "Our on-site dry-cleaning extraction removes embedded dust, allergens, and odours without water — no shrinkage, no drying time, no disruption.",
    icon: "Sparkles",
  },
  {
    step: 4,
    title: "Protect & Finish",
    description: "Optional Master Guarding protection creates a 12-month stain barrier. We rehang, steam-press, and leave your curtains looking brand new.",
    icon: "ShieldCheck",
  },
];

export const GUARANTEES = [
  { title: "No-Shrinkage Guarantee", description: "Your curtains will not shrink — period. If they do, we replace them at our cost.", icon: "ShieldCheck" },
  { title: "No Fabric Damage", description: "We test every fabric before cleaning. If we damage it, we replace it.", icon: "Heart" },
  { title: "100% Satisfaction", description: "Not satisfied? We re-clean at no charge. Your satisfaction is our reputation.", icon: "ThumbsUp" },
  { title: "On-Time Guarantee", description: "We arrive when we say we will — or the assessment is free.", icon: "Clock" },
  { title: "Price Lock Promise", description: "The price we quote is the price you pay. No hidden fees, no surprises.", icon: "Lock" },
];

export const COMPARISON_TABLE = {
  headers: ["Feature", "On-Site Dry Cleaning", "Conventional Wet Cleaning"],
  rows: [
    ["Curtains removed from tracks?", "No — cleaned in place", "Yes — must be taken down"],
    ["Risk of shrinkage", "Zero — solvent-based", "High — water causes shrinkage"],
    ["Drying time", "None — instant", "24–72 hours minimum"],
    ["Disruption to home/business", "Minimal — 2–4 hours", "Days — curtains removed"],
    ["Fabric damage risk", "Very low — fibre-tested", "Moderate — water & heat exposure"],
    ["Hardware inspection included", "Yes — full check", "No — separate service"],
    ["Allergen removal", "99.9% extracted on-site", "Variable — depends on wash cycle"],
    ["Fire proofing available", "Yes — applied after cleaning", "Rarely offered"],
    ["Master Guarding available", "Yes — 12-month protection", "Not typically offered"],
    ["Overall convenience", "Excellent — we come to you", "Poor — you transport curtains"],
  ],
};

export const FAQS = [
  {
    question: "How much does curtain cleaning cost?",
    answer: "Residential curtain cleaning ranges from R800 to R5,500 depending on the number of windows, curtain type, and fabric. Large homes with heavy drapes sit at the higher end. Commercial projects are quoted individually. We provide a free, no-obligation assessment — call 075 011 9200 or WhatsApp us to book yours.",
  },
  {
    question: "Will my curtains shrink?",
    answer: "Absolutely not — we guarantee it. Our on-site dry-cleaning process uses solvent-based extraction, not water. Water is what causes shrinkage. If your curtains shrink after our cleaning (they won't), we replace them at our cost. That's the On The Spot No-Shrinkage Guarantee.",
  },
  {
    question: "Do you clean curtains without taking them down?",
    answer: "Yes — that's our entire business model. We clean your curtains where they hang, using professional dry-cleaning equipment that comes to your home or business. No removal, no re-hanging, no hassle.",
  },
  {
    question: "How long does the cleaning take?",
    answer: "A standard residential clean takes 2–4 hours for an average home. Commercial projects may take longer depending on scope. We work around your schedule, including after-hours for hotels and businesses.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We serve all of Johannesburg (North, East, South, West, and Central) plus Pretoria and Midrand. This includes Sandton, Randburg, Fourways, Rosebank, Bedfordview, Alberton, Roodepoort, Centurion, and surrounding suburbs.",
  },
  {
    question: "Do you clean hotel curtains after hours?",
    answer: "Yes — we specialise in after-hours service for the hospitality industry. Our teams work night shifts to ensure zero guest disruption. We also issue fire compliance certificates required by the hospitality sector.",
  },
  {
    question: "What is Master Guarding?",
    answer: "Master Guarding is a 12-month certified stain-protection coating applied after cleaning. It creates a fluoropolymer barrier that repels both water-based and oil-based stains. Spills bead up and wipe away instead of soaking in. Annual renewal keeps your fabrics protected year-round.",
  },
  {
    question: "Do you offer fire proofing certificates?",
    answer: "Yes — we provide SANS-compliant fire retardant treatment and issue the necessary fire compliance certificates. This is essential for hotels, theatres, schools, healthcare facilities, and any venue with public foot traffic. Certificates are recognised by insurance companies and regulatory bodies.",
  },
  {
    question: "How do I book a cleaning?",
    answer: "Three easy ways: WhatsApp us at 075 011 9200, call our office on 071 622 6723, or email info@curtaincleaning.org. Kathy Dunlop, our Managing Director, personally oversees every booking. Your free assessment can usually be scheduled within 48 hours.",
  },
];

export const FOUNDER = {
  name: "Kathy Dunlop",
  title: "Managing Director",
  credentials: "Interior Decorator & Fabric Expert",
  bio: "Kathy founded On The Spot Curtain Cleaning Specialists on a simple principle: curtains should be cleaned where they hang. As an interior decorator with over 15 years of fabric expertise, she saw clients repeatedly told to remove, transport, and rehang their curtains — only to have them shrink in the wash. She built South Africa's premier on-site curtain cleaning service to solve that problem permanently. Today, Kathy personally oversees every project and guarantees every result.",
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "5,000+", label: "Clients Served" },
    { value: "100%", label: "Satisfaction Guarantee" },
    { value: "24h", label: "Response Time" },
  ],
};

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#sectors", label: "Sectors" },
  { href: "#areas", label: "Areas" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
