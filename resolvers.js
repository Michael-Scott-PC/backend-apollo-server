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
      { url = "https://localhost:3000", slug },
      { models }
    ) {
      const randomSlug = Buffer.from(Math.random().toString())
        .toString("base64")
        .substr(10, 4)
        .toLowerCase();
      return models.Link.create({
        url,
        slug: slug ? slug : randomSlug
      });
    }
  }
};

module.exports = resolvers;
