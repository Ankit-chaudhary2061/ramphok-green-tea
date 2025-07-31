import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      <Image
        src='/image/tea-garden-banner.jpg'
        alt='tea-garden'
        width={1440}
        height={483}
        className='object-cover'
      />
    </div>
  );
};

export default Banner;
