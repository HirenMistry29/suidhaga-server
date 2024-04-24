import Job from "../models/job.model.js";

const jobResolver = {
    Mutation: {
        createJob:async (_,{input},context) =>{
            const user = await context.getUser();
            console.log(user);
            const {title , description , createdAt } = input;
            try {
                if (!title || !description || !createdAt) {
                    throw new Error(`All fields are required`);
                }
                if(user){
                    const newJob= new Job({
                        title,
                        description,
                        createdAt,
                        user: user.id,
                        username: user.username,
                    });
                    await newJob.save();
                    return newJob; 
                }
                if (!user) {
                    throw new Error(`User Not Found`)
                }
            } catch (error) {
                console.log(error)
                throw new Error(err.message || "Internal server error");
            }
        },
        deleteJob:async (_,{postId},context) => {
            const user = context.getUser();
            // console.log(user.username);
            try {
                const job = await Job.findById(postId)
                console.log(job);
                // console.log(post.username);
                await job.delete();
                return `job deleted successfully`
                // if (post.username === user.username) {
                //     await post.delete();
                //     return `post deleted successfully`
                // }else{
                //     throw new Error(`Action not allowed`)
                // }
            } catch (error) {
                console.log(error.message);
                throw new Error(error);
            }
        }
    },
    Query: {
        jobs:async () =>{
            try{
              const jobs = await Job.find();
              return jobs;
            }catch(error){
              console.log(error);
              throw new Error("Internal server error");
            }
          }
    }
}

export default jobResolver;