'use client'

import { TProject } from "@/types/project"
import { Session } from "next-auth"
import UserLink from "./UserLink"
import { useParams, usePathname } from "next/navigation";
import navigation from "@/navigation";
import ProjectLink from "./ProjectLink";
import { ReactNode } from "react";

export default function HeaderClientComponent({ projects, user, children }: { projects: TProject[], user: NonNullable<Session["user"]>, children: ReactNode }) {

    const { project: projectParam } = useParams() as { project?: string };
    const pathname = usePathname();

    const isProjectRoute = !!projectParam && pathname.startsWith(navigation._singleProject(projectParam));
    const project = isProjectRoute ? projects.find(project => project.id === projectParam) : null;

    return (
        <header className="z-10 sticky top-0 h-14 bg-white dark:bg-secondary-900 border-b border-b-secondary-300 dark:border-b-secondary-700 flex items-center px-5 gap-4">
            <UserLink user={user} />
            {project && <span className="text-secondary-300 dark:text-secondary-700 flex items-center justify-center text-4xl font-thin" >
                /
            </span>}
            {project && <ProjectLink projects={projects} project={project} />}
            {children}
        </header>
    )
}