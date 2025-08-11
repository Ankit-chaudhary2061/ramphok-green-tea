
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className='container mx-auto'>
      <div className='py-[100px] px-[156px] '>
        <div className='grid grid-cols-12 gap-6 items-start w-full'>
          <div className='col-span-6'>
            <h2 className='text-[40px] leading-[40px]  font-bold'>Discover</h2>
            <h2 className='text-[#326E3B] leading-[40px] text-[40px] font-bold'>
              Ramfok Green
            </h2>
            <h2 className='text-[40px] text-[#326E3B] leading-[40px] font-bold'>
              Tea
            </h2>

            <p className='text-[16px] leading-[24px] text-[#000000] py-[32px]'>
              Green tea is a timeless beverage cherished for its delicate
              flavor, calming aroma, and numerous health benefits. Originating
              from ancient China and Japan, this natural elixir is rich in
              antioxidants and known to promote relaxation, focus, and overall
              wellness. Whether sipped hot on a quiet morning or served cold on
              a sunny afternoon, green tea offers a refreshing ritual that
              soothes the body and mind.
            </p>

            <button className='bg-[#326E3B] hover:bg-green-800 transition'>
              <h2 className='py-[16px] px-[32px] text-[16px] font-bold text-white'>
                Learn More
              </h2>
            </button>
          </div>
          
          <div className='col-span-5 self-center w-full'>
            <Image
              src='/image/rampokh-about-us.jpg'
              alt='Green Tea'
              className='object-cover w-full h-auto'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
