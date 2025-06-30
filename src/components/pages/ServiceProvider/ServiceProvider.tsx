"use client";

import { pencilIcon } from "@/asserts/icons";
import { Card } from "@/components/ui/Card";
import SwitchToggle from "@/components/ui/SwitchToggle";
import { RootState } from "@/redux";
import { Metadata } from "next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputSearch from "../../ui/InputSearch";
import Pagination from "@/components/ui/Pagination";

export const metaData: Metadata = {
  title: "Property Owner",
  description: "ALl Property Owner List",
};

const ServiceProvider: React.FC = () => {
  const { serviceProviders } = useSelector(
    (state: RootState) => state.serviceProvider
  );
  const [active, setActive] = useState("ACTIVE");

  const filteredServiceProvider = serviceProviders.filter(
    (sp) => active === "ALL" || sp.status === active
  );

  return (
    <div>
      <Card>
        <div className="">
          <div className="flex gap-4 justify-between mb-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:space-x-6">
              <h2>Service Provider List</h2>
              <SwitchToggle active={active} setActive={setActive} />
            </div>

            {/* search */}
            <div>
              <InputSearch />
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-[1000px] w-full">
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
                {filteredServiceProvider.map((service) => (
                  <tr key={service.id}>
                    <td>{service.tenantName}</td>
                    <td>{service.address}</td>
                    <td className="text-center">{service.email}</td>
                    <td className="text-center">{service.mobileNumber}</td>
                    <td className="text-center">{service.serviceType}</td>
                    <td className="text-center">{service.joinDate}</td>
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

export default ServiceProvider;
