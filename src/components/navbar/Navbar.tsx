import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
    scroll.scrollToTop();
  };

  const [navLinks, setNavLinks] = useState([
    { id: 'home', name: 'Home', className: '' },
    { id: 'about', name: 'About', className: '' },
    { id: 'skills', name: 'Skills', className: '' },
    { id: 'work', name: 'Work', className: '' },
    { id: 'contact', name: 'Contact', className: '' },
  ]);

  const handleSetActive = (to: string) => {
    setNavLinks((prevNavLinks) =>
      prevNavLinks.map((link) => ({
        ...link,
        className: link.id === to ? 'active' : '',
      }))
    );
  };

  return (
    <nav className='fixed w-full h-[50px] pt-2 pb-2 flex justify-between items-center px-3 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='font-thin text-2xl pb-2 pt-2 italic font-serif'>JS</h1>
      </div>
      <ul className='hidden md:flex gap-x-8 items-center'>
        {navLinks.map(({ id, name, className }) => (
          <li key={id}>
            <ScrollLink
              activeClass='active'
              to={id}
              spy={true}
              smooth={true}
              offset={-70}
              onClick={handleLinkClick}
              className={className}
              duration={500} // Add this line for smooth scrolling duration
            >
              {name}
            </ScrollLink>
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
          {navLinks.map(({ id, name, className }) => (
            <li key={id} className={className}>
              <ScrollLink
                activeClass='active'
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                onClick={handleLinkClick}
                className={className}
                duration={500} // Add this line for smooth scrolling duration
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
