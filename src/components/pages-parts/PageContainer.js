import React from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import Footer from '../footer/Footer';

function PageContainer({data, children}) {
    return (
        <>
          <Header heading={data.heading}/>
            <div className="page">
                <div className="container">
                    <div className="row">
                            <div className="col-6 animation">
                            {children}
                            </div> 
                        <div className="col-6">
                            <div className="page_info">
                                <h2 className="heading headingAnimation">{data.heading}</h2>
                                <h1 className="page_info_heading animation">{data.pageHeading}</h1>
                                <p className="page_info_msg animation">{data.message}</p> 
                                <div className="page_info_link animation">
                                    <Link to="/" className="btn-dark">go back</Link>
                                    </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <Footer />  
        </>
    )
}

export default PageContainer
