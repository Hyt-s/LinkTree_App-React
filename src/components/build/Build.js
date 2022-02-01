import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    userName: "",
};

const onSubmit = values => {
    console.log("values: ", values);
};

const validationSchema = Yup.object({
    name: Yup.string()
    .max(15,"Must be 15 characters or less")
    .required("Required. Enter name"),

    userName: Yup.string()
    .max(15,"Must be 15 characters or less")
    .required("Required. Enter username"),

    email: Yup.string()
    .email("Invalid email address")
    .required("Required. Enter email address"),

    link: Yup.string()
    .url("Invalid link address")
    .required("Required. Enter a link")
});


function SimpleRegister() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    
    return (
        <div className="container">
            <h1>Simple Form</h1>
            
            <form className="formStyle" onSubmit={formik.handleSubmit}>
                <label  htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
                {formik.touched.name && formik.errors.name ? <div className="errorStyle">{formik.errors.name}</div> : null}
                
                <label  htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
                {formik.touched.email && formik.errors.email ? <div className="errorStyle">{formik.errors.email}</div> : null}

                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" onChange={formik.handleChange} value={formik.values.userName} onBlur={formik.handleBlur}></input>
                {formik.touched.userName && formik.errors.userName ? <div className="errorStyle">{formik.errors.userName}</div> : null}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleRegister;