import React from 'react'
import {useContext} from 'react';
import ModalContext from '../context/ModalContext';
import { CLOSE_MODAL } from '../context/types/ModalTypes';

function Modal(props) {
    const {state, dispatch } = useContext(ModalContext);
    const close = (e) => {
        if(e.target.getAttribute('class')=== 'modal'){
            dispatch({type: CLOSE_MODAL});
        }
    };
    return state.modalStatus && state.current === props.current ? (
        <div className='modal'onClick={close}>
            <div className='modal_body'>
                {props.children}
            </div>
        </div>
    ): ('');
};

export default Modal
