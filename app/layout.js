import { Inter, Syne } from "next/font/google";
import "./globals.css";
import "./components.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Providers } from "../components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const syne = Syne({
  subsets: ["latin"],
  variable: '--font-syne',
});

export const metadata = {
  title: "IEEE Computational Intelligence Society Bangladesh Chapter",
  description: "Advancing Computational Intelligence for humanity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

