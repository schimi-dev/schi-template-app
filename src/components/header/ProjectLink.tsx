import navigation from "@/navigation"
import { TProject } from "@/types/project"
import SelectProjectButton from "./SelectProjectButton";
import BreadcrumbLink from "./BreadcrumbLink";

export default function ProjectLink({ projects, project }: { projects: TProject[], project: TProject }) {

    return (
        <div className="flex items-center justify-center gap-1">
            <BreadcrumbLink href={navigation.singleProjectOverview(project.id)}>
                {project.name}
            </BreadcrumbLink>
            <SelectProjectButton projects={projects} project={project} />
        </div>
    )
}
