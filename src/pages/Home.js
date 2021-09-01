import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useState, useEffect, useContext} from 'react';
import Header from "../components/Header";
import Modal from '../components/Modal';
import ModalContext from '../context/ModalContext';
import { OPEN_MODAL } from '../context/types/ModalTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destinations from '../components/Destinations';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';
import GalleryComponent from '../components/gallery/GalleryComponent';
import Footer from '../components/footer/Footer';

function Home() {
    const {dispatch} = useContext(ModalContext);
    const [state] = useState({
        heading:'We are travel friends',
        paragraph: 'Come and join us we travel the most famous and beautiful places in the world',
    });
    const [registerModal] = useState('registerModal');
    const [loginModal] = useState('loginModal');
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    return (
        <>
        <Helmet>
            <title>Travel Friends</title>
            <meta name="description" content="Travel to the world with travel friends"/>
            <meta name="keywords" content="travel, travel tours, airline"/>
        </Helmet>
            <Header heading={state.heading} paragraph={state.paragraph}>
            <button className="btn-default" onClick={() => dispatch({type: OPEN_MODAL, payload: registerModal})}>Get Started</button>
            </Header>
            <Modal current={registerModal}>
                <Register currentModal={loginModal}/>
            </Modal>
            <Modal current={loginModal}>
                <Login currentModal={registerModal}/>
            </Modal>
            <Destinations />
            <Services />
            <Reviews />
            <GalleryComponent />
            <Footer />
        </>
    )
}

export default Home
