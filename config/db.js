import mongoose from 'mongoose'

const connectDB = async () => {
      //database connection
      try {
            const conn = await mongoose.connect(process.env.MONGODB_URL, {
                  // useUnifiedTopology: true,
                  // useNewUrlParser: true,
                  //useCreateIndex: true
            })
            //database connected alert
            console.log(`MongoDB Connected: ${conn.connection.host}`)
      } catch (error) {
            console.error(`Error: ${error.message}`) //database not connected message
            process.exit(1)
      }
}

export default connectDB  //exporting database