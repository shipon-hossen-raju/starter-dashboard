import { magnifyingGlassIcon } from "@/asserts/icons";

export default function OwnerSearch() {
  return (
    <div className="flex items-center space-x-1 bg-bgBody rounded-3xl py-2.5 px-3.5 w-80">
      <span className="text-iconColor">{magnifyingGlassIcon}</span>
      <input
        className="outline-none bg-transparent h-full w-full"
        type="text"
        placeholder="Search by name"
      />
    </div>
  );
}
