import LoadingSpinner from "./LoadingSpinner";

export default function LoadingOverlay({
  message = "Loading...",
  transparent = false,
}) {
  return (
    <div
      className={`
       fixed inset-0 z-50 flex items-center justify-center
       ${transparent ? "bg-black bg-opacity-20" : "bg-white bg-opacity-90"}
     `}
    >
      <div className="text-center space-y-4">
        <LoadingSpinner size="xl" color="primary" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
}
