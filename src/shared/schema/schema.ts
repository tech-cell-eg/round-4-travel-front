import { z } from "zod";

export const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Email must be a valid" }),
    title: z.string().nonempty({ message: "Name is required" }),
    comment: z.string().nonempty({ message: "Name is required" }),
})