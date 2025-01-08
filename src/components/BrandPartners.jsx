import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import l1 from '../assets/brands/one.png';
import l2 from '../assets/brands/2.jpg';
import l3 from '../assets/brands/3.png';
import l4 from '../assets/brands/4.png';
import l5 from '../assets/brands/5.png';
import l6 from '../assets/brands/6.png';
import l7 from '../assets/brands/7.jpg';
import l8 from '../assets/brands/8.jpg';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BrandPartners = () => {
    const partners = [
        { name: 'Partner 1', logo: l1 },
        { name: 'Partner 2', logo: l2 },
        { name: 'Partner 3', logo: l3 },
        { name: 'Partner 4', logo: l4 },
        { name: 'Partner 5', logo: l5 },
        { name: 'Partner 6', logo: l6 },
        { name: 'Partner 7', logo: l7 },
        { name: 'Partner 8', logo: l8 },
    ];

    return (
        <>
        <h2 className='text-center text-3xl font-bold mt-4'>Our Supporters</h2>
 
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination]} // Adding Navigation and Pagination modules
                spaceBetween={50} // Space between slides
                slidesPerView={5} // Number of slides visible at once
                loop={true} // Looping the slides
                autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto slide
                pagination={{ clickable: true }} // Pagination at the bottom (clickable)
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={index}>
                        <img src={partner.logo} alt={partner.name} className="w-40 h-40 object-contain mx-auto" />
                    </SwiperSlide>
                ))}


                {/* Left and Right Navigation Arrows */}
                <div className="swiper-button-prev absolute text-black text-3xl cursor-pointer z-10">
                    <FaArrowLeft />
                </div>
                <div className="swiper-button-next absolute text-black text-3xl cursor-pointer z-10">
                    <FaArrowRight />
                </div>
            </Swiper>

            {/* Pagination */}
            
            <div className="swiper-pagination z-10 transform translate-y-8" />
        </div>
        </>
    );
};

export default BrandPartners;
