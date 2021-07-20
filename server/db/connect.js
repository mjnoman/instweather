const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://mnoman:${process.env.clusterPSWD}@cluster0.h4ffi.mongodb.net/Cluster0?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
