import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-5">
            <div className="flex justify-center space-x-4 mb-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/malviya__studio?utm_source=qr&igsh=MTNpcW55bThqaWNucw%3D%3D" className="text-white text-3xl hover:text-yellow-300 transition-colors">
                    <FaInstagram />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:malviyastudio1@gmail.com" className="text-white text-3xl hover:text-yellow-300 transition-colors">
                    <MdOutlineMailOutline />
                </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-around text-sm text-white space-y-4 sm:space-y-0">
                <a className="text-center font-bold sm:text-left" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7">MALVIYA STUDIO</a>
                <p className="w-full sm:w-1/3 text-wrap sm:text-center">25/51, Mahatma Gandhi Marg, Opposite Hotel Smart, Civil Line, Uttar Prayagraj-211003</p>
                <div className="flex flex-col items-center sm:items-start">
                    <a className="flex items-center" href="tel:9415225291">
                        <FaMobileAlt className="mr-2" />:+91-9415225291
                    </a>
                    <a className="flex items-center mt-2" href="tel:8299338931">
                        <FaMobileAlt className="mr-2" />:+91-8299338931
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <h2 className="text-xs text-white text-center">
                    © 2024 Malviya Studio, All Rights Reserved.
                </h2>
            </div>
        </div>
    );
}

export default Footer;
