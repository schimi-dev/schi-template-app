import navigation from "@/navigation";
import { ReactNode } from "react";
import NavLink from "./NavLink";
import { MdOutlineDashboard, MdOutlineBuild, MdOutlineAnalytics, MdOutlineSettings } from "react-icons/md";

export default function Layout({ params, children }: { params: { projectId: string }, children: ReactNode }) {

    return (
        <div>
            <nav className="fixed left-0 top-14 border-r border-r-secondary-200 dark:border-r-secondary-800 h-[calc(100vh-56px)] w-56 overflow-auto">
                TODO Back
                Project Name
                Divider?
                <ul className="flex flex-col py-4">
                    <li>
                        <NavLink href={navigation.singleProjectOverview(params.projectId)}>
                            <MdOutlineDashboard className="h-4 w-4" />
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={navigation.singleProjectBuild(params.projectId)}>
                            <MdOutlineBuild className="h-4 w-4" />
                            Build
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={navigation.singleProjectAnalytics(params.projectId)}>
                            <MdOutlineAnalytics className="h-4 w-4" />
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={navigation.singleProjectSettings(params.projectId)}>
                            <MdOutlineSettings className="h-4 w-4" />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="w-[calc(100%-224px)] ml-56">
                {children}
            </div>
        </div>
    )
}
