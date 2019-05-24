const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

const { gql } = require('apollo-server');

const typeDefs = gql`type Query {
    breweries: [Brewery]!
    barks: [Bark]!
    user (id: ID!): ???
    # Queries for the current user
    me: User
   }
   type Mutation {
   # if false, signup failed -- check errors
   saved(resultId: [ID]!): SavedUpdateResponse!

   # if false, cancellation failed -- check errors
   unSaved(resultId: ID!): SavedUpdateResponse!
   }
   type SavedUpdateResponse {
       success: Boolean!
       message: String
       breweries: [Brewery]
       barks: [Bark]
   }
   type Brewery {
   name: String
   id: ID!
   is_closed: Boolean
   url: String
   display_phone: Int 
   address1: String
   city: String
   state: String
   postal_code: Int
}
}
}

   }
 }`;

module.exports = typeDefs;