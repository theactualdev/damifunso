import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAward, FaMusic, FaGlobe } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { icon: FaAward, text: "15+ Years Experience" },
    { icon: FaMusic, text: "500+ Performances" },
    { icon: FaGlobe, text: "30+ Countries" },
  ];

  return (
    <section id="about" className="py-20 bg-sax-navy/20" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">About Dami Funso</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/images/df-4.JPG"
                  alt="Damifunso performing"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sax-black/50 to-transparent" />
              </div>

              {/* Play button overlay for video */}
              <motion.button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sax-gold/90 hover:bg-sax-gold text-sax-black rounded-full p-6 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMusic className="text-3xl" />
              </motion.button>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-sax-cream/80 leading-relaxed">
                Dami Funso is a premium Nigerian saxophonist and performing
                artiste whose sound transcends notes — it speaks the language of
                soul, elegance and deep emotion. Known for his captivating stage
                presence and signature style, Dami blends jazz, Afrobeat, soul
                and contemporary influences to create performances that feel
                intimate, unforgettable and deeply personal.
              </p>

              <p className="text-lg text-sax-cream/80 leading-relaxed">
                He has shared stages with Simi, Adekunle Gold, Kizz Daniel, Timi
                Dakolo, Femi Kuti and Lagbaja, earning recognition not just for
                musicianship but for the way he moves hearts with every
                performance. Watch highlights and full performances on
                Instagram.
              </p>

              {/* Achievement Stats */}
              {/* <div className="grid grid-cols-3 gap-4 pt-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <achievement.icon className="text-3xl text-sax-gold mx-auto mb-2" />
                    <p className="text-sm font-semibold text-sax-cream/90">
                      {achievement.text}
                    </p>
                  </motion.div>
                ))}
              </div> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="pt-4"
              >
                <a
                  href="https://instagram.com/dami_funso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
