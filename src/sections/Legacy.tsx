import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import lifestyleOlive from '../assets/lifestyle-olive.jpg';

export default function Legacy() {
  return (
    <section id="legacy" className="relative min-h-[90vh] py-32 md:py-48 bg-[#0A0A0A] flex flex-col justify-center overflow-hidden">
      {/* Background cinematic photograph */}
      <div className="absolute inset-0">
        <img
          src={lifestyleOlive}
          alt="Dr. Osama Taha — The Legacy"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-[#0D1B2A]/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="label text-[#B8963E] mb-8"
        >
          19 — The Evolution &amp; Legacy
        </motion.p>

        {/* 4-Line Signature Progression */}
        <div className="space-y-2 mb-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#FAFAF8]/40 uppercase tracking-tight">
              FROM SURGEON
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <span className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#FAFAF8]/70 uppercase tracking-tight">
              TO HEALTHCARE VOICE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#FAFAF8] uppercase tracking-tight">
              TO LEADER
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#B8963E] uppercase tracking-tight italic">
              TO LEGACY.
            </span>
          </motion.div>
        </div>

        {/* Gold divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mb-12"
        />

        {/* Name and closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl"
        >
          <h3 className="font-display text-2xl md:text-3xl tracking-widest text-[#FAFAF8] mb-4">
            DR. OSAMA TAHA
          </h3>
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-[#8C8478] uppercase leading-relaxed">
            Advanced medicine. Smart management. Human impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
