import React from "react";
import { Card } from "../../ui/Card";

export const OverallSummary: React.FC = () => {
  return (
    <>
      <Card className="min-h-72">
        <h2 className="mb-8">Overall Summary</h2>
        <div className="space-y-4">
          {/* <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Active Properties</span>
            <span className="text-sm font-medium text-gray-900">156</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Pending Requests</span>
            <span className="text-sm font-medium text-gray-900">23</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Revenue</span>
            <span className="text-sm font-medium text-green-600">$45,280</span>
          </div> */}
        </div>
      </Card>
    </>
  );
};
