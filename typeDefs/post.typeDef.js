const postTypeDef = `#graphql
    type Post {
        _id: ID!
        postId:String
        title: String!
        description: String!
        username: String!
        body: String
        createdAt: String!
        comments: [Comment]
        likes: [Like]
        likeCount: Int
        commentCount: Int
    }

    type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
    postId: String
    }

    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }

    type Query{
        posts: [Post]
    }

    type Mutation {
        createPost(input: postInput!) : Post
        deletePost(postId: ID!): String!
        createComment(input: commentInput!): Comment

    }

    input postInput {
        title: String!
        description: String!
        createdAt: String!
    }

    input commentInput{
        body: String!
        postId: ID!
    }

`
export default postTypeDef;

