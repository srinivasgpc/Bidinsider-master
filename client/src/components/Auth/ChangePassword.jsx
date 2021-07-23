import React, { Component } from "react";
import * as Constants from "../Common/Constants";
import "../../assets/css/login.css";

import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";
import CloseButton from '../Common/CloseButton';
import Utils from "../Common/Utils";
import { connect } from "react-redux";
import { signOut } from "../../store/apiCalls/signOutUser";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pwd: "",
      rePwd: "",
      oldPass:"",
      warning:false,
      success: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    return  this.state.oldPass.length > 0 && this.state.pwd.length > 0  && this.state.pwd === this.state.rePwd && !this.state.warning;
  };
  onBlur = e => {
    if (e.target.value  === this.state.oldPass) {
      this.setState({ warning: true });
    } else {
      this.setState({ warning: false });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm() ) {
     
      var body = this.state;
      var user = Utils.getUser();
      body.email = user.email;
  
      Constants.axios
        .post(Constants.restAPIServerName + "/api/user/resetPasswordMail", body)
        .then(res => {
          if (res.data.status === 200) {
            this.setState({
              success: true,
              pwd: "",
              rePwd: "",
              oldPass:""
            })
            
            this.id = setTimeout(() =>{
            if(window.alert("Please re-login to continue")){
              this.props.signOut();
            }
            else{
              this.props.signOut();
            }
          }, 1000);
          } else {
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
                  <div className="">
                  <label htmlFor="password" className="label-stat mb-0 pb-0">Current Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    className="form-control"
                    placeholder="Current Password"
                    value={this.state.oldPass}
                    onChange={e => this.setState({ oldPass: e.target.value })}
                    
                  />
                  
                </div>

                
                  <div className="mb-2 mt-2">
                  <label htmlFor="password"  className="label-stat mb-0 pb-0">New Password</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="New Password"
                        value={this.state.pwd}
                        onBlur={this.onBlur}
                        onChange={e => this.setState({ pwd: e.target.value })}
                      />
                     {this.state.warning && <span className="red-text label-stat"> Current and New passwords entered are same</span>}
                    </div>

                    <div className="mb-4">
                    <label htmlFor="repassword"  className="label-stat mb-0 pb-0">Re type New Password</label>
                      <input
                        type="password"
                        id="repassword"
                        className="form-control"
                        placeholder="Re-type New Password"
                        value={this.state.rePwd}
                        onChange={e => this.setState({ rePwd: e.target.value })}
                      />
                      
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      disabled={!this.validateForm()}
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </form>
                {this.state.error && <div className="red-text center">this.state.error</div>}
                  <div className="red-text center">
                    
                    {authError ? <p>{authError}</p> : null}
                  </div>
                  {this.state.success && 
                    <div 
                    className="alert alert-success alert-dismissible fade show" 
                    style={{ marginTop: '14px' }}
                >
                Password Successfully changed.    
                </div>
                   }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(ChangePassword);
