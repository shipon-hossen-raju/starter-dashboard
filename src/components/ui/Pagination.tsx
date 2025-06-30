import { leftArrowLineIcon, rightArrowLineIcon } from "@/asserts/icons";

export default function Pagination() {
  return (
    <div className="flex flex-row items-center justify-between mt-8 gap-4 max-w-full">
      <p className="text-base font-medium text-textSecondary/40">
        01 page of 300
      </p>
      <div>
        <div className="flex items-center space-x-2">
          <div>
            <button className="flex items-center justify-center space-x-2 bg-bgButton/5 rounded-xl p-2 sm:p-4 text-black/20 w-24 sm:w-44 relative text-sm sm:text-base">
              <span className="inline">Prev</span>
              <span className="absolute left-0 sm:left-5">
                {leftArrowLineIcon}
              </span>
            </button>
          </div>

          <div>
            <span className="text-textSecondary py-2 px-4 sm:py-4 sm:px-6 rounded-xl mx-2 sm:mx-5 border text-sm sm:text-base">
              01
            </span>
          </div>

          <div>
            <button className="flex items-center justify-center space-x-2 bg-bgButton rounded-xl p-2 sm:p-4 text-white w-24 sm:w-44 relative text-sm sm:text-base">
              <span className="inline">Next</span>
              <span className="absolute right-1 sm:right-5">
                {rightArrowLineIcon}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
