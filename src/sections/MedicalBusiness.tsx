import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';
import heroDarkSuit from '../assets/hero-dark-suit.jpg';
import casualModern from '../assets/casual-modern.jpg';

const topics = [
  'Business Model & Pricing',
  'Operations & KPIs',
  'The Patient Journey',
  'Building Medical Teams',
  'Growth & Scale',
  'Digital Transformation',
  'AI in Healthcare',
];

export default function MedicalBusiness() {
  return (
    <section id="medical-business" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8"
            >
              06 — Medical Business
            </motion.p>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                FROM SURGERY
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
                TO SYSTEMS.
              </motion.h2>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="font-sans text-sm text-[#8C8478] leading-relaxed"
            >
              One of the major differentiators — a doctor who understands medicine and the business behind it.
              This is where surgical expertise meets strategic thinking.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Topics */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8 text-[#8C8478]"
            >
              Business territories
            </motion.p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-0"
            >
              {topics.map((t, i) => (
                <motion.div
                  key={t}
                  variants={fadeUp}
                  className="flex items-center gap-6 py-5 border-b border-white/10 group hover:border-[#B8963E]/20 transition-colors duration-300"
                >
                  <span className="label text-[#B8963E]/40 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xl text-[#8C8478] group-hover:text-[#FAFAF8] transition-colors duration-400">
                    {t}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Images + Statement */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.2 }}
              className="img-zoom"
            >
              <img
                src={heroDarkSuit}
                alt="Dr. Osama Taha — executive"
                className="w-full h-72 object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.2 }}
              className="p-8 border-l-2 border-[#B8963E]"
              style={{ background: 'rgba(184,150,62,0.04)' }}
            >
              <p className="font-display text-2xl text-[#FAFAF8] leading-snug mb-4">
                A doctor who understands medicine — and the business behind it.
              </p>
              <p className="font-sans text-xs text-[#8C8478] leading-relaxed">
                Healthcare is one of the world's most complex industries. Managing it requires
                more than medical knowledge — it requires strategic intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="img-zoom"
            >
              <img
                src={casualModern}
                alt="Dr. Osama Taha — modern"
                className="w-full h-40 object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
