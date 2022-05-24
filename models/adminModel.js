import  mongoose  from 'mongoose'

//Admin Database
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.methods.matchPassword = async function (enterPassword) {
  return enterPassword == this.password;
};

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin
