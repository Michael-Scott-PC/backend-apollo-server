const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const db = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  try {
    db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
