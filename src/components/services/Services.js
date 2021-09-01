import React, { useContext } from 'react';
import {useState} from 'react';
import ServicesLeft from './ServicesLeft';
import SharedContext from '../../context/SharedContext';
import ServicesList from './ServicesList';

function Services() {
    const {sharedData: {servicesData},} = useContext(SharedContext);
    const [state] = useState({
        heading: 'why customers love travel friends? because we provide unique services.',
        subheading: 'Our aim is to provide professional and unique services to customers, we have provided high quality to our customers thats why thye love travel friends.',

    })
    return (
        <div className="services">
            <div className="services_contents">
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services_contents_container">
                        <div className="col-6 p-15">
                            <ServicesLeft heading={state.heading} subheading={state.subheading}/>
                        </div>
                        <div className="col-6 p-15 ">
                            <ServicesList services={servicesData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
