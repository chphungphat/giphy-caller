import {fetchSearchGif, fetchTrendingGif} from "../../api/GiphyApi";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTrendingGifList = createAsyncThunk('fetchTrendingGifList', async () => {
    const response = await fetchTrendingGif();
    return response.data;
})

export const fetchSearchGifList = createAsyncThunk('fetchSearchGifList', async (searchString) => {
    const response = await fetchSearchGif(searchString);
    return response.data;
})

const listItemSlice = createSlice({
    name: 'listItem',
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: false,
        hasError: false
    },
    reducers: {
        setListItem: (state, action) => {
            state.listItem = action.payload;
        },
        resetListItem: (state, action) => {
            state.listItem = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingGifList.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
                state.hasError = false;
            })
            .addCase(fetchTrendingGifList.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.hasError = true;
            })
            .addCase(fetchTrendingGifList.pending, (state, action) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.hasError = false;
            })
            .addCase(fetchSearchGifList.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
                state.hasError = false;
            })
            .addCase(fetchSearchGifList.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.hasError = true;
            })
            .addCase(fetchSearchGifList.pending, (state, action) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.hasError = false;
            })
    }
});

export const {setListItem, resetListItem} = listItemSlice.actions;

export const listItem = (state) => state.listItem.data;

export default listItemSlice;