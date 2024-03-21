import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers"
import { TrackAPI } from "./Datasource/track-api";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return ({
        dataSources: {
          trackingAPI: new TrackAPI({ cache }),
        },
      });
    },
    // listen: {port: 3500 }
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
 
startApolloServer();