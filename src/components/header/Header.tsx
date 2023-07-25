'use client'

import { TProject } from "@/types/project"
import { Session } from "next-auth"
import UserLink from "./UserLink"
import { useParams, usePathname } from "next/navigation";
import navigation from "@/navigation";
import ProjectLink from "./ProjectLink";

export default function Header({ projects, user }: { projects: TProject[], user: NonNullable<Session["user"]> }) {

    const { project: projectParam } = useParams() as { project?: string };
    const pathname = usePathname();

    const isProjectRoute = !!projectParam && pathname.startsWith(navigation._singleProject(projectParam));
    const project = isProjectRoute ? projects.find(project => project.id === projectParam) : null;

    return (
        <header className="sticky top-0 h-14 bg-neutral-900 border-b border-b-[rgba(255,255,255,0.15)] flex items-center px-5">
            <UserLink user={user} />
            {project && <hr className="rotate-12 h-7 w-[1px] bg-neutral-700 text-neutral-700 mx-4"/>}
            {project && <ProjectLink projects={projects} project={project} />}
        </header>
    )
}