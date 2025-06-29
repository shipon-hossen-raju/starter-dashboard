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
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const menuData = [
  {
    id: 1,
    icon: dashboardIcon,
    label: "Dashboard",
    link: "/dashboard",
    active: true,
  },
  {
    id: 2,
    icon: propertyOwnerIcon,
    link: "/property-owner",
    label: "Property Owner",
  },
  { id: 3, icon: tenantIcon, link: "/tenant", label: "Tenant" },
  {
    id: 4,
    icon: serviceProviderIcon,
    link: "/service-provider",
    label: "Service Provider",
  },
  {
    id: 5,
    icon: chatSupportIcon,
    link: "/chat-support",
    label: "Chat & Support",
  },
  {
    id: 6,
    icon: profileTeamIcon,
    link: "/profile-team",
    label: "Profile & Team",
  },
];

export const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = React.useState(menuData);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeNav = (id: number) => {
    const newMenuItems = menuItems.map((item) => {
      if (item.id === id) {
        router.push(item.link);
      }
      return {
        ...item,
        active: item.id === id,
      };
    });

    setMenuItems(newMenuItems);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-64 min-h-screen bg-white h-full flex flex-col py-6 px-4">
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
