import { ContactListState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ContactListState = {
  contactList: [
    {
      id: "1",
      name: "John Doe",
      email: "5o6lX@example.com",
      role: "Admin",
      accessPermission: "Full Access",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "tM0fP@example.com",
      role: "User",
      accessPermission: "Read Only",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "5o6lX@example.com",
      role: "Admin",
      accessPermission: "Full Access",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "tM0fP@example.com",
      role: "User",
      accessPermission: "Read Only",
    },
    {
      id: "5",
      name: "John Doe",
      email: "5o6lX@example.com",
      role: "Admin",
      accessPermission: "Full Access",
    },
  ],
  totalBuildings: 0,
  totalUnits: 0,
  totalServices: 0,
  totalUsers: 0,
};

const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {},
});

export default contactListSlice.reducer;
