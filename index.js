const {
    ApolloServer,
    gql
} = require('apollo-server-express');
const db = require("./models")
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers').resolvers
const models = require('./models')
const express = require('express');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models
    }
})

const app = express();
server.applyMiddleware({
    app
});

db.sequelize.sync({
    force: true
}).then(() => {
    app.listen({
            port: 4000
        }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
})