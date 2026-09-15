import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';

const channels = [
  { name: 'INSTAGRAM', purpose: 'Reach + Personal Connection', formats: ['Reels', 'Stories', 'Carousels'], color: '#B8963E' },
  { name: 'YOUTUBE', purpose: 'Authority + Long Form', formats: ['Shows', 'Podcast', 'Documentary'], color: '#D4AF6A' },
  { name: 'LINKEDIN', purpose: 'Healthcare Business + Leadership', formats: ['Thought Leadership', 'Business Insights'], color: '#8C8478' },
  { name: 'TIKTOK', purpose: 'Discovery + Short Form', formats: ['Short Form', 'Quick Takes'], color: '#5A5550' },
];

export default function Distribution() {
  return (
    <section id="distribution" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">16 — Distribution</motion.p>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            WHERE THE STORY<br /><em>IS TOLD.</em>
          </motion.h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {channels.map((ch) => (
            <motion.div key={ch.name} variants={fadeUp} className="py-8 pr-8 border-r border-white/10 last:border-r-0">
              <div className="h-px mb-8 w-12" style={{ backgroundColor: ch.color }} />
              <h3 className="font-display text-2xl text-[#FAFAF8] mb-2">{ch.name}</h3>
              <p className="text-xs text-[#8C8478] font-sans mb-6 leading-relaxed">{ch.purpose}</p>
              <ul className="space-y-2">
                {ch.formats.map((f) => (
                  <li key={f} className="text-xs text-[#5A5550] font-sans flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: ch.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
