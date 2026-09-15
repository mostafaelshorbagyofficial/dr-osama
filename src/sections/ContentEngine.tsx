import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';

const formats = [
  { label: 'Hero Content', desc: 'Long-form anchor episode', size: 'large' },
  { label: 'Reels', desc: 'Instagram · TikTok', size: 'medium' },
  { label: 'Shorts', desc: 'YouTube Shorts', size: 'medium' },
  { label: 'Carousels', desc: 'Educational deep-dives', size: 'medium' },
  { label: 'Stories', desc: 'Daily connection', size: 'small' },
  { label: 'BTS', desc: 'Behind the scenes', size: 'small' },
  { label: 'LinkedIn', desc: 'Thought leadership', size: 'small' },
];

export default function ContentEngine() {
  return (
    <section id="content-engine" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">14 — Content Engine</motion.p>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            ONE PRODUCTION DAY.<br /><em>AN ENTIRE CONTENT ECOSYSTEM.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formats.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className={`border border-white/10 p-6 hover:border-[#B8963E]/40 transition-colors duration-500 ${
                f.size === 'large' ? 'col-span-2' : ''
              }`}
            >
              <div className="label mb-3 text-[#B8963E]/60">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-display text-xl text-[#FAFAF8] mb-1">{f.label}</div>
              <div className="text-xs text-[#5A5550] font-sans">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1, delay: 0.3 }}
          className="origin-left mt-16 h-px bg-gradient-to-r from-[#B8963E]/40 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-[#8C8478] font-sans max-w-xl leading-relaxed"
        >
          The content engine turns one authentic session into a week of meaningful, cross-platform content — without manufactured volume.
        </motion.p>
      </div>
    </section>
  );
}
