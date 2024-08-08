"use client"

import { useState } from "react";

const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const validatePhoneNumber = (number: string) => {
        const phoneRegex = /^[0-9]{10}$/; 
        return phoneRegex.test(number);
    };

    const handleChange = (event: { target: { value: any; }; }) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = (event: {
        target: any; preventDefault: () => void; 
}) => {
        event.preventDefault();

        if (!validatePhoneNumber(phoneNumber)) {
            setError('Invalid phone number. It should be 10 digits long.');
        } else {
            setError('');
            // proceed with form submission
            event.target.submit();
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="border-2 mx-auto my-4 relative w-[90%] md:w-1/2 h-64 md:h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.4175006956907!2d81.83121908505144!3d25.449794799426638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbbd8fa40337%3A0xcce9d02d66cea2c!2sMalviya%20Studio!5e0!3m2!1sen!2sin!4v1722870822189!5m2!1sen!2sin"
                        className="w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="flex flex-col items-center p-4 w-full md:w-1/2">
                    <div className="container w-full">
                        <h2 className="text-2xl font-bold mb-4">Feel free to contact us</h2>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit} action="https://formspree.io/f/manwozrl" method="POST" className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    required
                                    autoComplete="off"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                                <input
                                    type="text"
                                    name="tel"
                                    placeholder="Enter your Phone Number"
                                    required
                                    autoComplete="off"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <textarea
                                    name="message"
                                    cols={30}
                                    rows={6}
                                    placeholder="Enter your message"
                                    required
                                    autoComplete="off"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                                <input
                                    type="submit"
                                    value="Send"
                                    className="w-full p-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
