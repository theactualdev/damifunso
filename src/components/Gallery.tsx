import { motion } from "framer-motion";

const photos = [
  { id: 1, src: "/images/df-5.JPG", alt: "Performance photo" },
  { id: 2, src: "/images/df-6.JPG", alt: "On stage" },
  { id: 3, src: "/images/DF-142.JPEG.jpg", alt: "Portrait" },
  { id: 4, src: "/images/IMG_9609.JPG", alt: "Backstage" },
  { id: 5, src: "/images/df-4.JPG", alt: "Live show" },
  { id: 6, src: "/images/Love notes Logo.JPG", alt: "Love Notes brand" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-sax-black">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto"></div>
            <p className="text-sax-cream/70 mt-4">
              A glimpse of moments on and off stage
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sax-black/0 group-hover:bg-sax-black/30 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
