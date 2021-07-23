import {userSignInPending, userSignInSuccess, userSignInFailed} from '../actions/authActions';

import * as Constants from "../../components/Common/Constants";
import Utils from "../../components/Common/Utils";

export  const signInUser = (data) => {
    return (dispatch, getState) => {
      dispatch(userSignInPending())
        Constants.axios
            .post(Constants.restAPIServerName + "/api/user/verify-login", data)
            .then(res => {
                  Utils.authenticateUser(res.data[0]);

                    const user=res.data[0];
             
                    if(user.error){
                      dispatch(userSignInFailed(user.error));
                    }
                    else{
                    dispatch(userSignInSuccess(user))}
                      // - redirect to the route '/isauthenticated'
              
            }).catch((err)=>{
             dispatch(userSignInFailed(err));
            })
    };
};

export default signInUser;