import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { indexItems, navLinks } from '../data/navigation';

interface NavigationProps {
  activeSection: number;
}

export default function Navigation({ activeSection: _activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main Nav */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col text-left group"
          >
            <span className="font-display text-sm font-medium tracking-widest text-[#FAFAF8] group-hover:text-[#B8963E] transition-colors">
              DR. OSAMA TAHA
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-[#B8963E] uppercase mt-0.5">
              Bariatric &amp; Metabolic Surgeon
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.anchor}
                onClick={() => scrollTo(link.anchor)}
                className="font-sans text-[10px] tracking-[0.18em] text-[#8C8478] hover:text-[#FAFAF8] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:block font-sans text-[10px] tracking-[0.18em] text-[#B8963E] hover:text-[#D4AF6A] transition-colors duration-300 border border-[#B8963E]/40 hover:border-[#B8963E] px-4 py-2"
            >
              GET IN TOUCH
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] text-[#8C8478] hover:text-[#FAFAF8] transition-colors duration-300"
            >
              <Menu size={14} />
              <span className="hidden sm:block">INDEX</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Index Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5">
              <div>
                <span className="font-display text-sm tracking-widest text-[#FAFAF8]">DR. OSAMA TAHA</span>
                <span className="block font-sans text-[9px] tracking-[0.2em] text-[#B8963E] uppercase mt-0.5">
                  Complete 19-Chapter Index
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#8C8478] hover:text-[#FAFAF8] p-2 transition-colors"
                aria-label="Close index"
              >
                <X size={20} />
              </button>
            </div>

            {/* Index list */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-5xl mx-auto">
                {indexItems.map((item, i) => (
                  <motion.button
                    key={item.anchor}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    onClick={() => scrollTo(item.anchor)}
                    className="flex items-center gap-6 py-4 pr-8 border-b border-white/5 text-left group hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    <span className="font-sans text-[10px] tracking-[0.15em] text-[#B8963E]/60 w-8 shrink-0">
                      {item.number}
                    </span>
                    <span className="font-display text-lg md:text-xl text-[#8C8478] group-hover:text-[#FAFAF8] transition-colors duration-300">
                      {item.title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 md:px-12 py-6 border-t border-white/5 text-center">
              <p className="font-sans text-[9px] tracking-[0.2em] text-[#5A5550] uppercase">
                Bariatric &amp; Metabolic Surgeon · Healthcare Strategist · Leader · Human Impact
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
