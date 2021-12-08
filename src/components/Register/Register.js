import React, { useContext } from 'react';
import loginBanner from '../../images/loginBanner.png'
import { UserContext } from '../../App';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

const Register = () => {
    const { registerState } = useContext(UserContext);
    const [isRegister, setIsRegister] = registerState;
    console.log("isregister", isRegister);
    const handleSignIn = () => {
        if (isRegister) {
            setIsRegister(false)
        }
        else {
            setIsRegister(true);
        }
    }
    return (
        <div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="text-center py-3" style={{ backgroundColor: "#EFFFF4" }}>
                            <small style={{ color: "#008A45", fontWeight: 500 }}> Let's learn, share and inspire each other with our passion for computer engineering. Sign up now <span className="text-warning">🤘🏼</span></small>
                            <span type="button" className="ms-5 bg-secondary text-white" style={{ height: "25px", width: "20px", borderRadius: "50%" }} data-bs-dismiss="modal">X</span>
                        </div>
                        <div className="px-4">
                            <div className="modal-header border-0">
                                <h5 className="modal-title fw-bold" id="exampleModalLabel">{isRegister ? "Create Account" : "Sign in"}</h5>
                                <small style={{ color: "#3D3D3D" }}><span className="d-none d-md-inline-block">{isRegister ? "Already have an account?" : "Don't have an account yet?"}</span>
                                    <span onClick={handleSignIn} className="text-primary ms-2" style={{ cursor: "pointer" }}>{isRegister ? "Sign in" : "Register"}</span></small>
                            </div>
                            <div className="modal-body border-0">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        {
                                            isRegister ? <RegisterForm /> : <LoginForm />
                                        }

                                    </div>
                                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                                        <div className="px-4">
                                            <img src={loginBanner} alt="" className="img-fluid" />
                                            <small style={{ fontSize: "12px" }}>By signing up, you agree to our Terms & conditions, Privacy policy</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;