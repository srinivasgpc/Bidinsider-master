import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import {Redirect} from 'react-router';
import{ connect} from 'react-redux';
import mapUserFile from '../../store/apiCalls/mapUserFile';
import { Link  } from 'react-router-dom';

import { clearCart} from '../../store/actions/cartActions';
class CheckOut extends React.Component {
constructor(props){
  super(props)
  this.state={
    paymentStatus:null
  }
}
renderPayment(data){
  if(data==="success"){
    return(
      <div 
      className="alert alert-success alert-dismissible fade show" 
      style={{ marginTop: '14px' }}
  >
  Thank you! Your payment was successfully received. Kindly navigate to <strong><Link to="/myorders">My Orders</Link></strong> to download your file(s).    
  </div>
    )
  }
  else if(data==="cancel"){
    return(
      <div 
      className="alert alert-danger alert-dismissible fade show" 
      style={{ marginTop: '14px' }}
  >
  We apologize for the inconvenience! Your payment was not successful. Kindly re-attempt payment.</div>
    )
  }
  else{
    return(
      <div 
      className="alert alert-danger alert-dismissible fade show" 
      style={{ marginTop: '14px' }}
  >
  Internal Error. Kindly make the payment again</div>
    )
  }

}
  render() {

    const {auth, cartItems}= this.props;
    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
      this.setState({
          paymentStatus: 'success'
      })
      
      let obj = {};
      const token= auth.authUser.token;
      obj.userid= parseInt(auth.authUser.userid);
      obj.email=auth.authUser.email;
      
      for(let i=0; i < cartItems.length; i++){
          obj.fileid= parseInt(cartItems[i].fileid);
          obj.f_sol_number= cartItems[i].f_sol_number;
          obj.f_price= cartItems[i].f_price;
          this.props.mapUserFile(obj, token);
      }

      this.props.clearCart();
   
    
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
      this.setState({
        paymentStatus: 'cancel'
    });
    };

    const onError = err => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      this.setState({
        paymentStatus: 'error'
    })
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "INR"; // or you can set this value from your props or state
    // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {  
      sandbox:
        "AZ1NXirRbDqD5fh428zMWEMkBw9MTNiVmSY6U4WNtpmw86AQoC6kvPnXZx5PFHMrxUtTI2wEeKbwshe_", // sandbox client ID,
      production: "YOUR-PRODUCTION-APP-ID"
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
   
   if(!auth.isLogged) return (<Redirect to='/signin' />)
    return (
      <div>
                  <PaypalExpressBtn className="p-2 button-pay"
                    env={env}
                    client={client}
                    currency={currency}
                    total={this.props.total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                  />
                  <div>{this.state.paymentStatus !== null ?
                   <div>{this.renderPayment(this.state.paymentStatus)} </div> : null}</div>
                  </div>  
    );
 
  }
}


const mapStateToProps=(state)=>{
  
  return{
        auth: state.auth,
        cartItems: state.cartItems.cartItems
  }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        mapUserFile: (document, token)=> {dispatch(mapUserFile(document, token))},
        clearCart:()=> {dispatch(clearCart())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);