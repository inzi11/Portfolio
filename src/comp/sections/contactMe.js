import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { TbMailFilled } from 'react-icons/tb';


function ContactMe() {

  const AllInputs = [
    {
      type: "text",
      name: "Name",
      placeHolder: "Name"

    },
    {
      type: "number",
      name: "mobileNumber",
      placeHolder: "Mobile Number",
      length: "10"
    },
    {
      type: "email",
      name: "Email",
      placeHolder: "Email"
    },
    {
      type: "text",
      name: "Subject",
      placeHolder: "Subject"
    },
  ]




  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 my-20' id='Contacts'>

      <div className='flex flex-col gap-4'>

        <div className='text-5xl font-semibold '>
          Contact <span className='text-[#76ABAE]'>Me</span>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-xl font-semibold'>
            lets Work Together
          </p>

          <p>
            "Dear [Client], Thank you for considering my services for your web development needs. I'm excited about the possibility of working together to create a website that meets your vision and goals. Let's collaborate to bring your ideas to
            life and ensure your online presence stands out. Please let me know a convenient time for us to discuss your project in more detail."
          </p>

          <div className='flex flex-col gap-2'>
            <p className='flex items-center '>
              <span>
                <TbMailFilled className='text-2xl' />
              </span>
              inzuahmad9424@gmail.com
            </p>

            <p className='flex items-center'>
              <span>
                <IoCall className='text-2xl' />
              </span>
              9406646286
            </p>
          </div>

          <div>
            <ul className='flex gap-4 text-2xl my-10 '>
              <li className='border broder-solid border-[#76ABAE] rounded-full p-2 text-[#76ABAE] shadow-glow hover:scale-105 transition-all duration-200 ease-in-out'>
                <a href="/">
                  <FaLinkedin />
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



        </div>
      </div>

      <div  >
        <form action="" className='flex flex-col  gap-3' >

          {/* all the inputs */}
          {
            AllInputs.map((item, index) => (
              <input
                key={index}
                type={item.type}
                name={item.name}
                maxLength={item?.length}
                placeholder={item.placeHolder}
                alt={item.name}
                className='w-full bg-[#31363f] h-12 p-4 text-[#EEEEEE] placeholder:text-[#80848a] rounded-md outline-none appearance-none '
              />
            ))
          }

          <textarea name="message" placeholder='Message' className='w-full bg-[#31363f] h-[120px] p-4 text-[#EEEEEE] placeholder:text-[#80848a] rounded-md outline-none appearance-none'>
          </textarea>

          <div className='flex justify-center'>
            <button className='text-white w-[120px] font-semibold text-[12px] bg-[#222831] px-4 py-2 rounded-2xl shadow-glow hover:shadow-glow-hover transition-shadow duration-300 my-7'>
              submit
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default ContactMe;
