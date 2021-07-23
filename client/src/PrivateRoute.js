import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props)=>(
        isLogged ? (
            <Component {...props}/> 
        ): (
            <Redirect to="/signin" />
        )

    )}/>
);

const mapStateToProps=(state) =>{
  
return{
    isLogged: !!state.auth.isLogged
};
}

export default connect(mapStateToProps)(PrivateRoute);


