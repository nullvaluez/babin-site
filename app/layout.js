import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Babin Law, LLC | Columbus Personal Injury Attorneys",
    template: "%s | Babin Law, LLC",
  },
  description:
    "Top-rated Columbus personal injury attorneys fighting for justice. No fees unless we win. 75+ years combined experience in personal injury, mass tort, sexual abuse, and human trafficking cases.",
  metadataBase: new URL("https://babin.lawyer"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Babin Law, LLC",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <TopBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
