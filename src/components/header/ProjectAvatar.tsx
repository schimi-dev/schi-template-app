import { TProject } from "@/types/project";

export default function ProjectAvatar({ project }: { project: TProject }) {

    return (
        <div className="bg-secondary-700 text-white dark:bg-secondary-300 dark:text-secondary-800 rounded h-5 w-5 text-xs font-medium flex items-center justify-center">
            {project.name.charAt(0).toUpperCase()}
        </div>
    )
}
