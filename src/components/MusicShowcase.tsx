import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

const MusicShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const tracks = [
    { id: 1, title: "Live Moments", album: "Instagram Reels", duration: "—" },
    {
      id: 2,
      title: "Intimate Sessions",
      album: "Instagram Reels",
      duration: "—",
    },
    {
      id: 3,
      title: "Stage Highlights",
      album: "Instagram Reels",
      duration: "—",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Live at Blue Note Jazz Club",
      thumbnail:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "125K",
      youtubeUrl: "#",
    },
    {
      id: 2,
      title: "Behind the Music - Studio Sessions",
      thumbnail:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "89K",
      youtubeUrl: "#",
    },
    {
      id: 3,
      title: "Jazz Festival 2024 Performance",
      thumbnail:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "203K",
      youtubeUrl: "#",
    },
  ];

  return (
    <section id="music" className="py-20 bg-sax-black" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Music & Performances</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto"></div>
          </motion.div>

          {/* Instagram Highlights */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-3 mb-8 text-center lg:text-left"
            >
              Instagram Highlights
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-sax-navy/30 rounded-lg p-6 hover:bg-sax-navy/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-sax-cream">
                        {track.title}
                      </h4>
                      <p className="text-sm text-sax-cream/60">{track.album}</p>
                    </div>
                    <button
                      onClick={() =>
                        setIsPlaying(isPlaying === track.id ? null : track.id)
                      }
                      className="bg-sax-gold/20 hover:bg-sax-gold/30 text-sax-gold p-3 rounded-full transition-all duration-300"
                    >
                      {isPlaying === track.id ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-sax-cream/60">Reels</span>
                    <a
                      href="https://instagram.com/dami_funso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sax-cream/70 hover:text-sax-gold"
                    >
                      <FaInstagram /> View on Instagram
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video Performances (link out to IG) */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="heading-3 mb-8 text-center lg:text-left"
            >
              Video Performances
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-sax-gold/90 text-sax-black p-4 rounded-full"
                      >
                        <FaPlay className="text-xl ml-1" />
                      </motion.div>
                    </div>
                    <a
                      href="https://instagram.com/dami_funso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 bg-sax-gold text-sax-black px-2 py-1 text-xs rounded flex items-center gap-1"
                    >
                      <FaInstagram /> IG
                    </a>
                  </div>
                  <h4 className="font-semibold text-sax-cream group-hover:text-sax-gold transition-colors">
                    {video.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-12"
          >
            <a
              href="https://instagram.com/dami_funso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <FaInstagram /> See More on Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MusicShowcase;
