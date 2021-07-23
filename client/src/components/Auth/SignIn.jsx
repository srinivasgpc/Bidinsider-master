import React, { Component  } from "react";
import { Redirect, Link } from "react-router-dom";
import "../../assets/css/login.css";
import { connect } from "react-redux";
import signInUser from "../../store/apiCalls/signInUser";
import CloseButton from '../Common/CloseButton';
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      warning:false
     
    };
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 

  /**
   * Detect caps lock being on when typing.
   * @param keyEvent On key down event.
   */
  onKeyDown = keyEvent => {
    if (keyEvent.getModifierState("CapsLock")) {
      this.setState({ warning: true });
    } else {
      this.setState({ warning: false });
    }
  };
  validateForm = () => {
    return this.state.username.length > 0 ;
  };
  componentWillUnmount(){
    this.props.auth.authError=null;
}
changePass= (e)=>{
this.setState({
  password: e.target.value
})
}

  handleSubmit = e => {
  
    e.preventDefault();
    if (this.validateForm()) {
      this.props.signInUser(this.state);
   
    } else {
      console.log("Please fill following details");
    }
  };

  render() {
   
    const { auth } = this.props;
    if (auth.isLogged) return <Redirect to="/" />;
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
                        value={this.state.username}
                        onChange={e =>
                          this.setState({ username: e.target.value.toLowerCase() })
                        }
                        autoFocus
                      />
                      <label htmlFor="username">Username</label>
                    </div>

                  <div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changePass}
                        onKeyDown={this.onKeyDown}
                      />
                      <label htmlFor="password">Password</label>
                      {this.state.warning && <span className="caps-on">CapsLock On</span>}
                      </div>
                     
                    </div>

                 <div className="text-center">   <button
                      className="btn btn-primary text-uppercase"
                      disabled={!this.validateForm()}
                      type="submit"
                    >
                      Sign in 
                    </button></div>
                  </form>
                  <div className="d-flex justify-content-between mt-2">
                    <Link className="" to="/signup">
                      Sign Up
                    </Link>
                    <Link className=" white-space" to="/forgotpassword">
                      Forgot Password
                    </Link>
                  </div>

                  {auth.authError !== null ? (
                    <div className="red-text text-center"> {auth.authError}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInUser: creds => dispatch(signInUser(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
