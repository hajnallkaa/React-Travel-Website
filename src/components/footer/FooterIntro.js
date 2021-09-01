import React from 'react';
import {useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function FooterIntro() {
    const [state] = useState({
        logo:'/assets/footer/logo.png',
        intro: 'Travel friends is a traveling agency, we arrange tours to the world famouos and most beautiful countreis, Since 2005 we provide high qualtiy sercives to our customers'
    })
    return (
        <div className='footer_intro'>
            <div className='footer_intro_img animation'>
                <LazyLoadImage src={state.logo} alt="footer logo"/>
            </div> 
            <p className='footer_intro_msg animation'>{state.intro}</p>
        </div>
    )
}

export default FooterIntro
