import { motion } from "framer-motion";

const flyers = [
  {
    id: 1,
    src: "/images/WhatsApp Image 2025-09-15 at 15.54.25_054c30b2.jpg",
    alt: "Event flyer 1",
  },
  {
    id: 2,
    src: "/images/WhatsApp Image 2025-09-15 at 15.54.25_b2a735b9.jpg",
    alt: "Event flyer 2",
  },
  {
    id: 3,
    src: "/images/WhatsApp Image 2025-09-15 at 15.54.26_50647350.jpg",
    alt: "Event flyer 3",
  },
];

const Flyers = () => {
  return (
    <section id="flyers" className="py-20 bg-sax-navy/10">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Flyers & Announcements</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto"></div>
            <p className="text-sax-cream/70 mt-4">
              Official posters and artwork with event details
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flyers.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative overflow-hidden rounded-lg bg-sax-black/40 border border-sax-gold/10 hover:border-sax-gold/30 transition"
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flyers;
