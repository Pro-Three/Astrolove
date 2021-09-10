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
    desiredRelationshipPref: String
    aboutMe: String
    likes: [String]

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
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
      desiredRelationshipPref: String,
      aboutMe: String
    ): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
