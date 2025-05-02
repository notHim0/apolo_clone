import prisma from "../../client";

interface Doctor {
  name: string;
  experience: number;
  qualifications: string;
  designation: string;
  fee: number;
  rating: number | null;
  languages: string[];
  clinic_location: string;
  id: string;
  img_url: string | null;
  mode_of_consult: string[];
}

export async function createDoctorRepo({
  name,
  experience,
  qualifications,
  designation,
  fee,
  rating,
  languages,
  clinic_location,
  img_url,
  mode_of_consult,
}: {
  name: string;
  experience: number;
  qualifications: string;
  designation: string;
  fee: number;
  rating?: number;
  languages: string[];
  clinic_location: string;
  img_url?: string;
  mode_of_consult?: string[];
}): Promise<Doctor> {
  const doctor = await prisma.doctor.create({
    data: {
      name,
      experience,
      qualifications,
      designation,
      fee,
      rating,
      languages,
      clinic_location,
      img_url,
      mode_of_consult,
    },
  });

  return doctor;
}

export async function getAllDoctorsRepo(): Promise<Doctor[]> {
  const data = await prisma.doctor.findMany();

  return data;
}
export async function getDoctorsWithFiltersRepo({
  experience,
  languages,
  feeMin,
  feeMax,
  page = 1,
  pageSize = 10,
  modeOfConsult,
}: {
  experience?: number | number[];
  languages?: string | string[];
  feeMin?: number;
  feeMax?: number;
  page?: number;
  pageSize?: number;
  modeOfConsult?: string[];
}): Promise<Doctor[]> {
  return await prisma.doctor.findMany({
    where: {
      ...(modeOfConsult &&
        modeOfConsult.length > 0 && {
          mode_of_consult: {
            hasEvery: modeOfConsult, // or hasSome depending on your needs
          },
        }),

      //for both exact match and range of experince
      ...(experience && {
        experience: Array.isArray(experience) ? { in: experience } : experience,
      }),

      //supports both a single language or multiple languages
      ...(languages && {
        languages: {
          hasSome: Array.isArray(languages) ? languages : [languages],
        },
      }),

      //if either(min or max) of the range is not provided would still work
      ...((feeMin !== undefined || feeMax !== undefined) && {
        fee: {
          ...(feeMin !== undefined && { gte: feeMin }),
          ...(feeMax !== undefined && { lte: feeMax }),
        },
      }),
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
}
