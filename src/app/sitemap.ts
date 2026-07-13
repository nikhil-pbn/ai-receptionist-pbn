import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ai-receptionist-pbn.vercel.app",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/#roi-calculator",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/#features",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/demo#recorded-demo",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: "https://ai-receptionist-pbn.vercel.app/demo",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/pricing",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/faq",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/faq#contact-form",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: "https://ai-receptionist-pbn.vercel.app/about",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];
}