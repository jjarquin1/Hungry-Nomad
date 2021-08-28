const express = require('express');
const path = require('path');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

(async () => {
    await server.start();
    server.applyMiddleware({ app });
})()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

db.once('open', () => {
    console.log("db connected! asdfawefwe")
    app.listen(PORT, () => {
        console.log(`API sever running on port ${PORT}!`);
        console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
    })
})