const { GraphQLServer } = require('graphql-yoga');

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL',
}];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (root, args) => links.filter(l => l.id === args.id)[0]
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (root, args) => {
      let idx;
      const link = links.filter((l, i) => {
        if (l.id === args.id) {
          idx = i;
          return true;
        }
        return false;
      })[0];
      const { id, ...newProps } = args;
      const newLink = { ...link, ...newProps };
      console.log(newLink);
      links.splice(idx, 1, newLink);
      return newLink;
    },
    deleteLink: (root, args) => {
      let deletedLink;
      const newLinks = links.filter(l => {
        if (l.id === args.id) {
          deletedLink = l;
          return false;
        }
        return l.id !== args.id;
      });
      links = newLinks;
      return deletedLink;
    }
  },
// can be omitted because the resolvers are "trivial"
  // Link: {
  //   id: root => root.id,
  //   description: root => root.description,
  //   url: root => root.url,
  // }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));