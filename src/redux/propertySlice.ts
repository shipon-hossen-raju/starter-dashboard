import { createSlice } from "@reduxjs/toolkit";
import { PropertyState } from "../types";

const initialState: PropertyState = {
  properties: [
    {
      id: "1",
      ownerName: "Kayde",
      address: "Rue Oliveira, Marrakech",
      totalBuildings: 6,
      totalUnits: 30,
    },
    {
      id: "2",
      ownerName: "Sandor",
      address: "Avenue Liberté, Casablanca",
      totalBuildings: 5,
      totalUnits: 28,
    },
    {
      id: "3",
      ownerName: "Pranakrishna",
      address: "Boulevard Peach, Fes",
      totalBuildings: 8,
      totalUnits: 19,
    },
    {
      id: "4",
      ownerName: "Jat Ski",
      address: "Rue Arizona, Tangier",
      totalBuildings: 4,
      totalUnits: 24,
    },
    {
      id: "5",
      ownerName: "Scuba",
      address: "Avenue Etoiles, Agadir",
      totalBuildings: 4,
      totalUnits: 22,
    },
    {
      id: "6",
      ownerName: "Waterboard",
      address: "Rue Jardins, Essaouira",
      totalBuildings: 3,
      totalUnits: 18,
    },
    {
      id: "7",
      ownerName: "Surfing",
      address: "Boulevard Mar, Rabat",
      totalBuildings: 3,
      totalUnits: 18,
    },
    {
      id: "8",
      ownerName: "Ruth",
      address: "Rue Souss, Ouarzazate",
      totalBuildings: 3,
      totalUnits: 20,
    },
  ],
  totalBuildings: 200,
  totalUnits: 1200,
  totalServices: 400,
  totalUsers: 0,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
});

export default propertySlice.reducer;
