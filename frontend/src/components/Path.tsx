import { ChevronRight } from "lucide-react";
import { ReactElement } from "react";

export default function Path(): ReactElement {
  return (
    <div className="flex mt-5 text-teal-800 text-xs">
      <span className="hover:underline">Home</span> <ChevronRight />{" "}
      <span className="hover:underline"> Doctors </span>
      <ChevronRight />{" "}
      <span className="hover:underline">General Physician</span>
    </div>
  );
}
