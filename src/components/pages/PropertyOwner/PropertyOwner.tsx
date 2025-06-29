"use client";

import {
  leftArrowLineIcon,
  pencilIcon,
  rightArrowLineIcon,
} from "@/asserts/icons";
import { Card } from "@/components/ui/Card";
import { RootState } from "@/redux";
import { Metadata } from "next";
import React from "react";
import { useSelector } from "react-redux";
import OwnerSearch from "./OwnerSearch";

export const metaData: Metadata = {
  title: "Property Owner",
  description: "ALl Property Owner List",
};

const PropertyOwner: React.FC = () => {
  const { propertiesOwner } = useSelector(
    (state: RootState) => state.propertyOwner
  );

  return (
    <div>
      <Card>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2>Property Owner List</h2>
            {/* search */}
            <div>
              <OwnerSearch />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Address</th>
                  <th className={`text-center`}>Email Address</th>
                  <th className={`text-center`}>Mobile Number</th>
                  <th className={`text-center`}>Total Buildings</th>
                  <th className={`text-center`}>Total Unit</th>
                  <th className={`text-center`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {propertiesOwner.map((property) => (
                  <tr key={property.id}>
                    <td>{property.ownerName}</td>
                    <td>{property.address}</td>
                    <td className="text-center">{property.email}</td>
                    <td className="text-center">{property.mobileNumber}</td>
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

      {/* pagination  */}
      <div>
        <div className="flex items-center justify-between mt-8">
          <div>
            <p className="text-base font-medium text-textSecondary/40">
              01 page of 300
            </p>
          </div>
          <div>
            <ul className="flex items-center space-x-2">
              <li>
                <button className="flex items-center justify-center space-x-2 bg-bgButton rounded-xl p-4 text-white w-44 relative">
                  <span>Next</span>
                  <span className="absolute left-5">{leftArrowLineIcon}</span>
                </button>
              </li>
              <li>
                <span className="text-textSecondary py-4 px-6 rounded-xl mx-5 border">
                  01
                </span>
              </li>
              <li>
                <button className="flex items-center justify-center space-x-2 bg-bgButton rounded-xl p-4 text-white w-44 relative">
                  <span>Next</span>
                  <span className="absolute right-5">{rightArrowLineIcon}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOwner;
