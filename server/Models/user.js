const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  name: { type: String, requrie: true },
  password: { type: String, require: true },
  cities: [String],
});

userSchema.statics.findByEmail = async (userInfo) => {
  try {
    console.log(userInfo);
    const user = await User.findOne({ email: userInfo.email });
    if (!user) throw "User not found";
    const password = userInfo.password == user.password;
    if (!password) throw "Incorrect Password";
    return user;
  } catch (e) {
    throw e;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
