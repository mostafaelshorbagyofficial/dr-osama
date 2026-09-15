import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';
import casualModern from '../assets/casual-modern.jpg';

const shows = [
  {
    category: 'MEDICINE & SURGERY',
    programs: [
      { title: 'Decision for Surgery', description: 'When is surgery the right choice?' },
      { title: 'After Surgery', description: 'What no one tells you about recovery.' },
      { title: 'Inside the Operating Room', description: 'A rare look inside the OR.' },
      { title: 'The Impossible Case', description: 'Cases that pushed the limits.' },
    ],
  },
  {
    category: 'MEDICAL BUSINESS',
    programs: [
      { title: 'Doctor × Business', description: 'Medicine meets strategy.' },
      { title: 'Why Is Your Clinic Losing?', description: 'Operational mistakes that cost clinics.' },
      { title: 'Clinic to Empire', description: 'Building a healthcare institution.' },
      { title: 'Healthcare CEO', description: 'Leading in the business of medicine.' },
    ],
  },
  {
    category: 'LEADERSHIP',
    programs: [
      { title: 'A Lesson From the OR', description: 'Leadership under surgical pressure.' },
      { title: 'If I Could Go Back', description: 'Decisions revisited with honesty.' },
      { title: 'A Decision That Changed My Life', description: 'Personal turning points.' },
      { title: 'Between Medicine & Faith', description: 'The deeper dimension of a life in medicine.' },
    ],
  },
];

const categoryColors: Record<string, string> = {
  'MEDICINE & SURGERY': '#B8963E',
  'MEDICAL BUSINESS': '#D4AF6A',
  'LEADERSHIP': '#8C8478',
};

export default function MediaBrand() {
  return (
    <section id="shows" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportConfig} className="label mb-8">10 — Shows</motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                IDEAS.<br />STORIES.<br /><em>CONVERSATIONS.</em>
              </motion.h2>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig} className="img-zoom">
              <img src={casualModern} alt="Dr. Osama Taha" className="w-full h-64 object-cover object-top" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="mt-4 text-sm text-[#8C8478] font-sans leading-relaxed"
            >
              Original programs. Real impact. Each series designed to deliver knowledge, perspective, and human connection.
            </motion.p>
          </div>
        </div>

        {/* Shows grid */}
        <div className="space-y-16">
          {shows.map((cat) => (
            <div key={cat.category}>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={viewportConfig}
                transition={{ duration: 0.8 }}
                className="origin-left h-px mb-8"
                style={{ background: `linear-gradient(90deg, ${categoryColors[cat.category]}, transparent)` }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportConfig}
                className="label mb-8"
                style={{ color: categoryColors[cat.category] }}
              >
                {cat.category}
              </motion.p>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
              >
                {cat.programs.map((prog, i) => (
                  <motion.div
                    key={prog.title}
                    variants={fadeUp}
                    className="py-6 pr-8 border-r border-white/10 last:border-r-0 group cursor-default"
                  >
                    <div className="text-[#B8963E]/40 label mb-3">EP. {String(i + 1).padStart(2, '0')}</div>
                    <h4 className="font-display text-lg font-medium text-[#FAFAF8] mb-2 leading-snug group-hover:text-[#D4AF6A] transition-colors duration-300">
                      {prog.title}
                    </h4>
                    <p className="text-xs text-[#5A5550] font-sans leading-relaxed">{prog.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
