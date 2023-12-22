
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        fetchAll: (state, action) => {
            return state;
        },
        likePost: (state, action) => {
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        },
        createPost: (state, action) => {
            state.push(action.payload);
        },
        updatePost: (state, action) => {
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        },
        deletePost: (state, action) => {
            return state.filter((post) => post._id !== action.payload);
        }
    }
});
export const { fetchAll, likePost, createPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
