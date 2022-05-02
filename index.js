const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  try {
    models.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
