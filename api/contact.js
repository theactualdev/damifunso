import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL || "damifunso@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@theactualdev.live";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New contact from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send" });
  }
}
