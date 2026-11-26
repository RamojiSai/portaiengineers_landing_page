import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import MobileStickyBar from "../components/layout/MobileStickyBar";
import FooterSection from "../components/sections/FooterSection";
import GlobalGetInTouch from "../components/layout/GlobalGetInTouch";
import { JsonLd, globalOrganizationSchema, globalWebSiteSchema } from "../lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portaiengineers.com"),
  title: {
    default: "Port AI Engineers Pvt. Ltd. | Precision Engineering & CAD Services",
    template: "%s | Port AI Engineers",
  },
  description: "Precision-focused engineering and CAD services powered by AI. Delivering faster, safer, and more predictable outcomes for complex industrial projects.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EC4J1LSR38"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EC4J1LSR38');
          `}
        </Script>
        <JsonLd schema={globalOrganizationSchema()} />
        <JsonLd schema={globalWebSiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[var(--color-on-primary)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-bg)]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <GlobalGetInTouch />
        <FooterSection />
        <MobileStickyBar />
      </body>
    </html>
  );
}
