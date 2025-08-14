"use client"; // if you're in Next.js App Router

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
import Image from "next/image";

const StorySection = () => {
    useEffect(() => {
         AOS.init({
           duration: 1000, // animation duration in ms
           once: false, // animation happens only once
           offset: 100, // distance before triggering animation
         });
       }, []);
  return (
    <>
      <div className='container mx-auto'>
        <div className='pb-[72px] px-[33px]'>
          <div className='grid grid-cols-12 gap-6 items-start w-full'>
            <div className='col-span-5 self-center' data-aos='zoom-in-up'>
              <h2 className='text-[32px] leading-[32px] text-[000000] font-bold'>
                Story We Share
              </h2>
              <p className='text-[16px] leading-[24px] text-[000000] py-[32px]'>
                Green tea is a timeless beverage cherished for its delicate
                flavor, calming aroma, and numerous health benefits. Originating
                from ancient China and Japan, this natural elixir is rich in
                antioxidants and known to promote relaxation, focus, and overall
                wellness. Whether sipped hot on a quiet morning or served cold
                on a sunny afternoon, green tea offers a refreshing ritual that
                soothes the body and mind.
              </p>
              <button className='bg-[#326E3B] hover:bg-green-800 transition'>
                <p className='text-[16px] font-bold leading-[16px] text-white py-[16px] px-[32px] font-merriweather'>
                  Learn More
                </p>
              </button>
            </div>
            <div className='col-start-7 col-span-6' data-aos='zoom-in-up'>
              <Image
                src='/image/rampokh-about-us.jpg'
                alt='Green Tea'
                className='object-cover '
                width={708}
                height={708}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySection;
