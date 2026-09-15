import promediaLogo from '../assets/promedia-logo.png';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTo = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10 pt-20 pb-16 text-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <button onClick={scrollToTop} className="text-left flex flex-col items-start group">
              <span className="font-display text-2xl tracking-widest text-[#FAFAF8] group-hover:text-[#B8963E] transition-colors duration-300">
                DR. OSAMA TAHA
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#B8963E] uppercase mt-1">
                Bariatric &amp; Metabolic Surgeon
              </span>
            </button>
            <p className="font-sans text-xs text-[#8C8478] leading-relaxed max-w-sm mt-6">
              Surgeon. Leader. Healthcare Strategist. Human Impact. Advancing the intersection of medicine, enterprise, and leadership.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <p className="label text-[#8C8478] mb-6">Navigation</p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { label: 'About', anchor: 'position' },
                { label: 'Medicine', anchor: 'medicine' },
                { label: 'Business', anchor: 'medical-business' },
                { label: 'Leadership', anchor: 'leadership' },
                { label: 'Impact', anchor: 'social-impact' },
                { label: 'Media', anchor: 'beyond-medicine' },
                { label: 'Contact', anchor: 'contact' },
              ].map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.anchor)}
                  className="font-sans text-xs text-[#8C8478] hover:text-[#FAFAF8] text-left transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-2">
            <p className="label text-[#8C8478] mb-6">Social Media</p>
            <div className="flex flex-col space-y-3">
              {[
                { label: 'Instagram', url: 'https://www.instagram.com/drosama.taha/' },
                { label: 'YouTube', url: 'https://youtube.com' },
                { label: 'LinkedIn', url: 'https://linkedin.com' },
                { label: 'TikTok', url: 'https://tiktok.com' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-[#8C8478] hover:text-[#D4AF6A] transition-colors duration-300 flex items-center gap-1.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* ProMedia Production Credit */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <p className="label text-[#8C8478] mb-4">Production Partner</p>
            <span className="font-sans text-[9px] tracking-[0.2em] text-[#5A5550] uppercase mb-3">
              PROUDLY PRODUCED BY
            </span>
            <a
              href="https://www.pro-media.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block mb-3"
            >
              <img
                src={promediaLogo}
                alt="ProMedia"
                className="h-9 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://www.pro-media.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.15em] text-[#8C8478] hover:text-[#FAFAF8] transition-colors"
            >
              www.pro-media.com
            </a>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A5550] font-sans">
          <p>© {new Date().getFullYear()} Dr. Osama Taha. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#8C8478] cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#8C8478] cursor-pointer transition-colors">Terms of Use</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FAFAF8] transition-colors duration-300"
            aria-label="Back to top"
          >
            <span className="text-[10px] tracking-widest uppercase">TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
