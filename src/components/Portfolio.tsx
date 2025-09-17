import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaCalendar, FaTrophy } from "react-icons/fa";

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      id: 1,
      title: "Carnegie Hall Performance",
      venue: "New York, USA",
      date: "December 2023",
      image:
        "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        'Headlined "Jazz Legends Night" with the New York Philharmonic',
      type: "featured",
    },
    {
      id: 2,
      title: "Montreux Jazz Festival",
      venue: "Montreux, Switzerland",
      date: "July 2023",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Main stage performance at one of the world's most prestigious jazz festivals",
      type: "festival",
    },
    {
      id: 3,
      title: "Blue Note Tokyo",
      venue: "Tokyo, Japan",
      date: "March 2024",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sold-out 5-night residency at the legendary jazz club",
      type: "residency",
    },
    {
      id: 4,
      title: "Grammy Awards",
      venue: "Los Angeles, USA",
      date: "February 2024",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Special performance for Best Jazz Album category",
      type: "award",
    },
    {
      id: 5,
      title: "Royal Albert Hall",
      venue: "London, UK",
      date: "September 2023",
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Guest soloist with the London Symphony Orchestra",
      type: "featured",
    },
    {
      id: 6,
      title: "Cape Town Jazz Festival",
      venue: "Cape Town, South Africa",
      date: "April 2024",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Closing act for Africa's grandest jazz gathering",
      type: "festival",
    },
  ];

  const collaborations = [
    { name: "New York Philharmonic", logo: "🎼" },
    { name: "Blue Note Records", logo: "🎵" },
    { name: "London Symphony", logo: "🎻" },
    { name: "Verve Music Group", logo: "🎷" },
    { name: "Jazz at Lincoln Center", logo: "🎺" },
    { name: "Berklee College", logo: "🎓" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-sax-navy/10" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Performance Highlights</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto mb-8"></div>
            <p className="text-xl text-sax-cream/80 max-w-3xl mx-auto">
              Premium, intimate and unforgettable — Dami Funso crafts soulful
              stories through afro‑jazz, soul and contemporary sounds. Watch
              highlights and full performances on Instagram.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sax-black/90 via-sax-black/50 to-transparent" />

                  {/* Type Badge */}
                  {highlight.type === "featured" && (
                    <div className="absolute top-4 right-4 bg-sax-gold text-sax-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <FaTrophy className="text-xs" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-sax-gold transition-colors">
                    {highlight.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-sax-cream/80 mb-2">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-sax-gold" />
                      {highlight.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-sax-gold" />
                      {highlight.date}
                    </span>
                  </div>
                  <p className="text-sm text-sax-cream/70 line-clamp-2">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="heading-3 mb-8">Notable Collaborations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {collaborations.map((collab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {collab.logo}
                  </div>
                  <p className="text-sm font-medium text-sax-cream/80 group-hover:text-sax-gold transition-colors">
                    {collab.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
