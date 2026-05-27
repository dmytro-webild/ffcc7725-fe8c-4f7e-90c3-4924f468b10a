import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Tag from "@/tag/Tag";



export const metadata: Metadata = {
  title: "Daily Drift Cafe | Slow Life, Good Vibes",
  description: "Experience tropical-modern comfort at Daily Drift Cafe. Specialty coffee, hearty comfort food, and the perfect cozy atmosphere for your daily drift.",
  openGraph: {
    "title": "Daily Drift Cafe",
    "description": "Your tropical escape in the city.",
    "siteName": "Daily Drift Cafe",
    "type": "website"
  },
};


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        <Tag />
</body>
      </ServiceWrapper>
    </html>
  );
}
