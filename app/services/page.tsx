
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
            description: 'Celebrate your big day with stunning wedding photography that captures every heartfelt moment and joyful detail. Our expert team will ensure your wedding memories are beautifully preserved, elegance, and magic of your special day.',
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
        <>
            <Image
                width={"100%"}
                src="/service.jpg"
                preview={false}
                alt="service"
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full md:w-2/3 mx-auto'>
                {services.map((service, index) => (
                    <div key={index} className='p-4 border border-red-300 relative overflow-hidden'>
                        <p className='text-[20px] text-gray-700 mb-2'>{service.title}</p>
                        <Image
                            className='transition-transform duration-150 transform hover:scale-125 w-full z-0'
                            src={service.src}
                            preview={false}
                            alt={service.title}
                            style={{ position: 'relative', zIndex: 1 }}
                        />
                        <p className='text-[14px] text-gray-500'>{service.description}</p>
                    </div>
                ))}
            </div>
            <Image
                className='mt-5 mb-2'
                width={"100%"}
                src="/service-bottom.jpg"
                preview={false}
                alt="service-bottom"
            />
        </>
    )
}

export default Services;
