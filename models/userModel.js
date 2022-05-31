import  mongoose  from 'mongoose'

//User Database
const userSchema = mongoose.Schema(
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
    type: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enterPassword) {
  return enterPassword == this.password;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

});

const User = mongoose.model("User", userSchema);

export default User
