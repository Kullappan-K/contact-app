import React from 'react';

import { Redirect } from 'react-router-dom';

const Login = () => {

    return (
        <div>
        <Redirect to={'/home?name=Alex'}></Redirect>
        </div>
    );
    
}
export default Login;