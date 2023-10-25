import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/index";


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : false,
});

export default store;