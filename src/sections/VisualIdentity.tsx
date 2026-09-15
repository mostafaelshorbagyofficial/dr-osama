import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';

const palette = [
  { color: '#0A0A0A', name: 'BLACK', meaning: 'Authority · Depth · Medical' },
  { color: '#0D1B2A', name: 'DEEP NAVY', meaning: 'Intelligence · Trust · Healthcare' },
  { color: '#B8963E', name: 'GOLD', meaning: 'Premium · Leadership · Achievement' },
  { color: '#FAFAF8', name: 'WHITE', meaning: 'Clarity · Confidence · Premium Feel' },
];

export default function VisualIdentity() {
  return (
    <section id="visual-identity" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">15 — Visual Identity</motion.p>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            THE LANGUAGE<br />OF THE <em>BRAND.</em>
          </motion.h2>
        </div>

        {/* Color swatches */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {palette.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-32 mb-4 border border-white/10" style={{ backgroundColor: p.color }} />
              <p className="label text-[#B8963E] mb-1">{p.name}</p>
              <p className="text-xs text-[#5A5550] font-sans">{p.meaning}</p>
            </motion.div>
          ))}
        </div>

        {/* Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
          >
            <p className="label mb-4 text-[#8C8478]">Display / Editorial</p>
            <p className="font-display text-5xl text-[#FAFAF8] leading-tight">Cormorant<br />Garamond</p>
            <p className="mt-4 font-display text-lg italic text-[#B8963E]">More Than A Surgeon.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
          >
            <p className="label mb-4 text-[#8C8478]">UI / Body</p>
            <p className="font-sans text-3xl font-light text-[#FAFAF8]">Inter</p>
            <p className="mt-4 font-sans text-sm text-[#8C8478] leading-relaxed max-w-xs">
              Advanced medicine. Smart management. Human impact.
            </p>
          </motion.div>
        </div>

        {/* Human photography note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 border border-[#B8963E]/20"
        >
          <p className="label mb-3">Human Photography + Documentary Visuals</p>
          <p className="text-sm text-[#8C8478] font-sans leading-relaxed max-w-2xl">
            The brand stays premium without becoming corporate. Personal photography carries warmth. Editorial composition carries authority. The two together create something that feels both human and exceptional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
