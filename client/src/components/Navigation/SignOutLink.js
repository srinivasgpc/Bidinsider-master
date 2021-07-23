import React, { Component } from "react";

import { connect } from "react-redux";
import { signOut } from "../../store/apiCalls/signOutUser";
import "../../assets/css/style.css";

class SignOutLink extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout = e => {
    e.preventDefault();
    this.props.signOut();
    
  };

  render() {  
  
    return (
     
            <a href="/" onClick={this.logout} className=" dropdown-item">
              Logout
            </a>
       
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(null, mapDispatchToProps)(SignOutLink);
