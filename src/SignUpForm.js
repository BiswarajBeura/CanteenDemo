import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./style.css"
const SignUpForm = () => (
  <div className="sign-up">
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),

      passwordConfirm: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      )
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
         
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
         
          <input
            name="passwordConfirm"
            type="password"
            placeholder="Confirm your Password"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.passwordConfirm && touched.passwordConfirm && "error"
            }
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div className="input-feedback">{errors.passwordConfirm}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            SignUp
          </button>
        </form>
      );
    }}
  </Formik>
  </div>
);

export default SignUpForm;
