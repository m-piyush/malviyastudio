
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './component/header';
import Footer from './component/footer';
const inter = Inter({ subsets: ["latin"] });
import { IoCall } from "react-icons/io5";
export const metadata: Metadata = {
  title: "Malviya stuido -best studio in allahabad",
  description: "Malviya studio by sharad nalviya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky">
          <Header />
        </header>
        {children}

        {/* Floating Contact Us Button */}
        <div className="fixed bottom-4 right-4 z-50  md:w-[120px] w-50px" >
          <a href="tel:8299338931" className="bg-rose-500 text-white p-4 rounded-full shadow-lg flex justify-evenly items-center hover:bg-rose-600 transition-colors">
            <IoCall />

            <p className="md:flex hidden">  Call us </p>
          </a>
        </div>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
