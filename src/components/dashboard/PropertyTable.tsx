import React from "react";
import { useSelector } from "react-redux";
import { Edit } from "lucide-react";
import { RootState } from "../../redux";
import { Card } from "../ui/Card";

export const PropertyTable: React.FC = () => {
  const { properties } = useSelector((state: RootState) => state.property);

  return (
    <div className="p-6">
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Top House Owner List
            </h2>
            <span className="text-sm text-gray-500">Total User</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Owner Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Address
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Total Buildings
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Total Unit
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr
                    key={property.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {property.ownerName}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {property.address}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {property.totalBuildings.toString().padStart(2, "0")}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {property.totalUnits}
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};
