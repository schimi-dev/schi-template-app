import getUser from "@/server/auth/getUser";
import { findProject } from "@/server/lib/project";
import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";
import { notFound } from "next/navigation";
import UpdateProjetForm from "./UpdateProjectForm";
import DeleteProjectButton from "./DeleteProjectButton";
import DeleteProjectForm from "./DeleteProjectForm";

export const generateMetadata = makeGenerateProjectMetadata("Settings")

export default async function Page({ params }: { params: { project: string } }) {

    const user = await getUser();
    const project = await findProject(params.project, user.id, user.provider)

    if (!project)
        notFound();

    return (
        <main className="flex flex-col gap-7 max-w-3xl mx-auto px-5 py-10">
            <div className="flex flex-col gap-1 -mb-1">
                <h1 className="text-2xl font-medium">
                    Project
                </h1>
                <p className="text-sm font-medium text-secondary-500">
                    Manage your project settings
                </p>
            </div>
            <hr className="w-full border-t border-t-secondary-200 dark:border-t-secondary-800" />
            <div className="flex flex-col gap-4">
                <h2 className="font-medium">
                    General
                </h2>
                <UpdateProjetForm project={project} />
            </div>
            <hr className="w-full border-t border-t-secondary-200 dark:border-t-secondary-800" />
            <div className="flex flex-col  gap-4">
                <h2 className="font-medium">
                    Delete project
                </h2>
                <div className="flex flex-col gap-6">
                    <p className="text-sm text-secondary-500">
                        {"If you want to permanentrly delete this project and all of its related data, you can do so below."}
                    </p>
                    <div>
                        <DeleteProjectButton>
                            <DeleteProjectForm project={project} />
                        </DeleteProjectButton>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
