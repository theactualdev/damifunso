import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Love Notes", href: "#lovenotes" },
    { label: "Flyers", href: "#flyers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/dami_funso/",
      label: "Instagram",
    },
    { icon: FaWhatsapp, url: "https://wa.me/2348186204823", label: "Whatsapp" },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-sax-navy/50 border-t border-sax-gold/20">
      <div className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-bold text-gradient mb-4">
                Damifunso
              </h3>
              <p className="text-sax-cream/60 text-sm">
                Premium, intimate sax performances. See highlights and full
                shows on Instagram @dami_funso.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-sax-cream mb-4">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="text-sax-cream/60 hover:text-sax-gold text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-sax-cream mb-4">
                Stay Connected
              </h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    className="text-2xl text-sax-cream/60 hover:text-sax-gold transition-all duration-300"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>

              <p className="text-sax-cream/60 text-sm mb-3">
                Follow for new performances and show dates
              </p>
              <form
                className="flex gap-2"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const input = form.querySelector(
                    'input[type="email"]'
                  ) as HTMLInputElement;
                  if (!input?.value) return;
                  try {
                    const res = await fetch("/api/subscribe", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: input.value }),
                    });
                    if (!res.ok) throw new Error("Failed");
                    input.value = "";
                    alert("Subscribed!");
                  } catch (err) {
                    alert("Subscription failed. Please try again.");
                  }
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-sax-black/50 border border-sax-gold/20 rounded text-sm text-sax-cream placeholder-sax-cream/40 focus:outline-none focus:border-sax-gold transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-sax-gold text-sax-black rounded text-sm font-semibold hover:bg-sax-bronze transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-sax-gold/10 pt-8 mt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sax-cream/60 text-sm text-center md:text-left">
                © {currentYear} Damifunso. All rights reserved.
              </p>
              <p className="text-sax-cream/60 text-sm flex items-center gap-1">
                Crafted with <FaHeart className="text-sax-gold text-xs" /> by
                <a
                  href="https://olayinka.codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"<theActualDev />"}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
