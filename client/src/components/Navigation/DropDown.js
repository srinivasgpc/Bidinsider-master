import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import SignOutLink from './SignOutLink';
import { connect } from "react-redux";
import { Link  } from 'react-router-dom';
class DropDown extends Component {

  

   
    render() {
        const { auth } = this.props;
        return (
            <div>
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="d-flex align-items-center btn-sm">
            <span className="display-title">{auth.authUser.email[0]}</span>
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
        {/*    { !auth.isadmin?    
              <li >
                  <Link  
                      className="dropdown-item" 
                    
                      to="/myorders">My Orders  
                  </Link>
                  </li>

          : null}*/}


            <Link   className="dropdown-item" to="/changepassword"> Change Password</Link>
              <SignOutLink />
            </Dropdown.Menu>
          </Dropdown>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };
  
export default connect(mapStateToProps)( DropDown);