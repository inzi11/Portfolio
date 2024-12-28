import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './comp/Header/Nav';
import Home from './comp/Page/home';
import { BsArrowUp } from 'react-icons/bs';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [blinking, setBlinking] = useState(true);
  
      // Aos
      useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });

    }, [])
  
  // Top button
  useEffect(() => {

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility);

    return (() => {
      window.removeEventListener('scroll', toggleVisibility);
    }
    )
  }, [])

  // blinking top btn

  useEffect(() => {
    
    const blink = setInterval(() => {
      setBlinking(prev =>  prev ? false : true);
    }, 700);


    return (() => {
      clearInterval(blink)
    }
    )
  })


  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };



  return (
    <>
      <div className='relative'>

        <Navbar />
        <Home />

        <div>
          {
            isVisible && (
              <button
                
                onClick={scrollToTop}
                className={
                  `fixed bottom-10 right-10 bg-[#76ABAE]  rounded-md p-2 text-[#31363f] shadow-lg
                  transition-all duration-700 ease-out
                  ${blinking ? 'opacity-30 scale-100' : 'opacity-100 scale-110'} `
                }
              >
                <BsArrowUp className='text-xl' /> </button>
            )
          } </div>
      </div>
    </>
  );
}

export default App;
