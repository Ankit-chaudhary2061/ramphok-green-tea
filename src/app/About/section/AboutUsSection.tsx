'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
// import { Target, Eye, Box } from 'lucide-react';

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className='container mx-auto'>
      <div className='py-[50px] '>
        {/* CEO Story Grid */}
        <div className='grid grid-cols-12 gap-6 items-center w-full'>
          {/* CEO Text */}
          <div
            className='col-span-12 md:col-span-4 self-center'
            data-aos='fade-right'
          >
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
              Our CEO Story
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Our CEO, Mr. Shrestha, started Rampokha Green Tea with a vision to
              bring the finest tea from the hills of Ilam to the world. From
              humble beginnings in a small tea garden, his dedication and love
              for quality tea has grown our company into a trusted name in tea
              processing and distribution.
            </p>
          </div>

          {/* CEO Image */}
          <div
            className='col-span-12 md:col-start-7 md:col-span-6 rounded-xl overflow-hidden'
            data-aos='zoom-in-up'
          >
            <Image
              src='/image/rampokh-about-us.jpg'
              alt='CEO Image'
              width={708}
              height={708}
              className='object-cover w-full h-full'
            />
          </div>
        </div>

        {/* Mission, Vision, Services Grid */}
      </div>
    </section>
  );
};

export default AboutUsSection;
