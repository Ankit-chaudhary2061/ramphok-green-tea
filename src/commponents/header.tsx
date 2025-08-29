'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#326E3B] sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-3'>
        {/* Logo */}
        <div className='py-[12px]'>
          <Image
            src='/image/logo.png'
            alt='tea-garden'
            width={64}
            height={64}
            className='object-contain'
          />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 text-white text-[16px]'>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            <Link href='/about'>About Us</Link>
          </li>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            <Link href='/Contact'>Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-[#326E3B] px-4 pb-4'>
          <ul className='flex flex-col gap-4 text-white text-lg'>
            <li>
              <Link href='/' onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/About' onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/Contact' onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
