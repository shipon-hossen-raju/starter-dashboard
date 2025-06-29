"use client";
import { TotalUser } from "@/components/dashboard/TotalUser";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { OverallSummary } from "../../components/pages/dashboard/OverallSummary";
import { PropertyTable } from "../../components/pages/dashboard/PropertyTable";
import { StatsCards } from "../../components/pages/dashboard/StatsCards";
import { RootState } from "../../redux";

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
    <div className="">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-6">
          <div className="lg:col-span-2">
            <PropertyTable />
          </div>
          <div className="space-y-6">
            <TotalUser />
            <OverallSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
