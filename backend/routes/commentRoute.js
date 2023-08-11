const express = require("express");
const Comment = require("../model/comment"); // new
const router = express.Router();

// Get all posts
router.get("/comments/:id", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id }).sort({
      createdDate: -1,
    });
    console.log(req.params.id);
    res.send({ comments: comments });
  } catch {
    (err) => console.log(err);
  }
});

router.post("/add-comment", async (req, res) => {
  try {
    const data = req.body;
    const comment = new Comment(data);

    const insertComment = await comment.save();

    if (insertComment)
      console.log("Comment created successfully", insertComment);

    res.status(201).json(comment);
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
