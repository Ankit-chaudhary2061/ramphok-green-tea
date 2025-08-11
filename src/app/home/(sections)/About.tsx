"use client"; // if you're in Next.js App Router

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
import Image from "next/image";

const AboutUs = () => {
     useEffect(() => {
       AOS.init({
         duration: 1000, // animation duration in ms
         once: true, // animation happens only once
         offset: 100, // distance before triggering animation
       });
     }, []);
  return (
    <div className='container mx-auto'>
      <div className='py-[100px] '>
        <div className='grid grid-cols-12 gap-6 items-start w-full'>
          <div className='col-span-6' data-aos='zoom-in-up'>
            <h2 className='text-[40px] leading-[40px]  font-bold'>Discover</h2>
            <h2 className='text-[#326E3B] leading-[40px] text-[40px] font-bold'>
              Ramfok Green
            </h2>
            <h2 className='text-[40px] text-[#326E3B] leading-[40px] font-bold'>
              Tea
            </h2>

            <p className='text-[16px] leading-[24px] text-[#000000] py-[32px]'>
              Green tea is a timeless beverage cherished for its delicate
              flavor, calming aroma, and numerous health benefits. Originating
              from ancient China and Japan, this natural elixir is rich in
              antioxidants and known to promote relaxation, focus, and overall
              wellness. Whether sipped hot on a quiet morning or served cold on
              a sunny afternoon, green tea offers a refreshing ritual that
              soothes the body and mind.
            </p>

            <button className='bg-[#326E3B] hover:bg-green-800 transition'>
              <h2 className='py-[16px] px-[32px] text-[16px] font-bold text-white'>
                Learn More
              </h2>
            </button>
          </div>

          <div className=' col-start-8 col-span-5 self-center w-full' data-aos='zoom-in-up'>
            <Image
              src='/image/rampokh-about-us.jpg'
              alt='Green Tea'
              className='object-cover w-full h-auto'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
