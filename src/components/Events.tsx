import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaClock,
} from "react-icons/fa";

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const upcomingEvents = [
    {
      id: 1,
      date: "NOV 15",
      year: "2025",
      title: "Jazz & Soul Night",
      venue: "Blue Note NYC",
      city: "New York, USA",
      time: "8:00 PM",
      ticketUrl: "#",
      soldOut: false,
    },
    {
      id: 2,
      date: "NOV 28",
      year: "2025",
      title: "Symphony Collaboration",
      venue: "Sydney Opera House",
      city: "Sydney, Australia",
      time: "7:30 PM",
      ticketUrl: "#",
      soldOut: false,
    },
    {
      id: 3,
      date: "DEC 10",
      year: "2025",
      title: "Christmas Jazz Special",
      venue: "Royal Festival Hall",
      city: "London, UK",
      time: "7:00 PM",
      ticketUrl: "#",
      soldOut: true,
    },
    {
      id: 4,
      date: "DEC 31",
      year: "2025",
      title: "New Year's Eve Gala",
      venue: "The Ritz Carlton",
      city: "Dubai, UAE",
      time: "9:00 PM",
      ticketUrl: "#",
      soldOut: false,
    },
  ];

  return (
    <section id="events" className="py-20 bg-sax-navy/10" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-sax-gold mx-auto mb-8"></div>
            <p className="text-xl text-sax-cream/80 max-w-3xl mx-auto">
              Join me for an unforgettable musical experience at these upcoming
              performances
            </p>
          </motion.div>

          {/* Events List */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-sax-black/50 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex">
                  {/* Date Block */}
                  <div className="bg-sax-gold text-sax-black p-6 text-center min-w-[120px] flex flex-col justify-center">
                    <div className="text-3xl font-bold">
                      {event.date.split(" ")[1]}
                    </div>
                    <div className="text-lg font-semibold">
                      {event.date.split(" ")[0]}
                    </div>
                    <div className="text-sm">{event.year}</div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-sax-cream mb-3 group-hover:text-sax-gold transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2 text-sax-cream/70 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sax-gold" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sax-gold" />
                        <span>{event.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-sax-gold" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {event.soldOut ? (
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        SOLD OUT
                      </span>
                    ) : (
                      <motion.a
                        href={event.ticketUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-sax-gold text-sax-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-sax-bronze transition-colors"
                      >
                        <FaTicketAlt />
                        Get Tickets
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-sax-navy/50 to-sax-black/50 rounded-lg p-12"
          >
            <h3 className="heading-3 mb-4">Book Me for Your Event</h3>
            <p className="text-lg text-sax-cream/80 mb-8 max-w-2xl mx-auto">
              Looking for a saxophonist to elevate your special event? From
              intimate gatherings to grand celebrations, I bring the perfect
              musical atmosphere to any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Private Events</button>
              <button className="btn-secondary">Corporate Functions</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
