import { Image } from 'antd';

const Portfolio = () => {
    const images = [
        '/prewedding1.jpg',
        '/prewedding2.jpg',
        '/prewedding3.jpg',
        '/prewedding4.jpg',
        '/bride1.jpg',
        '/bride2.jpg',
        '/bride3.jpg',
        '/bride4.jpg',
        '/couple1.jpg',
        '/couple2.jpg',
        '/couple3.jpg',
        '/haldi1.jpg',
        '/haldi2.jpg',
        '/haldi3.jpg',
        '/haldi4.jpg',
        '/haldi5.jpg'
    ];

    return (
        <div className="bg-white mt-20">
            {/* Header Image with colorful background */}
            <div className="relative">
                <Image
                    width={"100%"}
                    src="/portfolio_text.jpg"
                    preview={false}
                    alt="portfolio_text"
                    className="border-b-4 border-red-400"
                />
            </div>
            
            {/* Portfolio Images Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className='relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl'
                    >
                        <Image
                            className='transition-transform duration-300 transform hover:scale-110 w-full rounded-lg'
                            src={src}
                            preview={false}
                            alt={`Image ${index + 1}`}
                            style={{ position: 'relative', zIndex: 1 }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
