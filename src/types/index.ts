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

export interface ContactList {
  id: string;
  name: string;
  email: string;
  role: string;
  accessPermission: string;
}

export interface ContactListState {
  contactList: ContactList[];
  totalBuildings: number;
  totalUnits: number;
  totalServices: number;
  totalUsers: number;
}

export interface ServiceProvider {
  id: string;
  tenantName: string;
  address: string;
  email: string;
  mobileNumber: string;
  serviceType: string;
  joinDate: string;
  status: "ACTIVE" | "PENDING";
}

export interface ServiceProviderState {
  serviceProviders: ServiceProvider[];
  totalBuildings: number;
  totalUnits: number;
  totalServices: number;
  totalUsers: number;
}

export interface ChatMessage {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
}

export interface ActiveChat {
  id: string;
  name: string;
  message: string;
  avatar: string;
}

export interface ChatState {
  messages: ChatMessage[];
  activeChat: ActiveChat | null;
  selectedFilter: "All" | "Owner" | "Service Provider";
}

