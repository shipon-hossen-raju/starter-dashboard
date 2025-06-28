import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Card } from "../ui/Card";

export const StatsCards: React.FC = () => {
  const { totalBuildings, totalUnits, totalServices } = useSelector(
    (state: RootState) => state.property
  );

  const stats = [
    {
      label: "Total Buildings in App",
      value: totalBuildings,
      color: "text-blue-600",
    },
    { label: "Total Units in App", value: totalUnits, color: "text-blue-600" },
    {
      label: "Total Service in App",
      value: totalServices,
      color: "text-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
          <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
        </Card>
      ))}
    </div>
  );
};
