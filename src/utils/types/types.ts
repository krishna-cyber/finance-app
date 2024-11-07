import { z } from "zod";

const AccountSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

type Account = z.infer<typeof AccountSchema>;

type Response = {
  result: Account[];
  message: string;
  meta: {
    total: number;
    page: number;
    limit: number;
  } | null;
};

export { AccountSchema, type Account, type Response };
