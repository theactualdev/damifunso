import { motion } from "framer-motion";
import { FaPlay, FaMusic } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/df-6.JPG')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sax-black/70 via-sax-black/50 to-sax-black/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 section-padding text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="heading-1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Dami Funso</span>
            <span className="text-gradient block text-4xl md:text-5xl lg:text-6xl mt-2">
              Premium Nigerian Saxophonist
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-sax-cream/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Soulful, elegant and deeply emotional. Watch performances on
            Instagram.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://instagram.com/dami_funso"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 group"
            >
              <FaMusic className="group-hover:animate-pulse" />
              Watch on Instagram
            </a>
            <a
              href="mailto:damifunso@gmail.com"
              className="btn-secondary flex items-center gap-3 group"
            >
              <FaPlay className="group-hover:translate-x-1 transition-transform" />
              Book via Email / DM
            </a>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-sax-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sax-gold rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
