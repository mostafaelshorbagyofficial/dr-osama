import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';

const flow = [
  { label: 'ONE EPISODE', sub: 'Hero recording session' },
  { label: '1 HERO EPISODE', sub: 'Long-form anchor content' },
  { label: '5–10 SHORT CLIPS', sub: 'Reels · Shorts · TikToks' },
  { label: '2 CAROUSELS', sub: 'Deep-dive visual content' },
  { label: 'QUOTES', sub: 'Shareable extracts' },
  { label: 'STORIES / Q&A', sub: 'Daily connection' },
  { label: 'LINKEDIN THOUGHT', sub: 'B2B authority' },
];

export default function ShortForm() {
  return (
    <section id="short-form" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">13 — Short Form</motion.p>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            ONE SESSION.<br /><em>AN ENTIRE ECOSYSTEM.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-0">
            {flow.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-6 py-5 border-b border-white/10"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        i === 0
                          ? '#B8963E'
                          : i === 1
                          ? '#D4AF6A'
                          : `rgba(184,150,62,${Math.max(0.1, 1 - i * 0.12)})`,
                    }}
                  />
                  {i < flow.length - 1 && (
                    <div className="w-px h-6 mt-1" style={{ background: 'rgba(184,150,62,0.2)' }} />
                  )}
                </div>
                <div>
                  <div className="font-display text-lg text-[#FAFAF8] font-medium">{item.label}</div>
                  <div className="text-xs text-[#5A5550] font-sans mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ delay: 0.4, duration: 1 }}
            className="p-10 border border-[#B8963E]/20 bg-[#0A0A0A]"
          >
            <p className="label mb-6">The Multiplier Effect</p>
            <p className="font-display text-4xl text-[#FAFAF8] leading-snug mb-6">
              Instead of producing every format separately — one session creates everything.
            </p>
            <div className="h-px bg-gradient-to-r from-[#B8963E]/40 to-transparent mb-6" />
            <p className="text-sm text-[#8C8478] font-sans leading-relaxed">
              One production day. One cohesive story. Distributed across every platform with precision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
