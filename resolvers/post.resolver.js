import Post from "../models/post.model.js";

const postResolver = {
    Mutation: {
        createPost:async (_,{input},context) =>{
            const user = await context.getUser();
            console.log(user);
            const {title , description , createdAt } = input;
            try {
                if (!title || !description || !createdAt) {
                    throw new Error(`All fields are required`);
                }
                if(user){
                    const newPost= new Post({
                        title,
                        description,
                        createdAt,
                        user: user.id,
                        username: user.username,
                    });
                    await newPost.save();
                    return newPost; 
                }
                if (!user) {
                    throw new Error(`User Not Found`)
                }
            } catch (error) {
                console.log(error)
                throw new Error(err.message || "Internal server error");
            }
        },
        deletePost:async (_,{postId},context) => {
            const user = context.getUser();
            // console.log(user.username);
            try {
                const post = await Post.findById(postId)
                console.log(post);
                // console.log(post.username);
                await post.delete();
                return `post deleted successfully`
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
        posts:async () =>{
            try{
              const posts = await Post.find();
              return posts;
            }catch(error){
              console.log(error);
              throw new Error("Internal server error");
            }
          }
    }
}

export default postResolver;