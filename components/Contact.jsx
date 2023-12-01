import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {


    const [allData, setAllData] = useState({ email: '', subject: '', message: '' });

  const [Success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllData((prevData) => ({ ...prevData, [name]: value }));
  };
 console.log(allData)
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xeqbbnkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allData),
      });

      if (response.ok) {
       
        setSuccess(true);
        toast.success('Form submmited')
      } else {
      
        console.error('Failed to send email');
       
      }
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error(error)
    } 
  };

  return (
    <section
    id="contact"
    className="grid place-items-center md:grid-cols-2 my-12 md:my-4 -mt-10 py-24 gap-4 relative"
  >
  

    
<div>
       <h5 className="text-2xl font-bold  my-2">
          Let&apos;s Connect
        </h5>
        <p className=" mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/hasnahadd">
          <FaLinkedin size={30}/>
          </Link>
          <Link href="https://www.linkedin.com/in/manel-haddoud-aa5095278/">
            <FaGithub size={30}/> 
          </Link>
        </div>
<div className='mt-8'>


<form className="flex flex-col" onSubmit={handleSubmit}>

<div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-2xl font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                value={allData.email}
                id="email"
                required
                className=" border border-[#33353F] placeholder-[#9CA2A9] text-black  text-sm rounded-lg block w-full p-2.5"
                placeholder="email@google.com"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-2xl mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" border border-[#33353F] placeholder-[#9CA2A9]  text-black  text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                value={allData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className=" block text-2xl mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className=" border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                value={allData.message}
                onChange={handleChange}
              />
                </div>
                <button
              type="submit"
           
              className="bg-[#9F8E80] text-white font-serif  px-4 py-2 rounded-md hover:bg-[#dacbb1] transition-colors duration-300 w-full"
            >
             Submit
            </button>
</form>
 <Toaster/>
</div>
</div>


<div className="md:text-right">
        <img
          src="images/email.png" 
          alt="Contact Image"
          className="max-w-full h-auto"
        />
      </div>

      

</section>
  )
}

export default Contact
