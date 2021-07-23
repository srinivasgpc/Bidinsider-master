// getOrders.js
import * as Constants from "../../components/Common/Constants";
import {getOrdersPending, getOrdersSuccess, getOrdersError} from '../actions/getOrdersActions';

const getOrders = (data, token)=> {
  
    return dispatch => {
      
        dispatch(getOrdersPending());
        fetch(Constants.restAPIServerName+'/api/file/getuserfiles',  { 
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization':     `Bearer ${token}`
              
         }),
       body:  JSON.stringify(data),
        
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
          
            dispatch(getOrdersSuccess(res));
            return res.orders;
        })
        .catch(error => {
            dispatch(getOrdersError(error));
        })
    }
}

export default getOrders;