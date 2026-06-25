import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "caracascablecar.com"}`;

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Warairarepano Cable Car — Caracas, Venezuela",
      template: "%s | Warairarepano Cable Car",
    },
    description:
      "A travel guide to the Warairarepano Cable Car (Sistema Teleférico Warairarepano) in Caracas, Venezuela. Experience breathtaking views of the city and the Caribbean from the Ávila mountain summit.",
    keywords: [
      "Warairarepano Cable Car",
      "Teleférico de Caracas",
      "Caracas cable car",
      "Ávila National Park",
      "Maripérez station",
      "Caracas tourism",
      "Venezuela travel",
      "mountain cable car",
      "Humboldt Hotel",
    ],
    authors: [{ name: "Warairarepano Cable Car Travel Guide" }],
    creator: "Warairarepano Cable Car Travel Guide",
    publisher: "Warairarepano Cable Car Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: params.locale === 'es' ? 'es_VE' : params.locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: ["en_US", "es_VE", "zh_CN"].filter(l => !l.startsWith(params.locale)),
      url: `${baseUrl}/${params.locale}`,
      title: "Warairarepano Cable Car — Caracas, Venezuela",
      description:
        "A travel guide to the Warairarepano Cable Car in Caracas, Venezuela. Experience breathtaking views from the Ávila mountain summit.",
      siteName: "Warairarepano Cable Car Travel Guide",
      images: [
        {
          url: "/gallery/caracascablecar (1).jpg",
          width: 1200,
          height: 630,
          alt: "Warairarepano Cable Car - Caracas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Warairarepano Cable Car — Caracas, Venezuela",
      description:
        "A travel guide to the Warairarepano Cable Car in Caracas, Venezuela.",
      images: ["/gallery/caracascablecar (1).jpg"],
    },
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
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
