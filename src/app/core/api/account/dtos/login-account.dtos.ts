import { z } from "zod";

export const LoginAccountSchema = z.object({
  name: z.string().nonempty().max(20),
  phone: z.string().nonempty().max(20),
});

export type LoginAccountDto = z.infer<typeof LoginAccountSchema>;
