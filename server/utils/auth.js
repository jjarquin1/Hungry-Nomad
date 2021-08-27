const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhh';
const expiration = '3h'

module.exports = {

    authMiddleware: function ({ req }) {
        console.log("IN AUTH MIDDLEWARE")
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch (err) {
            console.log(err)
            console.log('Token is not valid');
        }

        console.log("in auth middleware", req.user)
        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        console.log("signing token")
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};