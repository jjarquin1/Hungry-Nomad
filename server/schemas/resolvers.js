const { User } = require('../models/User')
const { AuthenticateionError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        User: async () => {
            return User.find({});
        },
    }
};