export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
};

export type Solution = {
  id: string;
  name: string;
  description: string;
  features: string[];
  status: "available" | "coming-soon";
  href: string;
};

export type ProductPreviewId = "costea" | "stockea" | "web";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  preview: ProductPreviewId;
  imageAlt: string;
  logo?: string;
  accentClass: string;
  gradientClass: string;
  cta: string;
  ctaHref: string;
  demoUrl?: string;
  demoLabel?: string;
  status: "available" | "coming-soon";
};

export type BrandValue = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  coverImage?: string;
  tags?: string[];
};
