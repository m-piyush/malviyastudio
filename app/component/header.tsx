'use client'
import Link from "next/link";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CarouselComponent from "./carouselSize";
import { Image } from 'antd';
import { Divider } from 'antd';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-[50vh]">
      <div className="absolute inset-0 z-0 top-12">
        <CarouselComponent />
      </div>
      <div className="flex items-center relative z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 top-0 justify-between p-1 backdrop-blur-md shadow-md px-2">
        <div className="flex items-center space-x-3">
          <Link href="/" passHref>
            <Image className="flex" height={35} src="/logo.png" preview={false} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex font-medium text-white space-x-6">
          <Link href="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
          <Link href="/portfolio" className="hover:text-yellow-300 transition duration-300">Portfolio</Link>
          <Link href="/services" className="hover:text-yellow-300 transition duration-300">Services</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition duration-300">Contact Us</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-purple-600 to-pink-500 text-white font-medium flex flex-col items-center space-y-4 py-6 z-50 shadow-lg">
          <Link href="/about" className="hover:text-yellow-300 transition duration-300 w-full flex justify-center" onClick={toggleMenu}>About</Link>
          <Divider style={{ borderColor: '#ffffff80' }} />
          <Link href="/portfolio" className="hover:text-yellow-300 transition duration-300 w-full flex justify-center" onClick={toggleMenu}>Portfolio</Link>
          <Divider style={{ borderColor: '#ffffff80' }} />
          <Link href="/services" className="hover:text-yellow-300 transition duration-300 w-full flex justify-center" onClick={toggleMenu}>Services</Link>
          <Divider style={{ borderColor: '#ffffff80' }} />
          <Link href="/contact" className="hover:text-yellow-300 transition duration-300 w-full flex justify-center" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
