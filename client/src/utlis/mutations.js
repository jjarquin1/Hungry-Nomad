import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const FOOD_TRUCK = gql`
mutation foodTruck($name: String!,$location: String!, $phone: Number!, $imageUrl: String!, $rating: String!, $url:String!){
  foodTruck(name: $name, location: $location, phone: $phone, imageUrl: $imageUrl, rating: $rating, url: $url) {
    business {
      name
      location
      phone
      imageUrl
      rating
      url
    }
  }
}`