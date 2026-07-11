export interface HeroSection {
    title: string;
    description: string;
    link: {
        label: string;
        href: string;
    };
}

export interface PricingFeaturesProps {
  badge: string;
  title: string;
  description: string;
  columns: string[][];
}

export interface PricingTier {
  value: string;
  minutes: string;
  price: string;
  popular?: boolean;
}

export interface PricingTabsProps {
  tiers: PricingTier[];
}

export interface PricingFAQItem {
  question: string;
  answer: string;
}

export interface PricingFAQProps {
  badge: string;
  title: string;
  items: PricingFAQItem[];
}

export interface ROIStat {
  value: string;
  title: string;
  subtitle?: string;
}