import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Preloader from "./components/Common/Preloader";
import HomeTwo from "../src/components/Pages/HomeTwo";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Downloads from "./components/Pages/Downloads";
import Admin from "./components/Pages/Admin";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
// import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from 'history'
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import ChangePassword from "./components/Auth/ChangePassword";
import CheckOut from "./components/Pages/CheckOut";
import MyOrders from "./components/Pages/MyOrders";
import ShoppingCart from './components/Documents/ShoppingCart';
import { signOut } from "../src/store/apiCalls/signOutUser";
class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
  
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
    let hours = 0.25;
    if (this.props.expire && (new Date().getTime() - this.props.expire > hours * 60 * 60 * 1000)) {
    
  if(window.confirm("session timed out")){
    this.props.signOut();
    localStorage.clear();
  }

    }
  }
  componentWillMount() {
    // this.props.getDocument(null);
    // console.log(this.props.expire);
  }

  demoAsyncCall = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  };

  hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        try {
          if (element) element.scrollIntoView();
        } catch {}
      }, 0);
    }
  };

  render() {
    const history = createBrowserHistory();
    const {cartItems}= this.props;
    return (
      <Router onUpdate={this.hashLinkScroll} history={history}>
        <React.Fragment>
          {this.state.loading ? <Preloader /> : ""}
          <Navigation cartLength ={cartItems.length}/>
          <Route path="/" exact component={HomeTwo} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/downloads" exact component={Downloads} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/downloads/cart" component={ShoppingCart} />
          <PrivateRoute path="/myorders" component= {MyOrders}/> 
          <Route path="/reset/:token" component={ResetPassword} />
          <PrivateRoute path="/admin" exact component={Admin} />
          <PrivateRoute path="/checkOut" exact component={CheckOut} />
          <PrivateRoute
            path="/changePassword"
            exact
            component={ChangePassword}
          />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {

  return {
    authUser: state.auth.authUser,
    isLogged: state.auth.isLogged,
    cartItems: state.cartItems.cartItems,
    expire: state.auth.expire
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
