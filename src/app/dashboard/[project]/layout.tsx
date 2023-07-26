import navigation from "@/navigation";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ params, children }: { params: { project: string }, children: ReactNode }) {

    return (
        <div>
            <nav className="fixed left-0 top-14 border-r border-r-secondary-300 dark:border-r-secondary-700 h-[calc(100vh-56px)] w-60 overflow-auto">
                <ul className="flex flex-col gap-2 p-5">
                    <li>
                        <Link href={navigation.singleProjectOverview(params.project)}>
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={navigation.singleProjectSettings(params.project)}>
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-[calc(100%-240px)] ml-60">
                {children}
            </div>
        </div>
    )

}