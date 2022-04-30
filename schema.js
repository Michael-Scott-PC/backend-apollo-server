const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeRefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = typeRefs;
