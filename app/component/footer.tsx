import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col h-[1/4] bg-rose-500 p-5 sm:h-auto">
            <div className="flex justify-evenly text-[32px] text-white mb-[20px]">
                <a target="_blank" href="https://www.instagram.com/malviya__studio?utm_source=qr&igsh=MTNpcW55bThqaWNucw%3D%3D">
                    <FaInstagram />
                </a>
                <a target="_blank" href="mailto:malviyastudio1@gmail.com">
                    <MdOutlineMailOutline />
                </a>

            </div>
            <div className="flex flex-col sm:flex-row justify-around text-[14px] text-white space-y-4 sm:space-y-0">
                <a className="text-center sm:text-left" target="_blank" href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7">MALVIYA STUDIO</a>
                <p className="w-full sm:w-2/5 text-wrap  sm:text-center">25/51 , Mahatma Gandhi Marg, opposite hotel smart, Civil line, Uttar Prayagraj-211003</p>
                <div className="flex flex-col items-center sm:items-start">
                    <a className="flex items-center" href="tel:9415225291"><FaMobileAlt className="mr-2" />:+91-9415225291</a>
                    <a className="flex items-center mt-2" href="tel:8299338931"><FaMobileAlt className="mr-2" />:+91-8299338931</a>
                </div>
            </div>
            <div className="md:flex justify-center mt-4 sm:mt-0">
                <h2 className="text-[10px] text-white text-center sm:text-left">
                    © 2024 Malviya studio, All Rights Reserved.
                </h2>
            </div>
        </div>
    )
}

export default Footer;
