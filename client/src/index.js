import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers';
import App from './App'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// 使用 React 18 的 createRoot API
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    // provider可以让整个项目都可以访问到store里的数据
    <Provider store={store}>
        <App />
    </Provider>
);