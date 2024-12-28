import React from 'react'
import { useMemo } from 'react';
import useTypingEffect from './useTypingEffect';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


function Hero() {

  



    const words = useMemo(() => {
        return ['Web Developer', 'FrontEnd Developer', 'React Developer', 'Designer', 'Full Stack Developer', 'C++ Developer']
    }, []);

    const displayedText = useTypingEffect(words)


  return (
    <div>
       {/* the hero section */}
       <div className="text-white container grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4 my-20 ">
                <div>
                    <div className='font-semibold flex flex-col gap-2 '>
                        <p className="text-xl" data-aos = "fade-right" data-aos-duration = "600">
                            Hello, Myself
                        </p>

                        <p className="text-4xl" data-aos = "fade-left" data-aos-duration = "400">
                            Inzamam Ahmad
                        </p>

                        <div data-aos = "fade-down" data-aos-duration = "600">
                            <p>And I'm a </p>
                            <div className="text-2xl text-[#76ABAE] ">
                                {displayedText}
                            </div>
                        </div>
                    </div>

                    <div className="text-sm mt-2" data-aos = "fade-up" data-aos-duration = "400" data-aos-delay = '400'>
                        I'm a Front-End Developer.
                        My first exposure to professional life through internship has benefited me mostly in strengthening my personal
                        skills. I have developed a positive attitude and a strong sense of responsibility being innovative, resourceful, open and responsive to change.
                        It has created in me an interest in lifelong learning.
                    </div>

                    <div className="mt-6">

                      <div data-aos = "fade-up" data-aos-duration = "800" >
                          <ul className='flex gap-4 text-2xl my-10 '>
                              <li  className='border broder-solid border-[#76ABAE] rounded-full p-2 text-[#76ABAE] shadow-glow hover:scale-105 transition-all duration-200 ease-in-out'>
                                  <a href="/">
                                          <FaLinkedin   />
                                  </a>
                              </li>
                              <li className='border broder-solid border-[#76ABAE] rounded-full p-2 text-[#76ABAE] shadow-glow hover:scale-105 transition-all duration-200 ease-in-out'>
                                    <a href="/">
                                        <FaWhatsapp />
                                    </a>
                              </li>
                              <li className='border broder-solid border-[#76ABAE] rounded-full p-2 text-[#76ABAE] shadow-glow hover:scale-105 transition-all duration-200 ease-in-out'>
                                    <a href="/">
                                        <FaGithub />
                                    </a>
                              </li>
                          </ul>

                        </div>

                      <button className=" text-white font-semibold text-[12px] bg-[#222831] px-4 py-2 rounded-2xl shadow-glow hover:shadow-glow-hover transition-shadow duration-300">
                          <a href="/">     
                            More About Me
                            </a>    
                        </button>

                    </div>

                </div>

                <div >
                    image here
                </div>
            </div>

            {/* the about me section */}
            <div id='About'>
                <div className="container grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4 my-10">

                    <div>
                        image here
                    </div>

                    <div>

                        <div className="text-4xl font-semibold">
                            About <span className="text-[#76ABAE]">Me</span>
                        </div>

                        <div className="text-sm my-5">
                           
                            <p className="mb-4 text-lg font-semibold">
                            I'm a  <span className="text-[#76ABAE] ">Front-End Developer.</span>
                            </p> 
                            My first exposure to professional life through internship has benefited me mostly in strengthening my personal
                            skills. I have developed a positive attitude and a strong sense of responsibility being innovative, resourceful, open and responsive to change.
                            It has created in me an interest in lifelong learning.
                        </div>

                        <div className="mt-6">
                            <button className=" text-white text-[12px] bg-[#222831] font-semibold px-4 py-2 rounded-2xl shadow-glow hover:shadow-glow-hover transition-shadow duration-300">
                                More About Me
                            </button>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Hero;
