'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ShowHideContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='container '>
      {!isVisible && (
        <div className='grid grid-cols-12 gap-6 items-start w-full'>
          <div className='col-start-5 col-span-4'>
            <button
              onClick={() => setIsVisible(true)}
              className='bg-green-600 text-white px-[32px] py-[16px]  mb-[64px] rounded mr-2'
            >
              view all components
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='grid grid-cols-12 gap-6 items-start w-full mt-6'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Orthodox Black Tea Text */}
            <div className='col-span-5 mb-[32px]'>
              <h3 className='text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]'>
                Orthodox Black Tea
              </h3>
              <p className='text-[16px] leading-[28px] text-gray-700'>
                Bold, rich, and handcrafted, our Orthodox Black Tea is fully
                oxidized for a deep flavor and smooth finish. Made from premium
                Camellia sinensis leaves, it's rich in unique antioxidants that
                support heart health, digestion, and overall wellness — a
                perfect energizing brew for tea lovers seeking both strength and
                benefits.
              </p>
            </div>

            {/* Image 1 */}
            <div className='col-start-7 col-span-6 mb-[32px] relative h-[419px] w-[419px]'>
              <Image
                src='/image/rampokh-about-us.jpg'
                alt='Green Tea'
                className='object-cover'
                fill
              />
            </div>

            {/* Image 2 */}
            <div className='col-span-6 mb-[32px] relative h-[419px] w-[419px]'>
              <Image
                src='/image/rampokh-about-us.jpg'
                alt='Green Tea'
                className='object-cover'
                fill
              />
            </div>

            {/* Pearl Green Tea Text */}
            <div className='col-start-7 col-span-5 mb-[32px]'>
              <h3 className='text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]'>
                Pearl Green Tea
              </h3>
              <p className='text-[16px] leading-[28px] text-gray-700'>
                Crafted from tender, hand-picked second-flush leaves, our Pearl
                Green Tea is delicately rolled for a smooth, refreshing taste
                with natural sweetness. Rich in antioxidants and nutrients, it
                supports overall wellness while offering exceptional flavor — a
                perfect balance of health and taste.
              </p>
            </div>

            {/* Hide Button */}
            <div className='col-start-5 col-span-4'>
              <button
                onClick={() => setIsVisible(false)}
                className='bg-red-600 text-white px-[32px] py-[16px] mb-[64px] rounded mr-2'
              >
                show less
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowHideContent;
