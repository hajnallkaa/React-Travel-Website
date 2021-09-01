import React from 'react'

function DestinationDetails({title, text}) {
    return (
        <div className="destinationInfo_details">
                <div className="destinationInfo_details_head animation">
                    {title}
                </div>
                <div className="destinationInfo_details_text animation">
                    {text}
                </div>
        </div>
    )
}

export default DestinationDetails
