import { gql } from "apollo-server"

export const typeDef = gql`
  type RegularMarketDayRange {
    low: Float
    high: Float
  }

  type FiftyTwoWeekRange {
    low: Float
    high: Float
  }

  type Quote {
    language: String
    region: String
    quoteType: String
    quoteSourceName: String
    triggerable: Boolean
    currency: String
    tradeable: Boolean
    regularMarketPreviousClose: Float
    ask: Float
    bidSize: Int
    askSize: Int
    fullExchangeName: String
    financialCurrency: String
    regularMarketOpen: Float
    averageDailyVolume3Month: Int
    averageDailyVolume10Day: Int
    fiftyTwoWeekLowChange: Float
    fiftyTwoWeekLowChangePercent: Float
    fiftyTwoWeekHighChange: Float
    fiftyTwoWeekHighChangePercent: Float
    fiftyTwoWeekLow: Float
    fiftyTwoWeekHigh: Float
    earningsTimestamp: String
    earningsTimestampStart: String
    earningsTimestampEnd: String
    trailingPE: Float
    epsTrailingTwelveMonths: Float
    epsForward: Float
    epsCurrentYear: Float
    priceEpsCurrentYear: Float
    sharesOutstanding: Float
    bookValue: Float
    fiftyDayAverage: Float
    fiftyDayAverageChange: Float
    fiftyDayAverageChangePercent: Float
    twoHundredDayAverage: Float
    twoHundredDayAverageChange: Float
    twoHundredDayAverageChangePercent: Float
    marketCap: Float
    forwardPE: Float
    priceToBook: Float
    sourceInterval: Int
    exchangeDataDelayedBy: Int
    averageAnalystRating: String
    firstTradeDateMilliseconds: String
    priceHint: Int
    postMarketChangePercent: Float
    postMarketTime: String
    postMarketPrice: Float
    postMarketChange: Float
    regularMarketChange: Float
    regularMarketChangePercent: Float
    regularMarketTime: String
    regularMarketPrice: Float
    regularMarketDayHigh: Float
    regularMarketDayLow: Float
    regularMarketVolume: Int
    bid: Float
    marketState: String
    exchange: String
    shortName: String
    longName: String
    messageBoardId: String
    exchangeTimezoneName: String
    exchangeTimezoneShortName: String
    gmtOffSetMilliseconds: Int
    market: String
    esgPopulated: Boolean
    displayName: String
    symbol: String
    regularMarketDayRange: RegularMarketDayRange
    fiftyTwoWeekRange: FiftyTwoWeekRange
  }
`;

export const resolvers = {};