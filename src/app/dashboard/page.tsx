import navigation from "@/navigation";
import getUser from "@/server/auth/getUser";
import { findProjects } from "@/server/lib/project";
import Link from "next/link";

export default async function Page() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider)

    return (
        <div>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <Link href={navigation.singleProjectOverview(project.id)}>
                            {project.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const metadata = {
    title: "Dashboard"
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
