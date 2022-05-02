const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeRefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    getAllLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeRefs;
