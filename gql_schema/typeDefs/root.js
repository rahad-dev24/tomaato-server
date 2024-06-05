import gql from "graphql-tag";

export default gql`
  scalar Upload
  scalar DateTime
  enum Area {
    savar
    uttora
    DEPZ
  }
  enum PayMethod {
    Cash
    Bkash
    CreditCard
  }
  enum Role {
    customer
    admin
    staff
    manager
    ceo
  }
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
