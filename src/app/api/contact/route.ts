import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Send email notification via Resend directly to Prithvi's email
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["prithvip1811@gmail.com"],
      replyTo: email,
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #07090e; color: #f1f5f9; border-radius: 12px; border: 1px solid #1e293b;">
          <div style="border-bottom: 1px solid #1e293b; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #0ea5e9; margin: 0;">New Contact Form Message</h2>
            <p style="color: #94a3b8; font-size: 14px; margin-top: 5px;">Received via your Prithvi Patel Portfolio Website</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #38bdf8;">From:</strong> ${name} (&lt;<a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>&gt;)
          </div>

          <div style="margin-bottom: 20px;">
            <strong style="color: #38bdf8;">Message:</strong>
            <div style="background-color: #0e131f; border: 1px solid #1e293b; padding: 15px; border-radius: 8px; margin-top: 8px; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid #1e293b; pt-15px; font-size: 12px; color: #64748b; text-align: center;">
            Sent automatically via Resend Email API • Prithvi Patel Portfolio
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API send error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 400 }
      );
    }

    console.log(`[Resend Email Sent] Message ID: ${data?.id || "success"}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Prithvi will get back to you shortly.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend API server error:", error);
    return NextResponse.json(
      { error: "Internal server error submitting contact message" },
      { status: 500 }
    );
  }
}
