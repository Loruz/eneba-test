const { ApolloServer } = require('apollo-server');

const { schema, context } = require('./schemas');

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
});

// The `listen` method launches a web server.
server.listen({port: process.env.PORT || 4000}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
