import { USER_SIGNIN_PENDING , USER_SIGNIN_SUCCESS , USER_SIGNIN_FAILED, USER_SIGNOUT } from '../actions/authActions.js';

const userDetails= JSON.parse(localStorage.getItem('user'));
let token= localStorage.getItem('token');
let isadmin= false;
let isLogged= false;
let getToken= null;




if(token && token !== "undefined"){
        isLogged= true;
        getToken= token;
        if(userDetails.isadmin){
                isadmin= userDetails.isadmin
        }
        
}
const initState = {
        authError: null,
        authUser:userDetails,
        isLogged: isLogged,
        token:  getToken,
        isadmin: isadmin,
        expire: localStorage.getItem('expire')
}

const authReducer = (state = initState, action) => {
  
        switch (action.type){
                case USER_SIGNIN_PENDING:
                       
                        return {
                                ...state,
                                authError: null,
                                isLogged: false,
                                isadmin: false
                        }
                case USER_SIGNIN_SUCCESS:
                        return {
                                ...state,
                                authError: null,
                                authUser: action.user,
                                isLogged: true,
                                isadmin: action.user.isadmin,
                                expire: new Date().getTime()
                             
                        }
                case USER_SIGNIN_FAILED:
             
                        return {
                                authError: action.error,
                                isLogged: false,
                                isadmin: false,
                                expire:null
                        }

                case USER_SIGNOUT:
                 return{
                          authError: null,
                          authUser: null,
                          isLogged: false,
                          isadmin: false,
                          token:null,
                          expire:null
                }
                default:
                        return state;
        }

}

export default authReducer;