import { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import { OPEN_MODAL } from "../context/types/ModalTypes";


const Register = (props) => {
    const {dispatch} = useContext(ModalContext);
    const [state, setState] = useState({
        name:'',
        email:'',
        password:'',
    })
    const registerForm = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <form onSubmit={registerForm}>
            <div className='modal_heading'>
                <h3>Create new account</h3>
            </div>
            <div className='group'>
                <input type='text' name='' className='group_control' placeholder='Enter name' onChange={(e)=> setState({...state, name: e.target.value})} value={state.name}></input>
            </div>
            <div className='group'>
                <input type='email' name='' className='group_control' placeholder='Enter email' onChange={(e)=> setState({...state, email: e.target.value})} value={state.email}></input>
            </div>
            <div className='group'>
                <input type='password' name='' className='group_control' placeholder='Create password'onChange={(e)=> setState({...state, password: e.target.value})} value={state.password}></input>
            </div>
            <div className='group modal_row'>
                <input type='submit' name='' className='btn-dark' value= 'Register'></input>
                <span onClick={()=> dispatch({type: OPEN_MODAL, payload: props.currentModal})}>Already have an account?</span>
            </div>
        </form>
    )
}

export default Register;