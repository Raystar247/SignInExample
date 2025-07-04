import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/store/user";


const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;