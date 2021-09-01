import React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import NavContext from '../context/NavContext';

function Nav() {
    const {state, dispatch} =  useContext(NavContext);
    
    return (
        <>
            {state ?  <div className='navLayer'></div> : ''}
          
           <div className={state ? 'nav nav--open': 'nav nav--close'}>
               <div className="nav_content">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
               </div>
           </div>
        </>
    )
}

export default Nav
