import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

// const GRAPHQL_URL = process.env.REACT_APP_AWS_API_ENDPOINT;
const GRAPHQL_URL = "https://beta.api.uniswap.org/v1/graphql";
const apolloClient = new ApolloClient({
  connectToDevTools: true,
  uri: GRAPHQL_URL,
  headers: {
    "Content-Type": "application/json",
    Origin: "https://app.uniswap.org"
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          nftBalances: relayStylePagination(["ownerAddress", "filter"]),
          nftAssets: relayStylePagination(),
          nftActivity: relayStylePagination(),
          // tell apollo client how to reference Token items in the cache after being fetched by queries that return Token[]
          token: {
            read(_, _ref) {
              let {
                args,
                toReference
              } = _ref;
              return toReference({
                __typename: "Token",
                chain: args?.chain,
                address: args?.address
              });
            }
          }
        }
      },
      Token: {
        // key by chain, address combination so that Token(chain, address) endpoint can read from cache
        /**
         * NOTE: In any query for `token` or `tokens`, you must include the `chain` and `address` fields
         * in order for result to normalize properly in the cache.
         */
        keyFields: ["chain", "address"],
        fields: {
          address: {
            read(address) {
              // backend endpoint sometimes returns checksummed, sometimes lowercased addresses
              // always use lowercased addresses in our app for consistency
              return address?.toLowerCase() ?? null;
            }
          }
        }
      }
    }
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
});

export { apolloClient };
