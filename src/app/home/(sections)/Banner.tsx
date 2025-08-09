import Image from "next/image";

const Banner = () => {
  return (
    <div  className='w-full h-[60vh] relative'>
      <Image
        src='/image/tea-garden-banner.jpg'
        alt='tea-garden'
        fill
        className='object-cover'
        priority
      />
    </div>
  );
};

export default Banner;
