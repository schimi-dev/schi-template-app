import Submit from "@/components/core/Submit";
import navigation from "@/navigation";
import getUser from "@/lib/auth/getUser";
import { deleteProject } from "@/lib/data/project";
import { TProject } from "@/types/project";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function DeleteProjectForm({ project }: { project: TProject }) {
    async function deleteProjectAction() {
        'use server'
        const user = await getUser();
        await deleteProject(project.id, user.id, user.provider);
        revalidatePath("/");
        redirect(navigation.dashboard)
    }

    return (
        <form
            className="flex items-center justify-end"
            action={deleteProjectAction}
        >
            <Submit danger>
                {"Yes, delete it"}
            </Submit>
        </form>
    )
}
