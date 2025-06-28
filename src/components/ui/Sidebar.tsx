import React from "react";
import { useDispatch } from "react-redux";
import {
  Home,
  Building,
  Users,
  Settings,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react";
import { logout } from "../../redux/authSlice";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Building, label: "Property Owner" },
  { icon: Users, label: "Tenant" },
  { icon: Settings, label: "Service Provider" },
  { icon: MessageSquare, label: "Chat & Support" },
  { icon: User, label: "Profile & Team" },
];

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-900">
            Home Management
          </span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};
