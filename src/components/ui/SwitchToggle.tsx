import { useState } from "react";

export default function SwitchToggle() {
  const [active, setActive] = useState("active");

  const buttonStyle =
    "text-textSecondary py-2 px-5 rounded-3xl bg-white font-medium text-base transition-all duration-300";
  return (
    <div>
      <div className="flex items-center space-x-3 border rounded-3xl p-1.5 bg-bgBody">
        <button
          className={`${buttonStyle}  ${
            active === "active" && "!bg-primary !text-white"
          }`}
          onClick={() => setActive("active")}
        >
          Active
        </button>
        <button
          className={`${buttonStyle} ${
            active === "pending" && "!bg-primary !text-white"
          }`}
          onClick={() => setActive("pending")}
        >
          Pending
        </button>
      </div>
    </div>
  );
}
