import Image from "next/image";
import { ReactElement } from "react";

export default function ConsultDoctorCard(): ReactElement {
  return (
    <div className="bg-[#001F5B] text-white p-4 rounded-xl w-64 space-y-3 shadow-lg max-h-[250px]">
      <div className="flex justify-center">
        <Image
          src="/consult_doctor.webp"
          alt="Consult Doctors"
          width={200}
          height={80}
          className="rounded-md"
        />
      </div>

      <div>
        <p className="font-semibold text-sm leading-snug">
          Need help consult <br /> right doctor?
        </p>
        <a
          href="tel:+918040245807"
          className="underline text-sm font-medium mt-2 inline-block"
        >
          Call +91-8040245807 to book instantly
        </a>
      </div>
    </div>
  );
}
