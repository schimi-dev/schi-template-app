import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Submit from "@/components/core/Submit";
import TextArea from "@/components/core/TextArea";
import navigation from "@/navigation";
import getUser from "@/lib/auth/getUser";
import { createProject } from "@/lib/data/project";
import { ProjectSettings } from "@/types/project";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useId } from "react";

export default function CreateProjectForm() {
    async function createProjectAction(formData: FormData) {
        'use server'
        const user = await getUser();
        const data = ProjectSettings.parse(Object.fromEntries(formData));
        const insertedId = await createProject(data, user.id, user.provider);
        revalidatePath("/");
        redirect(navigation.singleProjectOverview(insertedId));
    }

    const id = useId();

    return (
        <form
            className="flex flex-col gap-7"
            spellCheck={false}
            autoComplete="off"
            action={createProjectAction}
        >
            <div>
                <Label htmlFor={id}>Name</Label>
                <Input
                    id={id}
                    name="name"
                    autoFocus
                    required
                    maxLength={40}
                />
            </div>
            <div>
                <Label htmlFor={`${id}-description`}>Description</Label>
                <TextArea
                    id={`${id}-description`}
                    name="description"
                    maxLength={200}
                    rows={6}
                />
            </div>
            <div className="flex flex-row items-center justify-center">
                <Submit>Create project</Submit>
            </div>
        </form>
    )
}
