import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Monika Jakhar | Communication Designer",
  description: "Portfolio of Monika Jakhar, a Communication Designer based in the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${caveat.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
