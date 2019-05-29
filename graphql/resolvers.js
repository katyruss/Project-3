// const bcrypt = require('bcryptjs') what do we need for auth0
const db = require("../models")
const resolvers = {
    Query: {
        async user(root, {
            id
        }, {
            models
        }) {
            return models.User.findById(id)
        },
        async place(root, {
            id
        }, {
            models
        }) {
            return models.Place.findById(id)
        },
        async allPlacesByUserId(root, {
            userId
        }, {
            models
        }) {
            return models.Place.findbyuserId(userId)
        }
    },
    Mutation: {
        async createUser(root, {
            name,
            email,
            id_token
        }, {
            models
        }) {
            return models.User.create({
                name,
                email,
                id_token
            })
        },
        async createPlace(root, {
            userId,
            name,
            yelp_id,
            url,
            phone,
            address,
            city,
            state,
            postal_code
        }, {
            models
        }) {
            return models.Place.create({
                userId,
                name,
                yelp_id,
                url,
                phone,
                address,
                city,
                state,
                postal_code
            })
        }
    },
    User: {
        async places(user) {
            return user.getPlaces()
        }
    },
    Place: {
        async user(place) {
            return place.getUser()
        }
    }
}

module.exports = resolvers