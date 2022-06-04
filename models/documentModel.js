import mongoose from "mongoose";

const documentSchema = mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    researchName: {
        type: String,
        required: true
    },
    documentName: {
        type: String,
        required: true
    },
    attachment: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
})

const Document = mongoose.model('Document', documentSchema);

export default Document