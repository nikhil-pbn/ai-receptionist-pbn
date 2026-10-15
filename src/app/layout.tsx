import { Footer, Header, SmoothHashScroll, ThemeProvider } from "@/components/common";
import { Toaster } from "@/components/ui";
import { CeraPro } from "@/fonts/cera";
import { cn } from "@/lib/utils";
import { organizationSchema, websiteSchema } from "@/schema/home";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-receptionist-pbn.vercel.app/"),

  title: {
    default: "Practice by Numbers | Dental Practice Growth Platform",
    template: "%s | Practice by Numbers",
  },

  description:
    "Practice by Numbers helps dental practices improve patient acquisition, retention, scheduling, analytics, communication, payments, and practice growth from one unified platform.",

  keywords: [
    "Dental Analytics",
    "Dental CRM",
    "Dental Practice Management",
    "Dental Marketing",
    "Dental Patient Retention",
    "Dental Reporting",
    "Dental Dashboard",
    "Practice by Numbers",
  ],

  authors: [
    {
      name: "Practice by Numbers",
    },
  ],

  creator: "Practie by numbers",
  publisher: "Practice by Numbers",

  icons: {
    icon: "/assets/logo.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Practice by Numbers",
    description:
      "One platform for analytics, marketing, patient engagement, and growth.",
    url: "https://ai-receptionist-pbn.vercel.app/",
    siteName: "Practice by Numbers",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Practice by Numbers",
    description:
      "One platform for analytics, marketing, patient engagement, and growth.",
  },

  appleWebApp: {
    capable: true,
    title: "Practice by Numbers",
    statusBarStyle: "default",
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "https://ai-receptionist-pbn.vercel.app/",
    languages: {
      "x-default": "https://ai-receptionist-pbn.vercel.app/",
    },
  },

  bookmarks: ["https://ai-receptionist-pbn.vercel.app/"],
  category: "technology",
  classification: "web development",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full", "antialiased", CeraPro.className, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script id="visitoriq-init" strategy="beforeInteractive">
          {`window.visitoriq=window.visitoriq||function(){(visitoriq.q=visitoriq.q||[]).push(arguments)};`}
        </Script>
        <Script
          id="visitoriq-sdk"
          src="https://visitor-iq-two.vercel.app/sdk/v1.js"
          data-consent="required"
          strategy="afterInteractive"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothHashScroll />
          <Header />
          {children}
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
