import {
  createDoctorService,
  getAllDoctorsService,
  getDoctorsWithFiltersService,
} from "../service/doctor.service";
import { doctorSchema, filterQuerySchema } from "../zod/doctorValidator";
import { NextFunction, Request, Response } from "express";

export async function createDoctorController(req: Request, res: Response) {
  // Validate request
  const parsed = doctorSchema.parse(req.body);

  // Pass to service
  const doctor = await createDoctorService(parsed);

  res.status(201).json({ data: doctor });
}
export async function getAllDoctorsController(req: Request, res: Response) {
  const allDoctors = await getAllDoctorsService();
  res.status(200).json({ data: allDoctors });
}
export async function getDoctorsWithFiltersController(
  req: Request,
  res: Response
) {
  const parsed = filterQuerySchema.parse(req.query);
  console.log("parsed query", req.query);

  const doctors = await getDoctorsWithFiltersService(parsed);

  res.status(200).json({ data: doctors });
}
