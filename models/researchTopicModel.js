import  mongoose  from 'mongoose'

const researchTopicSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true
    },
    supervisor: {
        type: String,
        required: true
    },
    coSupervisor: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const researchTopic = mongoose.model("researchTopic", researchTopicSchema);

export default researchTopic;