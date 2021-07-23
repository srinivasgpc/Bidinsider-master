import Utils from "../../components/Common/Utils";
import {userSignOut} from '../actions/authActions';
export const signOut= ()=>{
   // console.log('Signed out');
 
    return (dispatch, getState)=>{
        Utils.deauthenticateUser();
        dispatch(userSignOut());

    }
}
export default signOut;