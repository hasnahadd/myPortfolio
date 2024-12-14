import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
const Hero = () => {
  return (
    <section  className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 mt-4 relative'>
   
      <div className='col-span-1 lg:ml-24 mt-12'>
        <div className='mb-4'>
        <h1 class='text-4xl font-extrabold lg:text-6xl animated-text'>Hello, Im Manel</h1>

          <p className='text-[#000000] lg:text-xl'>
          Frontend Web Developer
          </p>
        </div>

        <div className='space-y-3'>
        
          <ScrollLink to="contact" smooth={true} duration={500} className="inline-block py-3 px-6 rounded-full text-l  hover:bg-[#A19484] text-black">
             Hire Me
          </ScrollLink>
          <Link
            href="/cv/HaddoudManelHasnaResumee.pdf"  download="my_cv.pdf"
            className="inline-block py-1 px-1 rounded-full   hover:bg-slate-800 text-white"
          >
            <span className="block bg-[#A19484] hover:bg-[#A19484] rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </div>

      <div className='col-span-1 flex justify-center items-center mr-0 -ml-2 mt-4'>
      <div className='rounded-full bg-[#A19484] w-[230px] h-[230px] lg:w-[230px] lg:h-[230px] relative'>
        <Image
{/*             src='/images/img.png'
            alt='img' */}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={200}
              height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
