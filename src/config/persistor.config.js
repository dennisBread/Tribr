import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo/apollo.config";

const Persistgate = ({ children }) => (
  <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
);
export default Persistgate;
