import { motion } from "framer-motion";

const bullets = [
  {
    title: "It’s not just a performance.",
    body: "It’s a love story told through music. Every song, every note on the saxophone, every transition is curated to evoke deep emotions: romance, joy, nostalgia and healing. People don’t just attend, they feel.",
  },
  {
    title: "Unlike big, noisy festivals",
    body: "Love Notes is intentionally intimate and premium. Guests feel seen, valued and part of something exclusive. The setup, lighting and ambience rival international jazz and soul shows.",
  },
  {
    title: "Dami Funso’s saxophone is a voice",
    body: "The fusion of afro‑jazz, soul, R&B and timeless classics makes the performance unique to Nigeria’s entertainment scene — and it’s all live, not playback.",
  },
  {
    title: "The ultimate Valentine’s season event",
    body: "Hosted in February, couples see it as the highlight of their love month; singles experience the beauty of romance through music.",
  },
];

const extensions = [
  "Curated dinners",
  "Elite event planning",
  "Romantic proposals & vow renewals",
  "Brand partnerships with wine, fashion and lifestyle companies",
];

const LoveNotes = () => {
  return (
    <section id="lovenotes" className="py-20 bg-sax-navy/10">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-2">Love Notes</h2>
            <p className="text-sax-gold font-semibold">By Dami Funso</p>
            <p className="text-sax-cream/70 mt-4">
              An Unforgettable Night of Love, Entertainment & Sax
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-3 mb-4">About the Show</h3>
              <p className="text-sax-cream/80 leading-relaxed">
                Love Notes by Dami Funso is a unique live musical experience
                that celebrates love, culture and premium artistry. It blends
                soulful saxophone performances, heartfelt vocals and curated
                romantic storytelling designed for lovers, dreamers and premium
                audiences — growing in quality and prestige annually.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-3 mb-4">What Makes It Special?</h3>
              <ul className="space-y-4">
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className="bg-sax-black/40 border border-sax-gold/10 rounded-lg p-4"
                  >
                    <p className="font-semibold text-sax-gold mb-1">
                      {b.title}
                    </p>
                    <p className="text-sax-cream/80">{b.body}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-3 mb-4">Beyond the Concert</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {extensions.map((e, i) => (
                <div
                  key={i}
                  className="bg-sax-black/40 border border-sax-gold/10 rounded-lg p-4 text-center text-sax-cream/80"
                >
                  {e}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/dami_funso"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow Updates on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;
