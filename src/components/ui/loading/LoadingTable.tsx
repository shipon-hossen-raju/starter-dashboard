export default function LoadingTable({ rows = 8, columns = 5 }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 p-6 border-b animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-48"></div>
      </div>

      {/* Table Header */}
      <div className="bg-gray-50 px-6 py-3 border-b">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: columns }).map((_, index) => (
            <div
              key={index}
              className="h-3 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4">
            <div className="grid grid-cols-5 gap-4 items-center">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`h-4 bg-gray-200 rounded animate-pulse`}
                  style={{
                    animationDelay: `${(rowIndex * columns + colIndex) * 50}ms`,
                    width:
                      colIndex === 0 ? "80%" : colIndex === 1 ? "100%" : "60%",
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
