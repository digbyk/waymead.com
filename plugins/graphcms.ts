import { GraphQLClient } from "graphql-request";

//const graphcmsClient = new GraphQLClient($config.graphcmsEndpoint);

// export default (_, inject) => {
//   inject("graphcms", graphcmsClient);
// };

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      graphcmsClient: new GraphQLClient(nuxtApp.$config.graphcmsEndpoint, {
        headers: {
          authorization: `Bearer ${nuxtApp.$config.graphcmsApiKey}`,
        },
      }),
    },
  };
});
