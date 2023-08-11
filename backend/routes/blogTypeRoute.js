const express = require("express");
const BlogType = require("../model/blog-types");
const router = express.Router();

router.get("/blog-type", async (req, res) => {
  try {
    const blogType = await BlogType.find().sort({ updatedDate: -1 });
    res.send({ posts: blogType });
  } catch {
    (err) => console.log(err);
  }
});

router.post("/create-blog-type", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const blogType = new BlogType(data);

    const insertblogType = await blogType.save();

    if (insertblogType)
      console.log("Post created successfully", insertblogType);

    res.status(201).json(blogType);
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
