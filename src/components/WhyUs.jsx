import React from 'react';
import p1 from '../assets/person1.jpg';
import p2 from '../assets/person2.png';
import p3 from '../assets/person3.png';
import p4 from '../assets/person4.png';
import p5 from '../assets/person5.jpg';
import p6 from '../assets/person6.jpg';
import { FaShippingFast, FaStar, FaTags, FaHeadset, FaHandsWash } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <div className="py-10 px-4 bg-gradient-to-b from-yellow-50 to-white">
            <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-10 tracking-wide">Why Choose Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                    {
                        icon: <FaShippingFast size={40} className="text-green-500 w-full mx-auto" />,
                        title: "Fast Delivery",
                        desc: "Super-fast delivery so your cravings never have to wait.",
                    },
                    {
                        icon: <FaHandsWash size={40} className="text-yellow-500 w-full mx-auto" />,
                        title: "Maintain Hygiene",
                        desc: "Strict hygiene protocols ensure safe and delightful meals.",
                    },
                    {
                        icon: <FaTags size={40} className="text-red-500 w-full mx-auto" />,
                        title: "Affordable Prices",
                        desc: "Quality meals at pocket-friendly prices every day.",
                    },
                    {
                        icon: <FaHeadset size={40} className="text-blue-500 w-full mx-auto" />,
                        title: "24/7 Service",
                        desc: "We’re open day and night—order anytime!",
                    },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center border border-yellow-200">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-8">What Our Customers Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        name: "Srayo Shikdar",
                        title: "Software Engineer",
                        image: p1,
                        feedback: "The biriyani was absolutely delicious! It reminded me of home-cooked meals. A must-try!",
                    },
                    {
                        name: "Mohammad Ali",
                        title: "Marketing Specialist",
                        image: p2,
                        feedback: "The coffee is a game-changer! Rich, aromatic, and brewed to perfection.",
                    },
                    {
                        name: "Zibran Alam",
                        title: "Business Administration",
                        image: p3,
                        feedback: "Desserts here are heavenly! The chocolate mousse and gulab jamuns were divine.",
                    },
                    {
                        name: "Asif Abdullah",
                        title: "Project Manager",
                        image: p4,
                        feedback: "Fantastic drinks! Mango mojito is a must-try. Everything tastes super fresh.",
                    },
                    {
                        name: "Arman Kohli",
                        title: "Sports Representative",
                        image: p5,
                        feedback: "Excellent food and ambiance! Highly recommend for quality and taste lovers.",
                    },
                    {
                        name: "Rakib Uddin",
                        title: "Sales Executive",
                        image: p6,
                        feedback: "Helpful guidance with my order! The team was friendly and the taste amazing.",
                    },
                ].map((person, idx) => (
                    <div key={idx} className="bg-yellow-100 border border-slate-400 p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-all duration-300">
                        <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full mb-4 border-2 border-orange-400" />
                        <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                        <h4 className="text-sm text-gray-500 mb-3">{person.title}</h4>
                        <div className="flex text-yellow-400 text-xl mb-2">
                            {Array(5).fill(<FaStar />)}
                        </div>
                        <p className="text-center text-gray-700 text-sm">"{person.feedback}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyUs;
