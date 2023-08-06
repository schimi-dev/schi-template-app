import { z } from "zod";

const ProjectSettingsSchema = z.object({
    name: z.string().min(1).max(40),
    description: z.string().max(200),
});

const ProjectSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    lastUpdate: z.date(),
    userAccountId: z.string(),
    userAccountProvider: z.string(),
}).merge(ProjectSettingsSchema);

export { ProjectSettingsSchema, ProjectSchema };

export type TProjectSettings = z.infer<typeof ProjectSettingsSchema>;
export type TProject = z.infer<typeof ProjectSchema>;
