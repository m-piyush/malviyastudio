const About = () => {
    return (
        <>
            {/* Main About Section */}
            <div className="w-11/12 lg:w-5/6 mx-auto text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6em]  font-sans text-gray-700 my-20 text-justify">
                <p>
                    <span className="text-black font-semibold">Malviya Studios</span> is an endeavor to capture all things beautiful. We are a passionate team of wedding photographers and cinematographers who love to capture and preserve the most beautiful of emotions experienced around. We believe that weddings are a path-defining phase of an individual’s life; the flood of emotions and beautiful memories that a wedding creates is rare, truly overwhelming, and heartwarming. Hence, weddings serve as a perfect platform for us to satiate our creative juices and allow us a cathartic experience.
                </p>
            </div>

            {/* Additional Information Section */}
            <div className="bg-gradient-to-b from-white to-gray-100 my-10 py-10 px-4 sm:px-6 lg:px-10  text-justify">
                <p className="text-[20px] md:text-[24px] lg:text-[28px] italic font-serif w-11/12 lg:w-5/6 mx-auto text-blue-600">
                    Taking the customer delight experience further and leaving an impact on many facets of their lives, both personal and professional, they have forayed into inter-related fields establishing <span className="text-purple-700 font-bold">CandidShutters</span> as an all-encompassing brand for visual media.
                </p>

                <p className="text-[16px] md:text-[20px] lg:text-[24px] text-gray-600 my-5 leading-relaxed w-11/12 lg:w-5/6 mx-auto">
                    Through <b className="text-purple-600">Malviya Studio</b>, they aim to offer tailor-made professional creative solutions to businesses. Its wide range of corporate portfolio (for big industry brands as well as new emerging start-ups) includes covering conferences and seminars, exhibitions, award ceremonies, product launches, corporate training and incentive programs, team engagement travels, public relation events, brand documentaries and films, content creation, and state-of-the-art functional brand websites.
                </p>

                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-700 my-5 leading-relaxed w-11/12 lg:w-5/6 mx-auto">
                    Striking a perfect balance between digital data and meaningful tangible output, they also offer custom-designed, made-to-order photo books and prints through <b className="text-green-700">Malviya Studio Store</b>. This design and print-focused vertical caters to a wide spectrum of clients from weddings, birthdays, events, travel, baby, personal moments, milestone events, illustrated photo books, and much more.
                </p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-700 w-11/12 lg:w-5/6 mx-auto">
                    A seamless integration of human interaction and technology, CandidShutters Store, with its gamut of products and service offerings powered by state-of-the-art technology and AI, is working to change the industry dynamics and revolutionize the art of making and savoring photo books.
                </p>
            </div>
        </>
    );
}

export default About;
