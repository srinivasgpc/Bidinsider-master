

// action.js

export const USER_SIGNIN_PENDING = 'USER_SIGNIN_PENDING';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAILED = 'USER_SIGNIN_FAILED';
export const USER_SIGNOUT= 'USER_SIGNOUT';
 

export const  userSignInPending=()=> {
    
    return {
        type: USER_SIGNIN_PENDING,
      
    }
}

export const  userSignInSuccess=(user)=> {

    return {
        type: USER_SIGNIN_SUCCESS,
        user: user
    }
}

export const  userSignInFailed=(error) =>{
    console.log(error);
    return {
        type: USER_SIGNIN_FAILED,
        error:error
    }
}

export const userSignOut= ()=>{
    return {
        type: USER_SIGNOUT,
        user:{}
    }
};