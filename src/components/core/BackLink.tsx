import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { MdNavigateBefore } from "react-icons/md";

export default function BackLink<T extends string>({ href, children }: { href: Route<T>, children?: string }) {

    return (
        <Link
            href={href}
            className="flex items-center justify-center text-sm font-medium text-secondary-300 px-3 py-2 rounded hover:bg-secondary-800"
        >
            <MdNavigateBefore className="h-4 w-4 -ml-1.5" />
            {children || "Back"}
        </Link>
    )
}