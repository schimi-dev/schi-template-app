import { ProjectSettings, TProject } from "@/types/project";
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Submit from "@/components/core/Submit";
import TextArea from "@/components/core/TextArea";
import { useId } from "react";
import getUser from "@/lib/auth/getUser";
import { updateProject } from "@/lib/data/project";
import { revalidatePath } from "next/cache";

export default function UpdateProjetForm({ project }: { project: TProject }) {
    async function updateProjectAction(formData: FormData) {
        'use server'
        const user = await getUser();
        const data = ProjectSettings.parse(Object.fromEntries(formData));
        const result = await updateProject(project.id, data, user.id, user.provider);
        if (!result)
            throw new Error(`Failed to update project with id ${project.id}`);
        revalidatePath("/");
    }

    const id = useId()

    return (
        <form
            className="md:w-1/2 flex flex-col gap-6"
            spellCheck={false}
            autoComplete="off"
            action={updateProjectAction}
        >
            <div>
                <Label htmlFor={`${id}-name`}>Name</Label>
                <Input
                    id={`${id}-name`}
                    name="name"
                    defaultValue={project.name}
                    required
                    maxLength={40}
                />
            </div>
            <div>
                <Label htmlFor={`${id}-description`}>Description</Label>
                <TextArea
                    id={`${id}-description`}
                    name="description"
                    defaultValue={project.description}
                    maxLength={200}
                    rows={6}
                />
            </div>
            <div>
                <Submit>Update</Submit>
            </div>
        </form>
    )
}
