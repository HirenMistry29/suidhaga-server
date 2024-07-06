const JobTypeDef = `#graphql
    type Job {
        _id: ID!
        title: String!
        description: String!
        createdAt: String!
        applications: [Application]!
        status: String
        color: String
        size: String
        quantity: Int
        amount: Int
        image: String
        name:String
    }

    type Application {
    id: ID!
    createdAt: String!
    username: String!
    }

    type Query{
        jobs: [Job]
        job(id: ID!): Job
        jobByUserID(id:ID!): [Job]
    }

    type Mutation {
        createJob(input: jobInput!) : Job
        deleteJob(jobId: ID!): String!
        updateJobStatus(jobId: ID!, status: String!): Job
    }

    input jobInput {
        title: String!
        description: String!
        createdAt: String!
        color: String
        size: String
        quantity: Int
        amount: Int
        image: String
    }
`
export default JobTypeDef;

