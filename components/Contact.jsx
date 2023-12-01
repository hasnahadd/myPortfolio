import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section
    id="contact"
    className="grid place-items-center md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
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
          <Link href="github.com">
          <FaLinkedin size={30}/>
          </Link>
          <Link href="linkedin.com">
            <FaGithub size={30}/> 
          </Link>
        </div>
<div className='mt-8'>
<from className="flex flex-col">

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
                id="email"
                required
                className=" border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email@google.com"
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
                className=" border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
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
                className=" border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
                </div>
</from>
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
