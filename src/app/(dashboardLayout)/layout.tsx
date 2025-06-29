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
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        {/* Main Content */}
        <div className="flex-1 overflow-auto px-6">{children}</div>
      </div>
    </div>
  );
}
