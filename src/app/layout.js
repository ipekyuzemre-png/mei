import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import { siteConfig } from "@/config/site";

export const metadata = {
  metadataBase: new URL("https://meiyazilim.com"),
  title: {
    default: `${siteConfig.name} | Diyarbakır, Gaziantep, Mardin Web Tasarım ve Yazılım Ajansı`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Diyarbakır, Gaziantep ve Mardin bölgesinde faaliyet gösteren; kurumsal web tasarım, özel yazılım, e-ticaret ve SEO çözümleri sunan premium dijital ajans.",
  keywords: [
    "diyarbakır web tasarım",
    "gaziantep yazılım ajansı",
    "antep e-ticaret",
    "mardin web yazılım",
    "kurumsal web tasarım",
    "SEO hizmeti",
    "dijital pazarlama",
    "yazılım firması"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Web Tasarım ve Yazılım Ajansı`,
    description: "Diyarbakır, Gaziantep ve Mardin bölgesinde faaliyet gösteren; kurumsal web tasarım, özel yazılım, e-ticaret ve SEO çözümleri sunan premium dijital ajans.",
    url: "/",
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Web Tasarım ve Yazılım Ajansı`,
    description: "Diyarbakır, Gaziantep ve Mardin bölgesinde premium dijital ajans.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
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
