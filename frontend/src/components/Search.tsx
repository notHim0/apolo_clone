import { Search as SearchIcon } from "lucide-react";
import { ReactElement } from "react";

export default function Search(): ReactElement {
  return (
    <label className="flex items-center w-2xl rounded-xl border border-gray-400 px-6 bg-gray-100">
      <SearchIcon />
      <input
        type="text"
        className="w-full h-10 border-none outline-none ml-4"
        placeholder="Search Doctors, Specialist, Conditions etc."
      />
    </label>
  );
}
