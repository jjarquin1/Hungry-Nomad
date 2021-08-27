const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        User: async (parent, _, context) => {
            console.log("querying user")
            console.log(context.user)
            return User.find({});
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            console.log("IN RESOLVER");
            // First we create the user
            // console.log(username, email, password)
            const data = await User.create({ username, email, password });
            console.log(data)
            // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
            const token = signToken(data);
            console.log(token)
            // Return an `Auth` object that consists of the signed token and user's information
            return { username: data.username, email: data.email, token };
        },
        login: async (parent, { email, password }) => {
            console.log(email, password)
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await User.findOne({ email });

            // If there is no user with that email address, return an Authentication error stating so
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
            const correctPw = await user.isCorrectPassword(password);

            // If the password is incorrect, return an Authentication error stating so
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // If email and password are correct, sign user into the application with a JWT
            const token = signToken(user);
            console.log(user)
            // Return an `Auth` object that consists of the signed token and user's information
            return { token, email: user.email, username: user.username };
        }
    }
};

module.exports = resolvers;

