export interface FAQItem {
  value: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export interface DemoFormField {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}