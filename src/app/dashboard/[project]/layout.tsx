import navigation from "@/navigation";
import { ReactNode } from "react";
import NavLink from "./NavLink";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";

export default function Layout({ params, children }: { params: { project: string }, children: ReactNode }) {

    return (
        <div>
            <nav className="fixed left-0 top-14 border-r border-r-secondary-300 dark:border-r-secondary-700 h-[calc(100vh-56px)] w-56 overflow-auto">
                <ul className="flex flex-col py-4">
                    <li>
                        <NavLink href={navigation.singleProjectOverview(params.project)}>
                            <MdOutlineDashboard className="h-4 w-4" />
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={navigation.singleProjectSettings(params.project)}>
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