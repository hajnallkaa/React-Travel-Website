import AnimationsContext from "../AnimationsContext";
import React from 'react';
import {useEffect} from 'react';

function AnimationsProvider({children}) {
    const scrollAnimations = () => {
        const animation = (elements, className) => {
            elements.forEach((element) => {
                const elementPosition = element.getBoundingClientRect().top;
                const viewPortHeight= window.innerHeight - 150;
                if(elementPosition < viewPortHeight){
                    element.classList.add(className);
                } else {
                    element.classList.remove(className);
                }
            });
        };
        const elements = document.querySelectorAll('.animation');
        const headings = document.querySelectorAll('.headingAnimation');
        animation(elements, 'animate');
        animation(headings, 'headingAnimate');
    }
    useEffect(()=> {
        window.addEventListener('scroll', scrollAnimations)
    },[]);
    return (
        <AnimationsContext.Provider value>
                {children}
        </AnimationsContext.Provider>
    )
}

export default AnimationsProvider
