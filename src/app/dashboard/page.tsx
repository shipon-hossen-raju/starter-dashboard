"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { StatsCards } from "../../components/dashboard/StatsCards";
import { PropertyTable } from "../../components/dashboard/PropertyTable";
import { OverallSummary } from "../../components/dashboard/OverallSummary";
import { RootState } from "../../redux";
import { Sidebar } from "../../components/ui/Sidebar";

export default function DashboardPage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-6">
            <div className="lg:col-span-2">
              <PropertyTable />
            </div>
            <div>
              <OverallSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
