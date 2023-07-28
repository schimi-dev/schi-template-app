'use server'

import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import navigation from "@/navigation";
import getUser from "@/server/auth/getUser";
import { MutateProject } from "@/types/project";
import { createProject, deleteProject, updateProject } from ".";

export const createProjectAction = async (formData: FormData) => {
    const user = await getUser();
    const data = MutateProject.parse(Object.fromEntries(formData));
    const insertedId = await createProject(data, user.id, user.provider);
    revalidatePath("/");
    redirect(navigation.singleProjectOverview(insertedId));
}

export const updateProjectAction = async (formData: FormData) => {
    const user = await getUser();
    const id = formData.get("id");
    if (!id)
        throw new Error("Missing project id when trying to update project");
    const data = MutateProject.parse(Object.fromEntries(formData));
    const result = await updateProject(id.toString(), data, user.id, user.provider);
    if (!result)
        notFound();
    revalidatePath("/");
}

export const deleteProjectAction = async (formData: FormData) => {
    const user = await getUser();
    const id = formData.get("id");
    if (!id)
        throw new Error("Missing project id when trying to delete project");
    await deleteProject(id.toString(), user.id, user.provider);
    revalidatePath("/");
    redirect(navigation.dashboard)
}
