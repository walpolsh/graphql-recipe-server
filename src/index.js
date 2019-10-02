const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("../models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models
  }
});

const port = 4000;

server
  .listen()
  .then(({ url }) => console.log(`Server is running on localhost:${port}`));
