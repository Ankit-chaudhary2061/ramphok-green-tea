

'use client';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GallerySlider = () => {
  return (
    <div className='px-[200px] py-[109px]'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000, // Slide changes every 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide changed')}
      >
        <div className='custom-prev absolute top-1/2 left-4 z-10 p-2 bg-black/50 text-white rounded-full cursor-pointer'>
          ◀
        </div>
        <div className='custom-next absolute top-1/2 right-4 z-10 p-2 bg-black/50 text-white rounded-full cursor-pointer'>
          ▶
        </div>
        <SwiperSlide>
          <div className='w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section1.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section2.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section3.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section4.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section5.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section6.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section7.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section8.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section9.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section10.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section11.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[419px] h-[419px]'>
            <Image
              src='/image/gallery-section12.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className=' w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section13.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className='w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section14.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className='w-[419px] h-[419px]'>
            <Image
              src='/image/gallery-section15.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className='w-[419px] h-[419px] '>
            <Image
              src='/image/gallery-section16.jpg'
              alt='Green Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className='w-[419px] h-[419px] '>
            <Image
              src='/image/tea-1.png'
              alt='Tea 1'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className='w-[419px] h-[419px] '>
            <Image
              src='/image/tea.png'
              alt='Tea'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
