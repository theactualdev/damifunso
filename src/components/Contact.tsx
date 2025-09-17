import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setFormData({ name: "", email: "", message: "" });
      alert("Thanks! Your message has been sent.");
    } catch (err) {
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/dami_funso/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/@damifunso?si=ZkW-q_u4CNuZZZ0M",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/2348186204823",
      label: "Whatsapp",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-sax-black" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Bookings & Enquiries</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto mb-8"></div>
            <p className="text-xl text-sax-cream/80 max-w-3xl mx-auto">
              For luxury weddings, cultural experiences and private events.
              Performances are showcased on Instagram — reach out via email or
              DM.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sax-cream mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sax-navy/30 border border-sax-gold/20 rounded-lg text-sax-cream placeholder-sax-cream/40 focus:outline-none focus:border-sax-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sax-cream mb-2 font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sax-navy/30 border border-sax-gold/20 rounded-lg text-sax-cream placeholder-sax-cream/40 focus:outline-none focus:border-sax-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sax-cream mb-2 font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-sax-navy/30 border border-sax-gold/20 rounded-lg text-sax-cream placeholder-sax-cream/40 focus:outline-none focus:border-sax-gold transition-colors resize-none"
                    placeholder="Tell me about your event or project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div>
                <h3 className="heading-3 mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:theglobaldf@gmail.com"
                    className="flex items-center gap-4 text-sax-cream/80 hover:text-sax-gold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope className="text-sax-gold text-xl" />
                    <span>theglobaldf@gmail.com</span>
                  </motion.a>

                  <motion.a
                    href="tel:+2348186204823"
                    className="flex items-center gap-4 text-sax-cream/80 hover:text-sax-gold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="text-sax-gold text-xl" />
                    <span>+(234) 818-620-4823</span>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 text-sax-cream/80"
                    whileHover={{ x: 5 }}
                  >
                    <FaMapMarkerAlt className="text-sax-gold text-xl" />
                    <span>Lagos, Nigeria</span>
                  </motion.div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="heading-3 mb-6">Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`text-3xl text-sax-cream/60 ${social.color} transition-all duration-300`}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Booking Info */}
              <div className="bg-sax-navy/30 p-6 rounded-lg border border-sax-gold/20">
                <h4 className="font-semibold text-sax-gold mb-3">
                  Booking Information
                </h4>
                <p className="text-sax-cream/70 text-sm leading-relaxed">
                  For performance bookings, please include event details, date,
                  location, and expected audience size. I typically respond
                  within 24-48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
