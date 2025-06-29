import { ServiceProviderState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ServiceProviderState = {
  serviceProviders: [
    {
      id: "1",
      tenantName: "Kayde",
      address: "Rue Oliveira, Marrakech",
      email: "test@g.com",
      mobileNumber: "123456789",
      serviceType: "ELECTRICITY",
      joinDate: "2023-01-01",
      status: "ACTIVE",
    },
    {
      id: "2",
      tenantName: "Sandor",
      address: "Avenue Liberté, Casablanca",
      email: "test1@g.com",
      mobileNumber: "123456789",
      status: "PENDING",
      joinDate: "2023-01-01",
      serviceType: "CLEANER",
    },
    {
      id: "3",
      tenantName: "Pranakrishna",
      address: "Boulevard Peach, Fes",
      email: "test1@g.com",
      mobileNumber: "234123",
      status: "ACTIVE",
      joinDate: "2023-01-01",
      serviceType: "PLUMBER",
    },
    {
      id: "4",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      email: "test1@g.com",
      mobileNumber: "123456789",
      status: "PENDING",
      joinDate: "2023-01-01",
      serviceType: "ELECTRICITY",
    },
    {
      id: "5",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      email: "test1@g.com",
      mobileNumber: "123456789",
      status: "PENDING",
      joinDate: "2023-01-01",
      serviceType: "ELECTRICITY",
    },
    {
      id: "6",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      email: "test1@g.com",
      mobileNumber: "123456789",
      status: "PENDING",
      joinDate: "2023-01-01",
      serviceType: "ELECTRICITY",
    },
    {
      id: "7",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      email: "test1@g.com",
      mobileNumber: "123456789",
      status: "PENDING",
      joinDate: "2023-01-01",
      serviceType: "ELECTRICITY",
    },
    {
      id: "8",
      tenantName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      email: "test1@g.com",
      mobileNumber: "123456789",
      status: "ACTIVE",
      joinDate: "2023-01-01",
      serviceType: "ELECTRICITY",
    },
  ],
  totalBuildings: 200,
  totalUnits: 1200,
  totalServices: 400,
  totalUsers: 0,
};

const serviceProvider = createSlice({
  name: "serviceProvider",
  initialState,
  reducers: {},
});

export default serviceProvider.reducer;
