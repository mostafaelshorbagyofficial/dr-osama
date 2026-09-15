// src/data/media.ts
export type MediaCategory = 'medicine' | 'business' | 'leadership' | 'beyond-medicine';
export type MediaPlatform = 'instagram' | 'youtube' | 'tiktok';

export interface MediaItem {
  id: string;
  title: string;
  category: MediaCategory;
  episode?: string;
  platform: MediaPlatform;
  thumbnail?: string;
  embedUrl?: string;
  externalUrl?: string;
  description?: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 'ep001',
    title: 'Beyond Medicine — Episode 01',
    category: 'beyond-medicine',
    episode: 'EP. 01',
    platform: 'instagram',
    externalUrl: 'https://www.instagram.com/reel/Dc6O61jteby/',
    description: 'Where medicine meets life, leadership, and values. The first episode of the flagship program.',
  },
  {
    id: 'ep002',
    title: 'Beyond Medicine — Episode 02',
    category: 'beyond-medicine',
    episode: 'EP. 02',
    platform: 'instagram',
    externalUrl: 'https://www.instagram.com/reel/DcweMSytGBQ/',
    description: 'Every episode starts with an experience or story — and ends with a bigger idea.',
  },
  {
    id: 'med001',
    title: 'Decision for Surgery',
    category: 'medicine',
    episode: 'S01E01',
    platform: 'instagram',
    externalUrl: 'https://www.instagram.com/drosama.taha/',
    description: 'When is surgery the right choice? The thinking behind the decision.',
  },
  {
    id: 'biz001',
    title: 'Doctor × Business',
    category: 'business',
    episode: 'S01E01',
    platform: 'instagram',
    externalUrl: 'https://www.instagram.com/drosama.taha/',
    description: 'The intersection of medical expertise and business thinking.',
  },
];
