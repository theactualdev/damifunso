import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "theglobaldf@gmail.com";
const FROM_EMAIL = "noreply@theactualdev.live";

app.post("/api/contact", async (req, res) => {
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
    console.log("Email sent successfully");
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send" });
  }
});

app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    console.log("Email received", email);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New subscriber`,
      text: `Email: ${email}`,
    });
    console.log("Email sent successfully");
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

const port = process.env.PORT || 5174;
app.listen(port, () => console.log(`Mail API running on :${port}`));
