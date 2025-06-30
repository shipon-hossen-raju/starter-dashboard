import {
  chatSupportIcon,
  closeIcon,
  dashboardIcon,
  hamburgerIcon,
  logoutIcon,
  profileTeamIcon,
  propertyOwnerIcon,
  serviceProviderIcon,
  tenantIcon,
} from "@/asserts/icons";
import logo from "@/asserts/icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

type TMeta = {
  id: number;
  icon: React.JSX.Element;
  label: string;
  link: string;
  active: boolean;
};

const menuData: TMeta[] = [
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
    active: false,
  },
  { id: 3, icon: tenantIcon, link: "/tenant", label: "Tenant", active: false },
  {
    id: 4,
    icon: serviceProviderIcon,
    link: "/service-provider",
    label: "Service Provider",
    active: false,
  },
  {
    id: 5,
    icon: chatSupportIcon,
    link: "/chat-support",
    label: "Chat & Support",
    active: false,
  },
  {
    id: 6,
    icon: profileTeamIcon,
    link: "/profile-team",
    label: "Profile & Team",
    active: false,
  },
];

export const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = React.useState(menuData);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeNav = React.useCallback(
    (id: number) => {
      const newMenuItems = menuItems.map((item: TMeta) => {
        if (item.id === id) {
          router.push(item.link);
        }
        return {
          ...item,
          active: item.id === id,
        };
      });

      setMenuItems(newMenuItems);
      setOpen(false);
    },
    [menuItems, router]
  );

  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log("currentPath ");
    const activeItem = menuItems.find((item) => item.link === currentPath);
    if (activeItem) {
      handleChangeNav(activeItem.id);
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-6 left-4 z-[99999] bg-white p-2 rounded shadow"
        onClick={() => setOpen(!open)}
        aria-label="Open sidebar"
      >
        {open ? closeIcon : hamburgerIcon}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white w-64 min-h-screen h-full flex flex-col py-6 px-4 transition-transform duration-200 ease-in-out z-[999] ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:w-64 md:block`}
        style={{ boxShadow: open ? "0 0 0 100vw rgba(0,0,0,0.3)" : undefined }}
        onClick={() => open && setOpen(false)}
      >
        <div className="flex flex-col items-center space-x-2 mb-8 pt-4">
          <figure className="text-primary">{logo}</figure>
          <span className="text-lg transition-all font-semibold text-gray-900">
            Home Management
          </span>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <button
                onClick={() => handleChangeNav(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-left transition-colors ${
                  item.active
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <figure className="w-5 h-5">{item.icon}</figure>
                <span className="text-sm font-medium transition-all">
                  {item.label}
                </span>
              </button>
            </Link>
          ))}
        </nav>

        <div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-4 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
          >
            {logoutIcon}
            <span className="text-sm font-medium transition-all">Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};
