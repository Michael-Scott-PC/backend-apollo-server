// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    async getAllLinks(root, {}, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(
      root,
      { url = "https://localhost:3000/", slug },
      { models }
    ) {
      return models.Link.create({
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
