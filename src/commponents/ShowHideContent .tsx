'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ShowHideContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='px-[198.5px] '>
      <div className='grid grid-cols-12 gap-6 items-start w-full'>
        <div className='col-start-5 col-span-4'>
          {!isVisible && (
            <button
              onClick={() => setIsVisible(true)}
              className='mb-4 px-[32px] py-[16px] bg-green-700 text-white rounded hover:bg-green-600 transition'
            >
              View All Collection
            </button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key='extra-content'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className='grid grid-cols-12 gap-6 items-start w-full'>
              {/* Text content */}
              <div className=' col-span-5 mb-[32px]'>
                <h3 className='text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]'>
                  Orthodox Black Tea
                </h3>
                <p className='text-[16px] leading-[28px] text-gray-700'>
                  Bold, rich, and handcrafted, our Orthodox Black Tea is fully
                  oxidized for a deep flavor and smooth finish. Made from
                  premium Camellia sinensis leaves, it’s rich in unique
                  antioxidants that support heart health, digestion, and overall
                  wellness — a perfect energizing brew for tea lovers seeking
                  both strength and benefits.
                </p>
              </div>
              {/* Image section */}
              <div className='col-start-7 col-span-6 mb-[32px]'>
                <Image
                  src='/image/rampokh-about-us.jpg'
                  alt='Green Tea'
                  className='object-cover '
                  width={350}
                  height={350}
                />
              </div>
              {/* Image section */}
              <div className='col-span-6 mb-[32px]'>
                <Image
                  src='/image/rampokh-about-us.jpg'
                  alt='Green Tea'
                  className='object-cover '
                  width={350}
                  height={350}
                />
              </div>
              {/* Text content */}
              <div className='col-start-7 col-span-5 mb-[32px]'>
                <h3 className='text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]'>
                  Pearl Green Tea
                </h3>
                <p className='text-[16px] leading-[28px] text-gray-700'>
                  Crafted from tender, hand-picked second-flush leaves, our
                  Pearl Green Tea is delicately rolled for a smooth, refreshing
                  taste with natural sweetness. Rich in antioxidants and
                  nutrients, it supports overall wellness while offering
                  exceptional flavor — a perfect balance of health and taste.
                </p>
              </div>
              {/* Text content */}
              <div className=' col-span-5 mb-[32px]'>
                <h3 className='text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]'>
                  Orthodox Black Tea
                </h3>
                <p className='text-[16px] leading-[28px] text-gray-700'>
                  Bold, rich, and handcrafted, our Orthodox Black Tea is fully
                  oxidized for a deep flavor and smooth finish. Made from
                  premium Camellia sinensis leaves, it’s rich in unique
                  antioxidants that support heart health, digestion, and overall
                  wellness — a perfect energizing brew for tea lovers seeking
                  both strength and benefits.
                </p>
              </div>
              {/* Image section */}
              <div className='col-start-7 col-span-6 mb-[32px]'>
                <Image
                  src='/image/rampokh-about-us.jpg'
                  alt='Green Tea'
                  className='object-cover '
                  width={350}
                  height={350}
                />
              </div>

              <div className='mt-4 col-start-5 col-span-4'>
                <button
                  onClick={() => setIsVisible(false)}
                  className='px-[32px] py-[16px] mb-4 bg-red-600 text-white rounded hover:bg-red-500 transition'
                >
                  Show Less
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowHideContent;
