import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts'

const rootReducer = combineReducers({
    posts,
});

export default rootReducer;