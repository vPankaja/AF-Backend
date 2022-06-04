import mongoose from "mongoose";

const documentSaveSchema = mongoose.Schema({
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

const DocumentSave = mongoose.model('DocumentSave', documentSaveSchema);

export default DocumentSave