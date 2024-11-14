import { Gabarito } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";
import Footer from '@/components/Utilities/Footer';

const gabarito = Gabarito({subsets: ['latin']})

export const metadata = {
  title: "Amingfo",
  description: "Anime List dan Informasi Seputar Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`$gabarito.className bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
