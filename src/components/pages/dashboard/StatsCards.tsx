import { calenderThikIcon } from "@/asserts/icons";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { Card } from "../../ui/Card";

export const StatsCards: React.FC = () => {
  const { totalBuildings, totalUnits, totalServices } = useSelector(
    (state: RootState) => state.property
  );

  const stats = [
    {
      icon: calenderThikIcon,
      label: "Total Buildings in App",
      value: totalBuildings,
    },
    {
      icon: calenderThikIcon,
      label: "Total Units in App",
      value: totalUnits,
    },
    {
      icon: calenderThikIcon,
      label: "Total Service in App",
      value: totalServices,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-5">
      {stats.map((stat, index) => (
        <Card key={index}>
          <figure className="mb-4 p-3 bg-primary/5 size-12 rounded-xl flex items-center justify-center">
            {stat.icon}
          </figure>
          <h2 className="mb-2">{stat.label}</h2>
          <span className={`text-4xl font-bold text-primary`}>
            {stat.value}
          </span>
        </Card>
      ))}
    </div>
  );
};
