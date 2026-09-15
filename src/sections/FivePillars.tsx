import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import surgicalOr from '../assets/surgical-or.jpg';
import officeAuthority from '../assets/office-authority.jpg';
import heroDarkSuit from '../assets/hero-dark-suit.jpg';
import lifestyleSage from '../assets/lifestyle-sage.jpg';
import outdoorStreet from '../assets/outdoor-street.jpg';

const pillars = [
  {
    id: '01',
    title: 'MEDICINE',
    subtitle: 'Medical Authority',
    description:
      'Surgical expertise that thinks beyond the procedure. Decision-making, patient outcomes, and the future of surgery — explored with depth and honesty.',
    image: surgicalOr,
  },
  {
    id: '02',
    title: 'HEALTHCARE BUSINESS',
    subtitle: 'Systems & Strategy',
    description:
      'A doctor who understands the business behind medicine — operations, growth, digital transformation, and the economics of patient care.',
    image: officeAuthority,
  },
  {
    id: '03',
    title: 'LEADERSHIP',
    subtitle: 'Built Through Experience',
    description:
      'Leadership forged in high-pressure environments. Discipline, decisions under scrutiny, and the courage to build something that lasts.',
    image: heroDarkSuit,
  },
  {
    id: '04',
    title: 'VALUES',
    subtitle: 'Medicine as a Mission',
    description:
      'Honesty. Compassion. Excellence. Responsibility. The principles that guide every decision, inside and outside the operating room.',
    image: lifestyleSage,
  },
  {
    id: '05',
    title: 'SOCIAL IMPACT',
    subtitle: 'Real Stories. Real Change.',
    description:
      'Medical awareness, community initiatives, and the belief that a surgeon\'s responsibility extends far beyond the hospital walls.',
    image: outdoorStreet,
  },
];

export default function FivePillars() {
  const [active, setActive] = useState(0);

  return (
    <section id="pillars" className="relative py-32 md:py-48 bg-[#0D1B2A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />

      {/* Background image that changes with active pillar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={pillars[active].image}
            alt=""
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="label mb-8"
          >
            04 — Five Dimensions
          </motion.p>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
            >
              ONE VISION.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-5xl md:text-7xl font-light text-[#B8963E] leading-[1.0] italic"
            >
              A BIGGER IMPACT.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Pillar selector */}
          <div className="lg:col-span-6 space-y-0">
            {pillars.map((pillar, i) => (
              <motion.button
                key={pillar.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-6 py-6 border-b text-left transition-all duration-400 group ${
                  active === i
                    ? 'border-[#B8963E]/50'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <span
                  className={`font-display text-3xl font-light shrink-0 transition-colors duration-400 ${
                    active === i ? 'text-[#B8963E]' : 'text-[#FAFAF8]/20 group-hover:text-[#FAFAF8]/40'
                  }`}
                >
                  {pillar.id}
                </span>
                <div className="flex-1">
                  <div
                    className={`font-display text-2xl transition-colors duration-400 ${
                      active === i ? 'text-[#FAFAF8]' : 'text-[#8C8478] group-hover:text-[#FAFAF8]/70'
                    }`}
                  >
                    {pillar.title}
                  </div>
                  <div className="font-sans text-xs text-[#5A5550] mt-0.5 tracking-wide">{pillar.subtitle}</div>
                </div>
                {active === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1 h-8 bg-[#B8963E] shrink-0"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: Active pillar detail */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="mb-8 img-zoom overflow-hidden">
                  <img
                    src={pillars[active].image}
                    alt={pillars[active].title}
                    className="w-full h-72 object-cover object-top"
                  />
                </div>
                <div className="border-l-2 border-[#B8963E] pl-6">
                  <p className="label mb-3 text-[#B8963E]/70">{pillars[active].id} / {pillars[active].subtitle}</p>
                  <h3 className="font-display text-3xl text-[#FAFAF8] mb-4">{pillars[active].title}</h3>
                  <p className="font-sans text-sm text-[#8C8478] leading-relaxed">{pillars[active].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
