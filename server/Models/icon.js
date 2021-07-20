const mongoose = require("mongoose");

const iconSchema = new mongoose.Schema({
  weatherID: { type: int, require: true, unique: true },
  iconID: { type: String, require: true, unique: true },
});

const Icon = mongoose.model("Icon", iconSchema);

module.exports = icon;
