import getUser from "@/lib/auth/getUser";
import { findProjects } from "@/lib/data/project";
import UserLink from "./UserLink";
import Seperator from "./Seperator";
import ProjectLink from "./ProjectLink";
import ToggleThemeForm from "./ToggleThemeForm";
import LogoutButton from "./LogoutButton";

export default async function Header() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider);

    return (
        <header className="z-10 sticky top-0 h-14 bg-white dark:bg-secondary-900 border-b border-b-secondary-200 dark:border-b-secondary-800 flex items-center px-5 gap-4">
            <UserLink user={user} />
            <Seperator />
            <ProjectLink projects={projects} />
            <ToggleThemeForm />
            <LogoutButton />
        </header>
    )
}
