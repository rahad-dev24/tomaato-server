import gql from "graphql-tag";

export default gql`
  extend type Query {
    getCeos: [Ceo!]!
  }

  extend type Mutation {
    createCeo(
      ceo_name: String!
      ceo_phone: String
      ceo_email: String
      ceo_password: String!
    ): Ceo
    ceo_signIn(ceo_phone: String, ceo_password: String!): Ceo
  }
  type Ceo {
    ceo_password: String!
    ceo_Id: ID!
    ceo_name: String!
    ceo_phone: String!
    ceo_email: String!
    created_at: DateTime
    updated_at: DateTime
    role: Role
  }
`;
