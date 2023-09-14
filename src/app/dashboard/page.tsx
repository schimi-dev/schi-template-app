import navigation from "@/navigation";
import getUser from "@/lib/auth/getUser";
import { findProjects } from "@/lib/data/project";
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";

export const metadata = {
    title: "Dashboard"
}

export default async function Page() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider)

    return (
        <div className="w-full">
            <main className="flex flex-col gap-8 max-w-5xl mx-auto px-5 py-10">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-medium flex-1">
                        {"Your projects"}
                    </h1>
                    <Link
                        className="text-sm font-medium rounded flex items-center justify-center gap-2 shadow text-white hover:bg-gradient-to-b from-[rgba(0,0,0,0.1)] dark:from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)] dark:to-[rgba(255,255,255,0.1)] py-2 px-4 bg-primary-500"
                        href={navigation.newProject}
                    >
                        <MdAddCircleOutline className="h-5 w-5 text-white -ml-1" />
                        New project
                    </Link>
                </div>
                {projects.length === 0 && <div
                    className="flex flex-col items-center justify-center gap-1 h-40 rounded-md border border-secondary-300 dark:border-secondary-700 p-4"
                >
                    <span className="text-sm font-medium">
                        {"You don't have any projects yet."}
                    </span>
                    <Link className="text-primary-500 dark:text-primary-400 text-sm font-medium px-3 py-2 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-700"
                        href={navigation.newProject}
                    >
                        Create a new project
                    </Link>
                </div>}
                {projects.length > 0 && <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map(project => (
                        <li key={project.id}>
                            <Link
                                className="flex flex-col gap-4 h-40 rounded-md border shadow hover:shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 bg-white dark:bg-secondary-800 border-secondary-300 dark:border-secondary-700 p-4"
                                href={navigation.singleProjectOverview(project.id)}
                            >
                                <span className="text-base font-medium">
                                    {project.name}
                                </span>
                                <span className="text-xs text-secondary-500 dark:text-secondary-400">
                                    {project.description}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>}
            </main>
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
