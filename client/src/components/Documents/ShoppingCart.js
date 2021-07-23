import React, { Component } from 'react';
import CheckOut from '../Pages/CheckOut'; 
import{ connect} from 'react-redux';
import { removeCart} from '../../store/actions/cartActions';
class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.handleRemoveFromCart= this.handleRemoveFromCart.bind(this);
    }
    
    componentDidMount() {
        let elementId = document.getElementById("navbar");
                elementId.classList.add("back-black");
    }
    componentWillUnmount(){
        let elementId = document.getElementById("navbar");
                elementId.classList.remove("back-black");
    }
    handleRemoveFromCart(e, item){
  
      this.props.removeCart(item);
    }
   
    render() {
        const {cartItems, totalAmount}= this.props;
        return (
            <div className="col-md-12 pt-4 d-main" >
            <div className="container">
            <div className="mt-2 pt-2">
            <div className="alert alert-info ">
                {cartItems.length===0? "Cart is Empty": <div className="d-flex justify-content-between"><span > You have {cartItems.length} items </span><span><b>My Cart({cartItems.length})</b></span></div>} 
            </div>
                {cartItems.length>0 &&
                <div className="table-cart mt-3">
                    <table className="table text-center table-striped table-light">
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {cartItems.map(item=>
                            <tr className="" key={item.fileid}>
                             <td>  <b>{item.f_con_title}</b></td> 
                             <td>  <b>{item.count}</b></td> 
                             <td>  <b>{"$ "+ item.f_price}</b></td> 
                             <td ><button className="btn btn-outline-danger btn-sm pad-new"
                             
                             onClick={(e)=>this.handleRemoveFromCart(e, item)}>
                              X</button></td>
                                
                            </tr>
                        )}
                       
                        </tbody>
                    </table>
                  
                </div>
                }
                <div className="col-md-12 text-right pt-3 pl-0 pr-0 d-column">
              <div>  <h5><span className="mr-2">Total:</span>$ {totalAmount}</h5></div>
              <div><CheckOut  total={totalAmount}/></div>
                </div>
                
           
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
  
    return{
       cartItems: state.cartItems.cartItems,
       totalAmount: state.cartItems.totalAmount
    }
  }

  const mapDispatchToProps=(dispatch)=>{
      return {
          removeCart: (document)=> {dispatch(removeCart(document))}
      }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);