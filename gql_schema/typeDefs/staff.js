import gql from "graphql-tag";

export default gql`
  extend type Query {
    getStaffs: [Staff!]!
  }

  extend type Mutation {
    createStaff(
      staff_name: String!
      staff_phone: String
      staff_email: String
      staff_password: String!
      store_code: String
    ): Staff
    staff_signIn(staff_phone: String, staff_password: String!): Staff
  }
  type Staff {
    staff_password: String!
    staff_Id: ID!
    staff_name: String!
    staff_phone: String!
    staff_email: String!
    created_at: DateTime
    updated_at: DateTime
    role: Role
    store_code: String
  }
`;
