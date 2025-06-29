"use client";

import { pencilIcon } from "@/asserts/icons";
import { Card } from "@/components/ui/Card";
import Pagination from "@/components/ui/Pagination";
import { RootState } from "@/redux";
import { Metadata } from "next";
import React from "react";
import { useSelector } from "react-redux";
import InputSearch from "../../ui/InputSearch";

export const metaData: Metadata = {
  title: "Property Owner",
  description: "ALl Property Owner List",
};

const Tenant: React.FC = () => {
  const { tenants } = useSelector((state: RootState) => state.tenant);

  return (
    <div>
      <Card>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2>Tenant List</h2>
            {/* search */}
            <div>
              <InputSearch />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Tenant Name</th>
                  <th>Address</th>
                  <th className="text-center">Email Address</th>
                  <th className="text-center">Mobile Number</th>
                  <th className="text-center">House Owner</th>
                  <th className="text-center">Rent Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id}>
                    <td>{tenant.tenantName}</td>
                    <td>{tenant.address}</td>
                    <td className="text-center">{tenant.email}</td>
                    <td className="text-center">{tenant.mobileNumber}</td>
                    <td className="text-center">
                      {tenant.houseOwner.toString().padStart(2, "0")}
                    </td>
                    <td className="text-center">{tenant.rentDate}</td>
                    <td className="text-center flex-center">
                      <button className="edit-button">{pencilIcon}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* pagination  */}
      <Pagination />
    </div>
  );
};

export default Tenant;
