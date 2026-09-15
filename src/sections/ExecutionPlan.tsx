import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';

const phases = [
  {
    phase: '01',
    title: 'FOUNDATION',
    days: '0–30 DAYS',
    goal: 'Establish personality and positioning.',
    focus: 'Medicine + Personal Story',
    items: ['Visual Identity', 'Hero Introduction Film', '8–12 Reels', '2 Carousels Weekly', 'Daily Stories', 'First Short Form Episodes', 'First Hero Episode'],
  },
  {
    phase: '02',
    title: 'AUTHORITY',
    days: '31–60 DAYS',
    goal: 'Build credibility across all pillars.',
    focus: 'Medicine + Business + Leadership',
    items: ['First Show', '2 Hero Episodes', '15–20 Short Clips', 'Medical Business Content', 'Leadership Content', 'LinkedIn Thought Leadership', 'First Documentary'],
  },
  {
    phase: '03',
    title: 'IMPACT',
    days: '61–90 DAYS',
    goal: 'Establish legacy and scale.',
    focus: 'Values + Impact + Legacy',
    items: ['Flagship Show', 'Documentary', 'Social Responsibility Campaign', 'Collaborations', 'Healthcare Leader Interviews', 'Strong Personal Stories', 'Repurposing System'],
  },
];

export default function ExecutionPlan() {
  return (
    <section id="execution-plan" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">17 — 90-Day Plan</motion.p>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            90 DAYS.<br /><em>THREE PHASES.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="py-8 pr-12 border-r border-white/10 last:border-r-0 last:pr-0"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-6xl font-light text-[#B8963E]/20">{p.phase}</span>
                <div>
                  <div className="label text-[#B8963E]">{p.days}</div>
                  <h3 className="font-display text-2xl text-[#FAFAF8]">{p.title}</h3>
                </div>
              </div>
              <p className="text-sm text-[#8C8478] font-sans mb-2">{p.goal}</p>
              <p className="label text-[#D4AF6A]/60 mb-6">Focus: {p.focus}</p>
              <div className="h-px bg-gradient-to-r from-[#B8963E]/30 to-transparent mb-6" />
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs text-[#5A5550] font-sans">
                    <div className="w-1 h-1 rounded-full bg-[#B8963E]/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
