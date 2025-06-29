import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./slice/propertySlice";
import authReducer from "./slice/authSlice";
import propertyOwner from "./slice/propertyOwnerSlice";
import tenant from "./slice/tenantSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
    propertyOwner: propertyOwner,
    tenant: tenant,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
