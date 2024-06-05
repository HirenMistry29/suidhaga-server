import Post from "../models/post.model.js";
import CommentModel from "../models/comment.model.js";

const commentResolver = {
    Mutation : {
        createComment:async (_,{input},context)=>{
            const user = await context.getUser();
            console.log(user);
            const {body , postId} = input;
            if(body.trim()===''){
                console.log(`Empty Body`);
                throw new Error(`Body should not be empty`)
            }

            const post = await Post.findById(postId);

            if (post) {
                const newComment = new CommentModel({
                    postId,
                    body,
                    username : user.username,
                    createdAt: new Date().toISOString()
                  });
                  await newComment.save();

                //   await Post.findByIdAndUpdate(
                //     postId,
                //     { $push: { comments: newComment.toObject() } }, // Add the new comment's ID to the comments array
                //     { new: true } // Return the updated post document
                //   );
                post.comments.push(newComment);
                await post.save();

                  return newComment;

            }else {throw new Error('Post not found');}
        },
    }
}

export default commentResolver;