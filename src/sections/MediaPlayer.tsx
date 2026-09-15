import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportConfig } from '../lib/animations';
import { mediaItems } from '../data/media';
import type { MediaItem } from '../data/media';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import surgicalOr from '../assets/surgical-or.jpg';
import studioTaupe from '../assets/studio-taupe.jpg';
import officeAuthority from '../assets/office-authority.jpg';
import casualModern from '../assets/casual-modern.jpg';

// Mapping thumbnails to real assets
const assetThumbnails: Record<string, string> = {
  ep001: studioTaupe,
  ep002: casualModern,
  med001: surgicalOr,
  biz001: officeAuthority,
};

export default function MediaPlayer() {
  const [selectedItem, setSelectedItem] = useState<MediaItem>(mediaItems[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  const currentIndex = mediaItems.findIndex(i => i.id === selectedItem.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % mediaItems.length;
    setSelectedItem(mediaItems[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setSelectedItem(mediaItems[prevIdx]);
  };

  return (
    <section id="media-player" className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="label text-[#B8963E] mb-6">12 — Media Experience</p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-5xl md:text-7xl font-light text-[#FAFAF8] leading-[1.0]"
              >
                THE EDITORIAL<br />
                <em className="text-[#D4AF6A]">MEDIA THEATER.</em>
              </motion.h2>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border border-white/10 p-1.5 bg-[#0D1B2A]">
            {[
              { key: 'all', label: 'ALL EPISODES' },
              { key: 'beyond-medicine', label: 'BEYOND MEDICINE' },
              { key: 'medicine', label: 'MEDICINE' },
              { key: 'business', label: 'BUSINESS' },
            ].map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 font-sans text-[9px] tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-[#B8963E] text-[#0A0A0A] font-semibold'
                    : 'text-[#8C8478] hover:text-[#FAFAF8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Player Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Stage (Featured Media) */}
          <div className="lg:col-span-8 border border-white/10 bg-[#0D1B2A]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Visual Frame */}
                <div className="relative aspect-video sm:h-[480px] w-full overflow-hidden bg-black group">
                  <img
                    src={assetThumbnails[selectedItem.id] || studioTaupe}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  
                  {/* Central Play Badge / Action */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <a
                      href={selectedItem.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 rounded-full border border-[#B8963E] bg-[#0A0A0A]/80 backdrop-blur-md flex items-center justify-center text-[#B8963E] hover:bg-[#B8963E] hover:text-[#0A0A0A] transition-all duration-300 transform hover:scale-110 mb-4 group/btn"
                      aria-label="Play on Instagram"
                    >
                      <Play size={26} fill="currentColor" className="ml-1" />
                    </a>
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#FAFAF8] uppercase bg-black/60 px-4 py-1.5 border border-white/10 backdrop-blur-sm">
                      Click to Watch Reel on Instagram
                    </span>
                  </div>

                  {/* Top Bar Info */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <span className="bg-[#B8963E] text-[#0A0A0A] font-sans text-[9px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
                      {selectedItem.episode || 'FEATURED'}
                    </span>
                    <span className="font-sans text-[9px] tracking-[0.2em] text-[#FAFAF8]/70 bg-black/50 px-3 py-1 border border-white/10 uppercase">
                      PLATFORM: {selectedItem.platform.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Episode Details */}
                <div className="p-8 md:p-10 border-t border-white/10 bg-[#0A0A0A]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                    <div>
                      <p className="label text-[#8C8478] mb-2">{selectedItem.category.toUpperCase()}</p>
                      <h3 className="font-display text-3xl md:text-4xl text-[#FAFAF8] font-light">
                        {selectedItem.title}
                      </h3>
                    </div>

                    <a
                      href={selectedItem.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#B8963E] hover:bg-[#D4AF6A] text-[#0A0A0A] px-6 py-3 font-sans text-[10px] tracking-[0.2em] font-semibold transition-all duration-300 shrink-0"
                    >
                      WATCH ON INSTAGRAM
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  <p className="font-sans text-sm text-[#8C8478] leading-relaxed mt-6">
                    {selectedItem.description}
                  </p>

                  {/* Controls */}
                  <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#8C8478] hover:text-[#FAFAF8] hover:border-[#B8963E] transition-all"
                        aria-label="Previous Episode"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#8C8478] hover:text-[#FAFAF8] hover:border-[#B8963E] transition-all"
                        aria-label="Next Episode"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <span className="font-sans text-[10px] tracking-[0.15em] text-[#5A5550] ml-3">
                        {currentIndex + 1} / {mediaItems.length}
                      </span>
                    </div>

                    <span className="font-sans text-[9px] tracking-[0.2em] text-[#5A5550] uppercase">
                      Curated Media Channel
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Playlist Queue */}
          <div className="lg:col-span-4 border border-white/10 bg-[#0D1B2A]">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <span className="label text-[#B8963E]">Media Playlist</span>
              <span className="font-sans text-[9px] tracking-[0.15em] text-[#5A5550]">
                {filteredItems.length} RELEASES
              </span>
            </div>

            <div className="divide-y divide-white/10 max-h-[620px] overflow-y-auto">
              {filteredItems.map((item) => {
                const isSelected = item.id === selectedItem.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`w-full p-6 text-left transition-all duration-300 flex items-start gap-4 group ${
                      isSelected
                        ? 'bg-[#162032] border-l-2 border-[#B8963E]'
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="relative w-20 h-14 shrink-0 bg-black overflow-hidden border border-white/10">
                      <img
                        src={assetThumbnails[item.id] || studioTaupe}
                        alt={item.title}
                        className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#B8963E]/30 flex items-center justify-center">
                          <Play size={12} className="text-white" fill="white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-sans text-[8px] tracking-[0.15em] text-[#B8963E] uppercase font-semibold">
                          {item.episode || 'EPISODE'}
                        </span>
                        <span className="font-sans text-[8px] tracking-[0.15em] text-[#5A5550] uppercase">
                          · {item.category}
                        </span>
                      </div>
                      <h4 className={`font-display text-base font-normal leading-snug truncate ${
                        isSelected ? 'text-[#FAFAF8]' : 'text-[#8C8478] group-hover:text-[#FAFAF8]'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="font-sans text-[11px] text-[#5A5550] line-clamp-1 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Playlist Footer Note */}
            <div className="p-6 border-t border-white/10 bg-[#0A0A0A]">
              <p className="font-sans text-[10px] text-[#5A5550] leading-relaxed">
                All episodes are mastered by ProMedia for cinematic clarity, editorial depth, and authentic storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
