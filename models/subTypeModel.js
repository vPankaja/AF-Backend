import mongoose from 'mongoose'

const subTypeSchema = mongoose.Schema({

      subName: {
            type: String,
            required: true
      },
      submissionType: {
            type: String,
            required: true
      },
      deadline: {
            type: String,
            required: true
      },
      explainST: {
            type: String,
            required: true
      },
}, {
      timestamps: true,
})

const SubType = mongoose.model('SubType', subTypeSchema)

export default SubType