import React from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import { downArrowIcon } from "@/asserts/icons";


export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-5 px-6">
      <div>
        <h1 className="text-2xl font-semibold text-textPrimary">
          Good Morning
        </h1>
        <p className="text-sm text-textSecondary/40">Here is your analytics</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-3 bg-white rounded-full text-iconColor hover:text-iconHoverColor">
          <Bell className="size-6" />
        </button>
        <button className="size-10 rounded-full relative">
          <Image
            src="/user-image.jpg"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="size-5 flex items-center justify-center bg-white absolute -bottom-1 -right-1 rounded-full border-2 border-white">
            {downArrowIcon}
          </span>
        </button>
      </div>
    </div>
  );
};
