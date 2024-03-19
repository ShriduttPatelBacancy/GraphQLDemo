export const resolvers = {
    Query: {
        tracksForHome: (_: any, __: any, { dataSource }: any) => {
            return dataSource.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ( { authorId }: any, __: any, { dataSource }: any) => {
            return dataSource.trackAPI.getAuthor(authorId);
        },
    },
};