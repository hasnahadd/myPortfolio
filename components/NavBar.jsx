import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className=' flex justify-end'>
      <ul className='flex bg-[#9F8E80] bg-opacity-10 flex-row-reverse  h-[30px] text-xl w-[500px]  lg:h-[40px] lg:w-[660px] gap-20 rounded-l-3xl rounded-r-3xl lg:text-2xl text-black cursor-pointer'>
<li className='mr-8 mt-0'>
    Contact
    <Link href='#contact'>
    </Link>
</li >
<li className='mt-0'>
    Projects
    <Link href='#projects'>
    </Link>
</li>
<li className='ml-10 mt-0'>
About 
<Link href='#about'>
    </Link>
</li>
 {/* <li className='shrink basis-0 h-0.5 bg-[#9F8E80] border-b w-full flex-grow mt-8 ml-2 '></li> */}
    


      </ul>
    </nav>
  )
}

export default NavBar