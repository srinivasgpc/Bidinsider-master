// action.js

export const GET_ORDERS_PENDING = 'GET_ORDERS_PENDING';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR = 'GET_ORDERS_ERROR';

export const  getOrdersPending=()=> {
    return {
        type: GET_ORDERS_PENDING,
     
    }
}

export const  getOrdersSuccess=(orders)=> {
  
    return {
        type: GET_ORDERS_SUCCESS,
        payload: orders
    }
}

export const  getOrdersError=(error) =>{
    return {
        type: GET_ORDERS_ERROR,
        payload: error 
    }
}
