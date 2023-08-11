import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import API_REGISTER_USER from "../../utils/Constants";

import { useFormik } from "formik";
import { signUpSchema } from "../../utils/Schema";

function SignUp() {
  //console.log(API_REGISTER_USER);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = JSON.stringify(values);
      //   console.log("formData", formData);
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: formData, // body data type must match "Content-Type" header
      })
        .then(() => {
          console.log("User created successfully");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });
  return (
    <>
      <div className="container-fluid vh-100" style={{ marginTop: "30px" }}>
        <div className="" style={{ marginTop: "20px" }}>
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
              <div className="text-center">
                <h3 className="text-primary">Sign Up</h3>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="p-4">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary">
                      <i className="bi bi-person-plus-fill text-white"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <span className="">{formik.errors.firstName}</span>
                  )}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary">
                      <i className="bi bi-person-plus-fill text-white"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <span className="">{formik.errors.lastName}</span>
                  )}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary">
                      <i className="bi bi-person-plus-fill text-white"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="">{formik.errors.email}</span>
                  )}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary">
                      <i className="bi bi-key-fill text-white"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <span className="">{formik.errors.password}</span>
                  )}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary">
                      <i className="bi bi-key-fill text-white"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <span className="">{formik.errors.confirmPassword}</span>
                    )}
                  <div className="input-group mb-3">
                    <button
                      className="btn btn-primary text-center mt-2 form-control"
                      type="submit"
                    >
                      SignUp
                    </button>
                  </div>
                  <span className="">
                    Already have an Account&nbsp;
                    <Link className="text-primary" to="/">
                      Sign In
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
