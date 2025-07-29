const Header = () => (
  <nav className='bg-[#326E3B] '>
    <div className='flex items-center justify-between px-[124px] py-[24.5px]'>
      {/* Logo section */}
      <div className='text-white font-bold text-xl'>
        MyLogo
        {/* Or use an image logo: <img src="/logo.png" alt="Logo" className="h-8" /> */}
      </div>

      {/* Navigation menu */}
      
        <ul className='flex gap-[16px] text-white text-[16px]'>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            Home
          </li>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            Service
          </li>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            Product
          </li>
          <li className='hover:text-gray-200 hover:scale-110 cursor-pointer transition duration-300'>
            About Us
          </li>
        </ul>
    </div>
  </nav>
);

export default Header;
