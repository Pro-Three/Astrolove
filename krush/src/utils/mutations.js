import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        firstName
        lastName
        signSun
        gender
        desiredRelationshipPref
        aboutMe
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!,
    $email: String!,
    $password: String!,
    $signSun: String!,
    $firstName: String,
    $lastName: String!,
    $gender: String!,
    $desiredRelationshipPref: String,
    $aboutMe: String
  ) {addUser(
  	  username: $username,
      email: $email,
      password: $password,
      signSun: $signSun,
      firstName: $firstName,
      lastName: $lastName,
      gender: $gender,
      desiredRelationshipPref: $desiredRelationshipPref,
      aboutMe: $aboutMe
  ) {
    token
    user{
      username
      email
      password
      signSun
      firstName
      lastName
      gender
      desiredRelationshipPref
      aboutMe
    }
  }
}
`;
