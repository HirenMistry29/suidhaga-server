const EmployeeTypeDef = `#graphql
    type Employee {
        _id: String!
        title: String
        firstName: String
        middleName: String
        lastName: String
        mobile: String
        aadharNumber: String
        rollNumber: String
        batchMonth: String
        batchNo: String
    }
    type Query {
        getEmployee: [Employee!]!
    }
    type Mutation {
        addEmployee(employee: [EmployeeInput!]!): [Employee!]!
    }
    input EmployeeInput {
        title: String
        firstName: String
        middleName: String
        lastName: String
        mobile: String
        aadharNumber: String
        rollNumber: String
        batchMonth: String
        batchNo: String
    }

`

export default EmployeeTypeDef;