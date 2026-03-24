// ═══════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════
export interface Project {
  id: number;
  name: string;
  emoji: string;
  desc: string;
  stack: string[];
  tag: string;
  year: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  desc: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}
