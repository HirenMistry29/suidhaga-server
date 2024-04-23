const postTypeDef = `#graphql
    type Post {
        _id: ID!
        title: String!
        description: String!
        createdAt: String!
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!
    }

    type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
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
    }

    input postInput {
        title: String!
        description: String!
        createdAt: String!
    }
`
export default postTypeDef;

