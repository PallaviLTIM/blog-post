import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../../utils/Schema";
import { useDispatch } from "react-redux";

function SignIn() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values, { resetForm }) => {
      // alert("test");
      const formData = JSON.stringify(values);
      // console.log(values);
      const { email, password } = values;

      const response = await fetch("http://localhost:5000/api/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      if (data) {
        if (data.status == "ok") {
          localStorage.setItem("user", JSON.stringify(data));
          // console.log("data", data.email);
          // const payload = {
          //   email: email,
          // };
          // dispatch({ type: "ADD_USER", payload: payload });
          navigate("/profile");
        }
      }
      // console.log("res1", data.data);

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
                <h3 className="text-primary">Sign In</h3>
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
                      placeholder="Username"
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
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Remember Me
                    </label>
                  </div> */}
                  <div className="input-group mb-3">
                    <button
                      className=" form-control btn btn-primary text-center mt-2 "
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-center mt-0">
                    <span className="text-primary">
                      <Link to="/signup">Sign Up</Link>
                    </span>
                    &nbsp;|&nbsp;
                    <span className="text-primary">Forgot</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
