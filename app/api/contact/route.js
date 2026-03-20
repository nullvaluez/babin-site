import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contact";

export async function POST(request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // TODO: Integrate with Formspree, Basin, or custom email service
    // For now, log the validated submission
    console.log("Contact form submission:", {
      name: `${validated.firstName} ${validated.lastName}`,
      phone: validated.phone,
      email: validated.email,
      caseType: validated.caseType,
      preferredContact: validated.preferredContact,
      bestTimeToCall: validated.bestTimeToCall,
      howDidYouHear: validated.howDidYouHear,
      isExistingClient: validated.isExistingClient,
      message: validated.message.substring(0, 100) + "...",
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
