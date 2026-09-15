import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportConfig } from '../lib/animations';
import surgicalOr from '../assets/surgical-or.jpg';

const territories = [
  'Surgical Decisions',
  'Patient Mistakes Before & After Surgery',
  'Difficult Cases',
  'What Happens After Surgery?',
  'The Future of Surgery',
  'AI & Robotics in Medicine',
  'Stories from the Operating Room',
];

export default function Medicine() {
  return (
    <section id="medicine" className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden">
      {/* Background atmospheric element */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(13,27,42,0.4) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Full-bleed hero image area */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1.4 }}
          className="relative mb-20 img-zoom"
        >
          <img
            src={surgicalOr}
            alt="Dr. Osama Taha in the operating room"
            className="w-full h-[55vh] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />

          {/* Overlay text */}
          <div className="absolute bottom-10 left-10">
            <p className="label mb-3">05 — Medicine</p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-6xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                MORE THAN<br />A PROCEDURE.
              </motion.h2>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Main positioning */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="mb-10"
            >
              <p className="font-display text-xl text-[#FAFAF8]/70 italic leading-relaxed mb-6">
                THOUGHTFUL DECISIONS.<br />
                BETTER LIVES.
              </p>
              <p className="font-sans text-sm text-[#8C8478] leading-relaxed">
                The audience should see Dr. Osama not simply as someone who explains medical facts,
                but as a surgeon who thinks, who explains the thinking behind every decision,
                and who understands the human dimension of every procedure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="p-6 border border-[#B8963E]/20"
              style={{ background: 'rgba(184,150,62,0.03)' }}
            >
              <p className="label mb-4">Medical territory</p>
              <p className="font-display text-lg text-[#D4AF6A] italic">
                "A surgeon is not measured only by the operations he performs,
                but by the decisions he makes before and after."
              </p>
            </motion.div>
          </div>

          {/* Right: Territory list */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              className="label mb-8 text-[#8C8478]"
            >
              Content territories
            </motion.p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-0"
            >
              {territories.map((t, i) => (
                <motion.div
                  key={t}
                  variants={fadeUp}
                  className="flex items-center gap-6 py-5 border-b border-white/10 group hover:border-[#B8963E]/20 transition-colors duration-300"
                >
                  <span className="label text-[#B8963E]/40 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xl text-[#8C8478] group-hover:text-[#FAFAF8] transition-colors duration-400">
                    {t}
                  </span>
                  <span className="ml-auto font-sans text-[9px] tracking-widest text-[#5A5550]/0 group-hover:text-[#B8963E]/40 transition-all duration-400">
                    UPCOMING
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
