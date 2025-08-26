             
             
             
//          'use client';
// import { useEffect } from 'react';
    
//             import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Image from 'next/image';
// import { Users, Target, Eye, Box } from 'lucide-react';

// const AboutUsSection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration
//       once: false, // animate every time scrolled into view
//       offset: 100, // distance before triggering
//     });
//   }, []);

//   return (
//     <section className='container mx-auto'>
//       <div className='py-[100px] px-[27px]'>
//         {/* CEO Story Grid */}
//         <div className='grid grid-cols-12 gap-6 items-start w-full'>
//           {/* Text */}
//           <div
//             className='col-span-12 md:col-span-5 self-center'
//             data-aos='fade-right'
//           >
//             <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
//               Our CEO Story
//             </h3>

//                         <p className='text-gray-600 leading-relaxed'>
//               Our CEO, Mr. Shrestha, started Rampokha Green Tea with a vision to
//               bring the finest tea from the hills of Ilam to the world. From
//               humble beginnings in a small tea garden, his dedication and love
//               for quality tea has grown our company into a trusted name in tea
//               processing and distribution.
//             </p>
//           </div>

//           {/* CEO Image */}
//           <div
//             className='col-span-12 md:col-start-7 md:col-span-6 rounded-xl overflow-hidden'
//             data-aos='zoom-in-up'
//           >
//             <Image
//               src='/image/rampokh-about-us.jpg'
//               alt='Green Tea'
//               className='object-cover'
//               width={708}
//               height={708}
//             />
//           </div>
//         </div>

//         {/*Mission, Vision, Services Grid */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-[50px]'>
//           {/* Mission */}
//           <div
//             className='bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center'
//             data-aos='fade-up'
//           >
//             <div className='flex items-center justify-center mb-4'>
//               <Target className='w-10 h-10 text-blue-600' />
//             </div>
//             <h4 className='text-xl font-semibold text-gray-800 mb-2'>
//               Our Mission
//             </h4>
//             <p className='text-gray-600'>
//               To provide premium quality, organic, and sustainable tea that
//               enhances the health and happiness of our customers worldwide.
//             </p>
//           </div>

//           {/* Vision */}
//           <div
//             className='bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center'
//             data-aos='fade-up'
//             data-aos-delay='100'
//           >
//             <div className='flex items-center justify-center mb-4'>
//               <Eye className='w-10 h-10 text-blue-600' />
//             </div>
//             <h4 className='text-xl font-semibold text-gray-800 mb-2'>

//              Our Vision
//             </h4>
//             <p className='text-gray-600'>
//               To be recognized as a global leader in sustainable tea production,
//               nurturing communities and promoting eco-friendly practices.
//             </p>
//           </div>

//           {/* Services */}
//           <div
//             className='bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center'
//             data-aos='fade-up'
//             data-aos-delay='200'
//           >
//             <div className='flex items-center justify-center mb-4'>
//               <Box className='w-10 h-10 text-blue-600' />
//             </div>
//             <h4 className='text-xl font-semibold text-gray-800 mb-2'>
//               Our Services
//             </h4>
//             <p className='text-gray-600'>
//               We offer tea cultivation, organic processing, wholesale
//               distribution, private labeling, and educational workshops on tea
//               cultivation.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;
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
