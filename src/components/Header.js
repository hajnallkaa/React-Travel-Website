import React from 'react'
import {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useHistory} from 'react-router-dom';

function Header({heading, paragraph, children, image }) {
    const [state] = useState({
        video: '/assets/videos/header.mp4',
        poster: '/assets/images/screen.png',
        logo:'/assets/images/logo.png',
    })
    const {push} = useHistory();
    const goToHome = () => {
        push('/');
    }
    return (
        <div className="header">
            <div className="container pr">
                <div className='header_logo'>
                    <LazyLoadImage src={state.logo} alt='logo' onClick={goToHome} />
                </div>
            </div>
            <div className="header__video">
                {image ? <LazyLoadImage src={image} alt={image}/> : <video src={state.video} autoPlay loop muted poster={state.png}></video>}
                
            </div>
            <div className="header_contents">
                <div className="container">
                    <div className="header_contents_text">
                        <div className="header_contents_text_child">
                            <h1 className="header_contents_text_child_h1"> {heading} </h1>
                            <p className="header_contents_text_child_p">
                                {paragraph}
                            </p>
                            <div className="header_contents_text_child_link">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Header
