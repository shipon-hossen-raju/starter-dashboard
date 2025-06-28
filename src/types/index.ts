export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface Property {
  id: string;
  ownerName: string;
  address: string;
  totalBuildings: number;
  totalUnits: number;
}

export interface PropertyState {
  properties: Property[];
  totalBuildings: number;
  totalUnits: number;
  totalServices: number;
  totalUsers: number;
}
