import React from 'react';
import { useState } from 'react';
import { Element } from 'react-scroll';

const About = () => {
    const [selectedContent, setSelectedContent] = useState("");
  const showContent = (content) => {
    setSelectedContent(content);
  };
  return (
    <Element name="About">
    <section    className=' flex items-center mt-20 md:mt-0 gap-8'>
        <div className='  hidden lg:block lg:w-[350px] lg:h-[350px] lg:ml-12 '>
        <img
          src='/images/about.png'
          alt='picture'
       
          objectFit='contain'
          Layout='fill'
          
        />
      </div>
      <div>
        <h2 className=' lg:text-4xl text-2xl font-bold md:text-3xl'>About me</h2>
        <div className='lg:w-[600px] lg:h-[300px] text-black'>
          <p className='text-base text-justify'>
          As a dedicated Frontend Web Developer, 
          I am passionate about creating exceptional digital experiences. 
          My specialty lies in crafting engaging websites that leave a lasting impression on users.
           With a strong background in computer science and network engineering .
          </p>
        </div>
        <div className="flex flex-row text-black lg:-mt-40 mb-1">
        
          <button
            className="mr-4 font-semibold cursor-pointer  text-black  hover:text-[#A19484] border-b border-[#A19484] "
            onClick={() => showContent("Education")}
          >
            Education
          </button>
          <button
            className="mr-4 font-semibold cursor-pointer  text-black  hover:text-[#A19484] border-b border-[#A19484] "
            onClick={() => showContent("Certification")}
          >
            Certification
          </button>
        </div>
       
        {selectedContent === "Education" && (
          <ul>
            <li>Master&apos;s degree in Network engineering</li>
            <li>Bachelor degree in computer science </li>
          </ul>
        )}
        {selectedContent === "Certification" && (
          <ul>
            <li>CCNA Introduction to Networks</li>
            <li>CCNA Switching ,Routing and Wireless Essentials</li>
            <li>CCNA Enterprise Networking, Security, and Automation</li>
          </ul>
        )}


      </div>
    </section>
    </Element>
  );
};

export default About;
