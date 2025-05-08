import { z } from "zod";

const loginSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
});

const registerSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
  role: z.string().optional(),
});

export { loginSchema, registerSchema };
