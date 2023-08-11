const { json } = require("express");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, require: true },
    postId: { type: String, require: true },
    createdDate: { type: Date, require: true },
    userId: { type: String, require: true },
    userName: { type: String, require: true },
    updatedDate: { type: Date, require: true },
  },
  { collection: "comment" }
);

const myDB = mongoose.connection.useDb("blog-post-db");

module.exports = myDB.model("comment", commentSchema);
