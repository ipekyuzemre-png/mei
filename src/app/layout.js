import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import { siteConfig } from "@/config/site";

export const metadata = {
  title: `${siteConfig.name} | Premium Digital Agency`,
  description: siteConfig.description,
  keywords: [
    "web design",
    "software agency",
    "premium digital agency",
    "mobile app",
    "SEO",
    "corporate identity",
    "mei template",
  ],
  openGraph: {
    title: `${siteConfig.name} | Premium Digital Agency`,
    description: siteConfig.description,
    url: "https://meiyazilim.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <CustomCursor />
          <WhatsAppButton />
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
