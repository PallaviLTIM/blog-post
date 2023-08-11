import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Post from "./Post";

const NewPosts = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const response = fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostData(() => data.posts);
        // console.log("Data", data.posts, "postData", postData);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log("Data1", postData);
  return (
    <>
      <Nav />
      {postData && postData.length > 0 ? (
        <>
          {postData.map((item) => (
            <Post item={item} />
          ))}
        </>
      ) : (
        <p>No Data Found</p>
      )}
    </>
  );
};
export default NewPosts;
