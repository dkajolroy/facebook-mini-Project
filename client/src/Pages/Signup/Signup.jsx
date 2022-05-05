import React from 'react'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import { registerAction } from '../../Redux/Actions/UserActions';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is Empty'),
    email: Yup.string().email('Invalid email').required('Email is empty'),
    username: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Username is empty'),
    gender: Yup.string()
        .required("Select your gender"),
    date: Yup.string()
        .required("Select you birth date"),
    password: Yup.string()
        .min(4, "Minimum 4 character")
        .max(60, "Too long")
        .required("Password is empty")
});


function SignUp() {

    // Submit Register
    const dispatch = useDispatch()
    const submitRegister = (e) => {
        dispatch(registerAction(e))
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-block">
                            <div className="d-flex justify-content-between">
                                <h3 className="modal-title" id="exampleModalLabel">Sign Up</h3>
                                <button style={{ fontSize: "30px", border: "none", background: '#fff' }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <span className='text-left d-flex'>It's quick and easy.</span>
                        </div>
                        <div className="modal-body">

                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    username: '',
                                    date: "",
                                    gender: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={values => submitRegister(values)}
                            >
                                {({ errors, touched, values }) => (

                                    <Form>
                                        {/* Name */}
                                        <div className="input_group">
                                            <Field className={`${errors.name && touched.name ? "is-invalid" : values.name == "" ? "" : "is-valid"} form-control mb-2`} type="text" name="name" placeholder='Full Name' />
                                            {errors.name && touched.name ? (
                                                <div className='error_filed'>
                                                    {errors.name}
                                                </div>
                                            ) : null}
                                        </div>
                                        {/* Email */}
                                        <div className="input_group">
                                            <Field className={`${errors.email && touched.email ? "is-invalid" : values.email == "" ? "" : "is-valid"} form-control mb-2`} type="text" name="email" placeholder='Email Address' />
                                            {errors.email && touched.email ? (
                                                <div className='error_filed'>
                                                    {errors.email}
                                                </div>
                                            ) : null}
                                        </div>
                                        {/* Username */}
                                        <div className="input_group">
                                            <Field className={`${errors.username && touched.username ? "is-invalid" : values.username == "" ? "" : "is-valid"} form-control mb-2`} type="text" name="username" placeholder='Username' />
                                            {errors.username && touched.username ? (
                                                <div className='error_filed'>
                                                    {errors.username}
                                                </div>
                                            ) : null}
                                        </div>
                                        {/* Data of Birth */}
                                        <div className="input_group ">
                                            <h6 style={{ textAlign: 'left', margin: '0' }}>Date of birth
                                                {errors.date && touched.date ? (
                                                    <div className='error_filed__option'>
                                                        {errors.date}
                                                    </div>
                                                ) : null}
                                            </h6>
                                            <Field className={`${errors.date && touched.date ? "is-invalid" : values.date == "" ? "" : "is-valid"} form-control mb-2`} type="date" name="date" />
                                        </div>
                                        {/* Gender */}
                                        <div className="input_group">
                                            <h6 style={{ textAlign: 'left', margin: '0' }}>Gender
                                                {errors.gender && touched.gender ? (
                                                    <div className='error_filed__option'>
                                                        {errors.gender}
                                                    </div>
                                                ) : null}
                                            </h6>

                                            <div className={`${errors.gender && touched.gender ? "required_field " : ""}gender_form d-flex mb-3`} style={{ textAlign: "left" }}>
                                                <div className="border d-flex w-25 justify-content-between px-2 py-2">
                                                    <label htmlFor='male'>Male</label>
                                                    <Field value="male" className='form-check ' type="radio" id="male" name="gender" />
                                                </div>
                                                <div className="border ms-2 d-flex w-25 justify-content-between px-2 py-2">
                                                    <label htmlFor="female">Female</label>
                                                    <Field value="female" className='form-check ' type="radio" id="female" name="gender" />
                                                </div>
                                                <div className="border ms-2 d-flex w-25 justify-content-between px-2 py-2">
                                                    <label htmlFor="other">Other</label>
                                                    <Field value="other" className='form-check ' type="radio" id="other" name="gender" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Password */}
                                        <div className="input_group">
                                            <Field className={`${errors.password && touched.password ? "is-invalid" : values.password == "" ? "" : "is-valid"} form-control mb-2`} type="password" name="password" placeholder='Password' />
                                            {errors.password && touched.password ? (
                                                <div className='error_filed'>
                                                    {errors.password}
                                                </div>
                                            ) : null}
                                        </div>
                                        <p style={{ fontSize: "12px", textAlign: "left" }}>
                                            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                                        </p>
                                        <button type='submit' className='btn text-light px-5 py-1' style={{ background: "rgb(23 175 23)", fontSize: "18px" }} to="/">Sign Up</button>
                                    </Form>
                                )}
                            </Formik>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp