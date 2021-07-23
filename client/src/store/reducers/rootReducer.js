import authReducer from './authreducer';
import projectReducer from './projectReducer';
import documentsReducer from './_reducers';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';
import {combineReducers} from 'redux';
// import Utils from '../../components/Common/Utils';

const rootReducer=  combineReducers({
auth: authReducer,
upload: projectReducer,
documents: documentsReducer,
cartItems: cartReducer,
orders: ordersReducer

});

export default rootReducer;