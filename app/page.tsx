import { Image, Carousel, BackTop } from 'antd';
import Contact from "../app/contact/page";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function Home() {
  const images = [
    '/home4.jpg', '/home1.jpg', '/home8.jpg', '/home3.jpg',
    '/home6.jpg', '/home7.jpg', '/home10.jpg', '/home2.jpg',
    '/home11.jpg',
  ];

  const testimonials = [
    { name: "Shreya Goyal", text: "Always try to provide maximum satisfaction to their customers The BEST STUDIO." },
    { name: "Rahul Pandey", text: "The best Studio... Of Praygraj... Guyzz just check it out. Once..." },
    { name: "Sunakshi Grover", text: "Very good photography and cinematography highly professional. If you are confused with too much option visit them" },
    { name: "Tanmay Singh Rajput", text: "Best quality of Clear and impressive images and videos of very special and precious occasions..strongly recommended for coverage of events and studio work. My best wishes for the team Malviya" },
    { name: "Anjali Dubey", text: "One can evaluate your professionalism by just taking a look at one of your portraits. Thank you for all your efforts. You made us look stunning in the photos.... " },
    { name: "Divya Singh", text: "Very nice experience. Customer service is amazing. Quality of videos is superb and delivery of work is on time. Affordable charges and reliable people." },
    { name: "Simran Mishra", text: "We had an amazing experience with Malviya Studios. They beautifully captured all the moments at my wedding." }
];


  return (
    <>
      <div>
        <p className="w-5/6 mx-auto text-[20px] leading-[1.4em] text-center font-sans text-[rgba(0,0,0,0.479)] my-10">
          Malviya Studios is an endeavor to capture all things beautiful. We are a passionate team of wedding photographers and cinematographers who love to capture and preserve the most beautiful of emotions experienced around. We believe that weddings are a path-defining phase of an individual’s life; the flood of emotions and beautiful memories that a wedding creates is rare, truly overwhelming, and heartwarming. Hence, weddings serve as a perfect platform for us to satiate our creative juices and allow us a cathartic experience.
        </p>
        <Image width="100%" src="/service.jpg" preview={false} alt="service" />
        <div className='w-1/2 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4'>
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
        <div className='w-2/5 m-auto'>
          <Image src="/embrace.jpg" preview={false} alt="embrace" />
        </div>
        <div>
          <h1 className='bg-rose-500 w-full p-4 flex justify-center text-white text-2xl font-semibold'>Testimonials</h1>
          <Carousel arrows={false} autoplay>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='w-5/6 mx-auto text-[20px] leading-[1.4em] text-center font-sans text-[rgba(0,0,0,0.479)] my-10'>
                <h2 className='text-black text-xl font-bold'>{testimonial.name}</h2>
                <p className="md:w-1/2 w-3/4 flex justify-center m-auto mt-4">{testimonial.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <Contact />

      </div>
    </>
  );
}
