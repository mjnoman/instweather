const express = require("express");
const cors = require("cors");
const db = require("./db/connect");
const app = express();
const session = require("express-session");
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "abcd",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    resave: false,
  })
);
const User = require("./Models/user.js");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
/*
api/user/login
api/user/register
api/user/logout
api/user/deleteAccount

api/city/addCity
api/city/deleteCity
api/city/getCity
api/city/updateCity

api/icons/getIcon
*/

app.post("/api/user/register", async (req, res) => {
  console.log(req.body);
  let { email, name, password } = req.body;
  try {
    const res = new User({
      email,
      name,
      password,
    });
    console.log(res);
    res.save();
    console.log("User created", res);
  } catch (e) {
    console.log(e);
    return res.json({ status: "e" });
  }
  res.json({ status: "ok" });
});

app.post("/api/user/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await User.findByEmail({ email, password });
    if (user) return res.status(200).json({ result: user });
  } catch (e) {
    console.log("User not found!", e);
    return res.json({ status: "User doesn't exist" });
  }
});

app.post("/api/user/deleteAccount", async (req, res) => {
  let { username, name, password } = req.body;
  password = await bcrypt.hash(password, 10);
  try {
    User.findOneAndDelete({
      username,
      name,
      password,
    });
    console.log("User deleted!", res);
  } catch (e) {
    console.log("ERROR", e);
    return res.json({ status: "ERROR" });
  }
  res.json({ status: "deleted" });
});

app.patch("/api/city/addCity", async (req, res) => {
  console.log(req);
  return res.json({ status: 200 });
});

app.post("/api/user/logout", (req, res) => {
  req.session.destroy();
  return res.json({ status: "Logged out" });
});

app.listen(5000, () => {
  console.log(`Server up at ${PORT}`);
});
