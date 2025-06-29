import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import propertyOwner from "./slice/propertyOwnerSlice";
import propertyReducer from "./slice/propertySlice";
import serviceProvider from "./slice/serviceProvider";
import tenant from "./slice/tenantSlice";
import chat from "./slice/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
    propertyOwner: propertyOwner,
    tenant: tenant,
    serviceProvider: serviceProvider,
    chat: chat,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
