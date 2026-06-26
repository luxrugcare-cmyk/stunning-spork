export const SITE_CONFIG = {
  name: "JHB CURTAIN CLEANING",
  shortName: "JHB Curtain Cleaning",
  tagline: "Professional On-Site Curtain Cleaning",
  domain: "jhbcurtaincleaning.co.za",
  phone: "+27 75 011 9200",
  phoneRaw: "+27750119200",
  phoneLink: "+27750119200",
  officePhone: "071 622 6723",
  officePhoneLink: "+27716226723",
  email: "info@jhbcurtaincleaning.co.za",
  address: "10 2nd Ave, Florida, Roodepoort, 1710, South Africa",
  whatsapp: "+27 75 011 9200",
  whatsappLink: "https://wa.me/27750119200",
  googleRating: 4.9,
  reviewCount: 500,
  clientsServed: "5,000+",
  yearsExperience: "15+",
  contactPerson: "Stephen Dunlop",
  contactPersonNote: "Available via Call & WhatsApp",
  hours: {
    weekday: "Mon–Fri 07:00–18:00",
    saturday: "Sat 08:00–14:00",
  },
  social: {
    facebook: "https://facebook.com/jhbcurtaincleaning",
    instagram: "https://instagram.com/jhbcurtaincleaning",
    youtube: "https://youtube.com/@jhbcurtaincleaning",
    linkedin: "https://linkedin.com/company/jhbcurtaincleaning",
    tiktok: "https://tiktok.com/@jhbcurtaincleaning",
    pinterest: "https://pinterest.com/jhbcurtaincleaning",
    twitter: "https://twitter.com/jhbcurtaincleaning",
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
    answer: "Residential curtain cleaning ranges from R800 to R5,500 depending on the number of windows, curtain type, and fabric. Large homes with heavy drapes sit at the higher end. Commercial projects are quoted individually. We provide a free, no-obligation assessment — call +27 75 011 9200 or WhatsApp us to book yours.",
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
    answer: "Three easy ways: WhatsApp us at +27 75 011 9200, call our office on 071 622 6723, or email info@jhbcurtaincleaning.co.za. Stephen Dunlop, our Managing Director, personally oversees every booking. Your free assessment can usually be scheduled within 48 hours.",
  },
];

export const FOUNDER = {
  name: "Stephen Dunlop",
  title: "Managing Director",
  credentials: "Curtain Cleaning & Fabric Expert",
  bio: "Stephen founded JHB Curtain Cleaning on a simple principle: curtains should be cleaned where they hang. With over 15 years of on-site fabric expertise, he saw clients repeatedly told to remove, transport, and rehang their curtains — only to have them shrink in the wash. He built South Africa's premier on-site curtain cleaning service to solve that problem permanently. Today, Stephen personally oversees every project and guarantees every result.",
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

export const SERVICE_LANDING_DATA: Record<string, {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroHeading: string;
  heroSubtext: string;
  heroParagraph: string;
  trustStrip: string[];
  guarantees: { icon: string; label: string }[];
  mainContent: {
    heading: string;
    paragraphs: string[];
    includes: { title: string; description: string }[];
    processSteps: { step: number; title: string; description: string }[];
    concerns: { question: string; answer: string }[];
    tableData?: { headers: string[]; rows: string[][] };
  };
  sidebar: {
    assessmentHeading: string;
    assessmentItems: string[];
    guarantees: string[];
  };
  ctaBand: { heading: string; subtext: string };
  newsletter: { heading: string; subtext: string };
}> = {
  "curtain-blind-cleaning": {
    slug: "curtain-blind-cleaning",
    metaTitle: "Curtain Cleaning Johannesburg | On-Site | No Removal | On The Spot",
    metaDescription: "Professional on-site curtain cleaning Johannesburg. No removal, no shrinkage. All fabric types — voiles, sheers, velvet, blackout, lined drapes. Hardware inspection & repair included. Free assessment within 48 hours.",
    heroTag: "Curtain & Blind Cleaning",
    heroHeading: "Johannesburg's Trusted On-Site Curtain Cleaning Specialists",
    heroSubtext: "Cleaned exactly where they hang — no removal, no downtime, no fuss.",
    heroParagraph: "For over 15 years, Stephen Dunlop and the team at JHB CURTAIN CLEANING have been transforming tired, dusty curtains and blinds into fresh, clean window treatments — all without ever taking them down. Our on-site dry-cleaning process means your windows are never bare, your rooms never exposed, and your life never interrupted.",
    trustStrip: ["15+ Years Experience", "5,000+ Happy Clients", "100% No-Shrinkage Guarantee", "Free On-Site Assessment Within 48 Hours"],
    guarantees: [
      { icon: "Shield", label: "100% No-Shrinkage Guarantee" },
      { icon: "Clock", label: "Same-Day Completion" },
      { icon: "Lock", label: "No Hidden Costs" },
      { icon: "Heart", label: "Fabric-Safe Methods" },
      { icon: "Wrench", label: "Hardware Checked" },
    ],
    mainContent: {
      heading: "What Makes Our On-Site Curtain Cleaning Different",
      paragraphs: [
        "Unlike traditional curtain cleaners who require you to remove your curtains, transport them to a facility, wait days or weeks, and then rehang them yourself, On The Spot does everything right there in your home or commercial space. Our mobile dry-cleaning equipment is designed to clean curtains and blinds while they remain hanging — meaning zero disruption to your space and zero risk of shrinkage from incorrect handling.",
      ],
      includes: [
        { title: "Cleaned exactly where they hang", description: "No removal or takedown required. We work around your existing hardware, tracks, and fittings." },
        { title: "All fabric types safely handled", description: "Voiles, sheers, lined drapes, velvet, blackout curtains, linen, cotton, silk blends, and synthetic fabrics." },
        { title: "Hardware inspection & repair included", description: "Tracks, rods, rings, pulleys, and mechanisms are checked and minor repairs carried out on the spot." },
        { title: "100% no-shrinkage guarantee", description: "Our dry-cleaning process contains zero water, which means zero shrinkage risk." },
        { title: "Dry-cleaning process", description: "Zero water damage risk. No wet patches, no water stains, no mildew concerns." },
        { title: "Same-day completion", description: "Your curtains are cleaned, refreshed, and back to looking their best before we leave." },
      ],
      processSteps: [
        { step: 1, title: "Visual Assessment", description: "Thorough inspection of every curtain and blind — identify fabric type, note existing damage, inspect hardware, determine optimal cleaning approach." },
        { step: 2, title: "Area Preparation", description: "Protecting floors, furniture, and nearby surfaces. Set up portable dry-cleaning equipment." },
        { step: 3, title: "Deep Cleaning", description: "Fabric-specific solutions lift dust, odours, stains, and allergens without introducing moisture." },
        { step: 4, title: "Hardware & Final Inspection", description: "Tracks, runners, cords, and mechanisms inspected. Minor repairs handled at no extra charge." },
      ],
      concerns: [
        { question: "Will my curtains shrink?", answer: "Absolutely not. Our 100% no-shrinkage guarantee has never been breached in 15 years. Because we use a dry-cleaning process with no water, there is no fibre contraction." },
        { question: "Can you clean delicate fabrics?", answer: "Yes. Stephen's background as an interior decorator means she personally trains the team on fabric identification. Delicate sheers, expensive velvet drapes, and fine linen curtains are all handled with specialist care." },
        { question: "What about blackout lining?", answer: "Blackout-lined curtains are one of our specialities. Dry-cleaning won't damage the thermal backing or cause peeling and cracking that wet cleaning can." },
        { question: "Do I need to take my curtains down?", answer: "Never. That's the whole point of our on-site service. We clean them exactly where they hang." },
      ],
      tableData: {
        headers: ["Curtain Type", "Blind Type"],
        rows: [
          ["Voiles & sheers", "Venetian blinds"],
          ["Lined drapes", "Vertical blinds"],
          ["Velvet curtains", "Roller blinds"],
          ["Blackout curtains", "Roman blinds"],
          ["Linen curtains", "Pleated blinds"],
          ["Silk & silk-blend drapes", "Panel glide blinds"],
          ["Synthetic curtains", "All fabric blinds"],
          ["Custom-made drapes", "Outdoor blinds"],
        ],
      },
    },
    sidebar: {
      assessmentHeading: "Free On-Site Assessment",
      assessmentItems: ["Fabric type identification", "Hardware condition check", "Scope of work confirmation", "Written, itemised quote", "Recommended treatment plan", "Timeline confirmation"],
      guarantees: ["100% No-Shrinkage Guarantee", "Same-Day Completion", "No Hidden Costs", "Fabric-Safe Methods", "Hardware Checked"],
    },
    ctaBand: { heading: "Ready for Fresh, Clean Curtains Without the Hassle?", subtext: "Book your free on-site assessment today. Stephen will visit your property anywhere in Johannesburg within 48 hours." },
    newsletter: { heading: "Stay Fresh — Curtain Care Tips & Special Offers", subtext: "Subscribe for seasonal curtain care advice, special offers, and updates from Stephen and the team." },
  },
  "mattress-sanitisation": {
    slug: "mattress-sanitisation",
    metaTitle: "Mattress Cleaning Johannesburg | Dust Mite Removal | On The Spot",
    metaDescription: "Deep mattress sanitisation Johannesburg. Clinical dust-mite removal, allergen elimination, and hypoallergenic treatment. Removes 4.5kg of annual skin shedding. Free assessment within 48 hours.",
    heroTag: "Deep Mattress Sanitisation",
    heroHeading: "Clinical Dust-Mite Removal & Hypoallergenic Treatment",
    heroSubtext: "Breathe cleaner. Sleep deeper. Live healthier.",
    heroParagraph: "You spend roughly one-third of your life in bed — but when was the last time your mattress was professionally cleaned? Every night, your mattress absorbs sweat, dead skin cells, dust mites, and allergens. The average person sheds approximately 4.5 kilograms of skin annually — and much of it ends up in your mattress, creating the perfect breeding ground for dust mites.",
    trustStrip: ["15+ Years Experience", "5,000+ Happy Clients", "Clinical-Grade Equipment", "Free On-Site Assessment Within 48 Hours"],
    guarantees: [
      { icon: "Shield", label: "Clinical-Grade Results" },
      { icon: "Heart", label: "Safe for Allergy Sufferers" },
      { icon: "Lock", label: "No Hidden Costs" },
      { icon: "Clock", label: "Same-Day Service" },
      { icon: "Award", label: "Experienced Technicians" },
    ],
    mainContent: {
      heading: "The Hidden Health Risk in Your Mattress",
      paragraphs: [
        "Your mattress is one of the most overlooked items in your home when it comes to hygiene. While you regularly wash your sheets, the mattress beneath absorbs everything — sweat, body oils, skin cells, pet dander, pollen, and dust. Over time, this creates a warm, humid environment where dust mites thrive.",
        "Dust mites are microscopic arachnids that feed on dead human skin. Their waste products are one of the most common indoor allergens, triggering allergic rhinitis, asthma attacks, eczema flare-ups, morning congestion, and poor sleep quality. A single mattress can harbour millions of dust mites.",
      ],
      includes: [
        { title: "Clinical dust-mite removal", description: "High-powered extraction equipment penetrates deep into mattress fibres, physically removing dust mites and their waste from every layer." },
        { title: "Bacterial & allergen elimination", description: "Medical-grade sanitisation neutralises bacteria, fungal spores, and allergens that standard vacuuming cannot reach." },
        { title: "Removes 4.5kg annual skin shedding", description: "Our extraction process pulls out years of accumulated organic matter from deep within your mattress." },
        { title: "Hypoallergenic treatment", description: "A gentle, non-toxic treatment that creates an inhospitable environment for dust mites, safe for asthma and allergy sufferers." },
        { title: "Healthier sleep environment", description: "Many clients report improved sleep quality and reduced allergy symptoms within days." },
      ],
      processSteps: [
        { step: 1, title: "Deep Vacuum Extraction", description: "Industrial-strength vacuum extraction removes loose debris, dust, and surface contaminants from the entire mattress surface." },
        { step: 2, title: "Stain Treatment", description: "Visible stains treated with fabric-safe, enzyme-based solutions that break down organic matter." },
        { step: 3, title: "Clinical Sanitisation", description: "Medical-grade sanitising treatment applied evenly, penetrating deep into fibres to neutralise bacteria, dust mites, and allergens." },
        { step: 4, title: "Hypoallergenic Treatment", description: "Non-toxic, hypoallergenic treatment creates a protective barrier that discourages dust mite recolonisation." },
        { step: 5, title: "Drying & Final Inspection", description: "Mattress left to dry naturally — typically ready for use the same evening. Stephen personally inspects every job." },
      ],
      concerns: [
        { question: "Is the treatment safe for children?", answer: "Absolutely. Our hypoallergenic treatment is non-toxic and specifically designed to be safe for asthma and allergy sufferers, including children." },
        { question: "How long until I can use the mattress?", answer: "Most mattresses are ready for use the same evening. We ensure proper drying before completing the job." },
        { question: "How often should I sanitise my mattress?", answer: "We recommend annual professional sanitisation, or every 6 months for allergy sufferers." },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Mattress Assessment",
      assessmentItems: ["Mattress type and condition evaluation", "Stain and contamination assessment", "Recommended treatment plan", "Written, itemised quote", "Timeline confirmation"],
      guarantees: ["Clinical-Grade Results", "Safe for Allergy Sufferers", "No Hidden Costs", "Same-Day Service", "Experienced Technicians"],
    },
    ctaBand: { heading: "Sleep Healthier Tonight — Book Your Mattress Sanitisation", subtext: "Don't let dust mites and allergens steal another night's rest. Book your free on-site assessment today." },
    newsletter: { heading: "Healthier Home Tips from Stephen", subtext: "Subscribe for seasonal advice on keeping your home allergen-free and exclusive offers." },
  },
  "upholstery-carpet-cleaning": {
    slug: "upholstery-carpet-cleaning",
    metaTitle: "Upholstery Cleaning Johannesburg | Sofa & Carpet | On The Spot",
    metaDescription: "Professional upholstery and carpet cleaning Johannesburg. Fabric-safe specialist chemicals, dry & wet cleaning options. Master Guarding available. Free assessment.",
    heroTag: "Upholstery & Carpet Cleaning",
    heroHeading: "Fabric-Safe Cleaning for All Your Upholstered Furniture",
    heroSubtext: "Restore, refresh, and protect your furniture investment.",
    heroParagraph: "Your sofa, armchairs, dining chairs, and upholstered headboards are among the most-used items in your home — and they absorb everything. Daily sitting transfers body oils, sweat, food particles, and dust deep into fabric fibres. Over time, even the most beautiful upholstery begins to look tired, smell stale, and harbour allergens.",
    trustStrip: ["15+ Years Experience", "5,000+ Happy Clients", "Fabric-Safe Specialist Methods", "Free On-Site Assessment Within 48 Hours"],
    guarantees: [
      { icon: "Shield", label: "Fabric-Safe Methods" },
      { icon: "Heart", label: "All Fabric Types" },
      { icon: "Lock", label: "No Hidden Costs" },
      { icon: "Clock", label: "Flexible Scheduling" },
      { icon: "Award", label: "Master Guarding Available" },
    ],
    mainContent: {
      heading: "Specialist Upholstery Cleaning — Not Just a Standard Wash",
      paragraphs: [
        "Upholstery fabrics are vastly different from one another. A linen sofa requires a completely different approach to a leather armchair or a velvet ottoman. Using the wrong cleaning chemical or method can cause discolouration, shrinkage, texture damage, or water staining that permanently ruins expensive furniture.",
        "That's why Stephen personally trains every technician in fabric identification and appropriate treatment selection. Before any cleaning begins, we identify your upholstery fabric type, test a small inconspicuous area, and select the optimal cleaning method.",
      ],
      includes: [
        { title: "Sofas, chairs, all upholstered pieces", description: "Comprehensive fabric care for every upholstered item — three-piece suites, dining chairs, ottomans, and headboards." },
        { title: "Dry & wet cleaning options", description: "Matched to fabric type. Delicate fabrics receive dry cleaning; hardier fabrics benefit from controlled wet extraction." },
        { title: "Specialist chemicals", description: "Professional-grade, fabric-specific cleaning solutions that lift dirt and stains without degrading fibres or causing colour fade." },
        { title: "Master Guarding available", description: "Add our 12-month professional stain-repellent coating to protect your freshly cleaned furniture from future spills." },
        { title: "Doubles furniture lifespan", description: "Regular professional cleaning removes abrasive dirt particles that wear down fabric fibres with every sit." },
      ],
      processSteps: [
        { step: 1, title: "Fabric Identification & Testing", description: "Identify upholstery fabric type and conduct a spot test to ensure chemical compatibility." },
        { step: 2, title: "Pre-Treatment", description: "Stains and high-traffic areas receive targeted pre-treatment with fabric-appropriate solutions." },
        { step: 3, title: "Deep Cleaning", description: "Thorough cleaning using the selected method — dry cleaning, low-moisture extraction, or controlled wet cleaning." },
        { step: 4, title: "Extraction & Drying", description: "Excess moisture extracted and drying techniques applied for quickest possible readiness." },
        { step: 5, title: "Optional Master Guarding", description: "Apply professional 12-month stain-repellent coating to protect from future spills." },
      ],
      concerns: [
        { question: "Can you clean leather furniture?", answer: "Yes, we offer specialist leather cleaning and conditioning. We use pH-balanced leather-specific products that clean without drying or cracking." },
        { question: "Will cleaning change the texture?", answer: "No. Our fabric-specific approach ensures the texture and feel of your upholstery is preserved." },
        { question: "How long until furniture is dry?", answer: "Dry-cleaned items are ready immediately. Wet-cleaned items typically dry within 2-6 hours depending on fabric type." },
      ],
      tableData: {
        headers: ["Furniture Type", "Fabric Types"],
        rows: [
          ["Sofas & couches", "Cotton & cotton blends"],
          ["Armchairs & recliners", "Linen & linen blends"],
          ["Dining chairs", "Velvet & velour"],
          ["Ottomans & footstools", "Leather & faux leather"],
          ["Headboards", "Wool & wool blends"],
          ["Cushions & throws", "Silk & silk blends"],
          ["Office chairs", "Microfibre & synthetic"],
          ["Bar stools", "Outdoor fabrics"],
        ],
      },
    },
    sidebar: {
      assessmentHeading: "Free Upholstery Assessment",
      assessmentItems: ["Furniture type identification", "Fabric testing", "Stain assessment", "Written, itemised quote", "Recommended treatment plan"],
      guarantees: ["Fabric-Safe Methods", "All Fabric Types", "No Hidden Costs", "Flexible Scheduling", "Master Guarding Available"],
    },
    ctaBand: { heading: "Restore Your Furniture to Its Best", subtext: "Book your free on-site upholstery assessment today. Stephen will evaluate your furniture and provide a detailed written quote." },
    newsletter: { heading: "Furniture Care Tips from Stephen", subtext: "Subscribe for seasonal advice on keeping your furniture looking its best and exclusive offers." },
  },
  "master-guarding": {
    slug: "master-guarding",
    metaTitle: "Fabric Protection Johannesburg | Master Guarding | On The Spot",
    metaDescription: "Master Guarding fabric protection Johannesburg. 12-month stain-repellent coating. Fluoropolymer barrier repels water & oil. Professional application. Free assessment.",
    heroTag: "Master Guarding Protection",
    heroHeading: "12-Month Professional Stain Protection for Your Fabrics",
    heroSubtext: "Spills bead up. Stains wipe away. Your fabrics stay pristine.",
    heroParagraph: "Master Guarding is a professional-grade fluoropolymer barrier applied to your freshly cleaned curtains, upholstery, and carpets. It creates an invisible shield that repels both water-based and oil-based stains — so when accidents happen, spills bead up and wipe away instead of soaking in and becoming permanent stains.",
    trustStrip: ["12-Month Certified Protection", "Fluoropolymer Technology", "Professional Application", "Free On-Site Assessment"],
    guarantees: [
      { icon: "Shield", label: "12-Month Certification" },
      { icon: "Droplets", label: "Water & Oil Repellent" },
      { icon: "Sun", label: "UV Fade Reduction" },
      { icon: "Lock", label: "No Hidden Costs" },
      { icon: "Award", label: "Professional Application" },
    ],
    mainContent: {
      heading: "How Master Guarding Works",
      paragraphs: [
        "Master Guarding uses advanced fluoropolymer technology to create an invisible, breathable barrier on your fabric fibres. This barrier is both hydrophobic (water-repelling) and oleophobic (oil-repelling), meaning it protects against virtually all common household stains — from coffee and wine to cooking oil and pet accidents.",
        "Unlike off-the-shelf spray products that wear off after a few washes, Master Guarding is professionally applied by our certified technicians using precision equipment that ensures even coverage and optimal adhesion. The result is 12 months of certified protection that actually works.",
      ],
      includes: [
        { title: "Hydrophobic barrier", description: "Repels water-based liquids — coffee, tea, juice, wine, and water-based spills bead up and wipe away." },
        { title: "Oleophobic barrier", description: "Repels oil-based substances — cooking oil, butter, salad dressing, and body oils don't penetrate." },
        { title: "UV fade reduction", description: "Reduces the impact of sunlight on fabric colours, helping curtains and upholstery maintain their vibrancy." },
        { title: "Professional application", description: "Applied by certified technicians using precision equipment for even, thorough coverage." },
        { title: "Annual renewal available", description: "Maintain continuous protection with annual reapplication at a discounted rate." },
      ],
      processSteps: [
        { step: 1, title: "Fabric Assessment", description: "We confirm fabric compatibility and ensure the surface is clean and ready for treatment." },
        { step: 2, title: "Professional Application", description: "Certified technicians apply Master Guarding using precision spray equipment for even coverage." },
        { step: 3, title: "Curing Time", description: "The treatment bonds to fabric fibres within 1-2 hours. Full protection is active after 24 hours." },
        { step: 4, title: "Certification", description: "You receive a dated protection certificate valid for 12 months from application." },
      ],
      concerns: [
        { question: "Is it safe for pets and children?", answer: "Yes. Master Guarding is non-toxic once cured and completely safe for homes with children and pets." },
        { question: "Does it change the feel of the fabric?", answer: "No. The fluoropolymer barrier is invisible and does not alter the texture, breathability, or appearance of your fabrics." },
        { question: "Can I apply it myself?", answer: "Professional application ensures even coverage and proper adhesion. DIY products cannot match the quality and longevity of professional application." },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Protection Assessment",
      assessmentItems: ["Fabric compatibility check", "Protection recommendations", "Written quote", "Annual renewal information"],
      guarantees: ["12-Month Certification", "Water & Oil Repellent", "UV Fade Reduction", "No Hidden Costs", "Professional Application"],
    },
    ctaBand: { heading: "Protect Your Fabrics for 12 Months", subtext: "Add Master Guarding to any cleaning service. Spills bead up, stains wipe away." },
    newsletter: { heading: "Fabric Protection Tips", subtext: "Subscribe for advice on keeping your fabrics protected and looking new." },
  },
  "fire-proofing": {
    slug: "fire-proofing",
    metaTitle: "Fire Proofing Curtains Johannesburg | SANS Compliant | On The Spot",
    metaDescription: "SANS-compliant fire retardant treatment Johannesburg. Fire compliance certificates for hotels, theatres, healthcare, schools. Insurance recognised. Free assessment.",
    heroTag: "Fire Proofing",
    heroHeading: "SANS-Compliant Fire Retardant Treatment & Certification",
    heroSubtext: "Certified protection. Legal compliance. Peace of mind.",
    heroParagraph: "If you manage a hotel, theatre, healthcare facility, school, or any public venue in Johannesburg, fire safety compliance isn't optional — it's the law. Our SANS-compliant fire retardant treatment is professionally applied to your curtains, drapes, and soft furnishings, and we issue the fire compliance certificates your business needs to operate legally and safely.",
    trustStrip: ["SANS Compliant", "Fire Certificates Issued", "Insurance Recognised", "5 Industries Served"],
    guarantees: [
      { icon: "Shield", label: "SANS Compliant" },
      { icon: "FileText", label: "Fire Certificates Issued" },
      { icon: "Building", label: "Insurance Recognised" },
      { icon: "Clock", label: "After-Hours Available" },
      { icon: "Award", label: "5-Step Process" },
    ],
    mainContent: {
      heading: "Why Fire Proofing Is Essential for Commercial Venues",
      paragraphs: [
        "South African National Standards (SANS) require that curtains and soft furnishings in public spaces meet specific fire retardancy ratings. Non-compliance can result in fines, insurance claim rejections, and — most critically — lives at risk. Our fire proofing service ensures your venue meets or exceeds these requirements.",
        "Our certified fire retardant treatment is applied on-site, meaning there's no need to remove curtains or disrupt operations. We work after hours for hotels, theatres, and other venues that cannot afford downtime during business hours.",
      ],
      includes: [
        { title: "SANS-compliant treatment", description: "Fire retardant treatment meets or exceeds South African National Standards for public spaces." },
        { title: "Fire compliance certificates", description: "Official documentation required by insurance companies, regulatory bodies, and municipal authorities." },
        { title: "On-site application", description: "No removal required. Applied directly to curtains and soft furnishings where they hang." },
        { title: "After-hours service", description: "Hotels, theatres, and venues can maintain normal operations while we work." },
        { title: "5 industries served", description: "Hotels, theatres, healthcare, schools, and corporate environments." },
      ],
      processSteps: [
        { step: 1, title: "Compliance Assessment", description: "We assess your current fire safety compliance and identify all items requiring treatment." },
        { step: 2, title: "Fabric Testing", description: "We test fabric compatibility with fire retardant chemicals to ensure optimal adhesion." },
        { step: 3, title: "Professional Application", description: "SANS-compliant fire retardant is professionally applied using precision equipment." },
        { step: 4, title: "Drying & Quality Check", description: "Treatment dries within hours. Our technicians verify complete coverage." },
        { step: 5, title: "Certificate Issuance", description: "You receive dated fire compliance certificates valid for the regulatory period." },
      ],
      concerns: [
        { question: "How long does fire proofing last?", answer: "Our fire proofing treatment is valid for the period specified by SANS regulations. We provide renewal reminders and discounted reapplication." },
        { question: "Is it required by law?", answer: "Yes, for most public venues including hotels, theatres, schools, and healthcare facilities. Non-compliance can result in fines and insurance claim rejections." },
        { question: "Can you work after hours?", answer: "Absolutely. We specialise in after-hours application for hospitality and entertainment venues to ensure zero operational disruption." },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Fire Safety Assessment",
      assessmentItems: ["Current compliance review", "Item identification", "Fabric compatibility testing", "Written quote with timeline", "Certificate samples"],
      guarantees: ["SANS Compliant", "Fire Certificates Issued", "Insurance Recognised", "After-Hours Available", "5-Step Certified Process"],
    },
    ctaBand: { heading: "Ensure Your Venue Is Fire Safety Compliant", subtext: "Book your free fire safety assessment today. We'll review your compliance and provide a detailed quote." },
    newsletter: { heading: "Compliance Updates", subtext: "Subscribe for fire safety regulation updates and compliance reminders." },
  },
  "rug-care": {
    slug: "rug-care",
    metaTitle: "Persian & Oriental Rug Cleaning Johannesburg | On The Spot",
    metaDescription: "Expert Persian and Oriental rug cleaning Johannesburg. Dye stability testing, hand-woven specialist care, on-site or collection service. Free assessment. Call +27 75 011 9200.",
    heroTag: "Persian & Oriental Rug Care",
    heroHeading: "Expert Care for Your Most Precious Rugs",
    heroSubtext: "Hand-woven rugs deserve hand-selected cleaning methods.",
    heroParagraph: "Persian, Oriental, and hand-woven rugs are works of art — often passed down through generations or acquired at significant expense. They require a completely different approach to standard carpet cleaning. At On The Spot, we understand the construction, dyes, and fibres of these specialist pieces and apply cleaning methods that preserve their beauty, colour, and value.",
    trustStrip: ["Specialist Rug Care", "Dye Stability Testing", "On-Site or Collection", "Free Assessment Within 48 Hours"],
    guarantees: [
      { icon: "Shield", label: "Dye Stability Tested" },
      { icon: "Heart", label: "Hand-Woven Specialist" },
      { icon: "Lock", label: "No Hidden Costs" },
      { icon: "Home", label: "On-Site or Collection" },
      { icon: "Award", label: "6-Step Process" },
    ],
    mainContent: {
      heading: "Why Hand-Woven Rugs Need Specialist Care",
      paragraphs: [
        "Machine-made carpets can withstand aggressive cleaning methods. Hand-woven rugs cannot. The dyes in Persian and Oriental rugs can bleed if exposed to the wrong chemicals or excessive moisture. The natural fibres — wool, silk, cotton — each require specific pH-balanced treatments. The hand-knotted construction can be damaged by heavy equipment.",
        "That's why our rug care process begins with dye stability testing — we apply a tiny amount of cleaning solution to an inconspicuous area and check for colour movement before we begin. Only when we've confirmed the dyes are stable do we proceed with cleaning.",
      ],
      includes: [
        { title: "Dye stability testing", description: "Every rug is tested for colourfastness before any cleaning begins. We never skip this step." },
        { title: "Specialist cleaning methods", description: "pH-balanced, fibre-specific solutions matched to wool, silk, cotton, and blended constructions." },
        { title: "On-site or collection service", description: "Choose the option that suits you — we can clean smaller rugs on-site or arrange collection for larger pieces." },
        { title: "Expert handling", description: "Our technicians are trained specifically in the care of hand-woven and antique rugs." },
        { title: "6-step specialist process", description: "A meticulous, multi-stage process designed for the unique needs of valuable rugs." },
      ],
      processSteps: [
        { step: 1, title: "Rug Assessment", description: "Identify construction type, fibre content, and any existing damage or wear patterns." },
        { step: 2, title: "Dye Stability Test", description: "Apply test solution to inconspicuous area and check for colour movement." },
        { step: 3, title: "Dust Extraction", description: "Specialist vibration equipment removes deep-set dust and grit from the rug foundation." },
        { step: 4, title: "Gentle Cleaning", description: "pH-balanced, fibre-specific solutions applied by hand for thorough yet gentle cleaning." },
        { step: 5, title: "Rinse & Moisture Extraction", description: "Thorough rinse with controlled water extraction to remove all cleaning residue." },
        { step: 6, title: "Drying & Final Inspection", description: "Flat drying to maintain shape, followed by Stephen's personal inspection of every rug." },
      ],
      concerns: [
        { question: "Will the colours bleed?", answer: "We perform dye stability testing before every clean. If we identify any risk, we adjust our method accordingly. Your rug's colours are protected." },
        { question: "Can you clean silk rugs?", answer: "Yes. Silk rugs require the most delicate approach, and our technicians are specifically trained in silk rug care." },
        { question: "Do I need to bring the rug to you?", answer: "No. We offer on-site cleaning for smaller rugs and a collection service for larger pieces that need more intensive treatment." },
      ],
      tableData: {
        headers: ["Rug Type", "Construction"],
        rows: [
          ["Persian rugs", "Hand-knotted wool"],
          ["Oriental rugs", "Hand-knotted silk"],
          ["Turkish kilims", "Flat-woven wool"],
          ["Moroccan rugs", "Hand-knotted wool/cotton"],
          ["Indian dhurries", "Flat-woven cotton"],
          ["Caucasian rugs", "Hand-knotted wool"],
          ["Chinese art deco", "Hand-knotted silk/wool"],
          ["Berber rugs", "Hand-knotted wool"],
        ],
      },
    },
    sidebar: {
      assessmentHeading: "Free Rug Assessment",
      assessmentItems: ["Construction type identification", "Fibre content analysis", "Dye stability pre-test", "Written quote", "Service option recommendation"],
      guarantees: ["Dye Stability Tested", "Hand-Woven Specialist", "No Hidden Costs", "On-Site or Collection", "6-Step Specialist Process"],
    },
    ctaBand: { heading: "Your Rugs Deserve Expert Care", subtext: "Book your free rug assessment today. We'll evaluate your rug and recommend the best treatment approach." },
    newsletter: { heading: "Rug Care Tips from Stephen", subtext: "Subscribe for seasonal advice on maintaining the beauty and value of your hand-woven rugs." },
  },
};

export const SECTOR_LANDING_DATA: Record<string, {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroHeading: string;
  heroSubtext: string;
  heroParagraph: string;
  color: string;
  trustStrip: string[];
  guarantees: { icon: string; label: string }[];
  keyStats: { label: string; description: string }[];
  decisionMaker: {
    role: string;
    heading: string;
    paragraphs: string[];
    ctaBox: { heading: string; items: string[] };
  };
  faqs: { question: string; answer: string }[];
  ctaBand: { heading: string; subtext: string };
  newsletter: { heading: string; subtext: string };
}> = {
  "hotels": {
    slug: "hotels",
    metaTitle: "Hotel Curtain Cleaning Johannesburg | Zero Disruption | On The Spot",
    metaDescription: "Professional on-site hotel curtain cleaning Johannesburg. Zero guest disruption, after-hours available, fire certificate included. Free assessment.",
    heroTag: "Hotels & Hospitality",
    heroHeading: "Hotel Curtain Cleaning — Zero Guest Disruption",
    heroSubtext: "On-site in the room. Same-day return. Fire certificate included.",
    heroParagraph: "Your hotel's curtains are one of the first things guests notice — and one of the last things that get professionally cleaned. Between high occupancy rates, tight turnaround schedules, and the absolute requirement for zero guest disruption, curtain cleaning often falls to the bottom of the maintenance list. On The Spot changes that completely.",
    color: "#0A369D",
    trustStrip: ["Zero Room Downtime", "After-Hours Available", "Fire Certificates Included", "Same-Day Room Return"],
    guarantees: [
      { icon: "Shield", label: "100% No-Shrinkage Guarantee" },
      { icon: "Clock", label: "After-Hours Available" },
      { icon: "Flame", label: "Fire Certificate Included" },
      { icon: "CheckCircle", label: "Same-Day Room Return" },
    ],
    keyStats: [
      { label: "Zero Room Downtime", description: "Curtains cleaned in situ. Rooms stay rentable. No revenue loss, no room-blocking headaches." },
      { label: "After-Hours Service", description: "Our teams work night shifts to clean curtains while guests sleep. Zero disruption to operations." },
      { label: "Fire Compliance", description: "We issue fire safety certificates required by the hospitality sector. One service, two compliance boxes ticked." },
      { label: "Same-Day Completion", description: "Curtains are cleaned, fresh, and ready before housekeeping turns the room. No drying time." },
    ],
    decisionMaker: {
      role: "General Manager",
      heading: "Why General Managers Choose On The Spot",
      paragraphs: [
        "As a General Manager, you're accountable for guest satisfaction scores, room revenue, compliance, and operating costs. Traditional curtain cleaning forces you to choose between clean curtains and occupied rooms — On The Spot eliminates that compromise entirely.",
        "Our on-site dry-cleaning process means curtains are cleaned in the room, while the room remains available. No removing curtains, no bare windows, no out-of-order rooms, no lost revenue. Our teams can work during the day in empty rooms or after hours during full occupancy — whatever suits your property best.",
        "We also provide the fire compliance certificates that the hospitality sector requires, making us a single-service solution for both cleanliness and compliance. One booking, two boxes ticked.",
      ],
      ctaBox: { heading: "Request Your Free Hotel Assessment", items: ["Full property curtain audit", "Room-by-room quote", "Fire compliance review", "After-hours scheduling", "Revenue impact analysis"] },
    },
    faqs: [
      { question: "Can you clean hotel curtains after hours?", answer: "Yes — after-hours service is our standard for the hospitality industry. Our teams work night shifts to ensure zero guest disruption. We coordinate with your front desk and housekeeping schedule." },
      { question: "Do you issue fire compliance certificates?", answer: "Yes. We provide SANS-compliant fire retardant treatment and issue the necessary certificates recognised by insurance companies and regulatory bodies." },
      { question: "How many rooms can you clean in one night?", answer: "Depending on curtain type and soiling level, our team can typically clean 8-15 rooms per night shift. We'll provide a detailed schedule during your free assessment." },
      { question: "What about blackout curtains?", answer: "Blackout-lined curtains are one of our specialities. Our dry-cleaning process won't damage thermal backing or cause peeling and cracking." },
    ],
    ctaBand: { heading: "Zero Disruption. Full Compliance. Clean Curtains.", subtext: "Book your free hotel assessment today. We'll audit your property and provide a detailed schedule and quote." },
    newsletter: { heading: "Hospitality Maintenance Insights", subtext: "Subscribe for seasonal tips on maintaining guest room fabrics and compliance updates." },
  },
  "corporate": {
    slug: "corporate",
    metaTitle: "Office Curtain Cleaning Johannesburg | Facilities Management | On The Spot",
    metaDescription: "Professional on-site office curtain cleaning Johannesburg. Quarterly maintenance, indoor air quality reports, minimal disruption. Free assessment.",
    heroTag: "Corporate Offices",
    heroHeading: "Office Curtain Cleaning — Facilities Management Made Simple",
    heroSubtext: "Quarterly programmes. Air quality reports. Minimal disruption.",
    heroParagraph: "Corporate environments demand a different approach to curtain cleaning. Boardrooms, executive offices, and reception areas project your company's image — and dirty, dusty curtains undermine that image entirely. On The Spot provides scheduled maintenance programmes designed for facilities managers who need reliable, professional service with minimal workplace disruption.",
    color: "#082D84",
    trustStrip: ["Quarterly Maintenance", "Air Quality Reports", "Minimal Disruption", "Professional Standards"],
    guarantees: [
      { icon: "Shield", label: "No-Shrinkage Guarantee" },
      { icon: "Clock", label: "After-Hours Available" },
      { icon: "FileText", label: "Air Quality Reports" },
      { icon: "Calendar", label: "Quarterly Scheduling" },
    ],
    keyStats: [
      { label: "Quarterly Programmes", description: "Scheduled maintenance ensures your office curtains are always clean. No more forgotten cleaning cycles." },
      { label: "Indoor Air Quality", description: "We provide before-and-after air quality reports documenting the improvement in your workspace environment." },
      { label: "Minimal Disruption", description: "We work after hours or during low-occupancy periods. Your business continues uninterrupted." },
      { label: "Professional Standards", description: "Reception areas, boardrooms, and executive offices maintained to the highest standard." },
    ],
    decisionMaker: {
      role: "Facilities Manager",
      heading: "Why Facilities Managers Choose On The Spot",
      paragraphs: [
        "As a Facilities Manager, you need reliable service providers who deliver on schedule, on budget, and without disruption. On The Spot's quarterly maintenance programmes are designed to integrate seamlessly with your existing building maintenance schedule.",
        "We provide detailed indoor air quality reports with every service — documentation you can present to management as evidence of a healthier, more productive workspace. Our technicians are professional, uniformed, and trained to work in corporate environments.",
      ],
      ctaBox: { heading: "Request Your Free Office Assessment", items: ["Full office curtain audit", "Air quality baseline report", "Quarterly maintenance proposal", "After-hours scheduling", "Budget-friendly pricing"] },
    },
    faqs: [
      { question: "Do you offer quarterly maintenance contracts?", answer: "Yes. Our quarterly programmes include scheduled visits, priority booking, and preferential pricing. Your curtains stay clean year-round." },
      { question: "Can you work after hours?", answer: "Absolutely. We routinely work after hours in corporate environments to ensure zero disruption to your business operations." },
      { question: "What are air quality reports?", answer: "We measure airborne allergen and dust levels before and after cleaning, providing you with documented evidence of improved indoor air quality." },
      { question: "Do you clean boardroom curtains?", answer: "Yes — boardrooms, executive offices, reception areas, and common spaces. We handle all corporate curtain types." },
    ],
    ctaBand: { heading: "Professional Curtain Care for Professional Spaces", subtext: "Book your free office assessment. We'll audit your workspace and design a maintenance programme." },
    newsletter: { heading: "Facilities Management Insights", subtext: "Subscribe for tips on maintaining professional workspaces and indoor air quality." },
  },
  "healthcare": {
    slug: "healthcare",
    metaTitle: "Hospital Curtain Cleaning Johannesburg | Infection Control | On The Spot",
    metaDescription: "Clinical-grade hospital curtain cleaning Johannesburg. HAI prevention, infection-control protocols, medical compliance. Free assessment.",
    heroTag: "Healthcare",
    heroHeading: "Hospital Curtain Cleaning — Infection Control Compliant",
    heroSubtext: "Clinical standards. Infection-control protocols. Compliance documentation.",
    heroParagraph: "Healthcare environments have the highest hygiene standards of any sector — and your curtain cleaning must meet those standards. On The Spot provides clinical-grade curtain cleaning services specifically designed for hospitals, clinics, and medical facilities, with infection-control protocols that align with your facility's hygiene requirements.",
    color: "#059669",
    trustStrip: ["Clinical-Grade Sanitisation", "HAI Prevention", "Infection-Control Protocols", "Compliance Documentation"],
    guarantees: [
      { icon: "Shield", label: "Infection-Control Compliant" },
      { icon: "Heart", label: "HAI Prevention" },
      { icon: "FileText", label: "Compliance Documentation" },
      { icon: "Clock", label: "Flexible Scheduling" },
    ],
    keyStats: [
      { label: "Clinical-Grade", description: "Our cleaning meets healthcare hygiene standards. Solvent-based dry cleaning eliminates pathogens without introducing moisture." },
      { label: "HAI Prevention", description: "Healthcare-Associated Infections can be linked to contaminated soft furnishings. Our service is part of your infection-control arsenal." },
      { label: "Compliance Documentation", description: "Full documentation of cleaning protocols, products used, and schedules maintained for your compliance records." },
      { label: "Flexible Scheduling", description: "We work around ward schedules, theatre availability, and clinic hours." },
    ],
    decisionMaker: {
      role: "Infection Control Officer",
      heading: "Why Infection Control Officers Trust On The Spot",
      paragraphs: [
        "Infection control is about eliminating vectors — and curtains in patient areas are a documented vector for pathogen transmission. Traditional wet cleaning can introduce moisture that promotes bacterial growth. Our dry-cleaning process eliminates pathogens without creating the damp conditions that bacteria thrive in.",
        "We provide full documentation of our cleaning protocols, the products used, and the schedule maintained — exactly the kind of records infection control officers need for compliance audits.",
      ],
      ctaBox: { heading: "Request Your Free Healthcare Assessment", items: ["Infection-control review", "Protocol documentation", "Compliance gap analysis", "Scheduling plan", "Quote"] },
    },
    faqs: [
      { question: "Do you follow infection-control protocols?", answer: "Yes. Our protocols are designed to align with healthcare facility infection-control requirements, including PPE, pathogen elimination, and full documentation." },
      { question: "Can you clean patient area curtains?", answer: "Absolutely. Our dry-cleaning process eliminates pathogens without introducing moisture, making it ideal for patient areas." },
      { question: "Do you provide compliance documentation?", answer: "Yes. We provide full documentation including cleaning protocols, products used, and schedule records for your compliance files." },
    ],
    ctaBand: { heading: "Infection-Control Compliant Curtain Cleaning", subtext: "Book your free healthcare facility assessment today." },
    newsletter: { heading: "Healthcare Hygiene Updates", subtext: "Subscribe for infection-control updates and compliance information." },
  },
  "education": {
    slug: "education",
    metaTitle: "School Curtain Cleaning Johannesburg | Holiday Scheduling | On The Spot",
    metaDescription: "School curtain cleaning Johannesburg. Holiday scheduling, allergen audits, child-safe products. Free assessment within 48 hours.",
    heroTag: "Schools & Education",
    heroHeading: "School Curtain Cleaning — Holiday Scheduling Available",
    heroSubtext: "Child-safe products. Holiday scheduling. Allergen audits included.",
    heroParagraph: "Schools, crèches, and universities present unique curtain cleaning challenges: large volumes of fabric, tight term-time schedules, and the absolute requirement for child-safe cleaning products. On The Spot provides scheduled holiday-period cleaning with allergen audit documentation and non-toxic, child-safe cleaning solutions.",
    color: "#D97706",
    trustStrip: ["Holiday Scheduling", "Child-Safe Products", "Allergen Audits", "Term-Time Flexibility"],
    guarantees: [
      { icon: "Shield", label: "Child-Safe Products" },
      { icon: "Calendar", label: "Holiday Scheduling" },
      { icon: "FileText", label: "Allergen Audits" },
      { icon: "Clock", label: "Term-Time Flexibility" },
    ],
    keyStats: [
      { label: "Holiday Scheduling", description: "We schedule cleanings during school holidays to ensure zero disruption to the academic calendar." },
      { label: "Child-Safe Products", description: "All cleaning products are non-toxic and safe for environments where children are present." },
      { label: "Allergen Audits", description: "Before-and-after allergen testing documents the improvement in your school's indoor air quality." },
      { label: "Flexible Booking", description: "Priority booking during holiday periods ensures your preferred dates are always available." },
    ],
    decisionMaker: {
      role: "Principal / Bursar",
      heading: "Why Principals and Bursars Choose On The Spot",
      paragraphs: [
        "School budgets are tight and schedules are inflexible. On The Spot works within your term calendar, scheduling cleanings during holidays when classrooms and halls are empty. Our child-safe cleaning products ensure that when students return, the environment is not just clean — it's healthy.",
        "We also provide allergen audit documentation that can support your school's health and safety compliance records.",
      ],
      ctaBox: { heading: "Request Your Free School Assessment", items: ["Full curtain audit", "Allergen baseline test", "Holiday scheduling plan", "Child-safe product certification", "Budget-friendly quote"] },
    },
    faqs: [
      { question: "Do you clean during school holidays?", answer: "Yes — holiday scheduling is our standard for schools. We prioritise school bookings during holiday periods to ensure availability." },
      { question: "Are your products safe for children?", answer: "Absolutely. All products used in school environments are non-toxic, hypoallergenic, and certified child-safe." },
      { question: "Can you clean assembly hall curtains?", answer: "Yes — assembly halls, classrooms, libraries, and administrative offices. We handle all school curtain types and sizes." },
    ],
    ctaBand: { heading: "Clean, Safe Curtains for Every Classroom", subtext: "Book your free school assessment before the next holiday period." },
    newsletter: { heading: "School Maintenance Tips", subtext: "Subscribe for holiday maintenance reminders and school facility care advice." },
  },
  "theatres": {
    slug: "theatres",
    metaTitle: "Theatre Curtain Cleaning Johannesburg | Fire Compliance | On The Spot",
    metaDescription: "Theatre curtain cleaning Johannesburg. Fire certificate compliance, acoustic restoration, dark-week scheduling. Free assessment.",
    heroTag: "Theatres & Venues",
    heroHeading: "Theatre Curtain Cleaning — Acoustic & Fire Compliance",
    heroSubtext: "Fire certificates. Acoustic restoration. Dark-week scheduling.",
    heroParagraph: "Theatres and performance venues present unique challenges: heavy stage curtains that affect acoustics, strict fire safety regulations, and limited scheduling windows during dark weeks. On The Spot specialises in cleaning the curtains that matter most to your venue's safety, sound quality, and visual impact.",
    color: "#6C3483",
    trustStrip: ["Fire Certificate Compliance", "Acoustic Restoration", "Dark-Week Scheduling", "Stage Curtain Specialists"],
    guarantees: [
      { icon: "Flame", label: "Fire Certificate Compliance" },
      { icon: "Music", label: "Acoustic Restoration" },
      { icon: "Calendar", label: "Dark-Week Scheduling" },
      { icon: "Theater", label: "Stage Curtain Specialists" },
    ],
    keyStats: [
      { label: "Fire Compliance", description: "SANS-compliant fire retardant treatment with certificates required for public performance venues." },
      { label: "Acoustic Restoration", description: "Dust-laden stage curtains absorb sound differently. Cleaning restores their acoustic properties." },
      { label: "Dark-Week Scheduling", description: "We schedule during dark weeks and maintenance periods when the stage is available." },
      { label: "Stage Curtain Specialists", description: "Main curtains, legs, borders, backdrops, and cycloramas — we clean them all." },
    ],
    decisionMaker: {
      role: "Stage Manager",
      heading: "Why Stage Managers Trust On The Spot",
      paragraphs: [
        "Stage curtains are not just window treatments — they're critical to both safety and acoustics. Heavy velvet main curtains, flying legs, and cycloramas require specialist handling that ordinary curtain cleaners cannot provide. Our technicians understand theatre terminology, work around rigging and fly systems, and schedule during your dark weeks.",
        "We also provide fire compliance certificates that are essential for maintaining your venue's operating licence.",
      ],
      ctaBox: { heading: "Request Your Free Venue Assessment", items: ["Full curtain inventory", "Fire compliance review", "Acoustic assessment", "Dark-week scheduling", "Quote"] },
    },
    faqs: [
      { question: "Can you clean main stage curtains?", answer: "Yes — main curtains, legs, borders, backdrops, and cycloramas. Our technicians are trained to work with fly systems and rigging." },
      { question: "Do you provide fire certificates?", answer: "Yes. SANS-compliant fire retardant treatment and certificates for public performance venues." },
      { question: "What is dark-week scheduling?", answer: "We schedule cleanings during your venue's dark weeks — periods when there are no performances and the stage is available for maintenance." },
    ],
    ctaBand: { heading: "Safe, Clean, Acoustically Perfect Curtains", subtext: "Book your free venue assessment during your next dark week." },
    newsletter: { heading: "Venue Maintenance Insights", subtext: "Subscribe for fire compliance updates and venue maintenance advice." },
  },
  "residential": {
    slug: "residential",
    metaTitle: "Home Curtain Cleaning Johannesburg | No Removal | On The Spot",
    metaDescription: "Residential curtain cleaning Johannesburg. No removal, no shrinkage guarantee, hardware repair included. Free assessment within 48 hours. Call +27 75 011 9200.",
    heroTag: "Residential",
    heroHeading: "Home Curtain Cleaning — No Removal, No Shrinkage",
    heroSubtext: "Cleaned where they hang. Hardware repair included. 100% guaranteed.",
    heroParagraph: "Your home deserves the same professional care that we provide to Johannesburg's top hotels and corporate offices — and that's exactly what On The Spot delivers. Our on-site dry-cleaning process means your curtains are cleaned perfectly without ever leaving your windows. No bare rooms, no waiting for curtains to be returned, no risk of shrinkage.",
    color: "#0A369D",
    trustStrip: ["No Removal Needed", "No-Shrinkage Guarantee", "Hardware Repair Included", "Free Assessment Within 48 Hours"],
    guarantees: [
      { icon: "Shield", label: "100% No-Shrinkage Guarantee" },
      { icon: "Wrench", label: "Hardware Repair Included" },
      { icon: "Heart", label: "All Fabric Types" },
      { icon: "Home", label: "Convenient Scheduling" },
    ],
    keyStats: [
      { label: "No Removal", description: "Curtains cleaned where they hang. Your windows are never bare, your rooms never exposed." },
      { label: "No Shrinkage", description: "Our dry-cleaning process contains zero water. Shrinkage is impossible. We guarantee it." },
      { label: "Hardware Included", description: "Tracks, rods, rings, and pulleys inspected and minor repairs included at no extra charge." },
      { label: "48-Hour Response", description: "We aim to schedule your free assessment within 48 hours of your call or WhatsApp." },
    ],
    decisionMaker: {
      role: "Homeowner",
      heading: "Why 5,000+ Johannesburg Homeowners Trust On The Spot",
      paragraphs: [
        "Your curtains are one of the most significant investments in your home's interior — and conventional cleaning puts that investment at risk. Removing curtains from their tracks can damage hardware, stretch fabric, and introduce shrinkage. Transporting them to a cleaning facility exposes them to damage and loss. Waiting days or weeks for their return leaves your windows bare.",
        "On The Spot eliminates all of these risks. Our on-site dry-cleaning process means your curtains never leave your home. They're cleaned, refreshed, and looking their best before we leave — typically within 2-4 hours for a standard residential clean.",
      ],
      ctaBox: { heading: "Book Your Free Home Assessment", items: ["Fabric type identification", "Hardware condition check", "Written, itemised quote", "Recommended treatment plan", "Scheduling within 48 hours"] },
    },
    faqs: [
      { question: "Will my curtains shrink?", answer: "Absolutely not — we guarantee it. Our dry-cleaning process uses no water, which means zero shrinkage risk. If your curtains shrink after our cleaning, we replace them at our cost." },
      { question: "Do I need to take my curtains down?", answer: "No — that's our entire business model. We clean your curtains where they hang. No removal, no re-hanging, no hassle." },
      { question: "How long does it take?", answer: "A standard residential clean takes 2-4 hours for an average home. Your windows are never bare." },
      { question: "What does the hardware check include?", answer: "We inspect tracks, rods, rings, pulleys, and mechanisms. Minor repairs like replacing rings or lubricating tracks are included at no extra charge." },
    ],
    ctaBand: { heading: "Fresh Curtains Without the Fuss", subtext: "Book your free home assessment today. Stephen will visit within 48 hours." },
    newsletter: { heading: "Home Fabric Care Tips", subtext: "Subscribe for seasonal curtain care advice and exclusive offers for Johannesburg homeowners." },
  },
};

export const AREA_LANDING_DATA: Record<string, {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroHeading: string;
  heroSubtext: string;
  heroParagraph: string;
  suburbs: string[];
  focus: string;
  mainContent: {
    heading: string;
    paragraphs: string[];
    servicesTable: { service: string; description: string; priceRange: string }[];
  };
  sidebar: {
    assessmentHeading: string;
    assessmentItems: string[];
    guarantees: string[];
    contact: { phone: string; email: string; response: string };
  };
  ctaBand: { heading: string; subtext: string };
  newsletter: { heading: string; subtext: string };
}> = {
  "jhb-north": {
    slug: "jhb-north",
    metaTitle: "Curtain Cleaning Johannesburg North | Sandton, Randburg, Fourways | On The Spot",
    metaDescription: "On-site curtain cleaning Johannesburg North. Sandton, Randburg, Fourways, Bryanston. No removal, no shrinkage. Free assessment within 48 hours.",
    heroTag: "Curtain Cleaning Johannesburg North",
    heroHeading: "Curtain Cleaning Johannesburg North | Free On-Site Assessment",
    heroSubtext: "Serving Sandton, Randburg, Fourways, Bryanston, Hyde Park, Morningside & more. Free assessment within 48 hours.",
    heroParagraph: "Johannesburg North is the city's premium address — and the place where curtains work hardest. From the glass-walled penthouses of Sandton to the family estates of Bryanston, from the executive homes of Hyde Park to the modern townhouses of Sunninghill and Rivonia, this region has the highest concentration of full-length sheers, layered voiles, and imported designer drapes in Gauteng.",
    suburbs: ["Sandton", "Randburg", "Fourways", "Bryanston", "Hyde Park", "Morningside", "Lone Hill", "Sunninghill", "Midstream", "Rivonia", "Wendywood", "Houghton Estate"],
    focus: "Highveld dust on premium fabrics",
    mainContent: {
      heading: "The Northern Suburbs Deserve Specialist Curtain Care",
      paragraphs: [
        "Those beautiful floor-to-ceiling fabrics are also the most exposed to the relentless Highveld dust that settles across the northern ridge every single day. Johannesburg sits at 1,753 metres above sea level on the Highveld plateau, and the combination of altitude, dry winters, and persistent wind means that fine dust particles settle on curtains year-round — particularly on the north-facing windows that capture the most sunlight.",
        "Standard cleaning methods can't remove this dust effectively, and washing premium fabrics risks shrinkage, colour fading, and texture damage. On The Spot's on-site dry-cleaning process is specifically designed for this environment: we remove Highveld dust completely without introducing any moisture that could damage delicate fibres.",
        "Whether you're in a Sandton penthouse with imported Italian sheers, a Bryanston estate with hand-stitched velvet drapes, or a Fourways family home with practical blackout curtains, we bring the same level of expertise and care to every job.",
      ],
      servicesTable: [
        { service: "Curtain & Blind Cleaning", description: "On-site dry cleaning for all curtain and blind types", priceRange: "R800–R5,500" },
        { service: "Deep Mattress Sanitisation", description: "Clinical dust-mite removal and hypoallergenic treatment", priceRange: "R600–R2,200" },
        { service: "Upholstery & Carpet Cleaning", description: "Fabric-specific deep cleaning for all furniture", priceRange: "R500–R3,500" },
        { service: "Master Guarding Protection", description: "12-month stain-repellent coating", priceRange: "R450–R1,800" },
        { service: "Fire Proofing", description: "SANS-compliant fire retardant treatment", priceRange: "R1,200–R4,500" },
        { service: "Persian & Oriental Rug Care", description: "Expert handling with dye stability testing", priceRange: "R900–R6,000" },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Assessment in Johannesburg North",
      assessmentItems: ["Fabric type identification", "Hardware condition check", "Written quote", "Scheduling within 48 hours"],
      guarantees: ["No-Shrinkage Guarantee", "No Fabric Damage", "100% Satisfaction", "On-Time Guarantee", "Price Lock Promise"],
      contact: { phone: "+27 75 011 9200", email: "info@jhbcurtaincleaning.co.za", response: "Within 48 hours" },
    },
    ctaBand: { heading: "Johannesburg North's Trusted Curtain Cleaning Specialists", subtext: "Book your free on-site assessment today. We serve all northern suburbs." },
    newsletter: { heading: "Highveld Home Care Tips", subtext: "Subscribe for seasonal advice on protecting your curtains from Highveld dust." },
  },
  "jhb-east": {
    slug: "jhb-east",
    metaTitle: "Curtain Cleaning Johannesburg East | Bedfordview, Kempton Park | On The Spot",
    metaDescription: "On-site curtain cleaning Johannesburg East. Edenvale, Bedfordview, Boksburg, Kempton Park. No removal, no shrinkage. Free assessment.",
    heroTag: "Curtain Cleaning Johannesburg East",
    heroHeading: "Curtain Cleaning Johannesburg East | O.R. Tambo Corridor Specialists",
    heroSubtext: "Serving Edenvale, Bedfordview, Boksburg, Germiston, Kempton Park & more. After-hours hotel service available.",
    heroParagraph: "Johannesburg East is home to the O.R. Tambo International Airport hotel corridor — one of the densest concentrations of hospitality properties in Gauteng. It's also where industrial dust from Boksburg, Germiston, and Isando meets residential suburbia. This unique combination demands a curtain cleaning service that understands both hotel after-hours requirements and industrial-grade dust extraction.",
    suburbs: ["Edenvale", "Bedfordview", "Boksburg", "Germiston", "Kempton Park", "Modderfontein", "Isando", "Primrose", "Malvern"],
    focus: "O.R. Tambo hotel corridor & industrial dust",
    mainContent: {
      heading: "East Johannesburg: Where Hospitality Meets Industry",
      paragraphs: [
        "The hotels along the O.R. Tambo corridor — from airport transit hotels to luxury conference venues — require curtain cleaning that doesn't disrupt guests. Our after-hours service is designed precisely for this environment: we clean curtains in occupied rooms during night shifts, ensuring zero guest complaints and zero revenue loss.",
        "For residential properties in Bedfordview, Edenvale, and the surrounding suburbs, the challenge is different. Industrial dust from nearby manufacturing zones is finer and more persistent than ordinary household dust. It contains particles that ordinary cleaning methods can't fully remove. Our solvent-based dry cleaning extracts these industrial particles from deep within fabric fibres.",
      ],
      servicesTable: [
        { service: "Curtain & Blind Cleaning", description: "On-site dry cleaning — hotel after-hours available", priceRange: "R800–R5,500" },
        { service: "Deep Mattress Sanitisation", description: "Clinical dust-mite removal for homes and hotels", priceRange: "R600–R2,200" },
        { service: "Upholstery & Carpet Cleaning", description: "Industrial dust extraction for all furniture", priceRange: "R500–R3,500" },
        { service: "Master Guarding Protection", description: "12-month stain-repellent coating", priceRange: "R450–R1,800" },
        { service: "Fire Proofing", description: "SANS-compliant certificates for hotels and venues", priceRange: "R1,200–R4,500" },
        { service: "Persian & Oriental Rug Care", description: "Expert handling with dye stability testing", priceRange: "R900–R6,000" },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Assessment in Johannesburg East",
      assessmentItems: ["Industrial dust evaluation", "Hotel scheduling review", "Written quote", "After-hours availability"],
      guarantees: ["No-Shrinkage Guarantee", "After-Hours Available", "Fire Certificates", "Same-Day Completion"],
      contact: { phone: "+27 75 011 9200", email: "info@jhbcurtaincleaning.co.za", response: "Within 48 hours" },
    },
    ctaBand: { heading: "East Johannesburg's Curtain Cleaning Experts", subtext: "Hotel after-hours service. Industrial dust specialists. Book your free assessment." },
    newsletter: { heading: "East JHB Home & Hotel Care", subtext: "Subscribe for maintenance tips specific to Johannesburg East properties." },
  },
  "jhb-south": {
    slug: "jhb-south",
    metaTitle: "Curtain Cleaning Johannesburg South | Alberton, Meyersdal | On The Spot",
    metaDescription: "On-site curtain cleaning Johannesburg South. Alberton, Meyersdal, Glenvista. Heavy drapes specialists. No removal, no shrinkage. Free assessment.",
    heroTag: "Curtain Cleaning Johannesburg South",
    heroHeading: "Curtain Cleaning Johannesburg South | Heavy Drapes Specialists",
    heroSubtext: "Serving Alberton, Meyersdal, Glenvista, Mulbarton & more. Velvet, chenille, and blackout curtain specialists.",
    heroParagraph: "Johannesburg South is characterised by its established, leafy suburbs — and the heavy, luxurious curtains that define them. From the double-lined velvet drapes of Meyersdal mansions to the thick thermal curtains in Alberton family homes, southern Johannesburg has the highest concentration of heavy drapery in the city. Our technicians are specialists in deep-cleaning these dense fabrics without shrinkage.",
    suburbs: ["Alberton", "Meyersdal", "Glenvista", "Mulbarton", "Bassonia", "Kibler Park", "Brackendowns", "Brackenhurst", "New Redruth"],
    focus: "Heavy drapes, velvet & chenille specialists",
    mainContent: {
      heading: "Heavy Drapes Need Specialist Handling",
      paragraphs: [
        "Velvet, chenille, and thick thermal curtains are the most challenging fabrics to clean — and the most at risk from conventional wet cleaning. Water causes velvet to crush and lose its pile. Chenille can shrink dramatically. Heavy lined drapes take days to dry, and during that time they can develop mildew.",
        "On The Spot's dry-cleaning process eliminates all of these risks. No water means no crushing, no shrinkage, no mildew risk, and no drying time. Your heavy drapes are cleaned, refreshed, and looking their best before we leave.",
      ],
      servicesTable: [
        { service: "Curtain & Blind Cleaning", description: "Heavy drapes and velvet specialists", priceRange: "R800–R5,500" },
        { service: "Deep Mattress Sanitisation", description: "Clinical allergen removal", priceRange: "R600–R2,200" },
        { service: "Upholstery & Carpet Cleaning", description: "Fabric-specific deep cleaning", priceRange: "R500–R3,500" },
        { service: "Master Guarding Protection", description: "12-month stain-repellent coating", priceRange: "R450–R1,800" },
        { service: "Fire Proofing", description: "SANS-compliant fire retardant treatment", priceRange: "R1,200–R4,500" },
        { service: "Persian & Oriental Rug Care", description: "Expert handling for valuable rugs", priceRange: "R900–R6,000" },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Assessment in Johannesburg South",
      assessmentItems: ["Heavy fabric evaluation", "Lining condition check", "Written quote", "Same-day service available"],
      guarantees: ["No-Shrinkage Guarantee", "Velvet Safe", "Chenille Specialists", "Same-Day Completion"],
      contact: { phone: "+27 75 011 9200", email: "info@jhbcurtaincleaning.co.za", response: "Within 48 hours" },
    },
    ctaBand: { heading: "Southern Suburbs' Heavy Drapes Specialists", subtext: "Book your free assessment. Velvet, chenille, and thermal curtains handled with expert care." },
    newsletter: { heading: "Heavy Drapery Care Tips", subtext: "Subscribe for advice on maintaining velvet, chenille, and heavy curtains." },
  },
  "jhb-west": {
    slug: "jhb-west",
    metaTitle: "Curtain Cleaning Johannesburg West | Roodepoort, Northcliff | On The Spot",
    metaDescription: "On-site curtain cleaning Johannesburg West. Roodepoort, Florida, Northcliff. Mining dust specialists. No removal, no shrinkage. Free assessment.",
    heroTag: "Curtain Cleaning Johannesburg West",
    heroHeading: "Curtain Cleaning Johannesburg West | Mining Dust Specialists",
    heroSubtext: "Serving Roodepoort, Florida, Northcliff, Weltevreden Park & more. Residual mining dust extraction experts.",
    heroParagraph: "The West Rand's mining heritage left more than just abandoned mine dumps — it left a legacy of fine mineral dust that continues to settle on curtains and soft furnishings across Johannesburg's western suburbs. This dust is finer than ordinary household dust and contains mineral particles that ordinary cleaning methods simply cannot remove. Our solvent-based dry cleaning extracts these particles from deep within fabric fibres.",
    suburbs: ["Roodepoort", "Florida", "Northcliff", "Weltevreden Park", "Constantia Kloof", "Honeydew", "Strubensvallei", "Kensington B", "Linden"],
    focus: "Mining dust legacy treatment",
    mainContent: {
      heading: "Mining Dust: The Hidden Challenge for West Rand Curtains",
      paragraphs: [
        "The mine dumps that once defined the western skyline have largely been reprocessed, but the residual mineral dust they left behind continues to affect homes and businesses across Roodepoort, Florida, and surrounding suburbs. This dust is incredibly fine — fine enough to penetrate deep into curtain fibres where it accumulates over months and years.",
        "Ordinary vacuuming and surface cleaning cannot reach this embedded dust. Even conventional wet cleaning struggles to extract mineral particles that have bonded with fabric fibres. Our solvent-based dry-cleaning process is specifically formulated to break this bond and extract mining dust completely, restoring your curtains to their original colour and softness.",
        "Northcliff and Constantia Kloof residents face an additional challenge: west-facing windows that receive intense afternoon UV exposure, causing fabric fading and fibre degradation. Our Master Guarding protection includes UV fade reduction to help preserve your curtains' colour and integrity.",
      ],
      servicesTable: [
        { service: "Curtain & Blind Cleaning", description: "Mining dust extraction specialists", priceRange: "R800–R5,500" },
        { service: "Deep Mattress Sanitisation", description: "Mineral dust allergen removal", priceRange: "R600–R2,200" },
        { service: "Upholstery & Carpet Cleaning", description: "Industrial dust extraction", priceRange: "R500–R3,500" },
        { service: "Master Guarding Protection", description: "UV fade reduction + stain protection", priceRange: "R450–R1,800" },
        { service: "Fire Proofing", description: "SANS-compliant fire retardant treatment", priceRange: "R1,200–R4,500" },
        { service: "Persian & Oriental Rug Care", description: "Expert mineral dust extraction", priceRange: "R900–R6,000" },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Assessment in Johannesburg West",
      assessmentItems: ["Mining dust evaluation", "UV damage assessment", "Written quote", "UV protection options"],
      guarantees: ["No-Shrinkage Guarantee", "Mining Dust Extraction", "UV Protection", "Same-Day Completion"],
      contact: { phone: "+27 75 011 9200", email: "info@jhbcurtaincleaning.co.za", response: "Within 48 hours" },
    },
    ctaBand: { heading: "West Rand's Mining Dust Extraction Experts", subtext: "Book your free assessment. We remove what ordinary cleaning can't." },
    newsletter: { heading: "West Rand Home Care", subtext: "Subscribe for tips on dealing with mining dust and UV exposure." },
  },
  "jhb-central": {
    slug: "jhb-central",
    metaTitle: "Curtain Cleaning Johannesburg Central | Rosebank, Parktown | On The Spot",
    metaDescription: "On-site curtain cleaning Johannesburg Central. Rosebank, Parktown, Melville, Greenside. Heritage home specialists. No removal. Free assessment.",
    heroTag: "Curtain Cleaning Johannesburg Central",
    heroHeading: "Curtain Cleaning Johannesburg Central | Heritage Home Specialists",
    heroSubtext: "Serving Rosebank, Parktown, Melville, Greenside, Parkhurst & more. Victorian and Edwardian drape specialists.",
    heroParagraph: "Central Johannesburg is home to some of the city's most characterful properties — from the grand Victorian and Edwardian homes of Parktown and Houghton to the trendy Victorian cottages of Melville and the art deco apartments of Braamfontein. These heritage properties feature original drapes and curtains that require specialist handling and an understanding of antique fabric care.",
    suburbs: ["Rosebank", "Parktown", "Melville", "Greenside", "Parkhurst", "Auckland Park", "Braamfontein", "Houghton", "Westcliff"],
    focus: "Heritage homes & Victorian drapes",
    mainContent: {
      heading: "Heritage Fabrics Demand Heritage Expertise",
      paragraphs: [
        "Original Victorian and Edwardian drapes are often made from fabrics that are no longer manufactured — heavy brocades, damasks, and tapestries that cannot be replaced if damaged. Standard cleaning methods are simply too risky for these irreplaceable fabrics.",
        "On The Spot's dry-cleaning process is ideal for heritage fabrics. No water means no risk of shrinkage, dye bleeding, or texture damage. Our technicians are trained to identify and handle antique fabrics with the care they deserve, and Stephen's background as an interior decorator gives her particular insight into period-appropriate treatment methods.",
        "Rosebank's boutique hotels and guest houses also benefit from our after-hours service, ensuring their characterful window treatments are maintained without disrupting the guest experience.",
      ],
      servicesTable: [
        { service: "Curtain & Blind Cleaning", description: "Heritage and antique fabric specialists", priceRange: "R800–R5,500" },
        { service: "Deep Mattress Sanitisation", description: "Allergen removal for character homes", priceRange: "R600–R2,200" },
        { service: "Upholstery & Carpet Cleaning", description: "Antique upholstery specialist care", priceRange: "R500–R3,500" },
        { service: "Master Guarding Protection", description: "UV and stain protection for heritage fabrics", priceRange: "R450–R1,800" },
        { service: "Fire Proofing", description: "Heritage property fire compliance", priceRange: "R1,200–R4,500" },
        { service: "Persian & Oriental Rug Care", description: "Antique rug specialist care", priceRange: "R900–R6,000" },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Heritage Assessment",
      assessmentItems: ["Antique fabric identification", "Condition assessment", "Heritage-appropriate treatment plan", "Written quote"],
      guarantees: ["No-Shrinkage Guarantee", "Heritage Fabric Safe", "Antique Care Trained", "Period-Appropriate Methods"],
      contact: { phone: "+27 75 011 9200", email: "info@jhbcurtaincleaning.co.za", response: "Within 48 hours" },
    },
    ctaBand: { heading: "Central Johannesburg's Heritage Fabric Specialists", subtext: "Book your free assessment. Your home's history deserves expert care." },
    newsletter: { heading: "Heritage Home Care", subtext: "Subscribe for advice on maintaining period property fabrics." },
  },
  "pretoria-midrand": {
    slug: "pretoria-midrand",
    metaTitle: "Curtain Cleaning Pretoria & Midrand | Centurion, Menlyn | On The Spot",
    metaDescription: "On-site curtain cleaning Pretoria & Midrand. Centurion, Menlyn, Waterkloof, Hatfield. Jacaranda pollen specialists. Free assessment.",
    heroTag: "Curtain Cleaning Pretoria & Midrand",
    heroHeading: "Curtain Cleaning Pretoria & Midrand | Jacaranda Pollen Specialists",
    heroSubtext: "Serving Midrand, Centurion, Pretoria East, Menlyn, Waterkloof, Hatfield & more. Diplomatic residence clearance available.",
    heroParagraph: "Pretoria's famous jacaranda trees create one of the world's most beautiful urban landscapes — and one of the most persistent curtain staining problems. Each spring, millions of blossoms release purple pollen that drifts through open windows and settles on curtains across the city. On The Spot's specialist dry-cleaning process removes jacaranda pollen stains without damaging delicate fabrics.",
    suburbs: ["Midrand", "Centurion", "Pretoria East", "Menlyn", "Waterkloof", "Hatfield", "Lynnwood", "Irene", "Silverton", "Groenkloof"],
    focus: "Jacaranda pollen & diplomatic residences",
    mainContent: {
      heading: "Jacaranda Pollen: Pretoria's Beautiful Problem",
      paragraphs: [
        "Every spring, Pretoria's 70,000+ jacaranda trees burst into bloom, transforming the city into a purple paradise. But that beauty comes at a cost for your curtains. Jacaranda pollen is notoriously difficult to remove — it contains natural pigments that can permanently stain fabrics if not treated promptly and professionally.",
        "Our dry-cleaning process effectively removes jacaranda pollen stains from all fabric types, including the delicate sheers and light fabrics common in Pretoria's warmer climate. We recommend scheduling a clean each year after the jacaranda season ends in late November.",
        "Midrand's rapid growth as a commercial and residential hub has also created demand for our corporate and residential services. From Centurion's townhouse complexes to Waterkloof's diplomatic residences, we serve the entire Pretoria and Midrand region with the same professional standards.",
      ],
      servicesTable: [
        { service: "Curtain & Blind Cleaning", description: "Jacaranda pollen stain removal specialists", priceRange: "R800–R5,500" },
        { service: "Deep Mattress Sanitisation", description: "Pollen allergen removal", priceRange: "R600–R2,200" },
        { service: "Upholstery & Carpet Cleaning", description: "Pollen and dust extraction", priceRange: "R500–R3,500" },
        { service: "Master Guarding Protection", description: "Pollen stain prevention coating", priceRange: "R450–R1,800" },
        { service: "Fire Proofing", description: "Diplomatic and commercial fire compliance", priceRange: "R1,200–R4,500" },
        { service: "Persian & Oriental Rug Care", description: "Expert rug cleaning and care", priceRange: "R900–R6,000" },
      ],
    },
    sidebar: {
      assessmentHeading: "Free Assessment in Pretoria & Midrand",
      assessmentItems: ["Jacaranda pollen evaluation", "Pollen stain assessment", "Written quote", "Post-season scheduling"],
      guarantees: ["No-Shrinkage Guarantee", "Pollen Stain Removal", "Diplomatic Clearance", "Same-Day Completion"],
      contact: { phone: "+27 75 011 9200", email: "info@jhbcurtaincleaning.co.za", response: "Within 48 hours" },
    },
    ctaBand: { heading: "Pretoria & Midrand's Jacaranda Pollen Specialists", subtext: "Book your free assessment. Post-jacaranda season scheduling available." },
    newsletter: { heading: "Pretoria Home Care Tips", subtext: "Subscribe for jacaranda season care reminders and maintenance advice." },
  },
};
