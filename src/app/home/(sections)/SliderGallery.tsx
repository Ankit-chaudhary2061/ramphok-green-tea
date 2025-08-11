"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import AOS from 'aos'
import { useEffect } from "react";
import "aos/dist/aos.css"; 
const SliderGallery = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      offset:100
    })
  })
  return (
    <div className='container mx-auto ' data-aos='zoom-in-up'>
      <div className='pb-[109px]'>
        <div className='relative h-[419px]'>
          {/* Buttons centered vertically at 419px height */}
          <button
            className='swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-300 bg-opacity-60 rounded-full shadow-md hover:bg-gray-400 hover:bg-opacity-90 transition'
            aria-label='Previous Slide'
          >
            ❮
          </button>
          <button
            className='swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-300 bg-opacity-60 rounded-full shadow-md hover:bg-gray-400 hover:bg-opacity-90 transition'
            aria-label='Next Slide'
          >
            ❯
          </button>
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section1.jpg'
                  alt='Green Tea'
                  fill
                  className='object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section2.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section3.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section4.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section5.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section6.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section7.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section8.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section9.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section10.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section11.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section12.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section13.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section14.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section15.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section16.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section17.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative h-[419px] w-full rounded-xl overflow-hidden'>
                <Image
                  src='/images/section18.jpg'
                  alt='Green Tea'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                  fill
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderGallery;
