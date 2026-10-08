import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F7F9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "RHEVIX — Empower Your Digital Transformation",
  description:
    "A global platform connecting exceptional developers, AI engineers, researchers, designers, scientists, analysts, and domain experts with companies building the future of AI.",
  keywords: [
    "AI Engineers",
    "Machine Learning Researchers",
    "Frontier AI Talent",
    "LLM Evaluation",
    "Post-Training RLHF",
    "AI Systems Architecture",
    "Elite Developer Network",
    "rhevix",
  ],
  authors: [{ name: "rhevix Intelligence Network" }],
  openGraph: {
    title: "RHEVIX — Empower Your Digital Transformation",
    description:
      "Connect your expertise with ambitious AI teams, research projects, and opportunities shaping the next generation of technology.",
    url: "https://rhevix.ai",
    siteName: "rhevix",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F6F7F9] text-[#17191D] font-sans selection:bg-[#3155FF] selection:text-white antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
