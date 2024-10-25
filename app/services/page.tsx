import { Image } from 'antd';
import type { Metadata } from "next";

const Services = () => {
    const services = [
        {
            title: 'PRE-WEDDING',
            src: '/prewedding.jpg',
            description: 'Capture the essence of your love story with a pre-wedding photoshoot. This session creates lasting memories, adds a personal touch to your wedding, and helps you feel at ease on your big day. Let us make these moments unforgettable.',
        },
        {
            title: 'WEDDING',
            src: '/wedding.jpg',
            description: 'Celebrate your big day with stunning wedding photography that captures every heartfelt moment and joyful detail. Our expert team will ensure your wedding memories are beautifully preserved, reflecting the elegance and magic of your special day.',
        },
        {
            title: 'BRIDAL QUEEN',
            src: '/bride.jpg',
            description: 'Capture the beauty and elegance of your bridal moments with our expert photography. From the delicate details to the radiant joy, we\'ll preserve every special memory, ensuring you look and feel stunning on your unforgettable day.',
        },
        {
            title: 'ENGAGEMENT',
            src: '/enagement.jpg',
            description: 'Celebrate your love story with a beautiful engagement photoshoot. Our expert team captures the excitement and romance of your journey together, creating stunning images that reflect your unique bond and the joy of your upcoming wedding.',
        },
        {
            title: 'PHOTO LAMINATION',
            src: '/frame.jpg',
            description: 'Preserve your cherished memories with our photo lamination and framing services. Lamination protects your images from damage, while custom framing adds a touch of elegance and complements your decor.',
        },
        {
            title: 'KID PHOTOGRAPHY',
            src: '/kid.jpg',
            description: 'Celebrate the joy and innocence of childhood with our kid photography sessions. We capture the genuine smiles, playful moments, and unique personalities of your little ones that you\'ll treasure for a lifetime.',
        },
    ];

    return (
        <div className='mt-20'>
            {/* Header Image with colorful bottom border */}
            <Image
                width={"100%"}
                src="/service.jpg"
                preview={false}
                alt="service"
            />

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto'>
                {services.map((service, index) => (
                    <div key={index} className='p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden bg-white' >
                        <p className='text-[22px] font-semibold mb-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                            {service.title}
                        </p>
                        <Image
                            className='transition-transform duration-300 transform hover:scale-105 rounded-md'
                            src={service.src}
                            preview={false}
                            alt={service.title}
                            style={{ position: 'relative', zIndex: 1 }}
                        />
                        <p className='text-[15px] text-justify font-semibold text-gray-600 mt-3'>{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Footer Image with margin adjustments */}
            <Image
                className='mt-10 mb-5'
                width={"100%"}
                src="/service-bottom.jpg"
                preview={false}
                alt="service-bottom"
            />
        </div >
    );
}

export default Services;
