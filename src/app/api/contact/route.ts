export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, businessName, email, message, projectType } = body;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Sending to self for now
            replyTo: email,
            subject: `New Project Inquiry: ${projectType} - ${name}`,
            text: `
Name: ${name}
Business Name: ${businessName || 'N/A'}
Email: ${email}
Project Type: ${projectType}
Message: ${message}
      `,
            html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h1>New Project Inquiry</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Project Type:</strong> ${projectType}</p>
  <hr />
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${message}</p>
</div>
      `,
        });

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
