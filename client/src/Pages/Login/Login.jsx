import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUp from '../Signup/Signup'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import { LoginAction } from '../../Redux/Actions/UserActions';

const SignupSchema = Yup.object().shape({
    emailOrUsername: Yup.string()
        .min(4, "Invalid email or username")
        .required('Email/Username is Empty !!'),
    password: Yup.string()
        .min(4, 'Minimum 4 character!')
        .max(50, 'Too Long!')
        .required('Password is Empty !!')
});
function Login() {

    const navigate = useNavigate()
    const user = useSelector(x => x.userLogin.loginInfo)
    // Summit Form
    const dispatch = useDispatch()
    const submitLogin = (e) => {
        dispatch(LoginAction(e))
    }

    // Navigate User
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="login_page" style={{ background: "rgb(239 239 239)", height: "100vh" }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-md-center">
                    <div className="col-lg-7 mb-5 col-md-8 col-md-5 text-logo ">

                        <h2 style={{ fontSize: "50px", fontWeight: "bold" }} className="text-primary">Facebook</h2>
                        <h3 className="text-dark">Connect with friends and the <br /> world around you on facebook</h3>

                    </div>
                    <div className="col-md-8 col-lg-5 animate__heartBeat" >
                        <div style={{ borderRadius: '10px' }} className="login__form bg-light border px-3 shadow-lg pb-3">


                            <Formik
                                initialValues={{
                                    emailOrUsername: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={values => submitLogin(values)}
                            >
                                {({ errors, touched, values }) => (

                                    <Form>

                                        <div className="input_group">
                                            <Field style={{ padding: "10px 10px", fontSize: "18px" }}
                                                className={`${errors.emailOrUsername && touched.emailOrUsername ? "is-invalid" : values.emailOrUsername == "" ? "" : "is-valid"} border text-dark my-3  rounded form-control `}
                                                type="text" name="emailOrUsername" placeholder='Email or Username' />

                                            {errors.emailOrUsername && touched.emailOrUsername ? (
                                                <div className='error_filed'>
                                                    {errors.emailOrUsername}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="input_group">
                                            <Field style={{ padding: "10px 10px", fontSize: "18px" }}
                                                className={`${errors.password && touched.password ? "is-invalid" : values.password == "" ? "" : "is-valid"} border text-dark my-3  rounded form-control `}
                                                type="password" name="password" placeholder='Password' />

                                            {errors.password && touched.password ? (
                                                <div className='error_filed'>
                                                    {errors.password}
                                                </div>
                                            ) : null}
                                        </div>
                                        <Field style={{ padding: "10px 10px", fontSize: "22px" }} className='border bg-primary text-light my-3  rounded form-control' type="submit" value="Log In" />

                                    </Form>
                                )}
                            </Formik>


                            <div className="form_label_config text-center">
                                <Link className='text-decoration-none h6' to="/">Forget Password?</Link>
                                <hr />
                                <button data-toggle="modal" data-target="#exampleModal" className='btn text-light px-5 py-2' style={{ background: "rgb(23 175 23)", fontSize: "20px" }} to="/">Create Account</button>
                                <SignUp />
                            </div>

                        </div>
                        <div className="optional__created-to text-center">
                            <p className='my-3'><Link className='text-decoration-none text-dark' to="/"><strong>Create Page</strong></Link> for a celebrity, brand or business</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login