import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetEmail = async (to, resetLink) => {
  try {
    await resend.emails.send({
      from: "Password Reset <onboarding@resend.dev>",
      to,
      subject: "Reset your password",
      html: `
        <h3>Password Reset Request</h3>
        <p>Click the link below to reset your password. This link is valid for 15 minutes.</p>
        <p><a href="${resetLink}" target="_blank">${resetLink}</a></p>
      `,
    });
    console.log("✅ Reset email sent to", to);
  } catch (err) {
    console.error("❌ Error sending reset email:", err);
    throw err;
  }
};
