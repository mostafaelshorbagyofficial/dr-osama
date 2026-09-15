import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import outdoorStreetPortrait from '../assets/outdoor-street-portrait.jpg';
import outdoorStreet from '../assets/outdoor-street.jpg';

const themes = [
  { title: 'SUCCESS', quote: 'Discipline is more important than motivation.' },
  { title: 'FAILURE', quote: 'The biggest lesson from a decision that did not work.' },
  { title: 'PRESSURE', quote: 'How do you lead when everyone is watching?' },
  { title: 'LEGACY', quote: 'How do you build something that lasts beyond you?' },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header area with full editorial treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-24">
          <div className="lg:col-span-8 lg:pr-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8"
            >
              07 — Leadership
            </motion.p>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                LEADERSHIP IS BUILT
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light text-[#B8963E] leading-[1.0] italic"
              >
                THROUGH EXPERIENCE.
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Main grid: themes + photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Street portrait — large */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 1.4 }}
            className="lg:col-span-4 img-zoom"
          >
            <img
              src={outdoorStreetPortrait}
              alt="Dr. Osama Taha — outdoor leadership"
              className="w-full h-[600px] object-cover object-top"
            />
          </motion.div>

          {/* Middle: Themes */}
          <div className="lg:col-span-5">
            <div className="space-y-0">
              {themes.map((theme, i) => (
                <motion.div
                  key={theme.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="py-8 border-b border-white/10 group"
                >
                  <span className="label text-[#B8963E] block mb-3">{theme.title}</span>
                  <p className="font-display text-2xl text-[#8C8478] group-hover:text-[#FAFAF8] transition-colors duration-400 leading-snug italic">
                    "{theme.quote}"
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.5 }}
              className="mt-10 font-sans text-sm text-[#5A5550] leading-relaxed"
            >
              Real leadership is not a concept. It is the accumulation of decisions made
              under pressure, with incomplete information, and the full weight of responsibility.
            </motion.p>
          </div>

          {/* Right: Second image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-3 flex flex-col justify-end"
          >
            <div className="img-zoom mb-4">
              <img
                src={outdoorStreet}
                alt="Dr. Osama Taha — street"
                className="w-full h-72 object-cover object-center"
              />
            </div>
            <div className="border-l-2 border-[#B8963E]/30 pl-4">
              <p className="font-sans text-xs text-[#5A5550] leading-relaxed">
                Confidence is not the absence of doubt. It is the discipline to act despite it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
