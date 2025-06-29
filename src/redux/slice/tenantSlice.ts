import { PropertyState, TenantState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TenantState = {
  tenants: [
    {
      id: "1",
      tenantName: "Kayde",
      address: "Rue Oliveira, Marrakech",
      houseOwner: "Pranakrishna",
      email: "test@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "2",
      tenantName: "Sandor",
      address: "Avenue Liberté, Casablanca",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "3",
      tenantName: "Pranakrishna",
      address: "Boulevard Peach, Fes",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "4",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "5",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "6",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "7",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
    {
      id: "8",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      houseOwner: "Pranakrishna",
      email: "test1@g.com",
      mobileNumber: "123456789",
      rentDate: "2023-01-01"
    },
  ],
  totalBuildings: 200,
  totalUnits: 1200,
  totalServices: 400,
  totalUsers: 0,
};

const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {},
});

export default tenantSlice.reducer;
