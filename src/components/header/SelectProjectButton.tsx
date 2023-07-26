'use client'

import { Popover } from '@headlessui/react'
import { TProject } from "@/types/project";
import { useRouter, usePathname } from "next/navigation";
import navigation from "@/navigation";
import type { Route } from "next";
import { MdAddCircleOutline, MdUnfoldMore, MdCheck, MdSearch } from "react-icons/md";
import Divider from '../core/Divider';
import ProjectAvatar from './ProjectAvatar';
import { useState } from 'react';

export default function SelectProjectButton({ projects, project }: { projects: TProject[], project: TProject }) {

    const { push } = useRouter();
    const pathname = usePathname();

    const [search, setSearch] = useState('');

    const filteredProjects = search ? projects.filter(x => x.name.toLowerCase().includes(search.toLowerCase())) : projects;

    const selectProject = (projectId: string) => {
        const segments = pathname.split("/").filter(x => x !== "");
        if (segments.length === 3) {
            // We are on the project level so we can just replace the project id
            segments[1] = projectId;
            push(`/${segments.join("/")}` as Route)
        }
        else {
            // We are not on the project level, so we go to the project overview of the selected project
            push(navigation.singleProjectOverview(projectId))
        }
    }

    return (
        <Popover className="relative">
            <Popover.Button className="h-10 w-7 rounded hover:bg-secondary-800 flex items-center justify-center focus:outline-none">
                <MdUnfoldMore className="h-6 w-6" />
            </Popover.Button>
            <Popover.Panel className="top-11 left-3.5 -translate-x-1/2 absolute z-10 rounded-md overflow-hidden border border-secondary-700 bg-secondary-800">
                {({ close }) => (
                    <>
                        <div className="p-4">
                            <h2 className="text-sm font-medium">
                                Projects
                            </h2>
                        </div>
                        <Divider />
                        <div
                            className="px-4 gap-3 flex items-center justify-center"
                        >
                            <MdSearch className="h-5 w-5 text-secondary-400" />
                            <input
                                className="py-4 focus:outline-none w-full text-sm bg-secondary-800 placeholder-secondary-400"
                                placeholder={'Find Project\u2026'}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            >
                            </input>
                        </div>
                        <Divider />
                        <div className="py-2 overflow-auto w-[280px] max-h-[200px]">
                            <ul>
                                {filteredProjects.map(x => (
                                    <li
                                        key={x.id}
                                        className="flex items-center px-4 py-2 gap-3 text-sm focus:outline-none cursor-pointer hover:bg-secondary-700"
                                        onClick={() => { close(); setSearch(""); selectProject(x.id); }}
                                    >
                                        <ProjectAvatar project={x} />
                                        <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {x.name}
                                        </span>
                                        <div className="w-5 flex items-center justify-end">
                                            {project.id === x.id && <MdCheck className='h-5 w-5' />}
                                        </div>
                                    </li>
                                ))}
                                {filteredProjects.length === 0 && <li className="px-4 py-2 text-sm text-secondary-400">No projects found</li>}
                            </ul>
                        </div>
                        <Divider />
                        <div className="py-2">
                            <ul>
                                <li className="flex items-center px-4 py-2 gap-3 text-sm focus:outline-none cursor-pointer text-secondary-300 hover:bg-secondary-700"
                                    onClick={() => { close(); setSearch(""); push(`${navigation.newProject}?backUrl=${encodeURIComponent(pathname)}`) }}
                                >
                                    <MdAddCircleOutline className="h-5 w-5 text-primary-400" />
                                    Create Project
                                </li>
                            </ul>
                        </div>
                    </>)}
            </Popover.Panel>
        </Popover>
    )
}