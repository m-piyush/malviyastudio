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
    { name: "Shreya Goyal", text: "Always try to provide maximum satisfaction to their customers. The BEST STUDIO." },
    { name: "Rahul Pandey", text: "The best Studio... Of Prayagraj... Guys, just check it out once..." },
    { name: "Sunakshi Grover", text: "Very good photography and cinematography, highly professional. If you're confused with too many options, visit them." },
    { name: "Tanmay Singh Rajput", text: "Best quality of clear and impressive images and videos of special occasions. Strongly recommended for event coverage and studio work. My best wishes for the team Malviya." },
    { name: "Anjali Dubey", text: "You can evaluate professionalism by just taking a look at one of the portraits. Thank you for all your efforts. You made us look stunning in the photos." },
    { name: "Divya Singh", text: "Very nice experience. Customer service is amazing. Quality of videos is superb, and delivery of work is on time. Affordable charges and reliable people." },
    { name: "Simran Mishra", text: "We had an amazing experience with Malviya Studios. They beautifully captured all the moments at my wedding." }
  ];

  return (
    <>
      <div>
        <p className="w-5/6 mx-auto sm:p-10 p-4 text-[20px] leading-[1.6em] text-justify font-sans text-gray-700 my-10">
          Malviya Studios is an endeavor to capture all things beautiful. We are a passionate team of wedding photographers and cinematographers who love to capture and preserve the most beautiful of emotions experienced around. We believe that weddings are a path-defining phase of an individual’s life; the flood of emotions and beautiful memories that a wedding creates is rare, truly overwhelming, and heartwarming. Hence, weddings serve as a perfect platform for us to satiate our creative juices and allow us a cathartic experience.
        </p>
        <Image width="100%" src="/service.jpg" preview={false} alt="service" className="my-6 shadow-lg rounded-lg" />
        <div className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6'>
          {images.map((src, index) => (
            <div key={index} className='relative overflow-hidden rounded-lg shadow-md'>
              <Image
                className='transition-transform duration-300 transform hover:scale-110 w-full rounded-lg'
                src={src}
                preview={false}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className='w-2/3 m-auto my-10'>
          <Image src="/embrace.jpg" preview={false} alt="embrace" className="rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 w-full p-6 text-center text-white text-3xl font-bold rounded-md shadow-md mb-8'>
            Testimonials
          </h1>
          <Carousel arrows={false} autoplay>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='w-5/6 mx-auto text-[18px] leading-[1.6em] text-center font-sans text-gray-800 my-8'>
                <h2 className='text-teal-600 text-xl font-bold'>{testimonial.name}</h2>
                <p className="md:w-3/4 w-full mx-auto mt-4 italic">{testimonial.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <Contact />

      </div>
    </>
  );
}
