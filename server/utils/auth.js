const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhh';
const experation = '3h'

module.exports = {

    authMiddleware: function ({ req }) {

        let token = req.body.token || req.query.token || req.headers.authoriztion;

        if (req.headers.authoriztion) {
            token = token.split('').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } =jwt.verify(token, secret, { maxAge: expiraton });
            req.user = data;
        } catch {
            console.log('Token is not valid');
        }

        return req;
    },
    signToken: function ({ username, email, _id}) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, {expiresIn: expiration });
    },
};