const userTypeDef = `#graphql
  type User {
    _id: ID!
    userType: String!
    username: String!
    email: String!
    password: String!
    phone: String!
    # profilePicture: String
    # gender: String!
    # transactions: [Transaction!]
  }

  type Query {
    users: [User]
    authUser: User
    user(userId:ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
    phone: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDef;
