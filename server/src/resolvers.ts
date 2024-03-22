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
    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {

            try {
                const track = await dataSources.trackingAPI.incrementTrackViews(id);
    
                return {
                    track,
                    message: `Successfully incremented number of views for track ${id}`,
                    success: true,
                    code: 200
                }
            } catch (error) {
                return {
                    message: error.extensions.response.body,
                    success: false,
                    code: error.extensions.response.status,
                    track: null,
                }
            }
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