import gql from "graphql-tag";

export default gql`
  extend type Query {
    stores: [Store!]!
    store(store_Id: String!): Store
  }
  extend type Mutation {
    createStore(
      store_name: String!
      store_email: String
      store_area: Area
      store_code: String
    ): Store
  }
  type Store {
    store_Id: ID!
    store_name: String!
    store_email: String
    store_code: String
    store_area: Area
    Purchase: [Purchase!]!
  }
`;
