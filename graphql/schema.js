const {
    gql
} = require('apollo-server')

const typeDefs = gql ` 
type User {
   id: Int!
   name: String!
   email: String!
   id_token: String!
   places: [Place!]!
 }

 type Place {
   id: Int!
   name: String!
   yelp_id: String!
   url: String!
   phone: String!
   address:String!
   city:String!
   state:String!
   Postal_code:String!
   user: User!
 }

 type Query {
   user(id: Int!): User
   allPlaces: [Place!]!
   place(id: Int!): Place
   allPlacesByUserId: [Place!]!
 }

 type Mutation {
   createUser(name: String!, email: String!, id_token: String!): User!
   createPlace(
    name: String!
    yelp_id: String!
    url: String!
    phone: String!
    address:String!
    city:String!
    state:String!
    Postal_code:String!
   ): Place!
 }
`

module.exports = typeDefs