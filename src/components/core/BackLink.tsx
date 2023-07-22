import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { MdArrowBack } from "react-icons/md";

export default function BackLink({ href }: { href: Route }) {

    return (
        <Link
            href={href}
            className="inline-flex items-center justify-center text-sm font-medium px-3 py-2 rounded hover:bg-neutral-800"
        >
            <MdArrowBack className="h-4 w-4 -ml-1 mr-2" />
            Back
        </Link>
    )
}