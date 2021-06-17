import { gql } from "apollo-server"
import { DataService } from "../../service";

export const typeDef = gql`
  type TrendingSymbol {
    symbol: String
    quote: Quote
  }
`;

export const resolvers = {
  TrendingSymbol: {
    quote: async (args: {
      symbol: string
    }) => {
      return await DataService.getQuote(args.symbol);
    }
  }
};