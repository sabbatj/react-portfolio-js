import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleLinkClick = () => {
    setNav(false);
  };

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'work', name: 'Work' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <nav className='fixed w-full h-[20px] pt-2 pr-2 pl-2 flex justify-between items-center px-2 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>JS</h1>
      </div>
      <ul className='hidden md:flex gap-x-8 items-center'>
        {navLinks.map(({ id, name }) => (
          <li key={id}>
            <Link
              activeClass='active'
              to={id}
              spy={true}
              smooth={true}
              offset={-70}
              onClick={handleLinkClick}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleClick} className='md:hidden z-10'>
        <div className='border rounded p-1 '>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      {nav && (
        <ul className='absolute top-2 left-0 right-0 bg-[#0a192f] flex flex-col items-center'>
          {navLinks.map(({ id, name }) => (
            <li key={id} className='py-6 text-4xl'>
              <Link
                activeClass='active'
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className='lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
