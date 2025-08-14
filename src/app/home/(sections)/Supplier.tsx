import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

import { Button } from '@/components/ui/button';

const Supplier = () => {
  return (
    <>
      <section className='relative bg-white pb-[72px]'>
        <div className='container mx-auto grid grid-cols-12 gap-6 items-center'>
          {/* Images - outside grid using negative margin */}
          <div className='col-span-4  -ml-37 flex flex-col gap-[16px]'>
            <Image
              src='/image/rampokh-about-us.jpg'
              alt='Building'
              width={442}
              height={220}
              className='rounded-lg shadow-lg'
            />
            <div className='grid grid-cols-2 '>
              <Image
                src='/image/rampokh-about-us.jpg'
                alt='View 1'
                width={209}
                height={113}
                className='rounded-lg shadow-lg'
              />
              <Image
                src='/image/rampokh-about-us.jpg'
                alt='View 2'
                width={209}
                height={113}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>

          <div className=' col-start-6 col-span-7'>
            <h2 className='text-[32px] leading-[32px] font-bold mb-[32px] text[#000000]'>
              We Deliver
            </h2>
            <p className='text-[16px] leading-[24px] font-normal text[#000000] mb-[32px]'>
              Our teas are distributed across major destinations like Ilam,
              Jhapa, Damak, and Dharan, and available in all 22 Bhat-Bhateni
              outlets across Nepal. Internationally, we proudly export to Hong
              Kong, Australia, the USA, and China — where our green tea is
              highly favored by Chinese customers.
            </p>

            <div className=' col-start-6 col-span-7 gap-[24px] flex mb-[24px]'>
              <Link href='https://www.google.com/maps/place/Ilam+57300/@26.8985601,87.8816007,13z/data=!4m6!3m5!1s0x39e5c3933be14d23:0x90060622ff0776f8!8m2!3d26.9111769!4d87.9236747!16s%2Fm%2F026mh1d?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D'>
                <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                  <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                    {/* <Image
                        src='/images/illam.jpg'
                        alt='Ilam'
                        width={32}
                        height={32}
                        className='rounded-full object-cover border'
                      /> */}
                    <span className='text-[14px] font-medium leading-[14px]'>
                      Ilam
                    </span>
                  </div>

                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <HiArrowRight className='w-[12px] h-[12px]' />
                  </Button>
                </div>
              </Link>
              <Link href='https://www.google.com/maps/place/Ilam+57300/@26.8985601,87.8816007,13z/data=!4m6!3m5!1s0x39e5c3933be14d23:0x90060622ff0776f8!8m2!3d26.9111769!4d87.9236747!16s%2Fm%2F026mh1d?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D'>
                <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                  <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                    <Image
                      src='/images/section1.jpg'
                      alt='Ilam'
                      width={32}
                      height={32}
                      className='rounded-full object-cover border'
                    />
                    <span className='text-[14px] font-medium leading-[14px]'>
                      Ilam
                    </span>
                  </div>

                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <HiArrowRight className='w-[12px] h-[12px]' />
                  </Button>
                </div>
              </Link>
              <Link href='https://www.google.com/maps/place/Ilam+57300/@26.8985601,87.8816007,13z/data=!4m6!3m5!1s0x39e5c3933be14d23:0x90060622ff0776f8!8m2!3d26.9111769!4d87.9236747!16s%2Fm%2F026mh1d?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D'>
                <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                  <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                    <Image
                      src='/images/illam.jpg'
                      alt='Ilam'
                      width={32}
                      height={32}
                      className='rounded-full object-cover border'
                    />
                    <span className='text-[14px] font-medium leading-[14px]'>
                      Ilam
                    </span>
                  </div>

                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <HiArrowRight className='w-[12px] h-[12px]' />
                  </Button>
                </div>
              </Link>
              <Link href='https://www.google.com/maps/place/Ilam+57300/@26.8985601,87.8816007,13z/data=!4m6!3m5!1s0x39e5c3933be14d23:0x90060622ff0776f8!8m2!3d26.9111769!4d87.9236747!16s%2Fm%2F026mh1d?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D'>
                <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                  <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                    <Image
                      src='/images/illam.jpg'
                      alt='Ilam'
                      width={32}
                      height={32}
                      className='rounded-full object-cover border'
                    />
                    <span className='text-[14px] font-medium leading-[14px]'>
                      Ilam
                    </span>
                  </div>

                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <HiArrowRight className='w-[12px] h-[12px]' />
                  </Button>
                </div>
              </Link>
            </div>
            <div className=' col-start-6 col-span-7 gap-[24px] flex'>
              <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                  <Image
                    src='/images/illam.jpg'
                    alt='Ilam'
                    width={32}
                    height={32}
                    className='rounded-full object-cover border'
                  />
                  <span className='text-[14px] font-medium leading-[14px]'>
                    Ilam
                  </span>
                </div>

                <Button variant='ghost' size='icon' className='rounded-full'>
                  <HiArrowRight className='w-[12px] h-[12px]' />
                </Button>
              </div>
              <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                  <Image
                    src='/images/illam.jpg'
                    alt='Ilam'
                    width={32}
                    height={32}
                    className='rounded-full object-cover border'
                  />
                  <span className='text-[14px] font-medium leading-[14px]'>
                    Ilam
                  </span>
                </div>

                <Button variant='ghost' size='icon' className='rounded-full'>
                  <HiArrowRight className='w-[12px] h-[12px]' />
                </Button>
              </div>
              <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                  <Image
                    src='/images/illam.jpg'
                    alt='Ilam'
                    width={32}
                    height={32}
                    className='rounded-full object-cover border'
                  />
                  <span className='text-[14px] font-medium leading-[14px]'>
                    Ilam
                  </span>
                </div>

                <Button variant='ghost' size='icon' className='rounded-full'>
                  <HiArrowRight className='w-[12px] h-[12px]' />
                </Button>
              </div>
              <div className='flex items-center w-[153px] border rounded-lg overflow-hidden'>
                <div className='flex items-center gap-2 py-[8px] px-[12px]'>
                  <Image
                    src='/images/illam.jpg'
                    alt='Ilam'
                    width={32}
                    height={32}
                    className='rounded-full object-cover border'
                  />
                  <span className='text-[14px] font-medium leading-[14px]'>
                    Ilam
                  </span>
                </div>

                <Button variant='ghost' size='icon' className='rounded-full'>
                  <HiArrowRight className='w-[12px] h-[12px]' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Supplier;
