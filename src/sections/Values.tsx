import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';
import lifestyleSage from '../assets/lifestyle-sage.jpg';
import editorialHome from '../assets/editorial-home.jpg';

const values = [
  { word: 'HONESTY', description: 'The foundation of every patient relationship and every decision made.' },
  { word: 'COMPASSION', description: 'Medicine is not just science. It is humanity applied with skill.' },
  { word: 'EXCELLENCE', description: 'Not perfection — the relentless pursuit of better.' },
  { word: 'RESPONSIBILITY', description: 'A surgeon carries more than a scalpel. He carries trust.' },
];

export default function Values() {
  return (
    <section id="values" className="relative py-32 md:py-48 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image + Quote */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="img-zoom relative"
            >
              <img
                src={lifestyleSage}
                alt="Dr. Osama Taha — reflective"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating editorial box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-8 left-8 right-8 border-l-2 border-[#B8963E] pl-6 py-4 bg-[#0A0A0A]/70 backdrop-blur-md"
            >
              <p className="font-display text-xl text-[#FAFAF8] italic leading-relaxed">
                "Medicine is a responsibility. Not a profession. A calling."
              </p>
            </motion.div>
          </div>

          {/* Right: Values grid */}
          <div>
            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8"
            >
              08 — Values
            </motion.p>

            {/* Headline */}
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.05]"
              >
                MEDICINE IS A<br />
                <em className="text-[#B8963E]">RESPONSIBILITY.</em>
              </motion.h2>
            </div>

            {/* Values list */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-0"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.word}
                  variants={fadeUp}
                  className="py-6 border-b border-white/10 group"
                >
                  <div className="flex items-start gap-6">
                    <span className="label mt-1 text-[#B8963E]/60 shrink-0">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[#FAFAF8] mb-2 group-hover:text-[#D4AF6A] transition-colors duration-300">
                        {v.word}
                      </h3>
                      <p className="font-sans text-sm text-[#8C8478] leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 img-zoom"
            >
              <img
                src={editorialHome}
                alt="Dr. Osama Taha — editorial"
                className="w-full h-48 object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
