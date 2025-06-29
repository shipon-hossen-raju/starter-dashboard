import { createSlice } from "@reduxjs/toolkit";
import { PropertyOwnerState } from "../types";

const initialState: PropertyOwnerState = {
  propertiesOwner: [
    {
      id: "1",
      ownerName: "Kayde",
      address: "Rue Oliveira, Marrakech",
      email: "test@g.com",
      mobileNumber: "123456789",
      totalBuildings: 6,
      totalUnits: 30,
    },
    {
      id: "2",
      ownerName: "Sandor",
      address: "Avenue Liberté, Casablanca",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 5,
      totalUnits: 28,
    },
    {
      id: "3",
      ownerName: "Pranakrishna",
      address: "Boulevard Peach, Fes",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 8,
      totalUnits: 19,
    },
    {
      id: "4",
      ownerName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 4,
      totalUnits: 24,
    },
    {
      id: "5",
      ownerName: "Scuba",
      address: "Avenue Etoiles, Agadir",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 4,
      totalUnits: 22,
    },
    {
      id: "6",
      ownerName: "Waterboard",
      address: "Rue Jardins, Essaouira",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 3,
      totalUnits: 18,
    },
    {
      id: "7",
      ownerName: "Surfing",
      address: "Boulevard Mar, Rabat",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 3,
      totalUnits: 18,
    },
    {
      id: "8",
      ownerName: "Ruth",
      address: "Rue Souss, Ouarzazate",
      email: "test1@g.com",
      mobileNumber: "123456789",
      totalBuildings: 3,
      totalUnits: 20,
    },
  ],
  totalBuildings: 200,
  totalUnits: 1200,
  totalServices: 400,
  totalUsers: 0,
};

const propertyOwner = createSlice({
  name: "propertyOwner",
  initialState,
  reducers: {},
});

export default propertyOwner.reducer;
