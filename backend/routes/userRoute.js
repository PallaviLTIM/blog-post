const express = require("express");
const User = require("../model/user"); // new
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hsdjkfyasgjbxz bchjGFSdyuaiufshlkxncbxhjzgcyuasdyutw76e78362984ou2p3r7e9u32o4i213q";

// Get all posts
router.get("/user", async (req, res) => {
  try {
    //const users = await User.find();
    // res.send(users);
    res.send("Get method is called");
  } catch {
    (err) => console.log(err);
  }
});

router.get("/user-details/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findOne({ email: req.params.id });
    if (user) res.send(user);
    else res.send({ error: "User not found" });
  } catch {
    res.status(404).send({ error: "User doesn't exist!" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send("error: User Exists");
    }
    const encryptPassword = await bcryptjs.hash(password, 10);
    const data = { firstName, lastName, email, password: encryptPassword };
    const user = new User(data);

    const insertUser = await user.save();
    if (insertUser) console.log("User created successfully");

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  // console.log("email:", email, "password:", password);
  const user = await User.findOne({ email });

  if (!user) {
    res.json({ error: "User not found" });
  } else {
    if (await bcryptjs.compare(password, user.password)) {
      const token = jwt.sign({}, JWT_SECRET);
      const userId = user._id.toHexString();
      // console.log("token:", token);
      // console.log("res.status:", res.json() );
      //   console.log("token", res.status);
      //   if (res.status(200)) {
      //     return res.json({ status: "ok", data: token });
      //   } else {
      //     return res.json({ error: "error" });
      //   }
      // }
      // return res.json({ status: "error", error: "Invalid Password" });
      res.status(200).json({
        status: "ok",
        email: email,
        token: token,
        userId: userId,
        username: user.firstName,
      });
    } else {
      res.json({ status: "error", error: "Invalid Password" });
    }
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    await User.deleteOne({ email: req.params.id });
    res.status(204).send();
  } catch {
    (err) => console.log(err);
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

module.exports = router;
