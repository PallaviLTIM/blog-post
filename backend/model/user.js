const { json } = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  },
  { collection: "user" }
);

const myDB = mongoose.connection.useDb("blog-post-db");

module.exports = myDB.model("user", userSchema);
