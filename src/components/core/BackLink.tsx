import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { MdArrowBack } from "react-icons/md";

export default function BackLink({ href }: { href: Route }) {

    return (
        <Link
            href={href}
            className="inline-flex items-center justify-center text-sm font-medium pl-1 pr-2 py-1.5 rounded hover:bg-neutral-800"
        >
            <MdArrowBack className="h-4 w-4 mr-2" />
            Back
        </Link>
    )
}