import React, { Component } from 'react';
import mapUserFile from '../../store/apiCalls/mapUserFile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import getOrders from '../../store/apiCalls/getOrders';
import {
    addDocument
} from '../../store/actions/cartActions';
class DisplayDoc extends Component {
constructor(props){
super(props)

this.handleAddToCart = this.handleAddToCart.bind(this);

}
componentWillMount(){
    var obj= {};
   
    if(this.props.auth.authUser !== null){
        var token=this.props.auth.authUser.token;
    obj.userid= parseInt(this.props.auth.authUser.userid);
    if(obj.userid!== null){
    this.props.getOrders(obj, token);
      }
   }
   this.setState({modal:false})
}
 handleAddToCart(e, document) {
     let id= e.target.getAttribute('data-key');
     let orders= this.props.orders;
    if(this.props.token !=="null"){
        let isFound= false;
        for(let i=0; i<orders.length; i++){
            if(orders[i].fileid=== id){
                isFound= true;
                break;
            }

        }
        if(!isFound){
            console.log('add to cart');
            this.props.addDocument(document);  
        }
        else{
            alert( "You have already purchased this document. Please go to My Orders section to download it again");
        }
        
        // this.props.addDocument(document);
    }
    else{
     alert('Please Sign-In or Sign-Up before you can add a document to the cart')
         
      
    }
}
    handleFreeCart(e, d){
        if(this.props.token==="null"){
            alert('Please Sign-In or Sign-Up to download the document')
        }
        else{
        let obj= {};
             if(this.props.auth.authUser){
                 obj.userid= parseInt(this.props.auth.authUser.userid);
                 obj.email=this.props.auth.authUser.email;
            }
                obj.fileid= parseInt(d.fileid);
                obj.f_sol_number= d.f_sol_number;
                obj.f_price= d.f_price;

            this.props.mapUserFile(obj, this.props.token);
              if( window.confirm("Please confirm to download")){ 
                this.props.history.push('/myorders');}
            }
        
    }

    renderDocs(){
      
        return this.props.documents.map( document => {
           
            return (
               <tr key={document.fileid}>
                  <td>{document.f_sol_number}</td>
                  <td>{document.f_set_aside_status}</td>
                  <td>{document.f_fac_clear}</td>   
                  <td  > <button className="desc-butt" title="Click to view File Description" onClick={(e)=> this.props.handleShowChange(e, document)}>{document.f_con_title}</button></td>
                  <td className="text-nowrap">{parseInt(document.f_price)>0? '$ '+ parseInt(document.f_price): 'Free' }</td>
                     {!this.props.isadmin ?
                      ((parseInt(document.f_price)>0) ? 
                        (<td><input className="btn btn-primary" type="button" onClick={(e)=>this.handleAddToCart(e, document)} data-key={document.fileid} value="Add to cart"/> </td>)
                        :( <td><button onClick={(e)=>this.handleFreeCart(e, document)} className="btn btn-primary">Download</button></td>))
                        
                        :  <td ><button className="btn btn-danger" onClick={(e)=>this.props.deleteDocument(e, document)}>Delete</button></td>}

              
                 </tr>
            )
         })
    }
    renderNodocs(){
        return(
            <tr>
            <td colSpan='6'  className="text-center">
               No Documents
            </td>
            </tr>
        )
    }
    render() {
     return(
        (this.props.documents.length > 0) ? this.renderDocs()  : this.renderNodocs()
         
    )     
    }


}

const mapStateToProps=(state)=>{
//  console.log(state);
    return{
        auth: state.auth,
        orders: state.orders.orders
    }
  }

  const mapDispatchToProps= (dispatch)=>{
    return{
        addDocument: (document)=>{dispatch(addDocument(document))},
        mapUserFile: (document, token)=> {dispatch(mapUserFile(document, token))},
        getOrders:(obj, token)=>{dispatch(getOrders(obj, token))}
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(DisplayDoc));

