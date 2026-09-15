// src/data/content.ts
export const pillars = [
  { id: '01', title: 'MEDICINE', subtitle: 'Medical Authority', description: 'Surgical expertise that thinks beyond the procedure. Decision-making, patient outcomes, and the future of surgery.', image: 'surgical-or' },
  { id: '02', title: 'HEALTHCARE BUSINESS', subtitle: 'Systems & Strategy', description: 'A doctor who understands the business behind medicine — operations, growth, digital transformation, and the economics of care.', image: 'office-authority' },
  { id: '03', title: 'LEADERSHIP', subtitle: 'Built Through Experience', description: 'Leadership forged in high-pressure environments. Discipline, decisions, and the discipline to build something lasting.', image: 'hero-dark-suit' },
  { id: '04', title: 'VALUES', subtitle: 'Medicine as a Mission', description: 'Honesty. Compassion. Excellence. Responsibility. The principles that guide every decision, inside and outside the operating room.', image: 'lifestyle-sage' },
  { id: '05', title: 'SOCIAL IMPACT', subtitle: 'Real Stories. Real Change.', description: 'Medical awareness, community initiatives, and the belief that a surgeon\'s responsibility extends far beyond the hospital walls.', image: 'outdoor-street' },
];

export const audiences = [
  { number: '01', title: 'PATIENTS', themes: ['Trust', 'Experience', 'Humanity', 'Medical Decisions'] },
  { number: '02', title: 'DOCTORS', themes: ['Surgical Expertise', 'Decisions', 'Experience', 'Professional Growth'] },
  { number: '03', title: 'HEALTHCARE LEADERS', themes: ['Business', 'Operations', 'Teams', 'Growth', 'Transformation'] },
  { number: '04', title: 'GENERAL AUDIENCE', themes: ['Leadership', 'Life', 'Decisions', 'Values', 'Human Stories'] },
];

export const medicineTerritories = [
  'Surgical Decisions',
  'Patient Mistakes Before & After Surgery',
  'Difficult Cases',
  'What Happens After Surgery?',
  'The Future of Surgery',
  'AI & Robotics in Medicine',
  'Stories from the Operating Room',
];

export const businessTopics = [
  'Business Model & Pricing',
  'Operations & KPIs',
  'The Patient Journey',
  'Building Medical Teams',
  'Growth & Scale',
  'Digital Transformation',
  'AI in Healthcare',
];

export const leadershipThemes = [
  { title: 'SUCCESS', quote: 'Discipline is more important than motivation.' },
  { title: 'FAILURE', quote: 'The biggest lesson from a decision that did not work.' },
  { title: 'PRESSURE', quote: 'How do you lead when everyone is watching?' },
  { title: 'LEGACY', quote: 'How do you build something that lasts beyond you?' },
];

export const values = [
  { word: 'HONESTY', description: 'The foundation of every patient relationship and every decision made.' },
  { word: 'COMPASSION', description: 'Medicine is not just science. It is humanity applied with skill.' },
  { word: 'EXCELLENCE', description: 'Not perfection. The relentless pursuit of better.' },
  { word: 'RESPONSIBILITY', description: 'A surgeon carries more than a scalpel. He carries trust.' },
];

export const impactDirections = [
  { number: '01', title: 'PATIENT IMPACT', description: 'Real patient journeys and transformation. Stories told through the lens of change, not statistics.' },
  { number: '02', title: 'MEDICAL AWARENESS', description: 'Medical education for the public. Correcting misconceptions. Empowering informed decisions.' },
  { number: '03', title: 'COMMUNITY IMPACT', description: 'Initiatives, training, support, and healthcare awareness that extend beyond the clinic.' },
];

export const shows = [
  {
    category: 'MEDICINE & SURGERY',
    programs: [
      { title: 'Decision for Surgery', description: 'When is surgery the right choice? The thinking behind the decision.' },
      { title: 'After Surgery', description: 'What no one tells you about recovery and life post-procedure.' },
      { title: 'Inside the Operating Room', description: 'A rare look inside the OR — the moments, the pressure, the precision.' },
      { title: 'The Impossible Case', description: 'Cases that pushed the limits of what medicine can do.' },
    ],
  },
  {
    category: 'MEDICAL BUSINESS',
    programs: [
      { title: 'Doctor × Business', description: 'The intersection of medical expertise and business thinking.' },
      { title: 'Why Is Your Clinic Losing?', description: 'The operational mistakes that cost clinics their future.' },
      { title: 'Clinic to Empire', description: 'Building a healthcare institution from a single practice.' },
      { title: 'Healthcare CEO', description: 'What it takes to lead in the business of medicine.' },
    ],
  },
  {
    category: 'LEADERSHIP',
    programs: [
      { title: 'A Lesson From the OR', description: 'Leadership lessons learned under surgical pressure.' },
      { title: 'If I Could Go Back', description: 'The decisions that shaped everything — revisited.' },
      { title: 'A Decision That Changed My Life', description: 'Personal turning points. Honest reflection.' },
      { title: 'Between Medicine & Faith', description: 'The deeper dimension of a life in medicine.' },
    ],
  },
];

export const kpiCategories = [
  {
    title: 'AUTHORITY',
    metrics: ['Saves', 'Shares', 'Watch Time', 'Completion Rate'],
  },
  {
    title: 'COMMUNITY',
    metrics: ['Comments', 'DMs', 'Story Interaction'],
  },
  {
    title: 'BUSINESS',
    metrics: ['Consultation Leads', 'Partnerships', 'Speaking Opportunities', 'Healthcare Connections'],
  },
  {
    title: 'IMPACT',
    metrics: ['Stories', 'Beneficiaries', 'Community Engagement'],
  },
];

export const executionPhases = [
  {
    phase: '01',
    title: 'FOUNDATION',
    days: '0–30 DAYS',
    goal: 'Establish personality and positioning.',
    focus: 'Medicine + Personal Story',
    items: ['Visual Identity', 'Hero Introduction Film', '8–12 Reels', '2 Carousels Weekly', 'Daily Stories', 'First Short Form Episodes', 'First Hero Episode'],
  },
  {
    phase: '02',
    title: 'AUTHORITY',
    days: '31–60 DAYS',
    goal: 'Build credibility across all pillars.',
    focus: 'Medicine + Business + Leadership',
    items: ['First Show', '2 Hero Episodes', '15–20 Short Clips', 'Medical Business Content', 'Leadership Content', 'LinkedIn Thought Leadership', 'First Documentary / Social Impact Story'],
  },
  {
    phase: '03',
    title: 'IMPACT',
    days: '61–90 DAYS',
    goal: 'Establish legacy and scale.',
    focus: 'Values + Impact + Legacy',
    items: ['Flagship Show', 'Documentary', 'Social Responsibility Campaign', 'Collaborations', 'Healthcare Leaders Interviews', 'Strong Personal Stories', 'Repurposing System'],
  },
];

export const weeklySystem = [
  { count: 2, type: 'Medical Reels' },
  { count: 2, type: 'Leadership / Values Reels' },
  { count: 1, type: 'Medical Business Reel' },
  { count: 1, type: 'Social Impact / Human Story' },
  { count: 1, type: 'Carousel' },
  { count: 7, type: 'Daily Stories' },
  { count: 1, type: 'LinkedIn Thought' },
];

export const channels = [
  { name: 'INSTAGRAM', purpose: 'Reach + Personal Connection', formats: ['Reels', 'Stories', 'Carousels'] },
  { name: 'YOUTUBE', purpose: 'Authority + Long Form', formats: ['Shows', 'Podcast', 'Documentary'] },
  { name: 'LINKEDIN', purpose: 'Healthcare Business + Leadership', formats: ['Thought Leadership', 'Business Insights'] },
  { name: 'TIKTOK', purpose: 'Discovery + Short Form', formats: ['Short Form', 'Quick Takes'] },
];
