"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterSidebar from "../components/FilterSidebar";
import DoctorCard from "../components/DoctorCard";
import Path from "@/components/Path";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import ConsultDoctorCard from "@/components/ConsultDoctorCard";

interface Doctor {
  id: string;
  name: string;
  experience: number;
  qualifications: string;
  designation: string;
  fee: number;
  languages: string[];
  clinic_location: string;
  img_url: string;
}

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);
  const [doctorCount, setDoctorCount] = useState(0);

  // Fetch doctors based on filters
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams(filters).toString();
        console.log(params);
        const res = await fetch(
          `https://apolo-clone.onrender.com/api/doctors?${params}`
        );
        console.log(res);
        const data = await res.json();

        setDoctors(data.data);
        setDoctorCount(data.data.length);
      } catch (err) {
        console.error("Failed to fetch doctors", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [filters]);
  return (
    <div className="flex justify-between w-10/12 mx-[80px]">
      <div className="flex-1/5 text-black">
        <FilterSidebar onFilterChange={setFilters} />
      </div>
      <div className="max-w-[780px]">
        <Path />
        <section>
          <div className="flex">
            <div className="flex-3/4">
              <h1 className="text-2xl font-bold">
                Consult General Physicians Online - Internal Medicine
                Specialists
              </h1>
              <span>({doctorCount} doctors)</span>
            </div>
            <div className="flex-1/4 flex h-12 rounded  border border-gray-400 hover:cursor-pointer justify-center items-center m-2">
              <button className="flex outline-none hover:cursor-pointer">
                {" "}
                <ArrowUpDown />
                <span className="ml-2 mr-5">Availibility</span>
                <ChevronDown />
              </button>
            </div>
          </div>
          <div className="mt-5 space-y-6">
            {loading ? (
              <p>Loading...</p>
            ) : doctors.length === 0 ? (
              <p>No doctors found</p>
            ) : (
              doctors.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  name={doc.name}
                  specialization={doc.designation}
                  experience={`${doc.experience} YEARS`}
                  qualifications={doc.qualifications}
                  clinic="Apollo 24|7 Virtual Clinic"
                  location={doc.clinic_location}
                  fee={doc.fee}
                  imageUrl={doc.img_url}
                  state="India"
                />
              ))
            )}
          </div>
        </section>
      </div>
      <div className="flex-1/5 mt-5 ml-2 flex justify-center">
        <ConsultDoctorCard />
      </div>
    </div>
  );
};

export default HomePage;
