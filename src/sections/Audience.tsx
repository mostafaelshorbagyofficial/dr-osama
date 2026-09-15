import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';

const audiences = [
  {
    number: '01',
    title: 'PATIENTS',
    themes: ['Trust', 'Experience', 'Humanity', 'Medical Decisions'],
    statement: 'For those navigating one of the most important decisions of their lives.',
  },
  {
    number: '02',
    title: 'DOCTORS',
    themes: ['Surgical Expertise', 'Decisions', 'Experience', 'Professional Growth'],
    statement: 'For medical professionals seeking depth, not just technique.',
  },
  {
    number: '03',
    title: 'HEALTHCARE LEADERS',
    themes: ['Business', 'Operations', 'Teams', 'Growth', 'Transformation'],
    statement: 'For those who build, manage, and lead healthcare institutions.',
  },
  {
    number: '04',
    title: 'GENERAL AUDIENCE',
    themes: ['Leadership', 'Life', 'Decisions', 'Values', 'Human Stories'],
    statement: 'For anyone drawn to stories of purpose, discipline, and impact.',
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8"
            >
              03 — The Audience
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                FOUR AUDIENCES.<br />
                <em className="text-[#B8963E]">ONE MESSAGE.</em>
              </motion.h2>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="font-sans text-sm text-[#8C8478] leading-relaxed"
            >
              Each audience receives the same authentic voice —
              filtered through the lens most relevant to their world.
            </motion.p>
          </div>
        </div>

        {/* Audience grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {audiences.map((aud) => (
            <motion.div
              key={aud.number}
              variants={fadeUp}
              className="py-8 pr-8 border-r border-white/10 last:border-r-0 group"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-4xl font-light text-[#B8963E]/20 group-hover:text-[#B8963E]/40 transition-colors duration-500">
                  {aud.number}
                </span>
                <h3 className="font-display text-lg font-medium text-[#FAFAF8]">{aud.title}</h3>
              </div>

              <p className="font-sans text-xs text-[#5A5550] leading-relaxed mb-6 italic">
                {aud.statement}
              </p>

              <div className="h-px w-8 bg-[#B8963E]/30 mb-6" />

              <ul className="space-y-2">
                {aud.themes.map((theme) => (
                  <li key={theme} className="flex items-center gap-2 text-xs text-[#8C8478] font-sans">
                    <span className="w-1 h-1 rounded-full bg-[#B8963E]/40" />
                    {theme}
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
