import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { sector, area, name, email, phone, propertyType, windowCount, notes, popiaConsent } = body;

    // Basic validation
    if (!sector || !area || !name || !email || !phone || !propertyType || !windowCount) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    if (!popiaConsent) {
      return NextResponse.json(
        { error: "POPIA consent is required" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In production, this would send to a CRM, email service, or database
    // For now, log the submission
    console.log("=== Contact Form Submission ===");
    console.log("Sector:", sector);
    console.log("Area:", area);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Property Type:", propertyType);
    console.log("Window Count:", windowCount);
    console.log("Notes:", notes || "(none)");
    console.log("POPIA Consent:", popiaConsent);
    console.log("==============================");

    return NextResponse.json(
      { success: true, message: "Your assessment request has been received. We'll contact you within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
