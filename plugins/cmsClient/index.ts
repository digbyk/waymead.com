import { GraphQLClient, gql } from "graphql-request";

export default defineNuxtPlugin((nuxtApp) => {
  const graphcmsClient = new GraphQLClient(nuxtApp.$config.graphcmsEndpoint, {
    headers: {
      authorization: `Bearer ${nuxtApp.$config.graphcmsApiKey}`,
    },
  });
  const cmsClient = {
    name: "CMS Client",
    getPageBySlug: async (slug: string) => {
      const query = gql`
        query getPageBySlug($slug: String!) {
          page(where: { slug: $slug }) {
            id
            title
            summary
            content {
              html
            }
          }
        }
      `;
      const variables = { slug: slug };
      const result = await graphcmsClient.request(query, variables);
      return result.page;
    },
  };
  return {
    provide: {
      graphcmsClient,
      cmsClient,
    },
  };
});
