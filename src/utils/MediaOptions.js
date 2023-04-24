import { domainName } from "./apiUrls";

// The media categories that can be found depending on the category of it.
class MediaOptions {
    constructor(title, mediaType, apiKey, id) {
        this.title = title;
        this.mediaType = mediaType;
        this.apiKey = apiKey;
        this.id = id;
    }

    get trending() {
        return this.createTrending();
    }

    get popular() {
        return this.createPopular();
    }

    createTrending() {
        return [
           {
               name: 'Today', 
               path: `${domainName}trending/${this.mediaType}/day?api_key=${this.apiKey}`,
               isSelected: true
           },
           {
               name: 'This Week',
               path: `${domainName}trending/${this.mediaType}/week?api_key=${this.apiKey}`,
               isSelected: false
           }
       ]
    }

    createPopular() {
        return [
            {
                name: 'Movies',
                path: `${domainName}movie/popular?api_key=${this.apiKey}`,
                isSelected: true
            },
            {
                name: 'Series',
                path: `${domainName}tv/popular?api_key=${this.apiKey}`,
                isSelected: false
            }
        ]
    }
}

export default MediaOptions;