import navigation from "@/navigation";
import getUser from "@/lib/auth/getUser";
import { findProjects } from "@/lib/data/project";
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";
import ProjectAvatar from "@/components/header/ProjectAvatar";

export const metadata = {
    title: "Dashboard"
}

export default async function Page() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider)

    return (
        <div className="w-full">
            <main className="flex flex-col gap-7 max-w-4xl mx-auto px-5 py-10">
                <h1 className="text-2xl font-medium">
                    {"Your projects"}
                </h1>
                <ul className="grid grid-cols-2 gap-4">
                    <li>
                        <Link
                            className="flex flex-col gap-4 h-48 rounded-md border shadow hover:shadow-md hover:bg-secondary-50 dark:hover:bg-secondary-700 bg-white dark:bg-secondary-800 border-secondary-200 dark:border-secondary-700 p-4"
                            href={navigation.newProject}
                        >
                            <div className="flex items-center gap-3">
                                <MdAddCircleOutline className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                                <span className="text-base font-medium">
                                    {"New Project"}
                                </span>
                            </div>
                        </Link>
                    </li>
                    {projects.map(project => (
                        <li key={project.id}>
                            <Link
                                className="flex flex-col gap-4 h-48 rounded-md border shadow hover:shadow-md hover:bg-secondary-50 dark:hover:bg-secondary-700 bg-white dark:bg-secondary-800 border-secondary-200 dark:border-secondary-700 p-4"
                                href={navigation.singleProjectOverview(project.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <ProjectAvatar project={project} />
                                    <span className="text-base font-medium">
                                        {project.name}
                                    </span>
                                </div>
                                <span className="text-xs text-secondary-500 dark:text-secondary-400 p-1">
                                    {project.description}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
