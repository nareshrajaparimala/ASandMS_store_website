export type ServiceFAQ = {
  q: string;
  a: string;
};

export type SubService = {
  name: string;
  desc: string;
  icon: string;
  price?: string;
};

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  shortDesc: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  ctaMessage: string;
  badge?: string;
  badgeColor?: "blue" | "saffron" | "emerald";
  slug?: string;
  heroTagline?: string;
  fullDescription?: string;
  subServices?: SubService[];
  faqs?: ServiceFAQ[];
  metaTitle?: string;
  metaDescription?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
  service: string;
  initials: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type WhyItem = {
  icon: string;
  title: string;
  desc: string;
};

export type HowStep = {
  step: number;
  title: string;
  desc: string;
  icon: string;
};
