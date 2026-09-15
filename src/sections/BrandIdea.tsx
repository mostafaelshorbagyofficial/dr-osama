import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import officeAuthority from '../assets/office-authority.jpg';

const evolution = [
  { from: 'SURGICAL EXPERTISE', arrow: true },
  { from: 'HEALTHCARE INSTITUTION DEVELOPMENT', arrow: true },
  { from: 'LEADERSHIP', arrow: true },
  { from: 'HUMAN VALUES & LEGACY', arrow: false },
];

export default function BrandIdea() {
  return (
    <section id="brand-idea" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 1.4 }}
            className="lg:col-span-5 img-zoom"
          >
            <img
              src={officeAuthority}
              alt="Dr. Osama Taha — authority"
              className="w-full h-[580px] object-cover object-top"
            />
            <div className="mt-4 px-1 flex items-center gap-3">
              <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, #B8963E, transparent)' }} />
              <p className="font-sans text-xs text-[#5A5550] leading-relaxed">
                Prof. Dr. Osama<br />
                Bariatric · Plastic Care
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8"
            >
              02 — The Brand Idea
            </motion.p>

            <div className="overflow-hidden mb-4">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-4xl md:text-6xl font-light text-[#FAFAF8] leading-[1.05]"
              >
                MORE THAN A DOCTOR.
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-14">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-4xl md:text-6xl font-light text-[#B8963E] leading-[1.05] italic"
              >
                A BUILDER OF SYSTEMS.
              </motion.h2>
            </div>

            {/* Evolution chain */}
            <div className="mb-14">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportConfig}
                className="label mb-6 text-[#8C8478]"
              >
                The evolution
              </motion.p>
              <div className="space-y-4">
                {evolution.map((item, i) => (
                  <motion.div
                    key={item.from}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                    className="flex flex-col"
                  >
                    <span className="font-display text-xl text-[#FAFAF8]">{item.from}</span>
                    {item.arrow && (
                      <span className="font-sans text-[#B8963E]/40 text-xs ml-2 mt-1">↓</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core goal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="p-8 border-l-2 border-[#B8963E]"
              style={{ background: 'rgba(184,150,62,0.04)' }}
            >
              <p className="label mb-4">Core Goal</p>
              <div className="flex items-center gap-4 flex-wrap">
                {['KNOWLEDGE', '+', 'INFLUENCE', '+', 'IMPACT'].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className={`font-display text-2xl ${item === '+' ? 'text-[#B8963E]/40' : 'text-[#FAFAF8]'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
