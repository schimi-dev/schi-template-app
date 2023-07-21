'use client'

import { TProject } from "@/types/project"
import { Session } from "next-auth"

export default function Header({ projects, user }: { projects: TProject[], user: NonNullable<Session["user"]> }) {

    return (
        <header>

        </header>
    )
}