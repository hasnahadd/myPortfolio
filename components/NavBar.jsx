import Link from 'next/link'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
const NavBar = () => {
  return (
    <nav className=' flex justify-end ml-12'>
  
      <ul className='flex justify-end ml-10 bg-[#9F8E80] bg-opacity-10 flex-row-reverse gap-8 h-[30px] text-xl w-[500px]  lg:h-[40px] lg:w-[660px] lg:gap-20 rounded-l-3xl rounded-r-3xl lg:text-2xl text-black cursor-pointer'>
{/* <li className='shrink basis-0 h-0.5 bg-[#9F8E80] border-b w-full flex-grow mt-8 ml-2 '></li> */}
<li className='mr-2 lg:mr-8 mt-0'>

    
    <ScrollLink to="contact" smooth={true} duration={500}>
    Contact
          </ScrollLink>


    
</li >
<li className='mt-0'>
    
    <ScrollLink to="Projects" smooth={true} duration={500}>
    Projects
          </ScrollLink>
</li>
<li className='ml-10 mt-0'>
 
<ScrollLink to="About" smooth={true} duration={500}>
About
          </ScrollLink>
</li>
 
    


      </ul>
    </nav>
  )
}

export default NavBar