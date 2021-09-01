import React from 'react';
import {useContext, useState} from 'react';
import ModalContext from '../context/ModalContext';
import {OPEN_MODAL} from '../context/types/ModalTypes';

function Login(props) {
    const {dispatch} = useContext(ModalContext);
    const [state, setState] = useState({
        email:'',
        password:'',
    });
    
    const loginForm = (e) => {
        e.preventDefault();
        console.log(state)
    }

    return (
        <form onSubmit={loginForm}>
            <div className='modal_heading'>
                <h3>Login</h3>
            </div>
            
            <div className='group'>
                <input type='email' name='' className='group_control' placeholder='Enter email' onChange={(e)=> setState({...state, email: e.target.value})} value={state.email}></input>
            </div>
            <div className='group'>
                <input type='password' name='' className='group_control' placeholder='Enter password'onChange={(e)=> setState({...state, password: e.target.value})} value={state.password}></input>
            </div>
            <div className='group modal_row'>
                <input type='submit' name='' className='btn-dark' value= 'Login'></input>
                <span onClick={()=> dispatch({type: OPEN_MODAL, payload: props.currentModal})}>Create new account</span>
            </div>
        </form>
    )
}

export default Login
