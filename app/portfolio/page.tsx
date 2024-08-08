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
        <div>
            <Image
                width={"100%"}
                src="/portfolio_text.jpg"
                preview={false}
                alt="portfolio_text"
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>

                {images.map((src, index) => (
                    <div key={index} className='relative overflow-hidden'>
                        <Image
                            className='transition-transform duration-150 transform hover:scale-125 w-full z-0'
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
