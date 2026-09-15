import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';

const directions = [
  { number: '01', title: 'PATIENT IMPACT', description: 'Real patient journeys and transformation. Stories told through the lens of change, not statistics.' },
  { number: '02', title: 'MEDICAL AWARENESS', description: 'Medical education for the public. Correcting misconceptions. Empowering informed decisions.' },
  { number: '03', title: 'COMMUNITY IMPACT', description: 'Initiatives, training, support, and healthcare awareness that extend beyond the clinic.' },
];

const documentary = [
  { step: 'BEFORE', color: '#5A5550' },
  { step: 'THE CHALLENGE', color: '#8C8478' },
  { step: 'THE INTERVENTION', color: '#B8963E' },
  { step: 'THE CHANGE', color: '#D4AF6A' },
  { step: 'THE IMPACT', color: '#FAFAF8' },
];

export default function SocialImpact() {
  return (
    <section id="social-impact" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      {/* Atmospheric top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">09 — Social Impact</motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
            >
              REAL STORIES.<br />
              <em>REAL CHANGE.</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Three directions */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-0">
            {directions.map((d) => (
              <motion.div key={d.number} variants={fadeUp} className="py-8 border-b border-white/10">
                <div className="flex items-start gap-6">
                  <span className="label text-[#B8963E]/60 shrink-0 mt-1">{d.number}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-[#FAFAF8] mb-3">{d.title}</h3>
                    <p className="text-sm text-[#8C8478] leading-relaxed font-sans">{d.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Documentary structure */}
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8 text-[#8C8478]">Documentary structure</motion.p>
            <div className="space-y-4">
              {documentary.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="font-display text-xl" style={{ color: item.color }}>{item.step}</span>
                  {i < documentary.length - 1 && (
                    <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${item.color}40, transparent)` }} />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 p-8 border border-[#B8963E]/20"
            >
              <p className="font-display text-lg text-[#D4AF6A] italic mb-3">Social Responsibility</p>
              <p className="text-sm text-[#8C8478] leading-relaxed font-sans">
                Social responsibility is not a campaign. It is part of the legacy. Every initiative, every story, every awareness effort contributes to a system of change that outlasts any single act.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
