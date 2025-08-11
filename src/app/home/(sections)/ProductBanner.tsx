'use client'

import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; //

const ProductFeature = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100,
    });
  },[])
  return (
    <>
      <div className='w-full' data-aos='zoom-in-up'>
        <Image
          src='/image/Flavor-from-illam.png'
          alt='GreenTea garden'
          width={1439}
          height={369}
          className='w-full h-auto'
        />
      </div>
    </>
  );
};

export default ProductFeature;
