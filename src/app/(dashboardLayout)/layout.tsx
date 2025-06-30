"use client";

import { DashboardHeader } from "@/components/pages/Dashboard/DashboardHeader";
import { Sidebar } from "@/components/ui/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="h-screen sticky top-0 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />

        {/* Main Content */}
        <div className="flex-1 overflow-auto px-2 md:px-4 lg:px-6">
          {children}
        </div>
      </div>
    </div>
  );
}
