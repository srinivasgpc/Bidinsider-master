import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CloseButton extends Component {
    render() {
        return (
            <span className="main-close-butt"><Link to="/"> <button className="btn btn-sm btn-outline-dark">x</button></Link></span>
        );
    }
}

export default CloseButton;