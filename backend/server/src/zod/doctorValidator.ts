import { z } from "zod";

export const doctorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  experience: z.number().min(0),
  qualifications: z.string(),
  designation: z.string(),
  fee: z.number().min(0),
  rating: z.number().min(0).max(100).optional(),
  languages: z.array(z.string()),
  clinic_location: z.string(),
  img_url: z.string().optional(),
  mode_of_consult: z.array(z.string()).optional(),
});

export const filterQuerySchema = z
  .object({
    // Supports single experience or comma-separated list (e.g., "5" or "1,2,3,4-5")
    experience: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((val) => {
        if (!val) return undefined;
        const values = Array.isArray(val) ? val : val.split(",");
        return values.flatMap((v) => {
          if (v.includes("-")) {
            const [min, max] = v.split("-").map(Number);
            return Array.from({ length: max - min + 1 }, (_, i) => min + i);
          }
          return Number(v);
        });
      }),

    // Supports single language or comma-separated list (e.g., "English" or "English,Spanish")
    languages: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((val) => {
        if (!val) return undefined;
        return Array.isArray(val) ? val : val.split(",");
      }),

    // Numeric filters
    feeMin: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : undefined))
      .refine((val) => val === undefined || val >= 0, {
        message: "Minimum fee must be positive",
      }),

    feeMax: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : undefined))
      .refine((val) => val === undefined || val >= 0, {
        message: "Maximum fee must be positive",
      }),

    // Pagination with validation
    page: z
      .string()
      .optional()
      .transform((val) => (val ? Math.max(1, parseInt(val)) : 1))
      .refine((val) => val > 0, {
        message: "Page must be positive",
      }),

    pageSize: z
      .string()
      .optional()
      .transform((val) =>
        val ? Math.min(Math.max(1, parseInt(val)), 100) : 10
      )
      .refine((val) => val > 0 && val <= 100, {
        message: "Page size must be between 1 and 100",
      }),
    modeOfConsult: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((val) => {
        if (!val) return undefined;
        return Array.isArray(val) ? val : val.split(",");
      }),
  })
  .refine(
    (data) =>
      data.feeMin === undefined ||
      data.feeMax === undefined ||
      data.feeMin <= data.feeMax,
    {
      message: "Minimum fee cannot be greater than maximum fee",
      path: ["feeMin"],
    }
  );
