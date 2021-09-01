import React from 'react';
import {BsCheck, BsX} from 'react-icons/bs';

function Facilities({name, value}) {
    return (
        <div className="cities_body_contents_facilities">
            <div className="cities_body_contents_facilities_name">
                {name}
            </div>
            <div className="cities_body_contents_facilities_value">{
            value ? (<BsCheck size={20} color="#34d399"/>) : (<BsX size={20} color="#ff4d58"/>)}
            </div>
        </div>
    );
};

export default Facilities

