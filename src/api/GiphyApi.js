import {GiphyFetch} from "@giphy/js-fetch-api";

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

const giphyApi = new GiphyFetch(apiKey);

export const fetchTrendingGif = async () => {
    try {
        const response = await giphyApi.trending();
        return response.data;
    } catch (error){
        console.error(error);
    }
}

export const fetchSearchGif = async (searchString) => {
    try {
        const response = await giphyApi.search(searchString);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
