import React from "react";
import { Card } from "../ui/Card";

export const OverallSummary: React.FC = () => {
  return (
    <div className="p-6">
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Overall Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
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
          </div>
        </div>
      </Card>
    </div>
  );
};
