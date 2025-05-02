import express from "express";
import tryCatch from "../util/tryCatch";
import {
  createDoctorController,
  getAllDoctorsController,
  getDoctorsWithFiltersController,
} from "../controller/doctor.controller";
const router = express.Router();

router.route("/create_doctor").post(tryCatch(createDoctorController));
router.route("/get_all_doctors").get(tryCatch(getAllDoctorsController));
router.route("/doctors").get(tryCatch(getDoctorsWithFiltersController));
export default router;
