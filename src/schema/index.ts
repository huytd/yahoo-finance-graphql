import { typeDef as Trending, resolvers as trendingResolvers } from "./types/trending";
import { typeDef as Historical, resolvers as historicalResolvers } from "./types/historical";
import { typeDef as Quote, resolvers as quoteResolvers } from './types/quote';
import { typeDef as AutoCompelete, resolvers as autocompleteResolvers } from './types/autocomplete';
import { typeDef as Query, resolvers as queryResolvers } from './queries';
import { makeExecutableSchema } from "graphql-tools";

export const schema = makeExecutableSchema({
    typeDefs: [ Query, AutoCompelete, Quote, Historical, Trending ],
    resolvers: {
        ...queryResolvers,
        ...trendingResolvers,
        ...historicalResolvers,
        ...quoteResolvers,
        ...autocompleteResolvers
    }
});