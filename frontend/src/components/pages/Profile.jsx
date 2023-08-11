import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Nav from "./Nav";
import "../../assets/css/profile.css";
import profile_img from "../../assets/img/profile-img.jpg";

const Profile = () => {
  const [userData, setUserData] = useState({});
  // let user_data = useSelector((state) => state.user_data);
  // const { email } = useSelector((state) => state.user_data);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    try {
      const url = "http://localhost:5000/api/user-details/" + user.email;
      fetch(url, {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={profile_img} className="img-thumbnail" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="mb-3 row">
              <span className="col-sm-4">
                <b></b>
              </span>
              <div className="col-sm-8">
                <span className="col-sm-2"></span>
              </div>
            </div>
            <div className="mb-3 row">
              <span className="col-sm-4">
                <b></b>
              </span>
              <div className="col-sm-8">
                <span className="col-sm-2"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <span className="col-sm-4">
                <b>First Name</b>
              </span>
              <div className="col-sm-8">
                <span className="col-sm-2">{userData?.firstName}</span>
              </div>
            </div>
            <div className="mb-3 row">
              <span className="col-sm-4">
                <b>Last Name</b>
              </span>
              <div className="col-sm-8">
                <span className="col-sm-2">{userData?.lastName}</span>
              </div>
            </div>
            <div className="mb-3 row">
              <span className="col-sm-4">
                <b>Email</b>
              </span>
              <div className="col-sm-8">
                <span className="col-sm-2">{userData?.email}</span>
              </div>
            </div>
            {/* <div className="mb-3 row">
              <span className="col-sm-4">
                <b>Name</b>
              </span>
              <div className="col-sm-8">
                <span className="col-sm-2">Email</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
