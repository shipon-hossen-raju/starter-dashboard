export default function LoadingDots({ color = "primary" }) {
  const colorClasses: {[key: string]: string} = {
    primary: "bg-primary-600",
    white: "bg-white",
    gray: "bg-gray-600",
    green: "bg-green-600",
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      <div
        className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse`}
        style={{ animationDelay: "0ms", animationDuration: "1.4s" }}
      />
      <div
        className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse`}
        style={{ animationDelay: "200ms", animationDuration: "1.4s" }}
      />
      <div
        className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-pulse`}
        style={{ animationDelay: "400ms", animationDuration: "1.4s" }}
      />
    </div>
  );
}
