const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers').resolvers
const models = require('./models')

const server = new ApolloServer({
 typeDefs,
 resolvers,
 context: { models }
})

server
 .listen(4001)
 .then(({ url }) => console.log('Server is running on localhost:4001'))