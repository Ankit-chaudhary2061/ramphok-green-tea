'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderGallery = () => {
  return (
    
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section1.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section2.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section3.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section4.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section5.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section6.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section7.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section8.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section9.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section10.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section11.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section12.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section13.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section14.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section15.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section16.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section17.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative h-[419px] w-full'>
          <Image
            src='/images/section18.jpg'
            alt='Green Tea'
            className='object-cover'
            fill
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderGallery;
