import  mongoose  from 'mongoose'

const studentGroupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    member1: {
        type: String,
        required: true
    },
    member2: {
        type: String,
        required: true
    },
    member3: {
        type: String,
        required: true
    },
    member4: {
        type: String,
        required: true
    },
})

const StudentGroup = mongoose.model("StudentGroup", studentGroupSchema);

export default StudentGroup;