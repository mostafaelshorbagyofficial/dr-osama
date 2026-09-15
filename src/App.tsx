import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import SectionIndicator from './components/SectionIndicator';

// All 19 Chapters + Hero + Contact + Footer
import Hero from './sections/Hero';
import Position from './sections/Position';
import BrandIdea from './sections/BrandIdea';
import Audience from './sections/Audience';
import FivePillars from './sections/FivePillars';
import Medicine from './sections/Medicine';
import MedicalBusiness from './sections/MedicalBusiness';
import Leadership from './sections/Leadership';
import Values from './sections/Values';
import SocialImpact from './sections/SocialImpact';
import MediaBrand from './sections/MediaBrand';
import BeyondMedicine from './sections/BeyondMedicine';
import MediaPlayer from './sections/MediaPlayer';
import ShortForm from './sections/ShortForm';
import ContentEngine from './sections/ContentEngine';
import VisualIdentity from './sections/VisualIdentity';
import Distribution from './sections/Distribution';
import ExecutionPlan from './sections/ExecutionPlan';
import WeeklySystem from './sections/WeeklySystem';
import KPIs from './sections/KPIs';
import Legacy from './sections/Legacy';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const sectionIds = [
  'position',
  'brand-idea',
  'audience',
  'pillars',
  'medicine',
  'medical-business',
  'leadership',
  'values',
  'social-impact',
  'shows',
  'beyond-medicine',
  'media-player',
  'short-form',
  'content-engine',
  'visual-identity',
  'distribution',
  'execution-plan',
  'weekly-system',
  'legacy',
];

export default function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i + 1);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAF8] relative selection:bg-[#B8963E]/30 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navigation activeSection={currentSectionIndex} />

      {/* Floating 01/19 Section Tracker */}
      <SectionIndicator current={currentSectionIndex} total={19} />

      {/* 19-Chapter Editorial Journey */}
      <main className="relative z-10">
        <Hero />
        <Position />
        <BrandIdea />
        <Audience />
        <FivePillars />
        <Medicine />
        <MedicalBusiness />
        <Leadership />
        <Values />
        <SocialImpact />
        <MediaBrand />
        <BeyondMedicine />
        <MediaPlayer />
        <ShortForm />
        <ContentEngine />
        <VisualIdentity />
        <Distribution />
        <ExecutionPlan />
        <WeeklySystem />
        <KPIs />
        <Legacy />
        <Contact />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />
    </div>
  );
}
