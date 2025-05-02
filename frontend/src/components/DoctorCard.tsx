import React, { ReactElement } from "react";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  qualifications: string;
  clinic: string;
  location: string;
  fee: number;
  isDoctorOfTheHour?: boolean;
  imageUrl: string;
  state: string;
}

export default function DoctorCard({
  name,
  specialization,
  experience,
  qualifications,
  clinic,
  location,
  fee,
  imageUrl,
  state,
}: DoctorCardProps): ReactElement {
  return (
    <section className="flex items-center border border-gray-300 rounded-lg p-4">
      {/* Doctor Image */}
      <div className="flex justify-center px-5">
        <img src={imageUrl} alt={name} className=" w-[74px] h-[74px] rounded" />
      </div>

      {/* ---------------------------Doctor Info section------------------------------ */}
      <div className="flex-1 ml-4 flex gap-1.5 flex-col ">
        <h3 className="text-lg font-bold ">{name}</h3>
        <p className="text-sm text-[#989795] font-medium text-nowrap text-ellipsis overflow-hidden">
          {specialization}
        </p>
        <div className="text-xs text-purple-700 mt-1 flex items-center font-bold">
          <p>{experience} </p>
          <span className=" w-1 h-1 rounded-full mx-2 bg-purple-700 block"></span>
          <p>{qualifications}</p>
        </div>
        <p className="text-xs text-[#989795] mt-1 font-medium">{state}</p>
        <p className="text-xs font-medium text-[#989795]">
          {clinic} - {location}
        </p>
      </div>

      {/* ------------------------consult button----------------- */}
      <div className="text-right ml-4 self-end">
        <p className="text-lg font-semibold text-center">₹{fee}</p>
        <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded w-[340px] text-[10px] flex flex-col items-center hover:cursor-pointer">
          <span className="font-bold"> Consult Online</span>
          <span>Available in 5 minutes</span>
        </button>
      </div>
    </section>
  );
}
