import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL || "theglobaldf@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@theactualdev.live";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ error: "Email is required" });
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New subscriber`,
      text: `Email: ${email}`,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to subscribe" });
  }
}
