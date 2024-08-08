'use client'
import Link from "next/link";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CarouselComponent from "./carouselSize";
import { Image} from 'antd';
import { Divider } from 'antd';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-[50vh]">
      <div className="absolute inset-0 z-0">
        <CarouselComponent />
      </div>
      <div className="flex items-center relative z-50 bg-[#e9e9e9a6] top-0 justify-between p-4 h-[40px] bg-top bg-contain bg-no-repeat">
        <div className="flex">
          <Link href="/" passHref>
            <Image className="flex"  height={25} src="/logo.png" preview={false} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex font-bold text-lg text-black justify-evenly w-1/2">
          <Link href="/about" className="hover:text-gray-600 transition">ABOUT</Link>
          <Link href="/portfolio" className="hover:text-gray-600 transition">PORTFOLIO</Link>
          <Link href="/services" className="hover:text-gray-600 transition">SERVICES</Link>
          <Link href="/contact" className="hover:text-gray-600 transition">CONTACT US</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-[#e9e9e9a6] font-bold flex flex-col items-center space-y-4 p-4 z-50">
          
          <Link href="/about" className="hover:text-gray-600 transition w-full flex justify-center" onClick={toggleMenu}>ABOUT</Link>
          <Divider style={{ border: '1px solid #686868a6' }} />
          <Link href="/portfolio" className="hover:text-gray-600 transition w-full flex justify-center" onClick={toggleMenu}>PORTFOLIO</Link>
          <Divider style={{ border: '1px solid #686868a6' }} />
          <Link href="/services" className="hover:text-gray-600 transition w-full flex justify-center" onClick={toggleMenu}>SERVICES</Link>
          <Divider style={{ border: '1px solid #686868a6' }} />
          <Link href="/contact" className="hover:text-gray-600 transition w-full flex justify-center" onClick={toggleMenu}>CONTACT US</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
