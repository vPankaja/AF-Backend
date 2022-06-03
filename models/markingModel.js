import mongoose from 'mongoose'

const markingSchema = mongoose.Schema({
      moduleName: {
            type: String,
            required: true
      },
      assignmentName: {
            type: String,
            required: true
      },
      overallMark: {
            type: String,
            required: true
      },
      attachment: {
            type: String,
            required: false
      },
}, {
      timestamps: true,
})

const Marking = mongoose.model('Markings', markingSchema)

export default Marking