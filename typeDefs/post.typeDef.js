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
        image: String

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
        getComments(postId: ID!): [Comment]
        getPostComments(postId: ID!, offset: Int, limit: Int): [Comment!]
        getPostById(accountId: ID!): [Post]
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
        image: String!
    }

    input commentInput{
        postId: ID!
        body: String!
    }

`
export default postTypeDef;

