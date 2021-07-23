import React, { Component } from 'react';

class Cart extends Component {
    render() {

        const {cartItems}= this.props;
        return (
            <div className="">
            <div className="alert alert-info ">
                {cartItems.length===0? "Cart is Empty": <div className="d-flex justify-content-between"><span > You have {cartItems.length} items </span><span><b>My Cart({cartItems.length})</b></span></div>} 
            </div>
                {cartItems.length>0 &&
                <div className="table-cart mt-3">
                    <table className="table text-center table-light">
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
                             <td>  <b>$ {(item.f_price) * (item.count)}</b></td> 
                             <td ><button className="btn btn-outline-danger btn-sm pad-new"
                             
                             onClick={(e)=>this.props.handleRemoveFromCart(e, item)}>
                              X</button></td>
                                
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        );
    }
}

export default Cart;