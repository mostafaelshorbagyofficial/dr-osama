import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import studioTaupe from '../assets/studio-taupe.jpg';
import promediaLogo from '../assets/promedia-logo.png';
import { Play, Sparkles } from 'lucide-react';

export default function BeyondMedicine() {
  const scrollToPlayer = () => {
    const el = document.getElementById('media-player');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beyond-medicine" className="relative py-32 md:py-48 bg-[#0D1B2A] overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, rgba(184,150,62,0.4) 0%, rgba(13,27,42,0) 70%)' }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="label text-[#B8963E]">11 — Flagship Program</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8963E]" />
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#8C8478] uppercase flex items-center gap-1.5">
                <Sparkles size={11} className="text-[#B8963E]" /> Original Series
              </span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-[#FAFAF8] leading-[0.95]"
              >
                BEYOND<br />
                <em className="text-[#B8963E]">MEDICINE.</em>
              </motion.h2>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.3 }}
            className="max-w-md border-l border-[#B8963E]/30 pl-6"
          >
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#D4AF6A] mb-2">The Concept</p>
            <p className="font-display text-2xl text-[#FAFAF8] leading-snug mb-3">
              Medicine × Business × Life × Leadership × Values
            </p>
            <p className="font-sans text-xs text-[#8C8478] leading-relaxed">
              This is NOT a medical podcast. It is an editorial program where every episode begins with a real human or surgical story and ascends into a profound life philosophy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 1.2 }}
            className="lg:col-span-8 relative border border-white/10 bg-[#0A0A0A] overflow-hidden group"
          >
            <div className="relative h-[480px] md:h-[560px] img-zoom">
              <img
                src={studioTaupe}
                alt="Beyond Medicine with Dr. Osama Taha"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#B8963E] text-[#0A0A0A] font-sans text-[9px] font-semibold tracking-[0.2em] px-3 py-1 uppercase">
                  Flagship Premiere
                </span>
                <span className="font-sans text-[10px] tracking-[0.15em] text-[#8C8478] uppercase">
                  Season 01 · Available Now
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-5xl text-[#FAFAF8] font-light mb-4 leading-tight">
                "Every operation leaves a scar.<br className="hidden sm:inline" />
                <span className="italic text-[#D4AF6A]"> Every scar teaches a truth."</span>
              </h3>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
                <button
                  onClick={scrollToPlayer}
                  className="inline-flex items-center gap-3 bg-[#B8963E] hover:bg-[#D4AF6A] text-[#0A0A0A] px-7 py-3.5 font-sans text-[10px] tracking-[0.2em] font-medium transition-all duration-300"
                >
                  <Play size={13} fill="currentColor" />
                  ENTER MEDIA PLAYER
                </button>

                <div className="flex items-center gap-3">
                  <span className="font-sans text-[9px] tracking-[0.15em] text-[#5A5550] uppercase">Partner:</span>
                  <img src={promediaLogo} alt="ProMedia" className="h-5 opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8 }}
              className="p-8 border border-white/10 bg-[#0A0A0A] flex-1 flex flex-col justify-between"
            >
              <div>
                <p className="label text-[#B8963E] mb-4">The Narrative Arc</p>
                <div className="space-y-6">
                  <div className="border-l border-white/10 pl-4">
                    <p className="font-sans text-[10px] tracking-[0.15em] text-[#5A5550] uppercase mb-1">01. The Catalyst</p>
                    <p className="font-display text-lg text-[#FAFAF8]">A real clinical or personal encounter</p>
                  </div>
                  <div className="border-l border-[#B8963E]/40 pl-4">
                    <p className="font-sans text-[10px] tracking-[0.15em] text-[#B8963E] uppercase mb-1">02. The Deconstruction</p>
                    <p className="font-display text-lg text-[#FAFAF8]">Dissecting the psychological &amp; tactical decisions</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <p className="font-sans text-[10px] tracking-[0.15em] text-[#5A5550] uppercase mb-1">03. The Elevation</p>
                    <p className="font-display text-lg text-[#D4AF6A]">A universal principle for life, leadership, and legacy</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8">
                <p className="font-sans text-[10px] tracking-[0.2em] text-[#5A5550] uppercase mb-2">Platform Distribution</p>
                <p className="font-sans text-xs text-[#8C8478]">Streaming on Instagram Video, YouTube Full-Length &amp; Broadcast Cut</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
