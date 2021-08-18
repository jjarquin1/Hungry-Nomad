const { User } = require('../models')
const { AuthenticateionError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')