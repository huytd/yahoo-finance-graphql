import { gql } from "apollo-server"

export const typeDef = gql`
  type AutoCompelete {
    symbol: String
    name: String
    exch: String
    type: String
    exchDisp: String
    typeDisp: String
  }
`;

export const resolvers = {};
