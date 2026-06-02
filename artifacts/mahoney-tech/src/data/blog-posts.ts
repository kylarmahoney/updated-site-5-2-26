export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
  imageAlt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "are-qr-codes-bad-quishing-scams-galveston",
    title: "Are QR Codes Bad? How Galveston Businesses Can Stop \"Quishing\" Scams",
    date: "2025-06-02",
    excerpt: "QR codes are everywhere in Galveston — restaurant tables, parking meters, shop windows. They're fast, convenient, and a major security risk. Here's how to protect your business.",
    tags: ["Cybersecurity", "Small Business", "Galveston"],
    image: "https://cdn.marblism.com/pWUqV7CUdhA.webp",
    imageAlt: "A smartphone scanning a QR code on a glass storefront in Galveston, atmospheric tech style.",
    content: `
      <p><strong>TECH PROBLEMS? WE FIX THEM.</strong></p>
      <p>QR codes are everywhere in Galveston. They are on restaurant tables, parking meters, and shop windows. They are fast. They are convenient. They are also a major security risk. Cybercriminals are now using these black-and-white squares to steal your data. This is called "Quishing": QR code phishing.</p>
      <p>For a small business, a single bad scan can lead to a drained bank account or a compromised network. You need to know how to protect your business. You need <a href="/services">cybersecurity Galveston</a> can rely on.</p>

      <hr />

      <h3>01 WHAT IS QUISHING? // THE THREAT DEFINED</h3>
      <p>Quishing is a phishing attack that uses a QR code as the bait. Traditional phishing uses links in emails. Quishing hides those links inside a QR code image.</p>
      <p>Most email filters can't "read" an image. They miss the threat. When a staff member or customer scans the code, they are sent to a malicious site. This site might look like a login page for Microsoft 365, a bank, or a payment processor.</p>
      <p><strong>THE GOAL:</strong> Steal credentials. Install malware. Redirect payments.</p>
      <p>// <strong>REALITY CHECK:</strong> A QR code is just a link in disguise. If you wouldn't click a suspicious link, don't scan a suspicious code.</p>

      <hr />

      <h3>02 WHY GALVESTON? // LOCAL VULNERABILITIES</h3>
      <p>Galveston thrives on tourism and hospitality. Restaurants, retail stores, and seasonal rentals are high-traffic environments. This makes us a target.</p>
      <p>Scammers know that local business owners are busy. They know that staff move fast. They exploit that speed.</p>
      <ul>
        <li><strong>RESTAURANTS:</strong> Scammers place stickers over the QR codes on your menus. Customers scan them, enter payment info, and the money goes to a hacker.</li>
        <li><strong>RETAIL:</strong> A "delivery failure" flyer is posted on your shop door with a QR code to "re-schedule." Your manager scans it, and your <a href="/">business network security</a> is compromised.</li>
        <li><strong>PARKING:</strong> Fake stickers are placed on public parking meters. Tourists scan them, and their credit card details are harvested instantly.</li>
      </ul>
      <p>// <strong>THE RISK:</strong> Your reputation is on the line. If a customer is scammed at your place of business, they won't blame the hacker. They will blame you.</p>

      <img src="https://cdn.marblism.com/vdZOY90yR5N.webp" alt="Close-up of a tampered QR code sticker peeling off a metal surface." />

      <hr />

      <h3>03 HOW IT HAPPENS // ATTACK VECTORS</h3>
      <p>Scammers are creative. They use multiple angles to get inside your systems.</p>
      <p><strong>01 // PHYSICAL TAMPERING</strong><br />The most common method in Galveston. A physical sticker is placed over your legitimate QR code. This is easy to do in a crowded restaurant or busy sidewalk.</p>
      <p><strong>02 // EMAIL INFILTRATION</strong><br />Your employee receives an email. It looks like it's from HR or a vendor. It says there is a problem with their payroll or a pending invoice. It includes a QR code to "verify identity." Once scanned, the hacker has their login.</p>
      <p><strong>03 // MALICIOUS WI-FI</strong><br />A flyer in your shop offers "Free High-Speed Wi-Fi." The QR code connects the user to a rogue hotspot. This allows the attacker to intercept everything the user does online.</p>

      <hr />

      <h3>04 RED FLAGS // IDENTIFYING TAMPERED CODES</h3>
      <p>Precision is your best defense. Train your staff to look for these signs:</p>
      <ul>
        <li><strong>STREET STICKERS:</strong> Does the QR code look like it was printed as part of the sign? Or is it a sticker slapped on top?</li>
        <li><strong>URL DISCREPANCIES:</strong> When you scan a code, your phone shows a preview link. Does it match your business name? If your site is <code>galvestoneats.com</code> but the link is <code>bit.ly/secure-login-2026</code>, stop.</li>
        <li><strong>URGENCY:</strong> Does the sign or email demand immediate action? "Scan now or account will be deleted." This is a classic scam tactic.</li>
        <li><strong>UNSOLICITED CODES:</strong> If you didn't ask for it, don't scan it. No bank or government agency will ever ask you to verify your identity via a random QR code.</li>
      </ul>
      <p>// <strong>DISCRETION IS KEY:</strong> If a code looks suspicious, don't just ignore it. Remove it. Protect your customers.</p>

      <hr />

      <h3>05 DEFENSE PROTOCOLS // ACTIONABLE STEPS</h3>
      <p>You need a plan. <a href="/services">Small business IT support</a> isn't just about fixing broken printers. It's about building a wall around your data.</p>
      <p><strong>01 // SECURE YOUR PHYSICAL SPACE</strong><br />Check your QR codes every day. Make sure they haven't been covered with stickers. Use permanent signage (glass-etched or high-quality printing) that can't be easily tampered with.</p>
      <p><strong>02 // MULTI-FACTOR AUTHENTICATION (MFA)</strong><br />Enable MFA on everything. Email. Banking. POS systems. Even if a scammer steals a password via a QR code, they can't get in without the second factor. This is the single most effective way to stop a breach.</p>
      <p><strong>03 // EMPLOYEE TRAINING</strong><br />Your staff is your first line of defense. Run a 10-minute briefing. Show them what a fake code looks like. Tell them: "Never enter a password on a site opened by a QR code."</p>
      <p><strong>04 // USE SECURE TOOLS</strong><br />Only use the built-in camera app on iPhones or Androids. Never use third-party "QR Scanner" apps. They often contain malware themselves.</p>
      <p><strong>05 // NETWORK SEGREGATION</strong><br />Keep your guest Wi-Fi separate from your business network. If a customer scans a bad code on your guest Wi-Fi, it shouldn't be able to reach your office computers or POS system.</p>

      <img src="https://cdn.marblism.com/TASYA8BSpBd.webp" alt="Digital security interface overlaying a professional Galveston office." />

      <hr />

      <h3>06 MAHONEY TECH SOLUTIONS // PRECISION CYBERSECURITY</h3>
      <p>Technology should work for you, not against you. At Mahoney Tech Solutions, we solve your tech problems quickly and discreetly. We don't use jargon. We use results.</p>
      <p>We provide comprehensive <a href="/">cybersecurity Galveston</a> businesses need to stay operational. From Wi-Fi security to full office network setups, we ensure your data stays yours.</p>
      <ul>
        <li><strong>24/7 REMOTE SUPPORT:</strong> We are always watching your back.</li>
        <li><strong>SAME-DAY SERVICE:</strong> When things go wrong, we move fast.</li>
        <li><strong>1:1 PERSONAL SERVICE:</strong> You deal with us directly. No call centers. No scripts.</li>
      </ul>
      <p>// <strong>TECH PROBLEMS? WE FIX THEM.</strong></p>

      <hr />

      <h3>WHAT OUR CLIENTS SAY // RESULTS DRIVEN</h3>
      <blockquote>
        <p>"Saved our business. Our POS system crashed before a busy weekend and Kylar had it running the same day."<br /><strong>— Marco T. (Restaurant Owner)</strong></p>
      </blockquote>
      <blockquote>
        <p>"Finally someone who explains things in plain English. Set up our whole office network without any hassle."<br /><strong>— Denise W. (Small Business Owner)</strong></p>
      </blockquote>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
