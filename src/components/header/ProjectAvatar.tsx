import { TProject } from "@/types/project";

export default function ProjectAvatar({ project, small }: { project: TProject, small?: boolean }) {

    return (
        <div className={small ?
            "bg-secondary-700 text-white dark:bg-secondary-300 dark:text-secondary-800 rounded flex items-center justify-center h-5 w-5 text-xs" :
            "bg-secondary-700 text-white dark:bg-secondary-300 dark:text-secondary-800 rounded flex items-center justify-center h-6 w-6 text-sm"}
        >
            {project.name.charAt(0).toUpperCase()}
        </div>
    )
}
