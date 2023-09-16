import { Menu } from '@headlessui/react'
import { TProject } from "@/types/project";
import { useRouter, usePathname } from "next/navigation";
import navigation from "@/navigation";
import type { Route } from "next";
import { MdUnfoldMore, MdCheck } from "react-icons/md";
import { Fragment } from 'react';
import { MdNavigateBefore } from "react-icons/md";

export default function SelectProjectButton({ projects, project }: { projects: TProject[], project: TProject }) {

    const { push } = useRouter();
    const pathname = usePathname();

    const selectProject = (projectId: string) => {
        const segments = pathname.split("/").filter(x => x !== "");
        if (segments.length > 3)
            segments.splice(3, Infinity);
        segments[1] = projectId;
        push(`/${segments.join("/")}` as Route)
    }

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="h-10 w-7 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-800 flex items-center justify-center">
                <MdUnfoldMore className="h-5 w-5" />
            </Menu.Button>
            <Menu.Items className="top-11 left-3.5 -translate-x-1/2 absolute z-10 rounded-md overflow-hidden shadow border border-secondary-300 bg-white dark:border-secondary-700 dark:bg-secondary-800">
                <div className="p-4 flex items-center gap-2">
                    <h2 className="text-sm font-medium flex-1">
                        Projects
                    </h2>
                    <span className="text-xs px-0.5 rounded border border-secondary-400 dark:border-secondary-500 dark:bg-secondary-900">Esc</span>
                </div>
                <hr className="w-full border-t border-t-secondary-300 dark:border-t-secondary-700" />
                <div className="py-2 overflow-auto w-[264px] max-h-[200px]">
                    {projects.map(x => (
                        <Menu.Item key={x.id} as={Fragment} >
                            {({ active }) => (
                                <button
                                    className={active ?
                                        "w-full flex items-center px-4 py-2 gap-3 text-sm cursor-pointer bg-secondary-100 dark:bg-secondary-700" :
                                        "w-full flex items-center px-4 py-2 gap-3 text-sm cursor-pointer hover:bg-secondary-100 dark:hover:bg-secondary-700"
                                    }
                                    onClick={() => selectProject(x.id)}
                                >
                                    <span className="flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
                                        {x.name}
                                    </span>
                                    <div className="w-5 flex items-center justify-end">
                                        {project.id === x.id && <MdCheck className='h-4 w-4' />}
                                    </div>
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </div>
                <hr className="w-full border-t border-t-secondary-300 dark:border-t-secondary-700" />
                <div className="py-2">
                    <Menu.Item as={Fragment}>
                        {({ active }) => (
                            <button
                                className={active ?
                                    "w-full flex items-center px-4 py-2 gap-1 text-sm cursor-pointer text-secondary-600 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-700" :
                                    "w-full flex items-center px-4 py-2 gap-1 text-sm cursor-pointer text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700"
                                }
                                onClick={() => push(navigation.dashboard)}
                            >

                                <MdNavigateBefore className="h-4 w-4" />
                                Back
                            </button>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    )
}
