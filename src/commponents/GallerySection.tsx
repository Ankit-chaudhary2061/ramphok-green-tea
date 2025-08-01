import Image from "next/image"

const GallerySection= ()=>{
    return (
    
      <>
        <div className='py-[109px] pl-[200px]'>
          <div className='grid grid-cols-12 gap-6 items-start w-full'>
            <div className='col-span-4 relative'>
              <Image
                src='/image/rampokh-about-us.jpg'
                alt='Green Tea'
                className='object-cover '
                width={419}
                height={419}
              />
            </div>

            <div className='col-span-4 relative'>
              <Image
                src='/image/tea-1.png'
                alt='Green Tea'
                className='object-cover '
                width={419}
                height={419}
              />
            </div>

            <div className='col-span-4 relative'>
              <Image
                src='/image/tea.png'
                alt='Green Tea'
                className='object-cover  '
                width={419}
                height={419}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default GallerySection

// "use client"
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const images = [
//   '/image/rampokh-about-us.jpg',
//   '/image/tea-1.png',
//   '/image/tea.png',
// ];

// const GallerySection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Change slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='py-[109px] pl-[200px] w-[1257px] h-[419px] overflow-hidden relative'>
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={images[currentIndex]}
//           className='absolute top-0 left-0 w-full h-full'
//           initial={{ x: 300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -300, opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className='object-cover w-full h-full'
//             width={419}
//             height={419}
//             priority
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default GallerySection;
