const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, TableOfContents, PageBreak, Footer,
  Header, PageNumber, NumberFormat, ShadingType, Tab, TabStopPosition, TabStopType,
  convertInchesToTwip, convertMillimetersToTwip, LevelFormat, ImageRun,
  VerticalAlign
} = require("docx");
const fs = require("fs");

// ─── Color Constants ──────────────────────────────────────────────
const BRAND_EMERALD = "064e3b";
const BRAND_BRONZE = "a87d43";
const BRAND_BRONZE_HL = "c69c6d";
const DARK = "1a1a1a";
const MID_GRAY = "555555";
const LIGHT_BG = "f5f5f0";
const WHITE = "ffffff";
const SECTOR_HOTELS = "0A369D";
const SECTOR_CORPORATE = "082D84";
const SECTOR_HEALTHCARE = "059669";
const SECTOR_EDUCATION = "D97706";
const SECTOR_THEATRES = "6C3483";

// ─── Helper Functions ─────────────────────────────────────────────
function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 480, after: 240 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 56,
        color: BRAND_EMERALD,
        font: "Playfair Display",
      }),
    ],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 360, after: 180 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 40,
        color: BRAND_BRONZE,
        font: "Playfair Display",
      }),
    ],
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 120 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 32,
        color: DARK,
        font: "Inter",
      }),
    ],
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 160, line: 340 },
    alignment: opts.align || AlignmentType.LEFT,
    children: [
      new TextRun({
        text,
        size: opts.size || 22,
        color: opts.color || DARK,
        bold: opts.bold || false,
        italics: opts.italics || false,
        font: opts.font || "Inter",
      }),
    ],
  });
}

function bulletPoint(text, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 80, line: 300 },
    children: [
      new TextRun({
        text,
        size: 22,
        color: DARK,
        font: "Inter",
      }),
    ],
  });
}

function boldBullet(label, value, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 80, line: 300 },
    children: [
      new TextRun({ text: label, bold: true, size: 22, color: DARK, font: "Inter" }),
      new TextRun({ text: value, size: 22, color: MID_GRAY, font: "Inter" }),
    ],
  });
}

function codeBlock(lines) {
  return lines.map((line) =>
    new Paragraph({
      spacing: { after: 20, line: 260 },
      shading: { type: ShadingType.SOLID, color: "f0f0ec" },
      indent: { left: convertInchesToTwip(0.3) },
      children: [
        new TextRun({
          text: line,
          size: 18,
          font: "Courier New",
          color: "333333",
        }),
      ],
    })
  );
}

function emptyLine() {
  return new Paragraph({ spacing: { after: 120 }, children: [] });
}

function divider() {
  return new Paragraph({
    spacing: { before: 240, after: 240 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
    children: [],
  });
}

// ─── Table Builders ───────────────────────────────────────────────
function makeTable(headers, rows, colWidths) {
  const borderStyle = {
    style: BorderStyle.SINGLE,
    size: 1,
    color: "cccccc",
  };
  const borders = {
    top: borderStyle,
    bottom: borderStyle,
    left: borderStyle,
    right: borderStyle,
  };

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) =>
      new TableCell({
        width: colWidths ? { size: colWidths[i], type: WidthType.PERCENTAGE } : undefined,
        shading: { type: ShadingType.SOLID, color: BRAND_EMERALD },
        verticalAlign: VerticalAlign.CENTER,
        borders,
        children: [
          new Paragraph({
            spacing: { before: 60, after: 60 },
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: h,
                bold: true,
                size: 20,
                color: WHITE,
                font: "Inter",
              }),
            ],
          }),
        ],
      })
    ),
  });

  const dataRows = rows.map(
    (row, rowIdx) =>
      new TableRow({
        children: row.map((cell, i) =>
          new TableCell({
            width: colWidths ? { size: colWidths[i], type: WidthType.PERCENTAGE } : undefined,
            shading: {
              type: ShadingType.SOLID,
              color: rowIdx % 2 === 0 ? "fafaf7" : WHITE,
            },
            verticalAlign: VerticalAlign.CENTER,
            borders,
            children: [
              new Paragraph({
                spacing: { before: 50, after: 50 },
                children: [
                  new TextRun({
                    text: String(cell),
                    size: 20,
                    color: DARK,
                    font: "Inter",
                  }),
                ],
              }),
            ],
          })
        ),
      })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, ...dataRows],
  });
}

// ─── COVER PAGE ───────────────────────────────────────────────────
function coverPage() {
  return [
    new Paragraph({ spacing: { before: 3000 }, children: [] }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          size: 24,
          color: BRAND_BRONZE,
          font: "Inter",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: "JHB Curtain Cleaning Specialists",
          bold: true,
          size: 72,
          color: BRAND_EMERALD,
          font: "Playfair Display",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: "Technical Handoff Document",
          bold: true,
          size: 52,
          color: BRAND_BRONZE,
          font: "Playfair Display",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          size: 24,
          color: BRAND_BRONZE,
          font: "Inter",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: "Complete Website Build Documentation for AutoClaw",
          size: 28,
          color: MID_GRAY,
          italics: true,
          font: "Inter",
        }),
      ],
    }),
    new Paragraph({ spacing: { before: 1200 }, children: [] }),
    ...[
      "Prepared by: Z.ai Development Team",
      "Date: 21 June 2025",
      "Version: 1.0 — Production Ready",
      "Classification: Confidential — Business Critical",
    ].map(
      (line) =>
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80, line: 300 },
          children: [
            new TextRun({
              text: line,
              size: 22,
              color: MID_GRAY,
              font: "Inter",
            }),
          ],
        })
    ),
    new Paragraph({
      children: [new PageBreak()],
    }),
  ];
}

// ─── SECTION 1: EXECUTIVE SUMMARY ────────────────────────────────
function section1() {
  return [
    heading1("1. Executive Summary"),
    heading2("1.1 Project Overview"),
    para(
      "On The Spot Curtain Cleaning Specialists is Johannesburg's premier on-site curtain cleaning service, founded by Kathy Dunlop. This document covers the complete build of their production-ready website — a Next.js 16 application with 19 routes (1 homepage + 18 landing pages), AI-powered chatbot, multi-step booking wizard, POPIA-compliant cookie consent, and comprehensive SEO infrastructure including JSON-LD structured data."
    ),
    heading2("1.2 Technology Stack"),
    boldBullet("Framework: ", "Next.js 16 with App Router (TypeScript 5)"),
    boldBullet("Styling: ", "Tailwind CSS 4 with shadcn/ui component library (New York style)"),
    boldBullet("Animations: ", "Framer Motion 12"),
    boldBullet("Icons: ", "Lucide React"),
    boldBullet("Forms: ", "React Hook Form + Zod validation"),
    boldBullet("AI: ", "z-ai-web-dev-sdk (LLM chatbot)"),
    boldBullet("Database: ", "Prisma ORM with SQLite (available, configured)"),
    boldBullet("State: ", "Zustand (available), TanStack Query (available)"),
    boldBullet("Runtime: ", "Bun"),

    heading2("1.3 Key Metrics"),
    makeTable(
      ["Metric", "Value"],
      [
        ["Total Routes", "19 (1 homepage + 6 service + 6 sector + 6 area)"],
        ["Total Components", "30+ React components"],
        ["API Endpoints", "4 (contact, newsletter, chat, health)"],
        ["AI Features", "Chatbot (active), Image Gen, TTS, Vision, Web Search (available)"],
        ["SEO", "JSON-LD structured data on every page (LocalBusiness + Service + FAQ)"],
        ["Performance", "LCP ≤ 2.5s target, Mobile-First responsive"],
        ["Compliance", "POPIA (cookie consent, privacy policy, data handling)"],
      ],
      [40, 60]
    ),
    emptyLine(),
  ];
}

// ─── SECTION 2: PROJECT STRUCTURE ────────────────────────────────
function section2() {
  return [
    heading1("2. Project Structure"),
    heading2("2.1 Directory Architecture"),
    ...codeBlock([
      "src/",
      "├── app/",
      "│   ├── layout.tsx              # Root layout with fonts, JSON-LD, Toaster",
      "│   ├── page.tsx                # Homepage (composes 16 sections)",
      "│   ├── globals.css             # Brand tokens, animations, utility classes",
      "│   ├── services/[slug]/",
      "│   │   ├── page.tsx            # Server component with generateStaticParams/generateMetadata",
      "│   │   └── service-landing-client.tsx  # Client component for service pages",
      "│   ├── sectors/[slug]/",
      "│   │   ├── page.tsx            # Server component for sector pages",
      "│   │   └── sector-landing-client.tsx   # Client component",
      "│   ├── areas/[slug]/",
      "│   │   ├── page.tsx            # Server component for area pages",
      "│   │   └── area-landing-client.tsx     # Client component",
      "│   └── api/",
      "│       ├── route.ts            # Health check endpoint",
      "│       ├── contact/route.ts    # POST - Multi-step form submissions",
      "│       ├── newsletter/route.ts # POST - Newsletter subscriptions",
      "│       └── chat/route.ts       # POST - AI chatbot (z-ai-web-dev-sdk)",
      "├── components/",
      "│   ├── header.tsx              # Sticky header with dropdown navigation",
      "│   ├── hero-section.tsx        # Homepage hero with metallic-sweep",
      "│   ├── services-section.tsx    # 6 service cards with landing page links",
      "│   ├── process-section.tsx     # 4-step process + guarantees + comparison table",
      "│   ├── sectors-section.tsx     # 6 sector cards with colored borders",
      "│   ├── areas-section.tsx       # 6 area cards with suburb lists",
      "│   ├── about-section.tsx       # Kathy Dunlop founder story",
      "│   ├── faq-section.tsx         # 9-item accordion with JSON-LD FAQ schema",
      "│   ├── newsletter-strip.tsx    # Email capture for homepage",
      "│   ├── contact-section.tsx     # Multi-step quote wizard (4 steps)",
      "│   ├── cta-section.tsx         # CTA band",
      "│   ├── footer.tsx              # 4-column footer with landing page links",
      "│   ├── whatsapp-button.tsx     # Floating WhatsApp with pulse animation",
      "│   ├── cookie-consent.tsx      # POPIA-compliant consent bar",
      "│   ├── ai-chatbot.tsx          # AI chatbot widget with z-ai-web-dev-sdk",
      "│   ├── social-icons.tsx        # Custom SVG social media icons",
      "│   ├── landing/",
      "│   │   ├── landing-hero.tsx    # Reusable hero for landing pages",
      "│   │   ├── landing-sidebar.tsx # Reusable sidebar (assessment, guarantees, contact)",
      "│   │   ├── landing-cta.tsx     # Reusable CTA band",
      "│   │   └── landing-newsletter.tsx # Reusable newsletter strip",
      "│   └── ui/                     # 45+ shadcn/ui components",
      "├── lib/",
      "│   ├── site-data.ts            # All website content as typed constants (1,175 lines)",
      "│   ├── utils.ts                # Utility functions (cn helper)",
      "│   └── db.ts                   # Prisma database client",
      "├── hooks/",
      "│   ├── use-toast.ts            # Toast notification hook",
      "│   └── use-mobile.ts           # Mobile detection hook",
      "└── prisma/",
      "    └── schema.prisma           # Database schema",
    ]),
    emptyLine(),

    heading2("2.2 Public Assets"),
    ...codeBlock([
      "public/",
      "├── brand/",
      "│   ├── logo.png                # Bronze seal logo (from Logo.png upload)",
      "│   └── bronze-seal.png         # Favicon",
      "└── robots.txt                  # Search engine directives",
    ]),
    emptyLine(),
  ];
}

// ─── SECTION 3: ROUTING ARCHITECTURE ─────────────────────────────
function section3() {
  return [
    heading1("3. Routing Architecture"),
    heading2("3.1 Homepage (/)"),
    para("Composes 16 components in sequence:"),
    ...[
      "Header (fixed, glass-on-scroll, dropdown nav)",
      "HeroSection (full-viewport, emerald gradient, metallic-sweep text)",
      "ServicesSection (6 cards → link to /services/[slug])",
      "ProcessSection (4-step timeline + 5 guarantees + comparison table)",
      "SectorsSection (6 cards → link to /sectors/[slug])",
      "AreasSection (6 cards → link to /areas/[slug])",
      "AboutSection (Kathy Dunlop founder story + stats)",
      "FAQSection (9-item accordion + JSON-LD FAQ schema)",
      "NewsletterStrip (email capture)",
      "ContactSection (multi-step form + contact sidebar)",
      "CTASection (gradient CTA band)",
      "Footer (4 columns: brand, sectors, services, contact)",
      "WhatsAppButton (floating, pulse animation)",
      "CookieConsent (POPIA-compliant)",
      "AIChatbot (floating chat widget)",
    ].map((item, idx) => bulletPoint(`${idx + 1}. ${item}`)),

    heading2("3.2 Service Landing Pages (/services/[slug])"),
    para("6 pages with SSG via generateStaticParams:"),
    ...[
      "/services/curtain-blind-cleaning (Primary — highlighted in nav)",
      "/services/mattress-sanitisation",
      "/services/upholstery-carpet-cleaning",
      "/services/master-guarding",
      "/services/fire-proofing",
      "/services/rug-care",
    ].map((s) => bulletPoint(s)),
    emptyLine(),
    para("Each page includes: Hero → Guarantee Badges → Main Content (included features, process steps, FAQ, data tables) + Sidebar (assessment, guarantees, contact) → Newsletter → CTA → Footer → WhatsApp → Cookie Consent"),

    heading2("3.3 Sector Landing Pages (/sectors/[slug])"),
    para("6 pages with unique sector colors:"),
    makeTable(
      ["Route", "Sector Color"],
      [
        ["/sectors/hotels", "#0A369D Deep Blue"],
        ["/sectors/corporate", "#082D84 Dark Blue"],
        ["/sectors/healthcare", "#059669 Green"],
        ["/sectors/education", "#D97706 Amber"],
        ["/sectors/theatres", "#6C3483 Purple"],
        ["/sectors/residential", "#0A369D Deep Blue"],
      ],
      [50, 50]
    ),
    emptyLine(),
    para("Each page includes: Hero (sector color) → Guarantee Badges → Key Stats → Decision-Maker Section (role-specific content) → Sector FAQ → Newsletter → CTA"),

    heading2("3.4 Area Landing Pages (/areas/[slug])"),
    para("6 pages with geo-targeted content:"),
    makeTable(
      ["Route", "Focus"],
      [
        ["/areas/jhb-north", "Highveld dust focus"],
        ["/areas/jhb-east", "O.R. Tambo hotel corridor"],
        ["/areas/jhb-south", "Heavy drapes specialists"],
        ["/areas/jhb-west", "Mining dust legacy"],
        ["/areas/jhb-central", "Heritage homes"],
        ["/areas/pretoria-midrand", "Jacaranda pollen"],
      ],
      [50, 50]
    ),
    emptyLine(),
    para("Each page includes: Hero → Focus Badge → Main Content (paragraphs + services table + suburb badges) + Sidebar → Newsletter → CTA"),
  ];
}

// ─── SECTION 4: BRAND IDENTITY ───────────────────────────────────
function section4() {
  return [
    heading1("4. Brand Identity"),
    heading2("4.1 Logo"),
    para("Circular bronze medallion seal with:"),
    ...[
      "Outer ring: Bronze/brass gradient with stitched leather-patterned border",
      "Inner circle: Textured beige/parchment field",
      "Green draped curtains (center)",
      "Golden swoosh (cleaning motion arc)",
      "5 teal stars",
      'Text: "JHB CURTAIN CLEANING" (top) / "ON-SITE CLEANING SPECIALISTS" (bottom)',
    ].map((s) => bulletPoint(s)),

    heading2("4.2 Color System"),
    makeTable(
      ["Token", "Value", "Usage"],
      [
        ["Primary Emerald", "#064e3b", "Primary brand color, headers, CTAs"],
        ["Primary Bronze", "#a87d43", "Accent color, highlights, nav active"],
        ["Bronze Highlight", "#c69c6d", "Metallic text effects"],
        ["Surface Base", "#ffffff", "Page background"],
        ["Surface Ivory", "#f9f9f6", "Alternate section backgrounds"],
        ["Surface Dim", "#dadad7", "Borders, dividers"],
      ],
      [30, 25, 45]
    ),
    emptyLine(),
    heading3("Sector-Specific Colors"),
    makeTable(
      ["Sector", "Color"],
      [
        ["Hotels & Hospitality", "#0A369D"],
        ["Corporate Offices", "#082D84"],
        ["Healthcare", "#059669"],
        ["Schools & Education", "#D97706"],
        ["Theatres & Venues", "#6C3483"],
        ["Residential", "#0A369D"],
      ],
      [50, 50]
    ),
    emptyLine(),

    heading2("4.3 Typography"),
    boldBullet("Body: ", "Inter (Google Fonts, display: swap)"),
    boldBullet("Headings: ", "Playfair Display (Google Fonts, display: swap)"),
    boldBullet("CSS variables: ", "--font-inter, --font-playfair"),

    heading2("4.4 Animations"),
    boldBullet("Metallic Sweep: ", "Gradient animation on \"Johannesburg\" hero text and 10% OFF badge"),
    boldBullet("Trust Scroll: ", "Auto-scrolling trust strip"),
    boldBullet("Service Card Hover: ", "translateY(-4px) + shadow"),
    boldBullet("WhatsApp Pulse: ", "Pulse ring animation"),
    boldBullet("Section Fade: ", "IntersectionObserver-based fade-in"),
    boldBullet("Framer Motion: ", "Entrance animations, stagger effects, layout transitions"),
  ];
}

// ─── SECTION 5: DATA ARCHITECTURE ────────────────────────────────
function section5() {
  return [
    heading1("5. Data Architecture"),
    heading2("5.1 Site Data (src/lib/site-data.ts)"),
    para("All website content is stored as typed constants in a single 1,175-line file. Key exports:"),
    makeTable(
      ["Export", "Type", "Description"],
      [
        ["SITE_CONFIG", "Object", "Company info, phones, email, address, social links, hours"],
        ["TRUST_BADGES", "Array", "5 credibility badges"],
        ["SERVICES", "Array", "6 services with descriptions, features, pricing"],
        ["SECTORS", "Array", "6 sectors with colors, icons, features"],
        ["AREAS", "Array", "6 areas with suburbs, focus descriptions"],
        ["PROCESS_STEPS", "Array", "4-step cleaning process"],
        ["GUARANTEES", "Array", "5 customer guarantees"],
        ["COMPARISON_TABLE", "Object", "10-row On-Site vs Conventional comparison"],
        ["FAQS", "Array", "9 FAQs with answers"],
        ["FOUNDER", "Object", "Kathy Dunlop bio, credentials, stats"],
        ["NAV_LINKS", "Array", "7 navigation anchors"],
        ["SERVICE_LANDING_DATA", "Record", "6 service landing pages (full content)"],
        ["SECTOR_LANDING_DATA", "Record", "6 sector landing pages (full content)"],
        ["AREA_LANDING_DATA", "Record", "6 area landing pages (full content)"],
      ],
      [30, 15, 55]
    ),
    emptyLine(),

    heading2("5.2 Business Contact Details"),
    makeTable(
      ["Field", "Value"],
      [
        ["Business Name", "On The Spot Curtain Cleaning Specialists"],
        ["WhatsApp/Mobile", "075 011 9200"],
        ["Office Phone", "071 622 6723"],
        ["Email", "info@curtaincleaning.org"],
        ["Address", "Martha North Rd, Randburg, Johannesburg 2194, South Africa"],
        ["Domain", "curtaincleaning.org"],
        ["Founder/MD", "Kathy Dunlop"],
        ["Hours", "Mon–Fri 07:00–18:00, Sat 08:00–14:00"],
      ],
      [30, 70]
    ),
    emptyLine(),
  ];
}

// ─── SECTION 6: API ENDPOINTS ────────────────────────────────────
function section6() {
  return [
    heading1("6. API Endpoints"),
    heading2("6.1 POST /api/contact"),
    para("Multi-step form submission handler.", { bold: true }),
    boldBullet("Request body: ", "{ sector, area, name, email, phone, propertyType, windowCount, notes, popiaConsent }"),
    boldBullet("Validation: ", "Required fields check, email format, POPIA consent required"),
    boldBullet("Response: ", '{ success: true, message: "..." } or { error: "..." }'),

    heading2("6.2 POST /api/newsletter"),
    para("Newsletter subscription handler.", { bold: true }),
    boldBullet("Request body: ", "{ email }"),
    boldBullet("Validation: ", "Email format check"),
    boldBullet("Response: ", '{ success: true, message: "..." } or { error: "..." }'),

    heading2("6.3 POST /api/chat"),
    para("AI chatbot endpoint using z-ai-web-dev-sdk.", { bold: true }),
    boldBullet("Request body: ", "{ message, history }"),
    boldBullet("System prompt: ", "Curtain care assistant with full company knowledge"),
    boldBullet("Response: ", '{ message: "AI response" } or { error: "..." }'),

    heading2("6.4 GET /api/route"),
    para("Health check endpoint.", { bold: true }),
    boldBullet("Response: ", '{ status: "ok" }'),
  ];
}

// ─── SECTION 7: AI INTEGRATIONS ──────────────────────────────────
function section7() {
  return [
    heading1("7. AI Integrations"),
    heading2("7.1 Active: AI Chatbot (z-ai-web-dev-sdk)"),
    bulletPoint("Location: /api/chat (backend) + ai-chatbot.tsx (frontend widget)"),
    bulletPoint("Model: z-ai-web-dev-sdk chat.completions.create()"),
    bulletPoint("System prompt: Full company knowledge base (services, pricing, areas, guarantees)"),
    bulletPoint("Features: Multi-turn conversation, typing indicator, markdown rendering"),
    bulletPoint("Error fallback: Shows phone number for direct contact"),

    heading2("7.2 Available (Not Yet Implemented)"),
    para("These AI capabilities are available via z-ai-web-dev-sdk and can be activated:"),
    makeTable(
      ["Feature", "SDK Method", "Potential Use Case"],
      [
        ["Image Generation", "zai.image.generations.create()", "Generate before/after service images"],
        ["Vision Analysis", "zai.chat.completions.createVision()", "Fabric photo analysis from customer uploads"],
        ["Text-to-Speech", "zai.audio.speech.create()", "Voice FAQ answers, accessibility"],
        ["Speech-to-Text", "zai.audio.transcriptions.create()", "Voice input for contact form"],
        ["Web Search", "(via CLI or SDK)", "Live competitor pricing in chatbot"],
      ],
      [25, 40, 35]
    ),
    emptyLine(),
  ];
}

// ─── SECTION 8: SEO INFRASTRUCTURE ───────────────────────────────
function section8() {
  return [
    heading1("8. SEO Infrastructure"),
    heading2("8.1 JSON-LD Structured Data"),
    bulletPoint("Root layout: LocalBusiness schema with full address, geo coordinates, opening hours, offer catalog (6 services), aggregate rating"),
    bulletPoint("Service pages: Service schema + FAQPage schema (per page)"),
    bulletPoint("FAQ section: FAQPage schema with 9 Q&As"),
    bulletPoint("All schemas use the Russian Doll pattern: LocalBusiness → hasOfferCatalog → Service"),

    heading2("8.2 Metadata"),
    bulletPoint("Homepage: Custom title, description, keywords (10), OpenGraph, Twitter Card, robots"),
    bulletPoint("Landing pages: Dynamic generateMetadata() per slug with unique title/description/OpenGraph"),
    bulletPoint("Favicon: /brand/bronze-seal.png"),

    heading2("8.3 Performance Targets"),
    makeTable(
      ["Metric", "Target", "Status"],
      [
        ["LCP", "≤ 2.5s", "Configured"],
        ["INP", "≤ 200ms", "Configured"],
        ["CLS", "≤ 0.1", "Configured"],
        ["Mobile-First", "Required", "Implemented"],
      ],
      [30, 35, 35]
    ),
    emptyLine(),
  ];
}

// ─── SECTION 9: COMPLIANCE ───────────────────────────────────────
function section9() {
  return [
    heading1("9. Compliance"),
    heading2("9.1 POPIA (Protection of Personal Information Act)"),
    bulletPoint("Cookie consent bar: \"Accept All\" / \"Essential Only\" options"),
    bulletPoint("localStorage persistence of consent choice"),
    bulletPoint("No tracking pixels before consent"),
    bulletPoint("POPIA consent checkbox on contact form"),
    bulletPoint("Privacy policy section referenced in cookie bar"),
    bulletPoint("Full POPIA compliance documentation in original website copy"),

    heading2("9.2 PAIA (Promotion of Access to Information Act)"),
    bulletPoint("Referenced in footer: \"POPIA Compliant\""),
    bulletPoint("PAIA Section 51 manual referenced in technical specification"),
    bulletPoint("Official PAIA Form 2 for information requisition"),
  ];
}

// ─── SECTION 10: DEPLOYMENT GUIDE ────────────────────────────────
function section10() {
  return [
    heading1("10. Deployment Guide"),
    heading2("10.1 Recommended Platform: Vercel"),
    bulletPoint("Zero-config for Next.js 16"),
    bulletPoint("Global CDN (180+ edge locations)"),
    bulletPoint("Automatic HTTPS/SSL"),
    bulletPoint("Free tier sufficient for initial traffic"),
    bulletPoint("Auto-deploys from GitHub"),

    heading2("10.2 Deployment Steps"),
    ...[
      "Push code to GitHub repository",
      "Connect GitHub repo to Vercel",
      "Configure environment variables (if any API keys needed)",
      "Deploy (automatic)",
      "Add custom domain: curtaincleaning.org",
      "Configure DNS: A record @ → 76.76.21.21, CNAME www → cname.vercel-dns.com",
      "SSL auto-provisioned by Vercel",
    ].map((s, i) => bulletPoint(`${i + 1}. ${s}`)),

    heading2("10.3 DNS Configuration"),
    makeTable(
      ["Type", "Name", "Value"],
      [
        ["A", "@", "76.76.21.21"],
        ["CNAME", "www", "cname.vercel-dns.com"],
      ],
      [20, 30, 50]
    ),
    emptyLine(),

    heading2("10.4 Post-Launch Checklist"),
    ...[
      "Submit sitemap to Google Search Console",
      "Set up Google Business Profile",
      "Configure professional email (info@curtaincleaning.org)",
      "Set up Google Analytics 4",
      "Test AI chatbot in production",
      "Run Lighthouse audit",
      "Configure Vercel Speed Insights for CWV monitoring",
    ].map((s, i) => bulletPoint(`${i + 1}. ${s}`)),

    heading2("10.5 Estimated Costs"),
    makeTable(
      ["Item", "Cost"],
      [
        ["Domain (curtaincleaning.org)", "R150–R250/year"],
        ["Vercel Hosting", "Free (Pro: $20/mo if needed)"],
        ["SSL Certificate", "Free (Vercel)"],
        ["Professional Email", "R50–R150/month"],
        ["AI Chatbot (production)", "R300–R500/month"],
        ["Total Annual", "R5,000–R10,000"],
      ],
      [50, 50]
    ),
    emptyLine(),
  ];
}

// ─── SECTION 11: SOCIAL MEDIA ────────────────────────────────────
function section11() {
  return [
    heading1("11. Social Media Accounts"),
    para("The following social media accounts are configured in the site data. These should be registered/claimed if not already:"),
    makeTable(
      ["Platform", "URL", "Status"],
      [
        ["Facebook", "facebook.com/curtaincleaning", "Needs verification"],
        ["Instagram", "instagram.com/curtaincleaning", "Needs verification"],
        ["YouTube", "youtube.com/@curtaincleaning", "Needs verification"],
        ["LinkedIn", "linkedin.com/company/curtaincleaning", "Needs verification"],
        ["TikTok", "tiktok.com/@curtaincleaning", "Needs verification"],
        ["Pinterest", "pinterest.com/curtaincleaning", "Needs verification"],
        ["X/Twitter", "twitter.com/curtaincleaning", "Needs verification"],
      ],
      [25, 45, 30]
    ),
    emptyLine(),
  ];
}

// ─── SECTION 12: THIRD-PARTY CONFIGURATIONS ──────────────────────
function section12() {
  return [
    heading1("12. Third-Party Configurations"),
    heading2("12.1 Stitch (Google)"),
    boldBullet("Stitch API Key: ", "[REDACTED - See secure vault]"),
    boldBullet("Stitch Project URL: ", "https://stitch.withgoogle.com/projects/13681111782633686811"),
    boldBullet("Purpose: ", "Data integration (referenced in technical specification)"),

    heading2("12.2 Google Services Needed"),
    bulletPoint("Google Search Console (for sitemap submission)"),
    bulletPoint("Google Business Profile (for local SEO / map pack)"),
    bulletPoint("Google Analytics 4 (for traffic analysis)"),
    bulletPoint("Google Workspace (for professional email)"),
  ];
}

// ─── SECTION 13: KNOWN CONSIDERATIONS ────────────────────────────
function section13() {
  return [
    heading1("13. Known Considerations & Future Enhancements"),
    heading2("13.1 Immediate Actions Needed"),
    ...[
      "Register domain curtaincleaning.org",
      "Set up Vercel account and deploy",
      "Configure professional email",
      "Register/verify all social media accounts",
      "Set up Google Business Profile",
      "Test AI chatbot with production API key",
    ].map((s, i) => bulletPoint(`${i + 1}. ${s}`)),

    heading2("13.2 Recommended Enhancements"),
    ...[
      "Smart Fabric Analyzer: Customers upload curtain photos → AI identifies fabric type",
      "AI Image Generation: Professional before/after service images",
      "Voice FAQ: Text-to-speech on FAQ answers for accessibility",
      "Live Price Chatbot: Enhanced chatbot with web search for competitor pricing",
      "Google Maps integration on area pages",
      "Testimonials/reviews carousel from Google Reviews",
      "Blog section for content marketing and SEO",
      "Exit-intent popup for email capture",
    ].map((s, i) => bulletPoint(`${i + 1}. ${s}`)),

    heading2("13.3 Technical Debt"),
    bulletPoint("Database (Prisma/SQLite) is configured but not actively used — contact form currently logs to console"),
    bulletPoint("Sitemap generation (sitemap.ts) referenced in specs but not yet implemented"),
    bulletPoint("robots.txt exists but should be enhanced for production"),
    bulletPoint("Environment variables needed for production API keys"),
  ];
}

// ─── APPENDIX A: FILE MANIFEST ───────────────────────────────────
function appendixA() {
  return [
    heading1("Appendix A: File Manifest"),
    makeTable(
      ["File Path", "Purpose"],
      [
        ["src/app/layout.tsx", "Root layout with fonts, JSON-LD, Toaster"],
        ["src/app/page.tsx", "Homepage — composes 16 sections"],
        ["src/app/globals.css", "Brand tokens, animations, utility classes"],
        ["src/app/services/[slug]/page.tsx", "Service page server component"],
        ["src/app/services/[slug]/service-landing-client.tsx", "Service page client component"],
        ["src/app/sectors/[slug]/page.tsx", "Sector page server component"],
        ["src/app/sectors/[slug]/sector-landing-client.tsx", "Sector page client component"],
        ["src/app/areas/[slug]/page.tsx", "Area page server component"],
        ["src/app/areas/[slug]/area-landing-client.tsx", "Area page client component"],
        ["src/app/api/route.ts", "Health check endpoint"],
        ["src/app/api/contact/route.ts", "Contact form POST handler"],
        ["src/app/api/newsletter/route.ts", "Newsletter subscription POST handler"],
        ["src/app/api/chat/route.ts", "AI chatbot POST handler"],
        ["src/components/header.tsx", "Sticky header with dropdown navigation"],
        ["src/components/hero-section.tsx", "Homepage hero with metallic-sweep"],
        ["src/components/services-section.tsx", "6 service cards with landing page links"],
        ["src/components/process-section.tsx", "4-step process + guarantees + comparison table"],
        ["src/components/sectors-section.tsx", "6 sector cards with colored borders"],
        ["src/components/areas-section.tsx", "6 area cards with suburb lists"],
        ["src/components/about-section.tsx", "Kathy Dunlop founder story"],
        ["src/components/faq-section.tsx", "9-item accordion with JSON-LD FAQ schema"],
        ["src/components/newsletter-strip.tsx", "Email capture for homepage"],
        ["src/components/contact-section.tsx", "Multi-step quote wizard (4 steps)"],
        ["src/components/cta-section.tsx", "CTA band"],
        ["src/components/footer.tsx", "4-column footer with landing page links"],
        ["src/components/whatsapp-button.tsx", "Floating WhatsApp with pulse animation"],
        ["src/components/cookie-consent.tsx", "POPIA-compliant consent bar"],
        ["src/components/ai-chatbot.tsx", "AI chatbot widget with z-ai-web-dev-sdk"],
        ["src/components/social-icons.tsx", "Custom SVG social media icons"],
        ["src/components/landing/landing-hero.tsx", "Reusable hero for landing pages"],
        ["src/components/landing/landing-sidebar.tsx", "Reusable sidebar (assessment, guarantees, contact)"],
        ["src/components/landing/landing-cta.tsx", "Reusable CTA band"],
        ["src/components/landing/landing-newsletter.tsx", "Reusable newsletter strip"],
        ["src/components/ui/*", "45+ shadcn/ui components"],
        ["src/lib/site-data.ts", "All website content as typed constants (1,175 lines)"],
        ["src/lib/utils.ts", "Utility functions (cn helper)"],
        ["src/lib/db.ts", "Prisma database client"],
        ["src/hooks/use-toast.ts", "Toast notification hook"],
        ["src/hooks/use-mobile.ts", "Mobile detection hook"],
        ["prisma/schema.prisma", "Database schema"],
        ["public/brand/logo.png", "Bronze seal logo"],
        ["public/brand/bronze-seal.png", "Favicon"],
        ["public/robots.txt", "Search engine directives"],
      ],
      [50, 50]
    ),
    emptyLine(),
  ];
}

// ─── APPENDIX B: COMPONENT DEPENDENCY MAP ────────────────────────
function appendixB() {
  return [
    heading1("Appendix B: Component Dependency Map"),
    para("The following shows which components import from where:"),
    emptyLine(),

    heading3("Homepage (src/app/page.tsx)"),
    ...codeBlock([
      "Imports: Header, HeroSection, ServicesSection, ProcessSection,",
      "         SectorsSection, AreasSection, AboutSection, FAQSection,",
      "         NewsletterStrip, ContactSection, CTASection, Footer,",
      "         WhatsAppButton, CookieConsent, AIChatbot",
    ]),
    emptyLine(),

    heading3("Service Pages (service-landing-client.tsx)"),
    ...codeBlock([
      "Imports: Header, LandingHero, LandingSidebar, LandingCTA,",
      "         LandingNewsletter, Footer, WhatsAppButton, CookieConsent, AIChatbot",
    ]),
    emptyLine(),

    heading3("Sector Pages (sector-landing-client.tsx)"),
    ...codeBlock([
      "Imports: Header, LandingHero, LandingSidebar, LandingCTA,",
      "         LandingNewsletter, Footer, WhatsAppButton, CookieConsent, AIChatbot"
    ]),
    emptyLine(),

    heading3("Area Pages (area-landing-client.tsx)"),
    ...codeBlock([
      "Imports: Header, LandingHero, LandingSidebar, LandingCTA,",
      "         LandingNewsletter, Footer, WhatsAppButton, CookieConsent, AIChatbot"
    ]),
    emptyLine(),

    heading3("Header Component"),
    ...codeBlock([
      "Imports: Link (next/link), MobileMenu (inline), NAV_LINKS (site-data)",
      "Depends on: site-data.ts for navigation links"
    ]),
    emptyLine(),

    heading3("Landing Components"),
    ...codeBlock([
      "landing-hero.tsx   → imports: Link, SERVICES/SECTORS/AREAS (site-data)",
      "landing-sidebar.tsx → imports: GUARANTEES, SITE_CONFIG (site-data)",
      "landing-cta.tsx    → imports: Link, SITE_CONFIG (site-data)",
      "landing-newsletter.tsx → imports: useState (React)"
    ]),
    emptyLine(),

    heading3("Data Flow"),
    ...codeBlock([
      "site-data.ts ──→ All page components (content source of truth)",
      "site-data.ts ──→ Server components (generateMetadata, generateStaticParams)",
      "site-data.ts ──→ Client components (display data)",
      "API routes ──→ z-ai-web-dev-sdk (chat endpoint)",
      "API routes ──→ Console logging (contact, newsletter)"
    ]),
    emptyLine(),
  ];
}

// ─── APPENDIX C: DATA SCHEMA ─────────────────────────────────────
function appendixC() {
  return [
    heading1("Appendix C: Data Schema"),
    para("Full type definitions from site-data.ts for landing page data structures:"),
    emptyLine(),

    heading3("SERVICE_LANDING_DATA Structure"),
    ...codeBlock([
      "type ServiceLandingData = {",
      "  slug: string;",
      "  title: string;",
      "  heroSubtitle: string;",
      "  description: string;",
      "  metaTitle: string;",
      "  metaDescription: string;",
      "  includedFeatures: string[];",
      "  processSteps: { step: number; title: string; description: string }[];",
      "  faqs: { question: string; answer: string }[];",
      "  dataTables: { title: string; headers: string[]; rows: string[][] }[];",
      "  ctaText: string;",
      "};",
    ]),
    emptyLine(),

    heading3("SECTOR_LANDING_DATA Structure"),
    ...codeBlock([
      "type SectorLandingData = {",
      "  slug: string;",
      "  title: string;",
      "  heroSubtitle: string;",
      "  sectorColor: string;",
      "  metaTitle: string;",
      "  metaDescription: string;",
      "  keyStats: { label: string; value: string }[];",
      "  decisionMakers: {",
      "    role: string;",
      "    concerns: string[];",
      "    solution: string;",
      "  }[];",
      "  sectorFaqs: { question: string; answer: string }[];",
      "  ctaText: string;",
      "};",
    ]),
    emptyLine(),

    heading3("AREA_LANDING_DATA Structure"),
    ...codeBlock([
      "type AreaLandingData = {",
      "  slug: string;",
      "  title: string;",
      "  heroSubtitle: string;",
      "  focusLabel: string;",
      "  metaTitle: string;",
      "  metaDescription: string;",
      "  mainContent: string[];",
      "  servicesTable: { service: string; description: string }[];",
      "  suburbs: string[];",
      "  ctaText: string;",
      "};",
    ]),
    emptyLine(),

    heading3("SITE_CONFIG Structure"),
    ...codeBlock([
      "type SiteConfig = {",
      "  name: string;",
      "  tagline: string;",
      "  phone: string;",
      "  whatsapp: string;",
      "  email: string;",
      "  address: string;",
      "  domain: string;",
      "  social: {",
      "    facebook: string;",
      "    instagram: string;",
      "    youtube: string;",
      "    linkedin: string;",
      "    tiktok: string;",
      "    pinterest: string;",
      "    twitter: string;",
      "  };",
      "  hours: { days: string; time: string }[];",
      "  founder: { name: string; title: string };",
      "};",
    ]),
    emptyLine(),

    divider(),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 480, after: 240 },
      children: [
        new TextRun({
          text: "— End of Document —",
          size: 24,
          color: MID_GRAY,
          italics: true,
          font: "Inter",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: "JHB Curtain Cleaning Specialists — Technical Handoff Document v1.0",
          size: 20,
          color: MID_GRAY,
          font: "Inter",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "Prepared by Z.ai Development Team for AutoClaw — 21 June 2025",
          size: 20,
          color: MID_GRAY,
          font: "Inter",
        }),
      ],
    }),
  ];
}

// ─── DOCUMENT ASSEMBLY ───────────────────────────────────────────
async function main() {
  console.log("Generating JHB Curtain Cleaning Technical Handoff Document...");

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            size: 22,
            font: "Inter",
            color: DARK,
          },
          paragraph: {
            spacing: { line: 340 },
          },
        },
        heading1: {
          run: {
            size: 56,
            bold: true,
            color: BRAND_EMERALD,
            font: "Playfair Display",
          },
          paragraph: {
            spacing: { before: 480, after: 240 },
          },
        },
        heading2: {
          run: {
            size: 40,
            bold: true,
            color: BRAND_BRONZE,
            font: "Playfair Display",
          },
          paragraph: {
            spacing: { before: 360, after: 180 },
          },
        },
        heading3: {
          run: {
            size: 32,
            bold: true,
            color: DARK,
            font: "Inter",
          },
          paragraph: {
            spacing: { before: 240, after: 120 },
          },
        },
        listParagraph: {
          run: {
            size: 22,
            font: "Inter",
          },
        },
      },
    },
    numbering: {
      config: [
        {
          reference: "ordered-list",
          levels: [
            {
              level: 0,
              format: LevelFormat.DECIMAL,
              text: "%1.",
              alignment: AlignmentType.START,
              style: {
                paragraph: {
                  indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.25) },
                },
              },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(1),
              bottom: convertInchesToTwip(1),
              left: convertInchesToTwip(1.2),
              right: convertInchesToTwip(1.2),
            },
          },
          titlePage: true,
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "JHB Curtain Cleaning — Technical Handoff",
                    size: 16,
                    color: MID_GRAY,
                    italics: true,
                    font: "Inter",
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Page ",
                    size: 16,
                    color: MID_GRAY,
                    font: "Inter",
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 16,
                    color: MID_GRAY,
                    font: "Inter",
                  }),
                  new TextRun({
                    text: " of ",
                    size: 16,
                    color: MID_GRAY,
                    font: "Inter",
                  }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                    size: 16,
                    color: MID_GRAY,
                    font: "Inter",
                  }),
                  new TextRun({
                    text: "  |  Confidential — AutoClaw",
                    size: 16,
                    color: MID_GRAY,
                    italics: true,
                    font: "Inter",
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          // Cover Page
          ...coverPage(),

          // Table of Contents
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 360 },
            children: [
              new TextRun({
                text: "Table of Contents",
                bold: true,
                size: 56,
                color: BRAND_EMERALD,
                font: "Playfair Display",
              }),
            ],
          }),
          new TableOfContents("Table of Contents", {
            hyperlink: true,
            headingStyleRange: "1-3",
          }),
          new Paragraph({
            children: [new PageBreak()],
          }),

          // All sections
          ...section1(),
          ...section2(),
          ...section3(),
          ...section4(),
          ...section5(),
          ...section6(),
          ...section7(),
          ...section8(),
          ...section9(),
          ...section10(),
          ...section11(),
          ...section12(),
          ...section13(),

          // Appendices
          ...appendixA(),
          ...appendixB(),
          ...appendixC(),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync("/home/z/my-project/JHB_Curtain_Cleaning_Technical_Handoff.docx", buffer);
  console.log("✅ Document generated successfully!");
  console.log("   Output: /home/z/my-project/JHB_Curtain_Cleaning_Technical_Handoff.docx");
  console.log(`   Size: ${(buffer.length / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error("Error generating document:", err);
  process.exit(1);
});
