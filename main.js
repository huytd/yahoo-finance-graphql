const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');
const YahooFinance = require('yahoo-finance2').default;

const typeDefs = readFileSync('./schema.graphql').toString('utf-8');
const schema = buildSchema(typeDefs);

const root = {
  quote: async ({ symbol }) => {
    return await YahooFinance.quote(symbol, null, { validateResult: false })
  },
  autoComplete: async ({ query }) => {
    const result = await YahooFinance.autoc(query);
    return result?.Result || [];
  },
  historicalData: async ({ symbol, from, to = "", interval = "1d" }) => {
    const result = await YahooFinance.historical(symbol, {
      period1: from,
      period2: to,
      interval,
      includeAdjustedClose: true
    });
    return result || [];
  },
  trendingSymbols: async ({ count = 5, withQuote = false }) => {
    const result = await YahooFinance.trendingSymbols('US', {
      count
    });
    return result?.quotes.map(async t => ({
      symbol: t.symbol,
      quote: withQuote ? await YahooFinance.quote(t.symbol, null, { validateResult: false }) : null
    })) || [];
  }
}

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

const PORT = 4000;
app.listen(PORT);
console.log(`Server is running at :${PORT}`);
