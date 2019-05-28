const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models = require('../models')

const server = new ApolloServer({
 typeDefs,
 resolvers,
 context: { models }
})

server
 .listen(4001)
 .then(({ url }) => console.log('Server is running on localhost:4000'))