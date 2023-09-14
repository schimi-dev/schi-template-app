import { TProject } from "@/types/project";

export default function ProjectAvatar({ project }: { project: TProject }) {

    return (
        <div className="bg-secondary-200 dark:bg-secondary-600 rounded flex items-center justify-center h-5 w-5 text-xs">
            {project.name.charAt(0).toUpperCase()}
        </div>
    )
}
