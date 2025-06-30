import LoadingCard from "./LoadingCard";
import LoadingStats from "./LoadingStats";
import LoadingTable from "./LoadingTable";

export default function LoadingDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Skeleton */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3 animate-pulse">
            <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-5 bg-gray-200 rounded w-32"></div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-pulse"
            >
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded flex-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Skeleton */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="animate-pulse space-y-2">
              <div className="h-6 bg-gray-200 rounded w-48"></div>
              <div className="h-4 bg-gray-200 rounded w-64"></div>
            </div>
            <div className="flex items-center space-x-4 animate-pulse">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          <LoadingStats />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LoadingTable />
            </div>
            <div className="space-y-4">
              <LoadingCard />
              <LoadingCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
