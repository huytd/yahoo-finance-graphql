import { DataService } from './service';

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
  },
  TrendingSymbol: {
    quote: async (args: {
      symbol: string
    }) => {
      return await DataService.getQuote(args.symbol);
    }
  }
};
