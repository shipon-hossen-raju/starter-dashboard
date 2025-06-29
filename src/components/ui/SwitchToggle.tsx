import { useState } from "react";

export default function SwitchToggle({ active, setActive }: { active: string; setActive: any }) {


  const buttonStyle =
      "text-textSecondary py-2 px-5 rounded-3xl bg-white font-medium text-base transition-all duration-300";
   
  return (
    <div>
      <div className="flex items-center space-x-3 border rounded-3xl p-1.5 bg-bgBody">
        <button
          className={`${buttonStyle}  ${
            active === "ALL" && "!bg-primary !text-white"
          }`}
          onClick={() => setActive("ALL")}
        >
          All
        </button>
        <button
          className={`${buttonStyle}  ${
            active === "ACTIVE" && "!bg-primary !text-white"
          }`}
          onClick={() => setActive("ACTIVE")}
        >
          Active
        </button>
        <button
          className={`${buttonStyle} ${
            active === "PENDING" && "!bg-primary !text-white"
          }`}
          onClick={() => setActive("PENDING")}
        >
          Pending
        </button>
      </div>
    </div>
  );
}
