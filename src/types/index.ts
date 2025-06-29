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

export interface PropertyOwner {
  id: string;
  ownerName: string;
  address: string;
  email: string;
  mobileNumber: string;
  totalBuildings: number;
  totalUnits: number;
}

export interface PropertyOwnerState {
  propertiesOwner: PropertyOwner[];
  totalBuildings: number;
  totalUnits: number;
  totalServices: number;
  totalUsers: number;
}

export interface Tenant {
  id: string;
  tenantName: string;
  address: string;
  email: string;
  mobileNumber: string;
  houseOwner: string;
  rentDate: string;
}

export interface TenantState {
  tenants: Tenant[];
  totalBuildings: number;
  totalUnits: number;
  totalServices: number;
  totalUsers: number;
}