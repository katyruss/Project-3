const {
    ApolloServer
} = require('apollo-server')
const db = require("./models")
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers').resolvers
const models = require('./models')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models
    }
})


db.sequelize.sync().then(() => {
    server
        .listen(4001)
        .then(({
            url
        }) => console.log('Server is running on localhost:4001'))
});