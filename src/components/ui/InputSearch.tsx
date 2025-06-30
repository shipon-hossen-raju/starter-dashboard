import { useState } from "react";
import { magnifyingGlassIcon } from "@/asserts/icons";

export default function InputSearch() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Desktop: show search bar */}
      <div className="hidden sm:flex items-center space-x-1 bg-bgBody rounded-3xl py-2.5 px-3.5 w-80">
        <span className="text-iconColor">{magnifyingGlassIcon}</span>
        <input
          className="outline-none bg-transparent h-full w-full"
          type="text"
          placeholder="Search by name"
        />
      </div>

      {/* Mobile: show icon only */}
      <button
        className="sm:hidden flex items-center text-iconColor bg-bgBody rounded-full p-2"
        onClick={() => setShowPopup(true)}
        aria-label="Open search"
      >
        {magnifyingGlassIcon}
      </button>

      {/* Mobile: popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-bgBody rounded-3xl p-4 w-11/12 max-w-sm flex items-center space-x-2">
            <span className="text-iconColor">{magnifyingGlassIcon}</span>
            <input
              className="outline-none bg-transparent h-full w-full"
              type="text"
              placeholder="Search by name"
              autoFocus
            />
            <button
              className="ml-2 text-gray-500"
              onClick={() => setShowPopup(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
