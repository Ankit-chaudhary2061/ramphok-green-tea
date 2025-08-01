'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function ShowHideContent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='px-[198.5px]'>
      <div className='py-[54px] grid grid-cols-12 gap-6 w-full'>
        {/* Top Button (Only when hidden) */}
        {!isVisible && (
          <button
            onClick={() => setIsVisible(true)}
            aria-expanded={isVisible}
            className='col-start-5 col-span-4 px-4 py-2 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition'
          >
            View all collection
          </button>
        )}

        {/* Animated Content */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className='col-span-12 grid grid-cols-12 gap-6 mt-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* 1st Text + Image */}
              <div className='col-span-5 mb-[32px]'>
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
              <div className='col-start-7 col-span-6 mb-[32px]'>
                <Image
                  src='/image/rampokh-about-us.jpg'
                  alt='Orthodox Black Tea'
                  className='object-cover'
                  width={350}
                  height={350}
                />
              </div>

              {/* 2nd Image + Text */}
              <div className='col-span-5 mb-[32px]'>
                <Image
                  src='/image/rampokh-about-us.jpg'
                  alt='Roasted Green Tea'
                  className='object-cover'
                  width={350}
                  height={350}
                />
              </div>
              <div className='col-start-7 col-span-5 mb-[32px]'>
                <h3 className='text-[32px] leading-[32px] font-bold text-[#326E3B] mb-[32px]'>
                  Roasted Green Tea
                </h3>
                <p className='text-[16px] leading-[28px] text-gray-700'>
                  Expertly crafted from freshly picked leaves, our roasted green
                  tea offers a smooth, rich flavor with a distinctive aroma.
                  Carefully roasted and dried to preserve its natural qualities,
                  it is rich in antioxidants and known for promoting brain
                  function, supporting metabolism, and enhancing overall
                  well-being.
                </p>
              </div>

              {/* 3rd Text + Image */}
              <div className='col-span-5 mb-[32px]'>
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
              <div className='col-start-7 col-span-6 mb-[32px]'>
                <Image
                  src='/image/rampokh-about-us.jpg'
                  alt='Orthodox Black Tea'
                  className='object-cover'
                  width={350}
                  height={350}
                />
              </div>

              {/* Bottom Button */}
              <div className='col-span-12 flex justify-center mt-6'>
                <button
                  onClick={() => setIsVisible(false)}
                  className='px-6 py-3 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition'
                >
                  Show less content
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ShowHideContent;
