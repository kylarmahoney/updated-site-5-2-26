import { Router } from "express";

const router = Router();

function buildEmailHtml(name: string, contact: string, service: string, message: string): string {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — Mahoney Tech Solutions</title>
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <style>
    :root { color-scheme: light !important; }
    * { color-scheme: light !important; }
    body { background-color: #f0f2f5 !important; color: #0d1929 !important; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color-scheme:light;"  bgcolor="#f0f2f5">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f2f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#0d1929;border-top:4px solid #2567c4;padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#2567c4;font-weight:600;">Mahoney Tech Solutions</p>
                    <h1 style="margin:6px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">New Lead Received</h1>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="background-color:#2567c4;color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:5px 12px;">INBOUND</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TIMESTAMP BAND -->
          <tr>
            <td style="background-color:#1a2e45;padding:10px 36px;">
              <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#8aaac8;letter-spacing:0.5px;">
                Submitted ${timestamp} CT &nbsp;·&nbsp; mahoneytechsolutions.com/contact
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 36px 28px;">

              <!-- SERVICE HIGHLIGHT -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#eef3fb;border-left:4px solid #2567c4;padding:16px 20px;">
                    <p style="margin:0 0 4px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#5a7a9a;font-weight:600;">Service Requested</p>
                    <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:700;color:#0d1929;">${service}</p>
                  </td>
                </tr>
              </table>

              <!-- FIELDS -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Name -->
                <tr>
                  <td style="border-bottom:1px solid #e8ecf0;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="110" style="vertical-align:top;padding:14px 0;">
                          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a9ab0;font-weight:600;">Name</p>
                        </td>
                        <td style="vertical-align:top;padding:14px 0;">
                          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;color:#0d1929;font-weight:600;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Contact -->
                <tr>
                  <td style="border-bottom:1px solid #e8ecf0;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="110" style="vertical-align:top;padding:14px 0;">
                          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a9ab0;font-weight:600;">Contact</p>
                        </td>
                        <td style="vertical-align:top;padding:14px 0;">
                          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;color:#2567c4;font-weight:600;">${contact}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="110" style="vertical-align:top;padding:14px 0;">
                          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a9ab0;font-weight:600;">Message</p>
                        </td>
                        <td style="vertical-align:top;padding:14px 0;">
                          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;color:#2c3e50;line-height:1.65;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#f8f9fb;padding:24px 36px;border-top:1px solid #e8ecf0;border-left:1px solid #e8ecf0;border-right:1px solid #e8ecf0;">
              <p style="margin:0 0 14px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:#5a7a9a;font-weight:500;">Reply directly to this lead:</p>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="tel:4099963178" style="display:inline-block;background-color:#2567c4;color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 22px;">Call Client</a>
                  </td>
                  <td>
                    <a href="mailto:${contact}" style="display:inline-block;background-color:#ffffff;color:#2567c4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:11px 22px;border:1px solid #2567c4;">Email Client</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0d1929;padding:18px 36px;">
              <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#4a6a8a;">
                Mahoney Tech Solutions &nbsp;·&nbsp; Galveston, TX &nbsp;·&nbsp; 409-996-3178
              </p>
              <p style="margin:4px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;color:#2a4060;">
                Auto-generated when a visitor submitted the contact form at mahoneytechsolutions.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

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
      html: buildEmailHtml(cleanName, cleanContact, cleanService, cleanMessage),
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
