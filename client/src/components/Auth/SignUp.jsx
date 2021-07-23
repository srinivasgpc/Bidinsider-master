import React, { Component } from "react";
import * as Constants from "../Common/Constants";
import { Redirect, Link } from "react-router-dom";
import "../../assets/css/login.css";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";
import CloseButton from '../Common/CloseButton';
import { connect } from "react-redux";

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class SignUp extends Component {
  constructor() {
    super();
    this.state = { 
          country: 'United States',
          region: "",
          email:"",
          pwd: "",
          cnfPassword:"",
          phone:null,
          fname:"", 
          lname:"",
          companyName:"",
          success:false,
          warning:false
       };
    this.updateJson = this.updateJson.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
componentWillUnmount(){
  this.setState({
    success:false
  })
}
clearSignIn(){
  this.setState({
     country: 'United States',
     region: "",
     email:"",
     pwd: "",
     cnfPassword:"",
     fname:"",
     lname:'',
     phone:null,
     jobTitle:'',
     companyName:"",
     companyUrl:'',
     postalCode:'',
     valid:false
     
  })
}

reqValid(){
return this.state.email.length > 0 && this.state.pwd.lenght>0 && this.state.fname.length>0 && this.state.lname.length>0 && this.state.companyName.length>0 && this.state.region.length>0
}
  updateJson(value, key) {
    var state = this.state;
    state[key] = value;
    this.setState(state);
  }
  selectCountry(val) {
    this.setState({ country: val });
}

selectRegion(val) {
  console.log(val);
    this.setState({ region: val });
    if(this.reqValid()){
      this.setState({
        valid:true
      })
    }
}

validator(body){
  this.setState({
    success:false
  })

  if(this.state.email  === ""){
    alert("Please enter Email Address");
    return false;
    
  }
  else if(this.state.pwd  ===""){
    alert("Please enter Password");
    return false;
  }
  else  if(this.state.cnfPassword  === ""){
    alert("Please enter Confirm Password  ");
    return false;
  }
  else if(this.state.fname  === ""){
    alert("Please enter First Name");
    return false;
  }
  else if(this.state.lname  === ""){
    alert("Please enter Last Name");
    return false;
  }
  else if(this.state.companyName === ""){
    alert("Please enter Company Name");
    return false;
  }
  else if(this.state.region===""){
    alert("Please select State");
    return false;
  }
  else{  
   this.sendUser(body);
 
   return true;
}

}

sendUser(body){
  Constants.axios
  .post(Constants.restAPIServerName + "/api/user/verify-email", body)
  .then(response => {
    if (response !== undefined) {
      if (response.data !== undefined && response.data.length > 0) {
        alert("You have already signed up on our website. Kindly Sign-In to continue. If you have forgotten your password, use Forgot Password to reset your password");
      } else {
        Constants.axios
          .post(Constants.restAPIServerName + "/api/user/signup", body)
          .then(res => {
            if (res !== undefined && res.status === 200) {
              console.warn(res);
              // this.props.history.push("/signin");
              this.clearSignIn();
              this.setState({'success': true});
          
            }
          });
      }
    }
  });
}



    handleSubmit(event) {
    event.preventDefault();
     this.reqValid();
    var body = this.state;
   
    if (body.pwd === body.cnfPassword ) {
      this.validator(body);
    }
   else {
      alert("Passwords not same");
    }
  }
 
  
  render() {
    const { auth } = this.props;
    if (auth.isLogged) return <Redirect to="/" />;
    return (
      <div className="signup " id="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card logincard-signin">
                <div className="logincard-body main-close">
                <CloseButton />
                  <h5 className="logincard-title text-center">BID KINETICS</h5>
                  <div className="row col-12 marl15 justify-content-end mb-4">
                  <Link className="text-right" to="/signin">
                    &larr;Back to Sign in
                  </Link>
                </div >
              <div className="req-fields">
                <p><b>Required Fields</b>: Email Address, Passwords, First Name, Last Name, Company Name, State and Country</p>
    </div>
                  <form
                    onSubmit={this.handleSubmit}
                    className="form-signin"
                  >
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e =>
                          this.setState({ email: e.target.value,  valid: true })
                        }
                        autoFocus
                      />
                      <label htmlFor="email">Email</label>
                     
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.pwd}
                        onChange={e =>
                          this.setState({ pwd: e.target.value })
                        }
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        id="cnfPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={this.state.cnfPassword}
                        onChange={e =>
                          this.setState({ cnfPassword: e.target.value })
                        }
                      />
                      <label htmlFor="cnfPassword">Confirm Password</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={this.state.fname}
                        onChange={e =>
                          this.setState({ fname: e.target.value })
                        }
                      />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={this.state.lname}
                        onChange={e =>
                          this.setState({ lname: e.target.value })
                        }
                      />
                      <label htmlFor="lastname">Last Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="middlename"
                        className="form-control"
                        placeholder="Middle Name"
                        value={this.state.mname}
                        onChange={e => this.updateJson(e.target.value, "mname")}
                      />
                      <label htmlFor="middlename">Middle Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={e =>   this.setState({ phone: e.target.value })}
                      />
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="jobTitle"
                        className="form-control"
                        placeholder="Job Title"
                        value={this.state.jobTitle}
                        onChange={e =>
                          this.updateJson(e.target.value, "jobTitle")
                        }
                      />
                      <label htmlFor="jobTitle">Job Title</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="companyName"
                        className="form-control"
                        placeholder="Company Name"
                        value={this.state.companyName}
                        onChange={e =>
                          this.setState({ companyName: e.target.value })
                        }
                      />
                      <label htmlFor="companyName">Company Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="companyUrl"
                        className="form-control"
                        placeholder="Company URL"
                        value={this.state.companyUrl}
                        onChange={e =>
                          this.updateJson(e.target.value, "companyUrl")
                        }
                      />
                      <label htmlFor="companyUrl">Company URL</label>
                    </div>
                    <div className="form-label-group">
                    <div>
                    <label className="label-stat">Country</label>
                      <CountryDropdown className="form-control"
                      value={this.state.country}  showDefaultOption={false}                       
                      onChange={(val) => this.selectCountry(val)} /></div>
                    </div>
                    <div className="form-label-group">
                     <div>
                     <label className="label-stat">State</label>
                      <RegionDropdown  className="form-control"
                      country={this.state.country} 
                      value={this.state.region}
                      onChange={(val) => this.selectRegion(val)} 
                      showDefaultOption={true}
                      defaultOptionLabel="Select State"
                      
                      /> 
                      </div>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="number"
                        id="postalCode"
                        className="form-control"
                        placeholder="Zip Code"
                        value={this.state.postalCode}
                        onChange={e =>
                          this.updateJson(e.target.value, "postalCode")
                        }
                      />
                      <label htmlFor="postalCode">Zip Code</label>
                    </div>
            
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      >
                      Sign Up
                    </button>
                  </form>
                 
                  <div className="row col-12 marl15 justify-content-start mt-1">
                  <Link className="text-right" to="/signin">
                    &larr;Back to Sign in
                  </Link>
                </div>
                 {this.state.success && 
                  <div 
                  className="alert alert-success alert-dismissible fade show" 
                  style={{ marginTop: '14px' }}
              >
              Account successfully created. Please <strong><Link to="/signin">Sign In</Link></strong> to proceed .    
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

const mapStateToProps = state => {

  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(SignUp);
