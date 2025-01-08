import React from 'react';
import p1 from '../assets/person1.jpg'
import p2 from '../assets/person2.png'
import p3 from '../assets/person3.png'
import p4 from '../assets/person4.png'
import p5 from '../assets/person5.jpg'
import p6 from '../assets/person6.jpg'
import { FaShippingFast, FaStar, FaTags, FaHeadset, FaHandsWash } from 'react-icons/fa';


const WhyUs = () => {
    return (
        <div className="py-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-orange-800 mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Fast Delivery */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaShippingFast size={40} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-center text-gray-600">
                        We ensure super-fast delivery so you can get your foods quickly.
                    </p>
                </div>

                {/* Best Quality */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaHandsWash size={40} className="text-yellow-500 mb-4"  />
                    <h3 className="text-xl font-semibold mb-2 text-center">Maintain Hygiene</h3>
                    <p className="text-center text-gray-600">
                        We ensure the highest standards of hygiene for a safe and delightful dining experience.
                    </p>
                </div>

                {/* Affordable Prices */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaTags size={40} className="text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-center">Affordable Prices</h3>
                    <p className="text-center text-gray-600">
                        Competitive prices without compromising on quality.
                    </p>
                </div>

                {/* 24/7 Support */}
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                    <FaHeadset size={40} className="text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">24/7 Open</h3>
                    <p className="text-center text-gray-600">
                        Our team is available round-the-clock for your assistance. You Can Order anytime you want.
                    </p>
                </div>
            </div>


            <h2 className="text-3xl font-bold text-center text-orange-800 mt-12">Listen From Our Customers</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>


                <div className='bg-yellow-100 border-2 border-slate-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-right">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p1} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Srayo Shikdar</h3>
                            <h4 className='text-base'>Software Engineer</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-2xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"The biriyani was absolutely delicious! Perfectly cooked rice, tender meat, and bursting with flavors. It reminded me of home-cooked meals. A must-try for all food lovers. I'll definitely come back for more!"</p>
                    </div>

                </div>



                <div className='bg-yellow-100 border-2 border-slate-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-in">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p2} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Mohammad Ali</h3>
                            <h4 className='text-base'>Marketing Specialist</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-2xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"The coffee here is a game-changer! Rich, aromatic, and brewed to perfection. It’s the best way to start your day or unwind after a meal. Highly recommend their specialty lattes."</p>
                    </div>

                </div>




                <div className='bg-yellow-100 border-2 border-slate-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-left">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p3} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Zibran Alam</h3>
                            <h4 className='text-base'>Business Administration</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-2xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"I couldn’t resist trying their desserts, and I’m glad I did! The chocolate mousse was heavenly, and the gulab jamuns were melt-in-your-mouth perfect. Absolutely worth it!"</p>
                    </div>

                </div>

                <div className='bg-yellow-100 border-2 border-slate-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-right">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p4} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Asif Abdullah</h3>
                            <h4 className='text-base'>Project Manager</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-3xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"Their drinks menu is fantastic! From refreshing mocktails to creamy shakes, everything tasted fresh and satisfying. The mango mojito was my personal favorite!"</p>
                    </div>

                </div>


                <div className='bg-yellow-100 border-2 border-slate-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-in">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p5} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Arman Kohli</h3>
                            <h4 className='text-base'>Sports Representative</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-2xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>
                        "This restaurant is a hidden gem! Excellent food, cozy ambiance, and top-notch service. Whether you’re craving biriyani, coffee, or snacks, they deliver quality and taste every time. Highly recommended!"</p>
                    </div>

                </div>



                <div className='bg-yellow-100 border-2 border-slate-800 p-4 rounded-lg flex flex-col justify-center items-center' data-aos="zoom-out-left">

                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={p6} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl'>Rakib Uddin</h3>
                            <h4 className='text-base'>Sales Executive</h4>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2 pt-2'>
                        <div className='flex text-yellow-400 text-2xl'>
                            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        </div>
                        <p className='text-center'>"I had no idea where to begin with my sports gear, but after visiting EquiSports, I felt like I had a clear direction. The advice was practical, and the products they recommended helped me get started. Highly recommended!"</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhyUs;