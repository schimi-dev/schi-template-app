'use client'

import navigation from "@/navigation"
import { TProject } from "@/types/project"
import SelectProjectButton from "./SelectProjectButton";
import BreadcrumbLink from "./BreadcrumbLink";
import useProjectId from "@/hooks/useProjectId";

export default function ProjectLink({ projects }: { projects: TProject[] }) {

    const projectId = useProjectId();
    const project = projectId ? projects.find(project => project.id === projectId) : null;

    // Returning `null` is a suitable approach because functionality that is only available in Client Components is needed to detect if this component should be rendered.
    // That way, the header of the app can remain a Server Component and this component can detect based on the dynamic params if it should render anything.
    // Moreover, this component is intended to be only used in the header of the app which mitigates the fact that returning `null` might surprise a developer trying to render it.
    // https://legacy.reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering
    // https://react.dev/learn/conditional-rendering#conditionally-returning-nothing-with-null
    // https://nextjs.org/docs/getting-started/react-essentials#moving-client-components-to-the-leaves
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
