const express = require("express");
const Post = require("../model/post"); // new
const router = express.Router();

// Get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ updatedDate: -1 });
    res.send({ posts: posts });
  } catch {
    (err) => console.log(err);
  }
});

// router.post("/add-comment", async (req, res) => {
//   try {
//     const data = req.body;
//     const post = new Post(data);

//     const insertPost = await post.save();

//     if (insertPost) console.log("Post created successfully", insertPost);

//     res.status(201).json(post);
//   } catch {
//     (err) => console.log(err);
//   }
// });

router.post("/create-post", async (req, res) => {
  try {
    const data = req.body;
    const post = new Post(data);

    const insertPost = await post.save();

    if (insertPost) console.log("Post created successfully", insertPost);

    res.status(201).json(post);
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
