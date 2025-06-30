export default function LoadingPulse({ className = "" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 rounded h-4 w-full mb-2"></div>
      <div className="bg-gray-200 rounded h-4 w-5/6 mb-2"></div>
      <div className="bg-gray-200 rounded h-4 w-4/6"></div>
    </div>
  );
}
