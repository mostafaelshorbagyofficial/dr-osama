import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import studioBeigeSuit from '../assets/studio-beige-suit.jpg';

export default function Position() {
  return (
    <section id="position" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      {/* Atmospheric radial light */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(13,27,42,0.6) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8"
            >
              01 — The Position
            </motion.p>

            {/* Large headline */}
            <div className="overflow-hidden mb-4">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                MORE THAN
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light leading-[1.0]"
                style={{ color: '#B8963E' }}
              >
                A SURGEON.
              </motion.h2>
            </div>

            {/* Three position lines */}
            <div className="space-y-0 mb-16">
              {[
                { line: 'A SURGEON BY EXPERTISE.', sub: 'Bariatric & Metabolic Surgery' },
                { line: 'A LEADER BY EXPERIENCE.', sub: 'Healthcare Institution Development' },
                { line: 'A HUMAN BY PURPOSE.', sub: 'Values · Impact · Legacy' },
              ].map((item, i) => (
                <motion.div
                  key={item.line}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
                  className="flex items-start gap-6 py-5 border-b border-white/10"
                >
                  <span className="font-sans text-[9px] tracking-[0.15em] text-[#B8963E]/50 mt-1.5 shrink-0">0{i + 1}</span>
                  <div>
                    <div className="font-display text-xl md:text-2xl text-[#FAFAF8] font-medium">{item.line}</div>
                    <div className="font-sans text-xs text-[#5A5550] mt-1 tracking-wide">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-sans text-sm text-[#8C8478] leading-relaxed max-w-lg"
            >
              This is not a conventional medical profile. It is the story of a brand that combines
              surgical expertise, healthcare business thinking, leadership philosophy, and human values
              into one coherent identity.
            </motion.p>

            {/* Domain grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['Medicine', 'Healthcare Business', 'Leadership', 'Values', 'Social Impact'].map((domain) => (
                <span key={domain} className="font-sans text-[9px] tracking-[0.15em] uppercase text-[#8C8478] border border-white/10 px-3 py-1.5">
                  {domain}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 img-zoom"
          >
            <img
              src={studioBeigeSuit}
              alt="Dr. Osama Taha — formal portrait"
              className="w-full h-[600px] object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
