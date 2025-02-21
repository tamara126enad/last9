import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { username, email, password, confirmPass, signup } from "../action";

function Signup() {

    const dispatch = useDispatch();
    const error = useSelector(state => state.register);

    const handleSubmit = () => {
        dispatch(signup());

    }


    return (
        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-3 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Register</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="/">
                                    Home
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                Register
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* ///////////////////////////////////////////// */}
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Register
                                            </p>
                                            <form className="mx-1 mx-md-4" onSubmit={() => handleSubmit()}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example1c">
                                                            Your Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                            onChange={(e) => dispatch(username(e.target.value))}
                                                            required
                                                        />
                                                        
                                                        <span>{error.usernameError}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example3c">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                            onChange={(e) => dispatch(email(e.target.value))}
                                                            required
                                                        />
                                                        
                                                        <span>{error.emailError}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example4c">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            onChange={(e) => dispatch(password(e.target.value))}
                                                            required
                                                        />
                                                        
                                                        <span>{error.passError}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example4cd">
                                                            Repeat your password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4cd"
                                                            className="form-control"
                                                            required
                                                            onChange={(e) => dispatch(confirmPass(e.target.value))}
                                                        />                                                       
                                                        <span>{error.confirmPassError}</span>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center ">

                                                    <p className="form-check-label text-dark" htmlFor="form2Example3">
                                                        Already have an account ?{" "}
                                                        <a href="/login"><strong>Login</strong></a>
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    {(error.usernameError || error.emailError || error.passError || error.confirmPassError)
                                                        ? <input type="submit" defaultValue="Sign up" disabled value={'Register'} style={{ color: '#252531', borderColor: "#252531", backgroundColor: "#b78d65", borderRadius: "5px" }} className="w-50 h-100 p-1" />
                                                        : <input type="submit" defaultValue="Sign up" style={{ color: '#252531', borderColor: "#252531", backgroundColor: "#b78d65", borderRadius: "5px" }} className="w-50 h-100 p-1" value={'Register'} />
                                                    }
                                                    {/* <button type="button" className="btn btn-primary btn-lg">
                                                        Register
                                                    </button> */}
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-7 col-lg-4 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Signup;