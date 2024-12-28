import Hero from "../sections/Hero";
import Education from "../sections/Education";
import MySkills from "../sections/skills/MySkills";
import ContactMe from "../sections/contactMe";
import Footer from "../sections/footer";
import { useEffect, useState } from "react";

function Home() {


    useEffect(() => {
        console.log(window.innerHeight);
        
    })

  

    return (
        <>
            <Hero />
            <Education />
            <MySkills />
            <ContactMe />
            <Footer />
            
        </>
    )
}

export default Home
