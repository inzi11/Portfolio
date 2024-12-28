import { useState, useEffect } from 'react'

function useTypingEffect(words, typingSpeed = 150, pauseDuration = 1000) {

    const [displayWord, setdisplayWord] = useState('');
    const[wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setdisplayWord(words[wordIndex].substring(0, charIndex - 1));
                setCharIndex(prevState => (prevState - 1));
            } , typingSpeed/4)
        } 
        else {
            typingTimeout = setTimeout(() => {
                setdisplayWord(words[wordIndex].substring(0, charIndex + 1));
                setCharIndex(prevState => (prevState + 1)); 
            } , typingSpeed)
        }

        if (!isDeleting && charIndex === words[wordIndex].length - 1) {
            setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);
        }
        else if (isDeleting && charIndex === 1) {
            setWordIndex(PrevState => ((PrevState + 1) % words.length));
            setIsDeleting(false);
        }

         return () => {
             clearInterval(typingTimeout);
         }
    }, [charIndex, isDeleting, words, wordIndex, typingSpeed, pauseDuration]);
    

    return displayWord;
}

export default useTypingEffect
