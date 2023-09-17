import getUser from "@/lib/auth/getUser";
import UserLink from "./UserLink";
import ToggleThemeForm from "./ToggleThemeForm";
import LogoutButton from "./LogoutButton";
import ProjectLevelSeperator from "./ProjectLevelSeperator";
import ProjectLink from "./ProjectLink";
import { findProjects } from "@/lib/data/project";

export default async function Header() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider);

    return (
        <header className="z-10 sticky top-0 h-14 bg-white dark:bg-secondary-900 border-b border-b-secondary-200 dark:border-b-secondary-800 flex items-center px-5 gap-4">
            <UserLink user={user} />
            <ProjectLevelSeperator />
            <ProjectLink projects={projects} />
            <div className="ml-auto">
                <ToggleThemeForm />
            </div>
            <LogoutButton />
        </header>
    )
}
