'use client'

import useProjectParam from "./useProjectParam";

export default function Seperator() {
    const projectParam = useProjectParam();

    if (!projectParam)
        return null;

    return (
        <span className="text-secondary-300 dark:text-secondary-700 flex items-center justify-center text-4xl font-thin" >
            /
        </span>
    )
}