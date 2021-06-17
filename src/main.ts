import { ApolloServer } from 'apollo-server';
import { schema } from './schema';

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true
});

server.listen({
  port: process.env.PORT || 4000
}).then(({ url }) => {
  console.log(`Server is running at :${url}`);
});
