import { CircleUser } from "lucide-react";
import { ReactElement } from "react";

export default function Login(): ReactElement {
  return (
    <button className="border rounded-sm w-24 border-blue bg-white text-teal-800 py-2 hover:cursor-pointer">
      Login &nbsp;
      <CircleUser className="inline-block " />
    </button>
  );
}
