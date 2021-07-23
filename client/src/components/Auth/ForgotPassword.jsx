import React, { Component } from "react";
import * as Constants from "../../components/Common/Constants";
import "../../assets/css/login.css";
import CloseButton from '../Common/CloseButton';
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";
import {Link} from 'react-router-dom';
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      success:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    return this.state.email.length > 0;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      var body = this.state;
      Constants.axios
        .post(Constants.restAPIServerName + "/api/user/forgotPassword", body)
        .then(res => {
          if (res.data.status === 200) {
            this.setState({success:true, email:""});
        
          }else{
            alert(res.data.text);
          }
          
        });
    } else {
      console.log("Please fill following details");
    }
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="Login" id="signin">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card logincard-signin my-5">
                <div className="logincard-body main-close">
                <CloseButton />
                  <h5 className="logincard-title text-center">BID KINETICS</h5>
                  <form onSubmit={this.handleSubmit} className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value.toLowerCase() })}
                        autoFocus
                      />
                      <label htmlFor="username">Username</label>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      disabled={!this.validateForm()}
                      type="submit"
                    >
                      Submit
                    </button>
                    
                  </form>
                  <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                  {this.state.success && 
                    <div 
                    className="alert alert-success alert-dismissible fade show" 
                    style={{ marginTop: '14px' }}
                >
                We have sent you an email with a link to reset your password.    
                </div>
               
                   }
                   <div className="d-flex justify-content-between mt-2 pl-3 pr-3">
                   <Link className="" to="/signin">
                     Sign In
                   </Link>
                   <Link className="" to="/signup">
                   Sign Up
                 </Link>
                  
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
