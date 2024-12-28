import React from 'react'
import { FaHtml5, FaLaptopCode, } from 'react-icons/fa'
import { SiCplusplus, } from 'react-icons/si'
import Skills from './skills';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';

function MySkills() {

    const skills = [
        {
            icon: <FaHtml5 />,
            title: "Front-End Development",
            desc: `As a front-end developer, I specialize in crafting engaging, user-friendly interfaces that ensure a seamless user experience. My 
            expertise lies in leveraging modern web technologies to build responsive and visually appealing websites and applications. Proficient in
             HTML, CSS, and JavaScript, I am skilled in creating dynamic, interactive elements and ensuring cross-browser compatibility. My experience
              extends to working with popular front-end frameworks such as React.js, Angular, and Vue.js, which enable me to develop scalable, component-based
               applications. I am adept at implementing responsive design principles and optimizing performance to enhance usability across various devices and
                screen sizes.By staying updated with the latest industry trends and best practices, I am committed to delivering high- quality, maintainable code 
                that aligns with user needs and business goals.`
        },
        {
            icon: <SiCplusplus />,
            title: "C++ Development",
            desc: `As a C++ developer, I specialize in creating high-performance, efficient software solutions that cater to diverse business requirements. My expertise
             lies in developing robust, scalable applications using the C++ programming language, which enables me to build complex algorithms, data structures, and 
             multi-threaded applications. I am skilled in optimizing code for performance and memory management, ensuring that applications run smoothly and efficiently. 
             My experience extends to working with various libraries and frameworks, such as Boost, Qt, and STL, which enable me to accelerate development and enhance 
             functionality. By following best practices and design patterns, I am committed to delivering reliable, maintainable code that meets quality standards and 
             adheres to project specifications.`

        },
        {
            icon: <FaLaptopCode />,
            title: "Full Stack Development",
            desc: `As a full-stack developer, I specialize in building end-to-end web applications that combine front-end and back-end technologies to deliver seamless
             user experiences. My expertise spans across both client-side and server-side development, enabling me to create cohesive, high-performing applications. 
             Proficient in HTML, CSS, JavaScript, and various front-end frameworks like React.js and Angular, I can craft responsive and interactive user interfaces. 
             On the back end, I am skilled in using Node.js, Express, and databases such as MongoDB and SQL to develop robust APIs and manage data efficiently. My
              experience with version control systems like Git and deployment platforms ensures smooth integration and continuous delivery. By leveraging my full-stack
               capabilities, I am committed to delivering comprehensive solutions that meet both user and business needs.`
        }
    ];

    const otherSkills = {
        technicalSkills: [
            {
                icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
                language: "JAVASCRIPT",
                perc: 97
            }
            ,

            {
                icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
                language: "C++",
                perc: 90
            },
            {
                icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
                language: "HTML5",
                perc: 90
            },
            {
                icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
                language: "REACT",
                perc: 84
            },
            {
                icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
                language: "CSS3",
                perc: 80
            },
            {
                icon: "https://img.icons8.com/?size=100&id=117563&format=png&color=000000",
                language: "WORD",
                perc: 67
            },

        ],
        professionalSkills: [
            {
                name: "Creativity",
                perc: 90
            },
            {
                name: "Communication",
                perc: 90
            },
            {
                name: "Problem Solving",
                perc: 80
            },
            {
                name: "Teamwork",
                perc: 85
            },

        ]
    }



    const items = skills.map((item, index) => <Skills item={item} key={index} />)

    const techSkill = otherSkills.technicalSkills.map((item, index) => <TechnicalSkills item={item} key={index} />)

    const profSkills = otherSkills.professionalSkills.map((item, index) => <ProfessionalSkills item={item} key={index} />)

    return (
        <div id='skills'>
            <div className='flex flex-col gap-16 mt-44 '>

                <div className='text-4xl font-semibold text-center'>
                    My  <span className='text-[#76ABAE]'> Skills  </span>
                </div>

                <div className='grid grid-cols-1 container lg:grid-cols-3 gap-6 '>
                    {items}
                </div>
            </div>


            <div className='my-32'>

                {/* technical Skills */}
                <div>
                    <div className='text-4xl font-semibold text-center mb-16' >
                        My  <span className='text-[#76ABAE]'> Skills  </span>
                    </div>

                    <div className='text-center text-xl font-semibold underline mb-8'>
                        Technical Skills
                    </div>

                    <div className='gap-4 flex flex-col'>
                        {techSkill}
                    </div>
                </div>

                {/* professional skills */}

                <div className='my-20'>

                    <div className='text-center text-xl font-semibold underline mb-10 capitalize'>
                        professional Skills
                    </div>

                    <div className='grid grid-cols-2 justify-items-center gap-8 '>
                        {profSkills}
                    </div>

                </div>

            </div>



        </div>
    )
}

export default MySkills
