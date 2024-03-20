import { Resolvers } from "./types";

const resolvers: Resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackingAPI.getTracksForHome();
        },
    },
    Track: {
        author: ( { authorId }, __, { dataSources }) => {
            return dataSources.trackingAPI.getAuthor(authorId);
        },
    },
};

export default resolvers;