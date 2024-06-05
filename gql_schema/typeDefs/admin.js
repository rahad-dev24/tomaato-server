import gql from "graphql-tag";

export default gql`
  extend type Query {
    getAdmins: Admin
    getAllAdmins: [Admin]
  }

  extend type Mutation {
    createAdmin(
      admin_name: String!
      admin_phone: String
      admin_email: String
      admin_password: String!
    ): Admin
    admin_signIn(admin_phone: String, admin_password: String!): Admin
  }
  type Admin {
    admin_password: String!
    admin_Id: ID!
    admin_name: String!
    admin_phone: String!
    admin_email: String!




    created_at: DateTime
    updated_at: DateTime
    role: Role
  }
`;
