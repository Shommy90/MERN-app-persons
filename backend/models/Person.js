const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Person", PersonSchema);
