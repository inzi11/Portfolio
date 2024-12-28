import React, { useEffect, useState } from 'react'

function Navbar() {

    const [navVisibility, setNavVisibility] = useState(false);

    useEffect(() => {
        const setScroll = () => {
            if (window.pageYOffset > 300) {
                setNavVisibility(true);
            }
            else {
                setNavVisibility(false);
            }
        }

        window.addEventListener('scroll', setScroll);

        return (() => {
            window.removeEventListener('scroll', setScroll)
        }
        )
    })





    return (

        <nav
            data-aos="fade" data-aos-duration="300"
            className={`bg-[#31363F] flex justify-between h-12 items-center text-[#EEEEEE] top-0 w-full px-6 
                transition-all duration-200 ease-in-out
                ${navVisibility ? 'fixed top-0' : 'static top-[-100px]'

                }`}

        >
            <div className='font-semibold '>
                Portfolio
            </div>

            <div>
                <ul className='flex text-sm gap-4 cursor-pointer '>

                    <li
                        data-aos="fade-up" data-aos-duration="500" data-aos-delay='200'
                    > <a href="#Home">
                            Home
                        </a>
                    </li>
                    <li
                        data-aos="fade-down" data-aos-duration="500" data-aos-delay='200'
                    >
                        <a href="#About">
                            About
                        </a>
                    </li>
                    <li
                        data-aos="fade-up" data-aos-duration="500" data-aos-delay='600'
                    >
                        <a href="#Education">
                            Education
                        </a>
                    </li>
                    <li
                        data-aos="fade-down" data-aos-duration="500" data-aos-delay='500'
                    >
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li
                        data-aos="fade-up" data-aos-duration="500" data-aos-delay='600'
                    >
                        <a href="#Contacts">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar
