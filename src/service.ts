import YahooFinance from 'yahoo-finance2';

export const DataService = {
  getQuote: async (symbol: string) => {
    return await YahooFinance.quote(symbol, {}, { validateResult: false });
  },
  autoComplete: async (args: {
    query: string
  }) => {
    const result = await YahooFinance.autoc(args.query);
    return result?.Result ?? [];
  },
  historicalData: async (args: {
    symbol: string,
    from: string,
    to: string,
    interval: "1d" | "1wk" | "1mo"
  }) => {
    const result = await YahooFinance.historical(args.symbol, {
      period1: args.from,
      period2: args.to,
      interval: args.interval,
      includeAdjustedClose: true
    });
    return result || [];
  },
  trendingSymbols: async (count: number) => {
    const result = await YahooFinance.trendingSymbols('US', { count });
    return result.quotes || [];
  }
};
