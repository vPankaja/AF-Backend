const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  role: {
    type: String,
  },
  name: {
    type: String,
  },
  nicNo: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  }
});
const Admin = mongoose.model("Admin", UserSchema);

 module.exports = Admin;