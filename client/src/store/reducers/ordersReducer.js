
// reducer.js

import {GET_ORDERS_PENDING, GET_ORDERS_SUCCESS, GET_ORDERS_ERROR} from '../actions/getOrdersActions';

const initialState = {
    pending: false,
    orders: [],
    error: null
}

export default function documentsReducer(state = initialState, action) {
   
    switch(action.type) {
        case GET_ORDERS_PENDING: 
            return {
                ...state,
                pending: true,
                error:null
            }
        case GET_ORDERS_SUCCESS:
           
            return {
                ...state,
                pending: false,
                orders: action.payload
            }
        case GET_ORDERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                orders: []
            }
        default: 
            return state;
    }
}

