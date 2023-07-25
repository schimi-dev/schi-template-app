import Link from "next/link";
import { ReactNode } from "react";
import type { Route } from "next";

export default function BreadcrumbLink<T extends string>({ href, children }: { href: Route<T>, children: ReactNode }) {
    
    return (
        // Pitfall: The link needs to have `display: flex;` and not `display: inline-flex;`
        // otherwise the link will not be vertically centered inside the breadcrumbs
        <Link className="flex items-center justify-center gap-2 text-sm font-medium focus:outline-none  " href={href}>
            {children}
        </Link>
    )
}