const {
  createServer,
  useExtendContext,
  createPubSub,
} = require("@graphql-yoga/node");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const pubSub = createPubSub();

const server = createServer({
  schema: {
    typeDefs,
    resolvers
  },
  graphiql: {
    title: "Graphql Course",
  },
  logging: true,
  plugins: [useExtendContext(() => ({ pubSub }))],
});

server.start();