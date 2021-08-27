const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  } 

  type Query {
    User: User
    ASD: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Auth {
    username: String!
    email: String!
    token: String!
  }
`;


module.exports = typeDefs;