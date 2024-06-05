import gql from "graphql-tag";

export default gql`
  extend type Query {
    getManagers: [Manager!]!
  }

  extend type Mutation {
    createManager(
      manager_name: String!
      manager_phone: String
      manager_email: String
      manager_password: String!
      store_code: String
    ): Manager
    manager_signIn(manager_phone: String, manager_password: String!): Manager
  }
  type Manager {
    manager_password: String!
    manager_Id: ID!
    manager_name: String!
    manager_phone: String!
    manager_email: String!
    created_at: DateTime
    updated_at: DateTime
    role: Role
    store_code: String
  }
`;
