import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
  mutation onLogin(
      $email: String!
      $password: String!) {
    loginUser(data: { 
        email: $email, 
        password: $password })
  }
`;

export const SIGNUP_USER = gql`
mutation onSignUp(
    $email: String!
    $phone: String!
    $username: String!
    $password: String!
  ){createUser(
    data: {
      email:$email
      phone: $phone
      username:$username
      password: $password
    })}
`;
