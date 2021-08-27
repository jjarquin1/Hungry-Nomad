import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query allUser {
    profiles {
      _id
      username
      bio
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    User (userId: $userId) {
      _id
      username
      bio
    }
  }
`;

export const QUERY_ME = gql`
  query User {
    User{
      username
      email
    }
  }
`;





