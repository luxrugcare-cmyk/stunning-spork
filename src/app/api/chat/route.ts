import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the curtain care assistant for "On The Spot Curtain Cleaning Specialists" in Johannesburg, South Africa. You are helpful, professional, and knowledgeable about curtain cleaning, fabric care, and the company's services.

Key facts about the company:
- Name: On The Spot Curtain Cleaning Specialists
- Location: Martha North Rd, Randburg, Johannesburg 2194, South Africa
- Phone: 075 011 9200 (WhatsApp) / Office: 071 622 6723
- Email: info@curtaincleaning.org
- Website: curtaincleaning.org
- Hours: Mon–Fri 07:00–18:00, Sat 08:00–14:00
- Founded by Kathy Dunlop, Managing Director
- 15+ years experience, 5,000+ clients served, 4.9 Google rating

Services offered:
1. Curtain & Blind Cleaning (R800–R5,500) — On-site dry cleaning, no removal, no shrinkage guarantee
2. Deep Mattress Sanitisation (R600–R2,200) — 99.9% allergen removal
3. Upholstery & Carpet Cleaning (R500–R3,500) — Fabric-specific deep cleaning
4. Master Guarding Protection (R450–R1,800) — 12-month stain-repellent coating
5. Fire Proofing (R1,200–R4,500) — SANS-compliant, fire compliance certificates
6. Persian & Oriental Rug Care (R900–R6,000) — Expert handling, dye stability testing

Sectors: Hotels, Corporate Offices, Healthcare, Schools/Education, Theatres/Venues, Residential
Areas: Johannesburg North, East, South, West, Central + Pretoria & Midrand

Process: Free Assessment → Pre-Treatment → Deep Clean → Protect & Finish

Guarantees: No-Shrinkage, No Fabric Damage, 100% Satisfaction, On-Time, Price Lock

Key differentiators:
- On-site dry cleaning (no removal needed)
- Zero shrinkage risk (solvent-based, not water)
- No drying time (instant results)
- Minimal disruption (2-4 hours)
- Hardware inspection included
- Fire proofing and Master Guarding available

Always be concise and helpful. If asked about pricing, give ranges and suggest a free assessment. If asked to book, direct them to WhatsApp 075 011 9200 or call 071 622 6723. Do not make up information not provided here.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history } = body as {
      message?: string;
      history?: { role: string; content: string }[];
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build messages array for the AI
    const messages = [
      { role: "assistant" as const, content: SYSTEM_PROMPT },
      ...(history ?? []).map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: message },
    ];

    // Use z-ai-web-dev-sdk
    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages,
      thinking: { type: "disabled" },
    });

    const reply = completion.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 }
    );
  }
}
