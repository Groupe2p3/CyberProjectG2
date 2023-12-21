import React from 'react';

//define a function 

const Login = () => {

    return (

<>
<div className="login">
    <div className="loginContainer">
        <label>Email</label>
        <input type="text" autoFocus required/>
        <label>Password</label>
        <input type="password" required/>
        <div className="btnContainer">
            <button>Log in</button>
        </div>
    </div>
</div>

</>);

};

export default Login;