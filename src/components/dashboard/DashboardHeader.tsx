import React from "react";
import { Bell } from "lucide-react";


export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      <h1 className="text-2xl font-semibold text-gray-900">Good Morning</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
