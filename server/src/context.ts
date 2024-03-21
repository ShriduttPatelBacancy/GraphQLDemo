import { TrackAPI } from "./Datasource/track-api";

export type DataSourceContext = {
    dataSources: {
        trackingAPI: TrackAPI
    };
};