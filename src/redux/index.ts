import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import propertyReducer from "./propertySlice";
import propertyOwner from "./propertyOwnerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
    propertyOwner: propertyOwner,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
