import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import path from 'path';
import { resolvers } from './resolvers';
const typeDefs = gql(readFileSync(path.resolve(__dirname, 'schema.graphql')).toString('utf-8'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

server.listen({
  port: process.env.PORT || 4000
}).then(({ url }) => {
  console.log(`Server is running at :${url}`);
});
