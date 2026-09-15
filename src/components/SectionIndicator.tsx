import { motion, AnimatePresence } from 'framer-motion';

interface SectionIndicatorProps {
  current: number;
  total: number;
}

export default function SectionIndicator({ current, total }: SectionIndicatorProps) {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.4 }}
          className="font-sans text-[9px] tracking-[0.15em] text-[#B8963E]"
        >
          {pad(current)}
        </motion.span>
      </AnimatePresence>
      <div className="w-px h-8 bg-white/10" />
      <span className="font-sans text-[9px] tracking-[0.15em] text-[#5A5550]">{pad(total)}</span>
    </div>
  );
}
