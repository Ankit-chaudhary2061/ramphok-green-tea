// import Image from "next/image";

// const Banner = () => {
//   return (
//     <div  className='w-full h-[80vh] relative'>
//       <Image
//         src='/image/tea-garden-banner.jpg'
//         alt='tea-garden'
//         fill
//         className='object-cover'
//         priority
//       />
//     </div>
//   );
// };

// export default Banner;
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9]'>
      <Image
        src='/image/tea-garden-banner.jpg'
        alt='tea-garden'
        fill
        className='object-cover'
        priority
        sizes='100vw'
      />
    </div>
  );
};

export default Banner;
