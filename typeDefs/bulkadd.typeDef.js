import Upload from "./upload.js";


const bulkAddTypeDef = `#graphql
    scalar Upload

    type ExcelData {
        title: String!
        firstName: String!
        middleName: String!
        lastName: String!
        mobile: String!
        aadharNumber: String!
        rollNumber: String!
        batchMonth: String!
        batchNo: String!
    }

    type Query {
        excelData: [ExcelData]
    }

    type Mutation {
        bulkAdd(input: [ContactInput!]!): [ExcelData]
    }

    input ContactInput {
        name: String!
        phone: String!
    }

`

export default bulkAddTypeDef;