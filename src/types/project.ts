import { z } from "zod";

const ProjectSettings = z.object({
    name: z.string().min(1).max(40),
    description: z.string().max(200),
});

const Project = z.object({
    id: z.string(),
    createdAt: z.date(),
    lastUpdate: z.date(),
    userAccountId: z.string(),
    userAccountProvider: z.string(),
}).merge(ProjectSettings);

export { ProjectSettings, Project };

export type TProjectSettings = z.infer<typeof ProjectSettings>;
export type TProject = z.infer<typeof Project>;
