import Image from 'next/image';
import Link from "next/link";

const Header = () => (
  <nav className='bg-[#326E3B] sticky top-0 z-50'>
    <div className='flex items-center justify-between px-[200px] py-[12px]'>
      <div>
        <Image
          src='/image/logo.png'
          alt='tea-garden'
          width={64}
          height={64}
          className='object-contain'
        />
      </div>

      <ul className='flex gap-[36px] text-white text-[16px]'>
        <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
          <Link href='/About'>About Us</Link>
        </li>
        
        <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
          <Link href='/Contact'>Contact Us</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
