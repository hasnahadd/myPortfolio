import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-[#9F8E80] opacity-60 rounded-full text-white cursor-pointer text-xl">
      <div>
     
        <img className="h-10" src="./images/logo.png" alt="logo" />
      </div>
      {isMobile ? (
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none lg:hidden">
         
            <IoIosMenu size={30} />
          </button>
        </div>
      ) : (
        <ul className="hidden lg:flex lg:items-center lg:space-x-8">
        
          <li className="nav">
            

            <ScrollLink to="About" smooth={true} duration={500}>
              About
            </ScrollLink>

          </li>
          <li className="nav">
            <ScrollLink to="Projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="nav">
          <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}

 
      {isMobile && isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-[#9F8E80] p-4">
          <div className='flex flex-row justify-end' onClick={closeMenu}>  <MdClose size={30} /></div>
           
          <ul className="flex flex-col space-y-4">
         
            <li className="nav">
              <ScrollLink onClick={toggleMenu} to="About" smooth={true} duration={500}>
              About
              </ScrollLink>
            </li>
            <li className="nav">
              <ScrollLink onClick={toggleMenu} to="Projects" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li className="nav">
              <ScrollLink onClick={toggleMenu} to="contact" smooth={true} duration={500}>
              Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
