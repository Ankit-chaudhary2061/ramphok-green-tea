// import Image from "next/image";


// const Footer =()=>{
//     return (
//       <>
//         <div className='grid grid-cols-12 gap-6 w-full bg-green-600 px-[200px]'>
//           {/* Logo Section */}
//           <div className=' col-start-1 col-span-4 pt-[64px]'>
//             <div className=' relative w-[31px] h-[31px] '>
//               <Image
//                 src='/image/logo.png'
//                 alt='Green Tea'
//                 fill
//                 className='object-contain'
//               />
//             </div>
//           </div>

//           {/* Footer Text */}
//           <div
//             className="col-span-12 relative  py-[32px] 
//                   before:content-[''] before:absolute before:top-0 before:left-0 
//                   before:w-full before:h-px before:bg-white/30"
//           ></div>
//           <p className='col-start-4 col-span-6 pb-[64px]'>
//             Copyright ©2025, Ramphok Green Tea & Agro Processing Ind. All Rights
//             Reserved.
//           </p>
//         </div>
//       </>
//     );
// }


// export default Footer

// import Image from 'next/image';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className='w-full bg-green-600'>
//       <div className='container mx-auto grid grid-cols-12 gap-6 px-6 md:px-12 lg:px-20'>
//         {/* Logo Section */}
//         <div className=' col-start-1 col-span-4 pt-[64px] pb-[32px] flex gap-[8px]'>
//           <span className='relative w-[31px] h-[31px]'>
//             <Image
//               src='/image/logo.png'
//               alt='Green Tea'
//               fill
//               className='object-contain'
//             />
//           </span>
//           <span className='text-[14px] leading-[14px] text-[#ffff] font-bold'>
//             Ramphok Green Tea & Agro Processing Ind.
//           </span>
//         </div>
//         <div className='pt-[64px] pb-[32px] text-[14px] leading-[14px] text-[#ffff] font-normal flex gap-[16px] col-start-7 col-span-3'>
//           <span>
//             <Link href='/'>Home</Link>
//           </span>
//           <span>
//             <Link href='/about'>About Us</Link>
//           </span>
//           <span>
//             <Link href='/contact'>Contact Us</Link>
//           </span>
//         </div>
//         <div className='tex-[14px]  pt-[64px] pb-[32px] leading-[14px] font-normal text-[#ffff] col-start-11 col-span-2'>
//           info@compay.com
//         </div>
//         {/* Divider Line */}
//         <div className='col-span-12 relative '>
//           <span className='absolute  top-0 left-0 w-full h-px bg-white/30'></span>
//         </div>

//         {/* Copyright Text */}
//         <p className='col-start-4 col-span-6 pb-[64px] pt-[32px] text-[16px] leading-[16px] text-[#ffff] font-normal'>
//           © 2025 Ramphok Green Tea & Agro Processing Ind. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full bg-[#326E3B]'>
      <div className='container mx-auto grid grid-cols-12 gap-6 px-[200px]'>
        {/* Logo Section */}

        <div className=' col-start-1 col-span-4 pt-[24px] flex gap-[8px]'>
          <span className='relative w-[31px] h-[31px]'>
            <Image
              src='/image/logo.png'
              alt='Green Tea'
              fill
              className='object-contain'
            />
          </span>
          <span className='text-[14px] leading-[14px] text-[#ffff] font-bold'>
            Ramphok Green Tea & Agro Processing Ind.
          </span>
        </div>
        <div className='pt-[24px] text-[14px] leading-[14px] text-[#ffff] font-normal flex gap-[16px] col-start-7 col-span-3'>
          <span>
            <Link href='/'>Home</Link>
          </span>
          <span>
            <Link href='/about'>About Us</Link>
          </span>
          <span>
            <Link href='/contact'>Contact Us</Link>
          </span>
        </div>
        <div className='tex-[14px]  pt-[24px] leading-[14px] font-normal text-[#ffff] col-start-11 col-span-2'>
          info@compay.com
        </div>
        {/* Divider Line */}
        <div className='col-span-12 relative '>
          <span className='absolute  top-0 left-0 w-full h-px bg-white/30'></span>
        </div>

        {/* Copyright Text */}
        <p className='col-start-4 col-span-6 pb-[24px]  text-[16px] leading-[16px] text-[#ffff] font-normal'>
          © 2025 Ramphok Green Tea & Agro Processing Ind. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 