"use client";
import { TotalUser } from "@/components/pages/Dashboard/TotalUser";
import { OverallSummary } from "../../../components/pages/Dashboard/OverallSummary";
import { PropertyTable } from "../../../components/pages/Dashboard/PropertyTable";
import { StatsCards } from "../../../components/pages/Dashboard/StatsCards";

export default function Dashboard() {
  // const { loading } = useSelector((state: RootState) => state.auth);

  // if (loading) {
  //   return <LoadingDashboard />;
  // }

  return (
    <div className="">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-6">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <PropertyTable />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <TotalUser />
            <OverallSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
