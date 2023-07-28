import { z } from "zod";

const Project = z.object({
    id: z.string(),
    name: z.string().min(1).max(40),
    description: z.string().max(200),
    image: z.string().nullable().optional(),
    createdAt: z.date(),
    lastUpdate: z.date(),
    userAccountId: z.string(),
    userAccountProvider: z.string(),
});

const MutateProject = z.object({
    name: z.string().min(1).max(40),
    description: z.string().max(200),
});

export { Project, MutateProject };

export type TProject = z.infer<typeof Project>;
export type TMutateProject = z.infer<typeof MutateProject>;
