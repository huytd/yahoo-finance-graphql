import { gql } from "apollo-server"
import { DataService } from "../service";

export const typeDef = gql`
  type Query {
    quote(symbol: String): Quote
    autoComplete(query: String): [AutoCompelete]
    historicalData(symbol: String, from: String, to: String, interval: String): [Historical]
    trendingSymbols(count: Int): [TrendingSymbol]
  }
`;

export const resolvers = {
  Query: {
    quote: async (_parent: any, args: {
      symbol: string
    }) => {
      return await DataService.getQuote(args.symbol);
    },
    autoComplete: async (_parent: any, args: any) => {
      return await DataService.autoComplete(args);
    },
    historicalData: async (_parent: any, args: any) => {
      return await DataService.historicalData(args) ?? [];
    },
    trendingSymbols: async (_parent: any, args: {
      count: number
    }) => {
      return await DataService.trendingSymbols(args.count);
    }
  }
};