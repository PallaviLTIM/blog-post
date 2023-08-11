import React, { useState } from "react";
import Nav from "./Nav";

import { useFormik } from "formik";
import { postSchema } from "../../utils/Schema";
const MyPosts = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      postName: "",
      postDetails: "",
      postMedia: "",
    },
    validationSchema: postSchema,
    onSubmit: async (values, { resetForm }) => {
      const user = JSON.parse(localStorage.getItem("user"));
      // console.log(user);
      const date = new Date();
      values.createdDate = date;
      values.updatedDate = date;
      values.userId = user.userId;
      values.userName = user.username;

      const formData = JSON.stringify(values);
      console.log("formData", formData);
      const response = await fetch("http://localhost:5000/api/create-post", {
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
      // console.log("data", data);

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });
  return (
    <>
      <Nav />
      {/* <Slider></Slider> */}

      <div className="container-fluid vh-100" style={{ marginTop: "30px" }}>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="row mt-5">
            <div className="col-md-4"></div>
            <div className="col-md-5 ">
              <input
                type="text"
                className="form-control"
                placeholder="Post"
                name="postName"
                onChange={formik.handleChange}
                value={formik.values.postName}
              />
            </div>
            <div className="col-md-3">
              {formik.touched.postName && formik.errors.postName && (
                <span className="">{formik.errors.postName}</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4"></div>
            <div className="col-md-5 ">
              <textarea
                className="form-control"
                placeholder="Post Details"
                rows="3"
                name="postDetails"
                onChange={formik.handleChange}
                value={formik.values.postDetails}
              ></textarea>
            </div>
            <div className="col-md-3">
              {formik.touched.postDetails && formik.errors.postDetails && (
                <span className="">{formik.errors.postDetails}</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4"></div>
            <div className="col-md-5 ">
              <input
                type="file"
                className="form-control-file"
                placeholder=""
                name="postMedia"
                accept="image/*"
                onChange={formik.handleChange}
                value={formik.values.postMedia}
              />
            </div>
            <div className="col-md-3 ">
              {formik.touched.postMedia && formik.errors.postMedia && (
                <span className="">{formik.errors.postMedia}</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4"></div>
            <div className="col-md-5 ">
              <button
                type="submit"
                className="form-control bg-primary"
                placeholder=""
              >
                Save Post
              </button>
            </div>
            <div className="col-md-3 "></div>
          </div>
        </form>
      </div>
    </>
  );
};
export default MyPosts;
