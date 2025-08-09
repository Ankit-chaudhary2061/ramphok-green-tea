'use client';
import React from 'react';

const Contact = () => {
  return (
    <div className='bg-white text-gray-800 min-h-screen'>
      <div className='container mx-auto px-4 py-12'>
        <h1 className='text-2xl font-bold mb-10 text-center text-[#326E3B]'>
          Contact Us
        </h1>

        <div className='max-w-xl mx-auto space-y-4 text-center border border-gray-200 p-6 rounded-xl shadow-sm bg-gray-50'>
          <p>
            <strong>Company Name:</strong> Rampokha Green Tea and Agro
            Processing Industries Pvt. Ltd
          </p>
          <p>
            <strong>Category:</strong> Agriculture
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href='mailto:shresthathakur@gmail.com'
              className='text-blue-600 underline'
            >
              shresthathakur@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href='tel:+9779800000000' className='text-blue-600 underline'>
              +977-9800000000
            </a>
          </p>
          <p>
            <strong>Address:</strong> Rampokh, Suryadaya Municipality-9, Fikal,
            Ilam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
