import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import WhatsappButton from "@/Components/WhatsappButton/WhatsappButton";
import { Toaster } from "react-hot-toast";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";

// Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

//nilkanth
const gujaratiFont = localFont({
  src: "../../public/fonts/nilkanth.ttf",
  variable: "--font-gujarati",
  weight: "400",
});

export const metadata = {
  title: "Futuropnishad - Empowering the Future of Events",
  description:
    "Futuropnishad is a cutting-edge event management platform that leverages AI and blockchain technology to revolutionize the way events are planned, executed, and experienced. Our mission is to empower event organizers and attendees with innovative tools and seamless experiences, making every event unforgettable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${gujaratiFont.variable}`}>
      <body>
        <WhatsappButton />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
