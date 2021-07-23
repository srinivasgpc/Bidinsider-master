import React, { Component } from "react";
import * as Constants from "../../components/Common/Constants";
import "../../assets/css/login.css";
import { withRouter } from 'react-router-dom';
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";

 class ResetPassword extends Component {
  constructor(props) {
    super(props);
    let { token } = this.props.match.params;
    this.state = {
      token: token,
      pwd: "",
      rePwd: "",
      success: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    return this.state.pwd.length > 0 && this.state.pwd === this.state.rePwd;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      var body = this.state;
      Constants.axios
        .post(
          Constants.restAPIServerName + "/api/user/resetPasswordToken",
          body
        )
        .then(res => {
          if (res.data.status === 200) {
            this.setState({
              success: true,
              pwd: "",
              rePwd: "",
            })
            this.id = setTimeout(() =>{
              if(window.alert("Please login to with your new password")){
               this.props.history.push('/signin');
              }
              else{
                this.props.history.push('/signin');
              }
            }, 1000)
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
    console.log(this.props);
    return (
      <div className="Login" id="signin">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card logincard-signin my-5">
                <div className="logincard-body">
                  <h5 className="logincard-title text-center">BID KINETICS</h5>
                  <form onSubmit={this.handleSubmit} className="form-signin">
                    <div className="form-label-group invisible position-absolute">
                      <input
                        type="text"
                        id="token"
                        className="form-control "
                        placeholder="Token"
                        value={this.state.token}
                        disabled
                      />
                      <label htmlFor="token">Token</label>
    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="New Password"
                        value={this.state.pwd}
                        onChange={e => this.setState({ pwd: e.target.value })}
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="repassword"
                        className="form-control"
                        placeholder="Re type Password"
                        value={this.state.rePwd}
                        onChange={e => this.setState({ rePwd: e.target.value })}
                      />
                      <label htmlFor="repassword">Re type Password</label>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      disabled={!this.validateForm()}
                      type="submit"
                    >
                      Reset Password
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
                Password reset successfull.    
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
export default withRouter(ResetPassword) ;