const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');
const dataSources = () => ({
 launchAPI: new LaunchAPI(),
 userAPI: new UserAPI({ store }),
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    context,
    engine: {
      apiKey: process.env.ENGINE_API_KEY,
    },
   });

   if (process.env.NODE_ENV !== 'test')
 server
   .listen({ port: 4000 })
   .then(({ url }) => console.log(`🚀 app running at ${url}`));

// export all the important pieces for integration/e2e tests to use
module.exports = {
 dataSources,
 context,
 typeDefs,
 resolvers,
 ApolloServer,
 BreweryAPI,
 UserAPI,
 server,
};