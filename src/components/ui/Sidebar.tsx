import {
  chatSupportIcon,
  dashboardIcon,
  logoutIcon,
  profileTeamIcon,
  propertyOwnerIcon,
  serviceProviderIcon,
  tenantIcon,
} from "@/asserts/icons";
import logo from "@/asserts/icons/logo";
import { LogOut, User } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const menuData = [
  { id: 1, icon: dashboardIcon, label: "Dashboard", active: true },
  { id: 2, icon: propertyOwnerIcon, label: "Property Owner" },
  { id: 3, icon: tenantIcon, label: "Tenant" },
  { id: 4, icon: serviceProviderIcon, label: "Service Provider" },
  { id: 5, icon: chatSupportIcon, label: "Chat & Support" },
  { id: 6, icon: profileTeamIcon, label: "Profile & Team" },
];

export const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = React.useState(menuData);
  const dispatch = useDispatch();

  const handleChangeNav = (id: number) => {
    const newMenuItems = menuItems.map((item) => ({
      ...item,
      active: item.id === id
    }))

    setMenuItems(newMenuItems);
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 h-full flex flex-col p-6">
      <div className="">
        <div className="flex flex-col items-center space-x-2 mb-8 pt-4">
          <figure className="text-primary">{logo}</figure>
          <span className="text-lg font-semibold text-gray-900">
            Home Management
          </span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleChangeNav(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <figure className="w-5 h-5">{item.icon}</figure>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* <div className="mt-auto p-6"> */}
      <div className="">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
        >
          {logoutIcon}
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};
