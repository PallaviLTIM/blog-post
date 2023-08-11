import React, { useState } from "react";
import { useFormik } from "formik";
import { commentSchema } from "../../utils/Schema";

const Post = (props) => {
  // console.log(props);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: commentSchema,
    onSubmit: async (values, { resetForm }) => {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("values", values);
      const date = new Date();
      values.createdDate = date;
      values.updatedDate = date;
      values.userId = user.userId;
      values.userName = user.username;
      // console.log(user.username);
      const formData = JSON.stringify(values);
      // console.log("formData", formData);
      const response = await fetch("http://localhost:5000/api/add-comment", {
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
  var dateFormat = new Date(props.item.createdDate);
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <span style={{ float: "left" }}>{props.item.userName}</span>
              <span style={{ float: "right" }}>
                {dateFormat.toDateString()}
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{props.item.postName}</h5>
              <p className="card-text">{props.item.postDetails}</p>
            </div>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <div className="row mt-3">
                <div className="col-md-10 ">
                  <input
                    type="hidden"
                    name="postId"
                    onChange={formik.handleChange}
                    value={(formik.values.postId = props.item._id)}
                  />
                  <textarea
                    className="form-control"
                    placeholder="Comment....."
                    rows="1"
                    name="comment"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                  ></textarea>
                </div>
                {formik.touched.comment && formik.errors.comment && (
                  <span className="">{formik.errors.comment}</span>
                )}
                <div className="col-md-2 ">
                  <button
                    type="submit"
                    className="form-control bg-primary"
                    placeholder=""
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Post;
