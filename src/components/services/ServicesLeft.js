import React from 'react'

function ServicesLeft({heading, subheading}) {
    return (
        <div className="services_left">
            <h1 className="services_left_heading animation">
                {heading}
            </h1>
            <p className="services_left_paragraph animation">
                {subheading}
            </p>
        </div>
    )
}

export default ServicesLeft
