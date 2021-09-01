import React from 'react';
import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import PageContainer from '../components/pages-parts/PageContainer';
import AboutImage from '../components/pages-parts/AboutImage';

function About() {
    const [state] = useState({
        heading: 'about us',
        pageHeading:'world best travel agency company since 2005',
        message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    })
    useEffect(()=> {
        window.scrollTo(0,0);
    }, []);
    return (
        <>
        <Helmet>
            <title>About Page</title>
            <meta name="description" content="Travel friends about page"/>  
        </Helmet>
        <PageContainer data={state}>
            <AboutImage />
        </PageContainer>
        </>
    )
}

export default About
