import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/style.scss';
import '../../assets/css/responsive.scss';
import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import SignInLink from './SignInLink';

import DropDown from './DropDown';

class Navigation extends React.Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");

        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
              
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);

    }
  
    goToId = (e) => {
        window.location.hash = e;
        window.location.refresh(true);
    }
    
    renderMenus = () => {
      
        const {auth, cartLength}=this.props;
        
      
        if (window.location.pathname === '/signin' ||window.location.pathname === '/signup' || window.location.pathname === '/downloads'){
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                   { auth.isadmin? <li className="nav-item">
              <Link  
                        className="nav-link" 
                        to="/admin"
                    >Upload Doc</Link>  
                </li>: null}
                    <li className="nav-item">
                    <Link  
                        className="nav-link" 
                        to="/downloads"
                    >Bid Outlines</Link>
                </li>
                { !auth.isadmin && auth.isLogged?         <li className="nav-item">
                <Link  
                    className="nav-link" 
                    to="/downloads/cart">  My Cart {cartLength ===0 ? null: `(${cartLength})` }
                </Link>
            </li>: null}
            { !auth.isadmin && auth.isLogged?    
                <li className="nav-item">
                    <Link  
                        className="nav-link" 
                      
                        to="/myorders">My Orders  
                    </Link>
                    </li>
  
            : null}
  

               {!auth.isLogged? <SignInLink  />:
                <DropDown />  }
                </ul>
            );
        }

        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link  className="nav-link" to="/">Home</Link>
                </li>
                { auth.isadmin ? <li className="nav-item">
                <Link  
                          className="nav-link" 
                          to="/admin"
                      >Upload Doc</Link>  
                  </li>: null}
                <li className="nav-item">
                <Link  className="nav-link" to="/downloads">Bid Outlines</Link>
            </li>
            { !auth.isadmin && auth.isLogged ?    <li className="nav-item">
            <Link  
                    className="nav-link" 
                    to="/downloads/cart">  My Cart {cartLength ===0  ? null:  `(${cartLength})`}
                </Link>
        </li>: null}
                
        { !auth.isadmin &&  auth.isLogged?    
            <li className="nav-item">
                <Link  
                className="nav-link"
                  
                    to="/myorders">My Orders  
                </Link>
                </li>

        : null}
            {!auth.isLogged?  <SignInLink />: <DropDown />}
       
           
            </ul>
        );
    }

    render(){
      
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        

        //login

       
       
       
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light header-sticky">
                <div className="container">
                    <Link 
                        className="navbar-brand logo-main" 
                        to="/"
                       
                    >
                       <div className="logo-img" alt=""></div> 
                        Bid Insider
                    </Link>
                    <button 
                        onClick={this.toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={classOne} id="navbarSupportedContent">
                        {this.renderMenus()}
                    </div>
                </div>
            </nav>
        );
    }
}
const mapStateToProps=(state)=>{
  
    return{
         auth: state.auth,
         cartItems: state.cartItems.cartItems,
         cartLength:state.cartItems.cartLength
    }
  }

 
export default connect(mapStateToProps)(Navigation);