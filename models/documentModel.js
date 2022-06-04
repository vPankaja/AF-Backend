import mongoose from 'mongoose'

const documentSchema = mongoose.Schema({
      assignmentname: {
            type: String,
            required: true
      },
      document: {
            type: String,
            required: false
      },
}, {
      timestamps: true,
})

const Document = mongoose.model('Documents', documentSchema)

export default Document