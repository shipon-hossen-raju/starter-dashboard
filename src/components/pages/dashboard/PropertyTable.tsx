import { pencilIcon } from "@/asserts/icons";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { Card } from "@/components/ui/Card";

export const PropertyTable: React.FC = () => {
  const { properties } = useSelector((state: RootState) => state.property);

  return (
    <>
      <Card>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2>Top House Owner List</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Address</th>
                  <th className={`text-center`}>Total Buildings</th>
                  <th className={`text-center`}>Total Unit</th>
                  <th className={`text-center`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id}>
                    <td>{property.ownerName}</td>
                    <td>{property.address}</td>
                    <td className="text-center">
                      {property.totalBuildings.toString().padStart(2, "0")}
                    </td>
                    <td className="text-center">{property.totalUnits}</td>
                    <td className="text-center flex-center">
                      <button className="text-gray-400 bg-bgGray size-7 rounded-full flex-center hover:text-gray-600">
                        {pencilIcon}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </>
  );
};
