import { Resolvers } from "./types";

const resolvers: Resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackingAPI.getTracksForHome();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackingAPI.getTrack(id);
        }
    },
    Track: {
        author: ( { authorId }, __, { dataSources }) => {
            return dataSources.trackingAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackingAPI.getTrackModules(id);
        },
    },
};

export default resolvers;