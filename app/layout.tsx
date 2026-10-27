import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram Chaitanya Goud | Data Engineer & AI Specialist",
  description:
    "Official portfolio of Ram Chaitanya Goud (THE RAM CHAITANYA GOUD BIBIPET). 🏆 1st Place Winner at IIT Hyderabad Data Science Hackathon 2025. IBM Certified AI Specialist, Data Engineer & Front-End Developer.",
  keywords: [
    "Ram Chaitanya Goud",
    "Data Engineer",
    "AI Specialist",
    "Machine Learning",
    "Python",
    "Portfolio",
    "IIT Hyderabad Hackathon",
  ],
  openGraph: {
    title: "Ram Chaitanya Goud | Data Engineer & AI Specialist",
    description: "🏆 1st Place IIT Hyderabad Hackathon 2025 | IBM Certified AI Specialist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
