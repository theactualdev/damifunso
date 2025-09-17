import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      quote:
        "Damifunso's performance was nothing short of magical. His saxophone doesn't just play notes; it tells stories that resonate with the soul.",
      author: "Adekunle Gold",
      role: "Artiste",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "In my 30 years of organizing jazz festivals, I've rarely witnessed such command of the instrument combined with genuine emotional depth.",
      author: "Timi Dakolo",
      role: "Artiste",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The way Damifunso blends traditional jazz with contemporary influences creates a sound that's both timeless and refreshingly modern.",
      author: "Femi Kuti",
      role: "Artiste",
      rating: 5,
    },
  ];

  const pressQuotes = [
    {
      id: 1,
      publication: "The New York Times",
      quote:
        "A masterful performance that redefines what the saxophone can do in the 21st century.",
    },
    {
      id: 2,
      publication: "Jazz Weekly",
      quote: "Damifunso is not just playing jazz; he's evolving it.",
    },
    {
      id: 3,
      publication: "BBC Music Magazine",
      quote:
        "An artist who bridges generations with his innovative yet respectful approach to jazz.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-sax-black" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">What They Say</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto"></div>
          </motion.div>

          {/* Client Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-sax-navy/20 p-8 rounded-lg relative hover:bg-sax-navy/30 transition-all duration-300"
              >
                <FaQuoteLeft className="text-4xl text-sax-gold/20 absolute top-6 left-6" />

                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-sax-gold text-sm" />
                    ))}
                  </div>

                  <p className="text-sax-cream/80 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t border-sax-gold/20 pt-4">
                    <p className="font-semibold text-sax-cream">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-sax-cream/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Press Quotes */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="heading-3 mb-8">Press Highlights</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {pressQuotes.map((press, index) => (
                <motion.div
                  key={press.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-sax-gold/10 to-sax-bronze/10 p-6 rounded-lg border border-sax-gold/20">
                    <h4 className="text-sax-gold font-bold mb-3">
                      {press.publication}
                    </h4>
                    <p className="text-sax-cream/70 italic">"{press.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
