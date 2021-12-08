import React, { useContext } from 'react';
import viewIcon from '../../images/viewIcon.png'
import fb from '../../images/fb.png'
import google from '../../images/google.png'
import { UserContext } from '../../App';

const LoginForm = () => {
    const { loginState } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loginState;
    console.log("loggedin user", loggedInUser);
    const handleSignIn = () => {
        if (loggedInUser) {
            setLoggedInUser(false);
            // console.log(loggedInUser);
        } else {
            setLoggedInUser(true);
            // console.log(loggedInUser);
        }
    }
    return (
        <div>
            <div>
                <input type="text" className="formInput p-2 border w-100 bg-light" placeholder="email" />
                <div className="d-flex justify-content-between align-items-center pe-4 bg-light border-start border-end">
                    <input type="password" className="formInput p-2 border-0  bg-light" placeholder="password" />
                    <img src={viewIcon} alt="" height="10px" />
                </div>
            </div>
            <button data-bs-dismiss="modal" onClick={handleSignIn} className="w-100 rounded-pill bg-primary border-0 text-white my-3 py-2 fw-bold"><small>Sign In</small></button>
            <button className="w-100 border my-1 bg-transparent py-2"><img src={fb} alt="" /> <small className="ms-2">Signin with facebook</small></button>
            <button className="w-100 border my-1 bg-transparent py-2"><img src={google} alt="" /> <small className="ms-2">Signin with Google</small></button>
            <small className="d-block my-5 text-center"><a href="/">Forgot Password?</a></small>
        </div>
    );
};

export default LoginForm;