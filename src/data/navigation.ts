// Navigation index — 19 chapters
export interface IndexItem {
  number: string;
  title: string;
  anchor: string;
}

export const indexItems: IndexItem[] = [
  { number: '01', title: 'THE POSITION', anchor: 'position' },
  { number: '02', title: 'THE BRAND IDEA', anchor: 'brand-idea' },
  { number: '03', title: 'THE AUDIENCE', anchor: 'audience' },
  { number: '04', title: 'FIVE DIMENSIONS', anchor: 'pillars' },
  { number: '05', title: 'MEDICINE', anchor: 'medicine' },
  { number: '06', title: 'MEDICAL BUSINESS', anchor: 'medical-business' },
  { number: '07', title: 'LEADERSHIP', anchor: 'leadership' },
  { number: '08', title: 'VALUES', anchor: 'values' },
  { number: '09', title: 'SOCIAL IMPACT', anchor: 'social-impact' },
  { number: '10', title: 'SHOWS', anchor: 'shows' },
  { number: '11', title: 'BEYOND MEDICINE', anchor: 'beyond-medicine' },
  { number: '12', title: 'MEDIA PLAYER', anchor: 'media-player' },
  { number: '13', title: 'SHORT FORM', anchor: 'short-form' },
  { number: '14', title: 'CONTENT ENGINE', anchor: 'content-engine' },
  { number: '15', title: 'VISUAL IDENTITY', anchor: 'visual-identity' },
  { number: '16', title: 'DISTRIBUTION', anchor: 'distribution' },
  { number: '17', title: '90-DAY PLAN', anchor: 'execution-plan' },
  { number: '18', title: 'WEEKLY SYSTEM', anchor: 'weekly-system' },
  { number: '19', title: 'LEGACY', anchor: 'legacy' },
];

export const navLinks = [
  { label: 'ABOUT', anchor: 'position' },
  { label: 'MEDICINE', anchor: 'medicine' },
  { label: 'BUSINESS', anchor: 'medical-business' },
  { label: 'LEADERSHIP', anchor: 'leadership' },
  { label: 'IMPACT', anchor: 'social-impact' },
  { label: 'MEDIA', anchor: 'beyond-medicine' },
];
