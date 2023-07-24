'use client'

import { TProject } from "@/types/project"
import { Session } from "next-auth"
import UserAvatar from "./UserAvatar"

export default function Header({ projects, user }: { projects: TProject[], user: NonNullable<Session["user"]> }) {

    return (
        <header className="sticky top-0 h-14 bg-neutral-900 border-b border-b-[rgba(255,255,255,0.15)] flex items-center px-5">
            <UserAvatar user={user} />
        </header>
    )
}