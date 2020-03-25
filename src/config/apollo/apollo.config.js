import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ToastMessage, type } from "../../helpers/toatser/Toastr.helper";
import {SERVER_URL} from '../../constants/endpoints.contants'

//Setup a new cache memory
const cache = new InMemoryCache();

//get the token
const token = sessionStorage.getItem("tribr_token") || "";

console.log("token", token);

//Setup apollo client
const client = new ApolloClient({
  uri: SERVER_URL,  //the server where we are requesting from. either local or remote
  cache, //our Apollo local storage
  headers: {// Apollo client can still work without this headers
    authorization: token
  },
  onError: ({ graphQLErrors, networkError, operation }) => {
    if (
      graphQLErrors &&
      operation.query.definitions[0].operation === "mutation"
    ) {
      graphQLErrors.map(message => ToastMessage(type.ERROR, message));

      return false;
    }
    if (
      networkError &&
      operation.query.definitions[0].operation === "mutation"
    ) {
      return ToastMessage(type.ERROR, "Network Error!");
    }
  }
});

export default client;
