const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    signSun: String
    gender: String
    desiredRelationshipType: String
    desiredRelationshipPref: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(
      username: String!,
      email: String!,
      password: String!,
      signSun: String!,
      firstName: String,
      lastName: String!,
      gender: String!,
      desiredRelationshipType: String,
      desiredRelationshipPref: String
    ): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
