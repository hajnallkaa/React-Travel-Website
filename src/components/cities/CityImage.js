import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CityImage({img, status}) {
    return (
        <div className="cities_body_image">
            <LazyLoadImage src={img} alt={img}/>
            <div className={
                status === 'Bestselling'? 'bestselling': status === 'New' ? 'new': status === 'Hot' ? 'hot' : ''}>
                {status}
            </div>
        </div>
    )
}

export default CityImage
