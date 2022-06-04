import  mongoose  from 'mongoose'

const allocatePanelSchema = mongoose.Schema({
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

const AllocatePanel = mongoose.model("AllocatePanel", allocatePanelSchema);

export default AllocatePanel;