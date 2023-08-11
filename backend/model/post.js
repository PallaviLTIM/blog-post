const { json } = require("express");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postName: { type: String, require: true },
    postDetails: { type: String, require: true },
    postMedia: { type: String, require: true },
    createdDate: { type: Date, require: true },
    userId: { type: String, require: true },
    userName: { type: String, require: true },
    updatedDate: { type: Date, require: true },
  },
  { collection: "posts" }
);

const myDB = mongoose.connection.useDb("blog-post-db");

module.exports = myDB.model("post", postSchema);
