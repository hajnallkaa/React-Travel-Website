import React from 'react';
import Facilities from './Facilities';
import {BsStopwatch} from 'react-icons/bs';

function CityContents({name, food, room, duration, price}) {
    const format = (price) => {
        return `${price}.00`
    }

    return (
        <div className="cities_body_contents">
            <div className="cities_body_contents_top">
                <div className="cities_body_contents_top_name">{name}</div>
                <div className="cities_body_contents_top_duration">
                    <BsStopwatch size={18} color="#df2189"/>
                    <div className="cities_body_contents_top_duration_time">{duration}</div>
                </div>
            </div>
            <div className="cities_body_contents_price">
                <span className="cities_body_contents_price_dollar">$</span>
                {format(price)}
            </div>
                <Facilities name="room" value={room}/>
                <Facilities name="food" value={food}/>
                <div className="cities_body_contents_button">
                    <button className="btn-dark-sm">buy now</button>
                </div>
        </div>
    )
}

export default CityContents
