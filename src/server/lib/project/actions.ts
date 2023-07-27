'use server'

import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import navigation from "@/navigation";
import getUser from "@/server/auth/getUser";
import { CreateProject, DeleteProject, UpdateProject } from "@/types/project";
import { createProject, deleteProject, updateProject } from ".";

export const createProjectAction = async (formData: FormData) => {
    const user = await getUser();
    const data = CreateProject.parse(Object.fromEntries(formData));
    const insertedId = await createProject(data, user.id, user.provider);
    revalidatePath("/");
    redirect(navigation.singleProjectOverview(insertedId));
}

export const updateProjectAction = async (formData: FormData) => {
    const user = await getUser();
    const data = UpdateProject.parse(Object.fromEntries(formData));
    const result = await updateProject(data, user.id, user.provider);
    if (!result)
        notFound();
    revalidatePath("/");
}

export const deleteProjectAction = async (formData: FormData) => {
    const user = await getUser();
    const data = DeleteProject.parse(Object.fromEntries(formData));
    await deleteProject(data.id, user.id, user.provider);
    revalidatePath("/");
    redirect(navigation.dashboard)
}
