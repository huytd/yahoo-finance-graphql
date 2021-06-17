import { gql } from "apollo-server"

export const typeDef = gql`
  type Historical {
    date: String
    open: Float
    high: Float
    low: Float
    close: Float
    adjClose: Float
    volume: Float
  }
`;

export const resolvers = {};
