import nodemailer from "nodemailer";

export async function sendContactEmail({
  firstName,
  lastName,
  email,
  phone,
  country,
  company,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlContent = `
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

  <div style="font-family: 'Poppins', Arial; font-size: 15px; color: #1a1a1a; line-height: 1.7;">
    <p>Hi Kyrian,</p>

    <p>A new contact inquiry has been submitted through the <strong>Tmoraa Contact Portal</strong>. Details are provided below.</p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

    <h3 style="font-weight: 600;">Sender Details</h3>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Country:</strong> ${country || "Not provided"}</p>
    <p><strong>Company:</strong> ${company || "Not provided"}</p>

    <h3 style="font-weight: 600; margin-top: 20px;">Message</h3>
    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #e6e6e6;">
      <p style="white-space: pre-wrap; margin: 0;">${message}</p>
    </div>

    <p style="margin-top: 24px;">If follow-up is required, the sender can be contacted directly at: <strong>${email}</strong></p>

    <p style="margin-top: 32px;">Regards,<br/><strong>Tmoraa Contact System</strong></p>
  </div>
  `;

  await transporter.sendMail({
    from: `"${firstName} ${lastName}" <${email}>`,
    to: "ankit.paul@keross.com",
    subject: `New Contact Inquiry from ${firstName} ${lastName}`,
    html: htmlContent,
  });
}
