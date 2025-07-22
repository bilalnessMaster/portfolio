import type { Metadata } from "next";
import { Geist_Mono, Bricolage_Grotesque, Instrument_Sans} from "next/font/google";
import "./globals.css";



const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "portfolio",
  description: "this portfolio belongs to bilal habib allah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${instrument.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
