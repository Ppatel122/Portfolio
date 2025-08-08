import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Send email via Resend
    const subject = `New portfolio contact from ${name}`;
    const to = "pranj1012@gmail.com";
    const from = "Portfolio Contact <onboarding@resend.dev>"; // Replace with your verified sender if available

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    try {
      const result = await resend.emails.send({ to, from, subject, html });
      if (result.error) {
        console.error("Resend error:", result.error);
        return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
      }
    } catch (e) {
      console.error("Resend exception:", e);
      return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


