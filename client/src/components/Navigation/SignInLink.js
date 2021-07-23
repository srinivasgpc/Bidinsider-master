import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

class SignInLink extends Component {
    render() {
        return (
            <div className="d-flex">
            <li className="nav-item ">
              
            <Link   className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item ">
       
        <Link  className="nav-link" to="/signup">Sign Up</Link></li>
            </div>
        );
    }
}

export default SignInLink;
 

