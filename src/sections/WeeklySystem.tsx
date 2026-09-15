import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';

const weekly = [
  { count: '×2', type: 'Medical Reels', color: '#B8963E' },
  { count: '×2', type: 'Leadership / Values Reels', color: '#D4AF6A' },
  { count: '×1', type: 'Medical Business Reel', color: '#8C8478' },
  { count: '×1', type: 'Social Impact / Human Story', color: '#B8963E' },
  { count: '×1', type: 'Carousel', color: '#D4AF6A' },
  { count: '×7', type: 'Daily Stories', color: '#5A5550' },
  { count: '×1', type: 'LinkedIn Thought', color: '#8C8478' },
];

export default function WeeklySystem() {
  return (
    <section id="weekly-system" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">18 — Weekly Content System</motion.p>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            EVERY WEEK.<br /><em>EVERY FORMAT.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-0">
            {weekly.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-6 py-5 border-b border-white/10"
              >
                <span className="font-display text-3xl w-12 shrink-0" style={{ color: item.color }}>
                  {item.count}
                </span>
                <span className="text-sm text-[#FAFAF8] font-sans">{item.type}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="p-8 border border-[#B8963E]/20">
              <p className="label mb-4">The Hero Episode Rule</p>
              <p className="font-display text-2xl text-[#FAFAF8] leading-snug mb-4">
                Every Hero Episode generates 5–10 additional clips automatically.
              </p>
              <p className="text-sm text-[#8C8478] font-sans leading-relaxed">
                One session. One story. Distributed across every platform with consistency.
              </p>
            </div>
            <div className="mt-8">
              <p className="label mb-4 text-[#8C8478]">Total weekly outputs</p>
              <p className="font-display text-6xl text-[#B8963E]">15+</p>
              <p className="text-sm text-[#5A5550] font-sans mt-1">pieces of content per week</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
