import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'


import image1 from '../assets/banner1.jpg'
import image2 from '../assets/banner2.jpg'
import image3 from '../assets/banner3.jpg'


const Banner = () => {
    return (
        <div className='container mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Slide
              image={image1}
              text='From Our Kitchen to Your Heart – Fresh, Fast, Flavorful'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={image2}
              text='Experience Culinary Perfection with Every Bit'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide 
              image={image3}
              text='Delicious Meals Delivered Straight to Your Doorstep'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;