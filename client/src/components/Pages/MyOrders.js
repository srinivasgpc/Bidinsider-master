import React, { Component } from 'react';

import {connect} from 'react-redux';
import getOrders from '../../store/apiCalls/getOrders';
import {
    Spinner
} from 'react-bootstrap';

class MyOrders extends Component {
    constructor(props){
        super(props);
        this.state={
            userid:null,
            orders: [],
            pending:false,
        }
    }
    componentWillMount() {
    
        var obj= {};
        var token=this.props.auth.authUser.token;
        obj.userid= parseInt(this.props.auth.authUser.userid);
        
        if(obj.userid!== null){
        this.props.getOrders(obj, token);
        }
       
    }
    componentWillReceiveProps(nextProps) {
        this.setState( {
           orders: nextProps.orders,
           pending:true
        });
      }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
                elementId.classList.add("back-black");
    }
    componentWillUnmount(){
        let elementId = document.getElementById("navbar");
                elementId.classList.remove("back-black");
    }
  
    renderOrders() {
    
         const{orders, pending}= this.state;
         if(!pending){
         return (
           <div className="text-center"> <Spinner animation="border" /></div>
         )
     }else{
         return(
            <div className="container orders">
            { orders.length>0?orders.map( document => 
                     <div key={document.fileid} className="order-main d-column">   
                     <span className="text-right f-title mb-2" >{document.f_con_title}</span>
                             <img src="https://image.flaticon.com/icons/svg/891/891085.svg" alt="file" width="50" height="50" title={document.f_con_title} />
                             <a href={document.f_url}  target="_blank" rel="noopener noreferrer" className="mt-2 btn btn-sm btn-secondary btn-down">Download</a>
                          </div>
                      
                   ): "No orders Yet!" }
               </div>
         )
     }
       
          
       
    }
    render(){
        return(
            <div className="col-md-12 pt-4 mt-4 " >
            <div className="container">
            <div className="d-column">
            <div className="col-md-4 mt-3"><h3 id='title' className="mb-3">My Orders</h3></div>
                {this.renderOrders()}
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
//   console.log(state);
    return{
       auth: state.auth,
       orders: state.orders.orders,

    }
  }

  const mapDispatchToProps= (dispatch)=>{
    return{
        getOrders:(obj, token)=>{dispatch(getOrders(obj, token))}
    }
}
 
export default connect(
    mapStateToProps, mapDispatchToProps
)(MyOrders);