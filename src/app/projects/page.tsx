import navigation from "@/navigation";
import getUser from "@/lib/auth/getUser";
import { findProjects } from "@/lib/data/project";
import Link from "next/link";
import { MdAdd } from "react-icons/md";

export const metadata = {
    title: "Your Projects"
}

export default async function Page() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider)

    return (
        <div className="w-full">
            <main className="flex flex-col gap-8 max-w-5xl mx-auto px-5 py-10">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-medium">
                            Your projects
                        </h1>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            Select a project or create a new one to continue.
                        </p>
                    </div>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        className="flex flex-col gap-2 items-center justify-center h-40 rounded-md border shadow hover:shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 bg-white dark:bg-secondary-800 border-secondary-300 dark:border-secondary-700 p-4 text-primary-500 dark:text-primary-400"
                        href={navigation.newProject}
                    >
                        <MdAdd className="h-7 w-7" />
                        <span className="text-sm font-medium">
                            New project
                        </span>
                    </Link>
                    {projects.map(project => (
                        <li key={project.id}>
                            <Link
                                className="flex flex-col gap-3 h-40 rounded-md border shadow hover:shadow-md hover:bg-secondary-100 dark:hover:bg-secondary-700 bg-white dark:bg-secondary-800 border-secondary-300 dark:border-secondary-700 p-4"
                                href={navigation.singleProjectOverview(project.id)}
                            >
                                <span className="text-sm font-medium">
                                    {project.name}
                                </span>
                                <span className="text-xs text-secondary-500 dark:text-secondary-400">
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
