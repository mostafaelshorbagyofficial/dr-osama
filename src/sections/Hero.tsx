import { useState } from 'react';
import { motion } from 'framer-motion';
import heroDarkSuit from '../assets/hero-dark-suit.jpg';
import promediaLogo from '../assets/promedia-logo.png';

export default function Hero() {
  const [, setLoaded] = useState(false);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden bg-[#0A0A0A]">
      {/* Background image with slow reveal */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0"
      >
        <img
          src={heroDarkSuit}
          alt="Dr. Osama Taha"
          className="w-full h-full object-cover object-center"
          onLoad={() => setLoaded(true)}
        />
        {/* Layered gradients for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
        {/* Subtle navy atmospheric overlay */}
        <div className="absolute inset-0 bg-[#0D1B2A]/25 mix-blend-multiply" />
      </motion.div>

      {/* Atmospheric grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent line — left edge */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.77, 0, 0.175, 1] }}
        className="absolute left-0 top-[15%] bottom-[20%] w-px origin-top"
        style={{ background: 'linear-gradient(180deg, transparent, #B8963E 30%, #B8963E 70%, transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
        <div className="max-w-2xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="label mb-6"
          >
            More than a surgeon.
          </motion.p>

          {/* Main headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.1, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[104px] font-light text-[#FAFAF8] leading-[0.9] tracking-tight"
            >
              DR. OSAMA
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.25, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[104px] font-light leading-[0.9] tracking-tight text-[#B8963E]"
            >
              TAHA
            </motion.h1>
          </div>

          {/* Tagline stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-12 flex flex-col gap-1"
          >
            {['SURGEON.', 'LEADER.', 'HEALTHCARE STRATEGIST.'].map((line) => (
              <span key={line} className="font-sans text-xs tracking-[0.2em] text-[#8C8478]">
                {line}
              </span>
            ))}
          </motion.div>

          {/* Supporting statement */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="font-display text-lg text-[#FAFAF8]/70 italic mb-10 leading-relaxed"
          >
            Advanced medicine.<br />
            Smart management.<br />
            Human impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <a
              href="https://www.instagram.com/drosama.taha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#B8963E] text-[#0A0A0A] px-7 py-3.5 font-sans text-[10px] tracking-[0.18em] font-medium hover:bg-[#D4AF6A] transition-colors duration-300"
            >
              WATCH MY STORY
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('position');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-[#FAFAF8] px-7 py-3.5 font-sans text-[10px] tracking-[0.18em] hover:border-white/50 transition-colors duration-300"
            >
              EXPLORE THE STORY
            </button>
          </motion.div>
        </div>
      </div>

      {/* ProMedia production credit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-6 right-6 md:right-12 flex items-center gap-3"
      >
        <span className="font-sans text-[8px] tracking-[0.2em] text-[#5A5550] uppercase">Produced by</span>
        <img
          src={promediaLogo}
          alt="ProMedia"
          className="h-6 opacity-40 hover:opacity-70 transition-opacity duration-300"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#B8963E]/40" />
        <span className="font-sans text-[8px] tracking-[0.2em] text-[#5A5550] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
