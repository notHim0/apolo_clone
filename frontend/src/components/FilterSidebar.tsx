"use client";

import { useEffect, useState } from "react";

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, any>) => void;
}

export default function FilterSidebar({
  onFilterChange,
}: FilterSidebarProps): React.ReactElement {
  const [modeOfConsult, setModeOfConsult] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [fees, setFees] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);

  const handleToggle = (
    value: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  // const handleModeOfConsult = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = e.target;
  //   console.log(name, checked);

  //   setModeOfConsult((prev) => ({ ...prev, [name]: checked }));
  // };

  useEffect(() => {
    const filters = {
      experience,
      fees,
      languages,
      modeOfConsult,
    };
    onFilterChange?.(filters);
  }, [experience, fees, languages, modeOfConsult]);

  return (
    <aside className="w-9/12 max-w-xs border-r border-gray-300 m-3 p-1 space-y-6 text-sm">
      <div className="flex justify-between items-center border-b-2 px-2 border-gray-300">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button className="text-blue-600 hover:underline">Clear All</button>
      </div>

      <button className="w-full border border-teal-800 text-teal-800 py-2 font-semibold rounded-xl">
        Show Doctors Near Me
      </button>

      {/*------------------------------------------------- Mode of Consult----------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Mode of Consult</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2" key="hospital">
            <input
              type="checkbox"
              name="hospital"
              checked={modeOfConsult.includes("hospital")}
              onChange={() =>
                handleToggle("hospital", modeOfConsult, setModeOfConsult)
              }
            />
            <span>Hospital Visit</span>
          </label>
          <label className="flex items-center space-x-2" key="online">
            <input
              type="checkbox"
              name="online"
              checked={modeOfConsult.includes("online")}
              onChange={() =>
                handleToggle("online", modeOfConsult, setModeOfConsult)
              }
            />
            <span>Online Consult</span>
          </label>
        </div>
      </div>

      {/*----------------------------------------------------Experience--------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Experience (In Years)</h3>
        {["0-5", "6-10", "11-16", ...(experienceExpanded ? ["16+"] : [])].map(
          (range) => (
            <label key={range} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={experience.includes(range)}
                onChange={() => handleToggle(range, experience, setExperience)}
              />
              <span>{range}</span>
            </label>
          )
        )}
        <button
          onClick={() => setExperienceExpanded((prev) => !prev)}
          className="text-blue-600 hover:underline"
        >
          {experienceExpanded ? "See Less" : "+1 More"}
        </button>
      </div>
      {/*--------------------------------------------------------Fees--------------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Fees (In Rupees)</h3>
        {["100-500", "500-1000", "1000+"].map((range) => (
          <label key={range} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={fees.includes(range)}
              onChange={() => handleToggle(range, fees, setFees)}
            />
            <span>{range}</span>
          </label>
        ))}
      </div>

      {/*-----------------------------------------------------Language--------------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Language</h3>
        {[
          "English",
          "Hindi",
          "Telugu",
          ...(languageExpanded
            ? [
                "Tamil",
                "Bengali",
                "Kannada",
                "Malayalam",
                "Punjabi",
                "Gujarati",
                "Marathi",
                "Urdu",
                "Odia",
                "Assamese",
              ]
            : []),
        ].map((lang) => (
          <label key={lang} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={languages.includes(lang)}
              onChange={() => handleToggle(lang, languages, setLanguages)}
            />
            <span>{lang}</span>
          </label>
        ))}
        <button
          onClick={() => setLanguageExpanded((prev) => !prev)}
          className="text-blue-600 hover:underline"
        >
          {languageExpanded ? "See Less" : "+10 More"}
        </button>
      </div>

      {/*--------------------------------------------------------Facility----------------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Facility</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Apollo Hospital</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Other Clinics</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
