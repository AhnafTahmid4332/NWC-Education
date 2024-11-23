import TypesenseInstantSearchAdapter from "@typesense/TypesenseInstantSearchAdapter";

export const typesenseAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_KEY!,
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST!,
        port: 443,
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,location,countries,studyLevels",
  },
});

export const searchClient = typesenseAdapter.searchClient;
