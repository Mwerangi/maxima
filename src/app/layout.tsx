import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maxima Group — Tanzania | Logistics, Transport, Terminal & Technology",
    template: "%s | Maxima Group — Tanzania",
  },
  description:
    "Maxima Group is a diversified Tanzanian business group providing integrated solutions across clearing & forwarding, transportation, terminal/CFS operations and technology. Moving Cargo. Connecting Markets. Enabling Growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
