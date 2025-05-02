import { z } from "zod";
import {
  createDoctorRepo,
  getAllDoctorsRepo,
  getDoctorsWithFiltersRepo,
} from "../repository/doctor.repository";
import AppError from "../types/AppError";
import { filterQuerySchema } from "../zod/doctorValidator";

type FilterQuery = z.infer<typeof filterQuerySchema>;

export async function createDoctorService({
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
}) {
  return await createDoctorRepo({
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
  });
}

export async function getAllDoctorsService() {
  return await getAllDoctorsRepo();
}

export async function getDoctorsWithFiltersService({
  experience,
  languages,
  feeMin,
  feeMax,
  page,
  pageSize,
  modeOfConsult,
}: {
  experience?: number[];
  languages?: string[];
  feeMin?: number;
  feeMax?: number;
  page: number;
  pageSize: number;
  modeOfConsult?: string[];
}) {
  const filters: FilterQuery = {
    experience,
    languages,
    feeMin,
    feeMax,
    page,
    pageSize,
    modeOfConsult,
  };
  console.log("from server", languages);
  console.log("from service", modeOfConsult);
  return await getDoctorsWithFiltersRepo(filters);
}
