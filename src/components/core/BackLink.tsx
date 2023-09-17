import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { MdNavigateBefore } from "react-icons/md";

export default function BackLink<T extends string>({ href, children }: { href: Route<T>, children?: string }) {

    return (
        <Link
            href={href}
            className="flex items-center justify-center gap-1 text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-black dark:hover:text-white"
        >
            <MdNavigateBefore className="h-4 w-4" />
            {children ?? "Back"}
        </Link>
    )
}