import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const baseUrl = process.env.API_URL;

const httpLink = new HttpLink({
  uri: `${baseUrl}/graphql`,
  credentials: "include",
});

export const createApolloClient = async () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};
