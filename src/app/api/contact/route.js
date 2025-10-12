import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Setup transporter for GoDaddy
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // GoDaddy SMTP
      port: 465,                        // or 587 if 465 fails
      secure: true,                     // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,   // your GoDaddy email address
        pass: process.env.EMAIL_PASS,   // your GoDaddy email password
      },
    });

    // ✅ Define email content
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // ✅ Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent:", info.response);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
