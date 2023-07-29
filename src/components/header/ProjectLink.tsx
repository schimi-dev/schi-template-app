'use client'

import navigation from "@/navigation"
import { TProject } from "@/types/project"
import SelectProjectButton from "./SelectProjectButton";
import BreadcrumbLink from "./BreadcrumbLink";
import useProjectParam from "./useProjectParam";

export default function ProjectLink({ projects }: { projects: TProject[] }) {

    const projectParam = useProjectParam();
    const project = projectParam ? projects.find(project => project.id === projectParam) : null;

    if (!project)
        return null;

    return (
        <div className="flex items-center justify-center gap-1">
            <BreadcrumbLink href={navigation.singleProjectOverview(project.id)}>
                {project.name}
            </BreadcrumbLink>
            <SelectProjectButton projects={projects} project={project} />
        </div>
    )
}
