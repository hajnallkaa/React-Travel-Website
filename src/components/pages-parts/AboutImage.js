import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useState} from 'react';


function AboutImage() {
    const [image] = useState('/assets/about/about.jpg')
    return (
        <div className="page_image">
            <LazyLoadImage src={image} alt="about image"/>
        </div>
    )
}

export default AboutImage
