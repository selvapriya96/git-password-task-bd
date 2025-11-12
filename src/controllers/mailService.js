import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetEmail = async (userEmail, resetLink) => {
  try {
    await resend.emails.send({
      from: "Password Reset <onboarding@resend.dev>", // Default sender
      to: userEmail,
      subject: "Reset your password",
      html: `
        <h2>Password Reset</h2>
        <p>You requested to reset your password.</p>
        <p>Click the link below to set a new password:</p>
        <a href="${resetLink}" target="_blank">${resetLink}</a>
        <p><b>Note:</b> This link will expire in 15 minutes.</p>
      `
    });
    console.log("✅ Email sent successfully to:", userEmail);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
