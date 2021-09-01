import React from 'react';
import {useState} from 'react';

function ContactForm() {
    const [state, setState] = useState({
        name:'',
        email:'',
        message:'',
    })
    const submitConact = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <form onSubmit={submitConact}>
            <div className="group">
                <h2 className="page_contact_heading">Contact form</h2>
            </div>
            <div className="group">
                <input type="text"  className="group_control" placeholder="Your name eg. smith" value={state.name} onChange={(e)=> setState({...state, name: e.target.value})}/>
            </div>
            <div className="group">
                <input type="email"  className="group_control" placeholder="Your email eg. smith@gmail.com" value={state.email} onChange={(e)=> setState({...state, email: e.target.value})}/>
            </div>
            <div className="group">
                <textarea colrs="12" row="8" className="group_textarea" placeholder="Write your message eg. I have troubles" defaultValue={state.message} onChange={(e)=> setState({...state, message: e.target.value})}></textarea>
            </div>
            <div className="group">
                <input type="submit" value="send email &rarr;" className="btn-dark" />
            </div>
        </form>
    )
}

export default ContactForm
