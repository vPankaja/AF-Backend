import  mongoose  from 'mongoose'

const studentSchema = mongoose.Schema({
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
    }
},
{
    timestamps: true,
})

studentSchema.methods.matchPassword = async function (enterPassword) {
    return enterPassword == this.password;
};
  
studentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
});

const Student = mongoose.model("Student", studentSchema);

export default Student;