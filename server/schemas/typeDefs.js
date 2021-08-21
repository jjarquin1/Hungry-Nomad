const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  } 

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Auth {
    username: String!
    email: String!
  }
`;


module.exports = typeDefs;