import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useContext} from 'react';
import {OPEN_LIGHTBOX} from '../../context/types/GalleryTypes';
import GalleryContext from '../../context/GalleryContext';

function GalleryImage({glr}) {
    const {dispatch} = useContext(GalleryContext);
    const openLightBox = imageObject => {
        dispatch({type: OPEN_LIGHTBOX, payload: imageObject});
    };
    return (
        <div className="col-3">
        <div className="gallery_image animation">
            <LazyLoadImage src={glr.image} alt={glr.image} onClick={() => openLightBox(glr)}></LazyLoadImage>
        </div>
    </div>
    )
}

export default GalleryImage

