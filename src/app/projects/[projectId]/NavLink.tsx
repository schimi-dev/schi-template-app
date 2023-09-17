'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Route } from "next"
import { ReactNode } from "react"

export default function NavLink<T extends string>({ href, children }: { href: Route<T>, children: ReactNode }) {

    const pathname = usePathname()

    const active = pathname === href

    return (
        <Link
            href={href}
            className={active ?
                "text-sm flex items-center gap-3 px-5 py-2 focus-visible:outline-none focus-visible:bg-secondary-200 dark:focus-visible:bg-secondary-700 font-medium bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-800" :
                "text-sm flex items-center gap-3 px-5 py-2 focus-visible:outline-none focus-visible:bg-secondary-100 dark:focus-visible:bg-secondary-800 font-normal hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300"
            }
        >
            {children}
        </Link>
    )
}
