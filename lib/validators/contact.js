import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\d\s()+\-\.]+$/, "Please enter a valid phone number"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  caseType: z.string().min(1, "Please select a case type"),
  preferredContact: z.string().optional().default("either"),
  bestTimeToCall: z.string().optional().default(""),
  howDidYouHear: z.string().optional().default(""),
  isExistingClient: z.string().optional().default("no"),
  message: z.string().min(1, "Please describe your case").max(5000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted" }),
  }),
});
