import getUser from "@/lib/auth/getUser";
import { findProjects } from "@/lib/data/project";
import UserLink from "./UserLink";
import ProjectLink from "./ProjectLink";
import ToggleThemeForm from "./ToggleThemeForm";
import LogoutButton from "./LogoutButton";
import ProjectLevelSeperator from "./ProjectLevelSeperator";
import getTheme from "@/lib/utils/getTheme";
import Image from "next/image";
import Seperator from "./Seperator";
import Link from "next/link";

export default async function Header() {

    const theme = getTheme();
    const user = await getUser();
    const projects = await findProjects(user.id, user.provider);

    return (
        <header className="z-10 sticky top-0 h-14 bg-white dark:bg-secondary-900 border-b border-b-secondary-200 dark:border-b-secondary-800 flex items-center px-5 gap-4">
            <Link href="/">
                <Image
                    className="flex items-center justify-center"
                    src={(theme === "light" ? process.env.NEXT_PUBLIC_LOGO_LIGHT : process.env.NEXT_PUBLIC_LOGO_DARK) as string}
                    alt="Logo"
                    width={32}
                    height={32}
                    priority={true}
                />
            </Link>
            <Seperator />
            <UserLink user={user} />
            <ProjectLevelSeperator />
            <ProjectLink projects={projects} />
            <ToggleThemeForm />
            <LogoutButton />
        </header>
    )
}
