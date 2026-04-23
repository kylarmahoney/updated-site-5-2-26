import { Router } from "express";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, contact, service, message } = req.body as {
    name?: string;
    contact?: string;
    service?: string;
    message?: string;
  };

  const cleanName = name?.trim() || "Not provided";
  const cleanContact = contact?.trim() || "Not provided";
  const cleanService = service?.trim() || "Not provided";
  const cleanMessage = message?.trim() || "Not provided";

  req.log.info({ name: cleanName, service: cleanService }, "Contact form submission received");

  const resendKey = process.env["RESEND_API_KEY"];

  if (!resendKey) {
    req.log.warn("RESEND_API_KEY not set — skipping email send");
    return res.json({ success: true, clientConfirmationSent: false });
  }

  try {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact);

    const payload: Record<string, unknown> = {
      from: "Mahoney Tech Solutions <noreply@mahoneytechsolutions.com>",
      to: "support@mahoneytechsolutions.com",
      subject: `New Lead: ${cleanService} — ${cleanName}`,
      html: `
        <h2>New Lead from MahoneyTechSolutions.com</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Contact:</strong> ${cleanContact}</p>
        <p><strong>Service:</strong> ${cleanService}</p>
        <p><strong>Message:</strong> ${cleanMessage}</p>
      `,
    };

    if (isEmail) {
      payload.reply_to = cleanContact;
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!emailRes.ok) {
      const err = await emailRes.json() as { name?: string; message?: string };
      req.log.error({ err }, "Resend API error");
      return res.status(400).json({ error: err.message || "Email send failed" });
    }

    return res.json({ success: true, clientConfirmationSent: false });
  } catch (err) {
    req.log.error({ err }, "Error sending contact email");
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
