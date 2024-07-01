import mongoose,{Schema} from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
    },
    description:{
        required: true,
        type: String,
    },
    createdAt:{
        type: String,
        required: true,
    },
    applications: [
        {
          body: String,
          username: String,
          createdAt: String
        }
      ],
      status: {
        type: String,
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      username:{
        type: Schema.Types.String,
        ref: 'users'
      }
},{timestamps: true})

const Job = mongoose.model('job',jobSchema);
export default Job;

