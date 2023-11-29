import React from 'react';
import { useState } from 'react';
const About = () => {
    const [selectedContent, setSelectedContent] = useState("");
  const showContent = (content) => {
    setSelectedContent(content);
  };
  return (

    <div className=' flex items-center mt-20 gap-8'>
        <div className='  hidden lg:block lg:w-[350px] lg:h-[350px] lg:ml-12 '>
        <img
          src='/images/about.gif'
          alt='picture'
       
          objectFit='contain'
          Layout='fill'
          
        />
      </div>
      <div>
        <h2 className=' lg:text-3xl font-bold'>About me</h2>
        <div className='lg:w-[600px] lg:h-[300px] text-black'>
          <p className='text-base text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error labore reiciendis non,
            magni repudiandae nihil ea, tempora voluptate modi corrupti alias doloremque iusto
            laudantium maiores at ipsum ab, consequuntur omnis!
          </p>
        </div>
        <div className="flex flex-row text-black mt-2">
          <button
            className="mr-4 font-semibold cursor-pointer  text-black  hover:text-[#A19484] border-b border-[#A19484] "
            onClick={() => showContent("Skills")}
          >
            Skills
          </button>
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
        {selectedContent === "Skills" && (
          <ul>
            <li> Nextjs</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>Firebase</li>
          </ul>
        )}
        {selectedContent === "Education" && (
          <ul>
            <li>Masters degree in Network engineering</li>
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
    </div>
  );
};

export default About;
