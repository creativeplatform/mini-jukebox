import "./theme.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const url = process.env.NEXT_PUBLIC_URL
    ? new URL(process.env.NEXT_PUBLIC_URL)
    : new URL("https://creativeplatform.xyz");

  return {
    title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    description: "A creative way to interact with onchain music.",
    metadataBase: url,
    openGraph: {
      url: url,
      title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      description: "A creative way to interact with onchain music.",
      images: [
        {
          url: `${url}screenshot.png`,
          width: 1200,
          height: 630,
          alt: "Creative Player",
        },
      ],
      siteName: "Creative Player",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@love",
      title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      description: "A creative way to interact with onchain music.",
      images: [
        {
          url: `${url}screenshot.png`,
          width: 1200,
          height: 630,
          alt: "Creative Player",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
