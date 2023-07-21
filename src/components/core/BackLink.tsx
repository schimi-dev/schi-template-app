import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { MdArrowBack } from "react-icons/md";

export default function BackLink({ href }: { href: Route }) {

    return (
        <Link
            href={href}
            className="inline-flex items-center text-sm font-medium text-neutral-400 hover:underline mb-3"
        >
            <MdArrowBack className="mr-2" />
            Back
        </Link>
    )
}