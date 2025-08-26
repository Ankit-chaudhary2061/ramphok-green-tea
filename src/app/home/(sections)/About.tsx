// "use client"; // if you're in Next.js App Router

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; //
// import Image from "next/image";

// const AboutUs = () => {
//      useEffect(() => {
//        AOS.init({
//          duration: 1000, // animation duration in ms
//          once: false, // animation happens only once
//          offset: 100, // distance before triggering animation
//        });
//      }, []);
//   return (
//     <div className='container mx-auto'>
//       <div className=' py-[100px]'>
//         <div className='grid grid-cols-12 gap-6 items-center w-full'>
//           <div className='col-span-6' data-aos='zoom-in-up'>
//             <h2 className='text-[40px] leading-[40px]  font-bold'>Discover</h2>
//             <h2 className='text-[#326E3B] leading-[40px] text-[40px] font-bold'>
//              Ramfok Green
//             </h2>
//             <h2 className='text-[40px] text-[#326E3B] leading-[40px] font-bold'>
//               Tea
//             </h2>
  
//             <p className='text-[16px] leading-[24px] text-[#000000] py-[32px]'>
//               Green tea is a timeless beverage cherished for its delicate
//               flavor, calming aroma, and numerous health benefits. Originating
//               from ancient China and Japan, this natural elixir is rich in
//               antioxidants and known to promote relaxation, focus, and overall
//               wellness. Whether sipped hot on a quiet morning or served cold on
//               a sunny afternoon, green tea offers a refreshing ritual that
//               soothes the body and mind.
//             </p>

//             <button className='bg-[#326E3B] hover:bg-green-800 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg cursor-pointer'>
//               <h2 className='py-[16px] px-[32px] text-[16px] font-bold text-white text-center'>
//                 Learn More
//               </h2>
//             </button>
//           </div> 
//           <div
//             className='col-start-8 col-span-5 relative h-[350px]  rounded-xl overflow-hidden'
//             data-aos='zoom-in-up'
//           >
//             <Image
//               src='/image/rampokh-about-us.jpg'
//               alt='Green Tea'
//               className='object-cover'
//               fill
//               sizes='(max-width: 768px) 100vw, 50vw'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='py-[60px] md:py-[80px] lg:py-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-center w-full'>
          {/* Text Section */}
          <div
            className='col-span-1 md:col-span-1 lg:col-span-6 '
            data-aos='zoom-in-up'
          >
            <h2 className='text-[28px] md:text-[36px] lg:text-[40px] leading-tight font-bold text-center md:text-left'>
              Discover
            </h2>
            <h2 className='text-[#326E3B] text-[28px] md:text-[36px] lg:text-[40px] leading-tight font-bold text-center md:text-left'>
              Ramfok Green
            </h2>
            <h2 className='text-[#326E3B] text-[28px] md:text-[36px] lg:text-[40px] leading-tight font-bold text-center md:text-left'>
              Tea
            </h2>

            <p className='text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#000] py-[20px] md:py-[24px] lg:py-[32px] text-center md:text-left'>
              Green tea is a timeless beverage cherished for its delicate
              flavor, calming aroma, and numerous health benefits. Originating
              from ancient China and Japan, this natural elixir is rich in
              antioxidants and known to promote relaxation, focus, and overall
              wellness. Whether sipped hot on a quiet morning or served cold on
              a sunny afternoon, green tea offers a refreshing ritual that
              soothes the body and mind.
            </p>

            <div className='flex justify-center md:justify-start'>
              <button className='bg-[#326E3B] hover:bg-green-800 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg cursor-pointer'>
                <h2 className='py-[12px] md:py-[14px] lg:py-[16px] px-[24px] md:px-[28px] lg:px-[32px] text-[14px] md:text-[15px] lg:text-[16px] font-bold text-white text-center'>
                  Learn More
                </h2>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className='col-span-1 md:col-span-1 lg:col-start-8 lg:col-span-5 relative rounded-xl overflow-hidden mt-6 md:mt-0 aspect-[16/9]'
            data-aos='zoom-in-up'
          >
            <Image
              src='/image/rampokh-about-us.jpg'
              alt='Green Tea'
              className='object-cover'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
