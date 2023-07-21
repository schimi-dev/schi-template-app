import { z } from "zod";

const Project = z.object({
    id: z.string(),
    name: z.string().min(1).max(40),
    description: z.string().min(1).max(200).nullable(),
    image: z.string().nullable().optional(),
    createdAt: z.date(),
    lastUpdate: z.date(),
    userAccountId: z.string(),
    userAccountProvider: z.string(),
});

const CreateProject = z.object({
    name: z.string().min(1).max(40),
    description: z.string().min(1).max(200).nullable(),
});

const UpdateProject = z.object({
    id: z.string(),
    name: z.string().min(1).max(40),
    description: z.string().min(1).max(200).nullable(),
});

const DeleteProject = z.object({
    id: z.string(),
});

export { Project, CreateProject, UpdateProject, DeleteProject }

export type TProject = z.infer<typeof Project>;
export type TCreateProject = z.infer<typeof CreateProject>;
export type TUpdateProject = z.infer<typeof UpdateProject>;
export type TDeleteProject = z.infer<typeof DeleteProject>;
