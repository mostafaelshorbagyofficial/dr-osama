import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';

const categories = [
  { title: 'AUTHORITY', metrics: ['Saves', 'Shares', 'Watch Time', 'Completion Rate'], color: '#B8963E' },
  { title: 'COMMUNITY', metrics: ['Comments', 'DMs', 'Story Interaction'], color: '#D4AF6A' },
  { title: 'BUSINESS', metrics: ['Consultation Leads', 'Partnerships', 'Speaking Opportunities', 'Healthcare Connections'], color: '#8C8478' },
  { title: 'IMPACT', metrics: ['Stories', 'Beneficiaries', 'Community Engagement'], color: '#5A5550' },
];

export default function KPIs() {
  return (
    <section id="kpis" className="relative py-32 md:py-48 bg-[#0D1B2A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">KPIs</motion.p>
        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
          >
            SUCCESS IS NOT<br /><em>MEASURED IN FOLLOWERS.</em>
          </motion.h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={fadeUp} className="py-8 pr-8 border-r border-white/10 last:border-r-0">
              <div className="h-0.5 w-8 mb-8" style={{ backgroundColor: cat.color }} />
              <h3 className="font-display text-2xl text-[#FAFAF8] mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-sm font-sans">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                    <span className="text-[#8C8478]">{m}</span>
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
