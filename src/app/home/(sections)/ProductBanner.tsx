'use client';

import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ProductFeature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // allow animation when scrolling up & down
      offset: 100, // trigger distance before entering view
    });
  }, []);

  return (
    <section className='w-full  py-12 px-1'>
      <div
        className='max-w-[1440px] mx-auto rounded-2xl overflow-hidden shadow-lg'
        data-aos='zoom-in-up'
      >
        <Image
          src='/image/Flavor-from-illam.png'
          alt='GreenTea garden'
          width={1440}
          height={365}
          className='w-full h-auto object-cover'
        />
      </div>
    </section>
  );
};

export default ProductFeature;
