import { ReactNode } from "react";
import getUser from "@/server/auth/getUser";
import { findProjects } from "@/server/lib/project";
import Header from "@/components/header/Header";

export default async function Layout({ children }: { children: ReactNode }) {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider);

    return (
        <div className="flex flex-col min-h-screen">
            <Header projects={projects} user={user} />
            {children}
        </div>
    );
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
