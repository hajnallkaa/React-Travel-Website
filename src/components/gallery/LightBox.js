import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useContext} from 'react';
import GalleryContext from '../../context/GalleryContext';
import {CLOSE_LIGHTBOX} from '../../context/types/GalleryTypes';

function LightBox() {
    const {galleryStore: {curentLightBox}, dispatch} = useContext(GalleryContext);
    const closeLightBox = e => {
        const className = e.target.getAttribute('class');
        if(className === 'gallery_lightbox'){
            dispatch({type: CLOSE_LIGHTBOX})
        }
    }
    return (
        <div className="gallery_lightbox" onClick={closeLightBox}>
            <h4>{curentLightBox.name}</h4>
            <div className="gallery_lightbox_card">
            <div className="gallery_lightbox_card_image">
                <LazyLoadImage src={curentLightBox.image} alt={curentLightBox.name}></LazyLoadImage>
            </div>
            </div>
        </div>
    )
}

export default LightBox;
