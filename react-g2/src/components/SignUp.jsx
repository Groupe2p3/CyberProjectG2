import React from 'react';

//define a function 

const SignUp = () => {

    return (

<>
<div className="login">
    <div className="loginContainer">
        <label>Username</label>
        <input type="text" autoFocus required/>
        <label>Email</label>
        <input type="email" required/>
        <label>Password</label>
        <input type="password" required/>
        <label>Country</label>
        <input type="text" required/>
        <div className="btnContainer">
            <button>Register</button>
        </div>
    </div>
</div>

</>);

};

export default SignUp;