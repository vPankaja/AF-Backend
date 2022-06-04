import  mongoose  from 'mongoose'

const allocatePannelSchema = mongoose.Schema({
    groupId: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    pmember: {
        type: String,
        required: true
    },
})

const AllocatePannel = mongoose.model("AllocatePannel", allocatePannelSchema);

export default AllocatePannel;