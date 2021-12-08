import React from 'react';
import viewIcon from '../../images/viewIcon.png'
import fb from '../../images/fb.png'
import google from '../../images/google.png'

const RegisterForm = () => {
    return (
        <div>
            <div>
                <div className="d-flex">
                    <input type="text" className="formInput p-2 border w-50 bg-light" placeholder="First name" />
                    <input type="text" className="formInput p-2 border w-50 bg-light" placeholder="Last name" />
                </div>
                <input type="text" className="formInput p-2 border w-100 bg-light" placeholder="email" />
                <div className="d-flex justify-content-between align-items-center pe-4 bg-light border-start border-end">
                    <input type="password" className="formInput p-2 border-0  bg-light" placeholder="password" />
                    <img src={viewIcon} alt="" height="10px" />
                </div>
                <input type="password" className="formInput p-2 border w-100 bg-light" placeholder="Confirm password" />
            </div>
            <button className="w-100 rounded-pill bg-primary border-0 text-white my-3 py-2 fw-bold"><small>Create Account</small></button>
            <button className="w-100 border my-1 bg-transparent py-2"><img src={fb} alt="" /> <small className="ms-2">Signup with facebook</small></button>
            <button className="w-100 border my-1 bg-transparent py-2"><img src={google} alt="" /> <small className="ms-2">Signup with Google</small></button>
        </div>
    );
};

export default RegisterForm;