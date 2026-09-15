import { motion } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import { ArrowUpRight, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#0D1B2A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8963E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="label text-[#B8963E] mb-6">Inquiries &amp; Collaborations</p>
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-4xl md:text-6xl font-light text-[#FAFAF8] leading-[1.05]"
              >
                CONNECT WITH<br />
                <em className="text-[#D4AF6A]">DR. OSAMA TAHA.</em>
              </motion.h2>
            </div>
            <p className="font-sans text-sm text-[#8C8478] leading-relaxed max-w-xl mb-10">
              For executive consultations, speaking keynotes, media productions, and strategic healthcare partnerships across the region.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://www.instagram.com/drosama.taha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#B8963E] hover:bg-[#D4AF6A] text-[#0A0A0A] px-8 py-4 font-sans text-[10px] tracking-[0.2em] font-semibold transition-all duration-300"
              >
                DIRECT INQUIRY (INSTAGRAM)
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.pro-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-white/50 text-[#FAFAF8] px-8 py-4 font-sans text-[10px] tracking-[0.2em] transition-all duration-300"
              >
                PROMEDIA PRODUCTION DESK
                <Globe size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 border border-white/10 p-8 md:p-10 bg-[#0A0A0A]">
            <p className="label text-[#8C8478] mb-6">Official Channels</p>
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="font-sans text-[9px] tracking-[0.15em] text-[#5A5550] uppercase block mb-1">Clinical Practice</span>
                <span className="font-display text-lg text-[#FAFAF8]">Bariatric &amp; Metabolic Surgery</span>
              </div>
              <div className="border-b border-white/10 pb-4">
                <span className="font-sans text-[9px] tracking-[0.15em] text-[#5A5550] uppercase block mb-1">Media Representation</span>
                <span className="font-display text-lg text-[#FAFAF8]">ProMedia Creative &amp; Production</span>
              </div>
              <div>
                <span className="font-sans text-[9px] tracking-[0.15em] text-[#5A5550] uppercase block mb-1">Regional Focus</span>
                <span className="font-display text-lg text-[#D4AF6A]">Middle East &amp; International</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
