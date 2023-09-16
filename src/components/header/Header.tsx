import getUser from "@/lib/auth/getUser";
import UserLink from "./UserLink";
import ToggleThemeForm from "./ToggleThemeForm";
import LogoutButton from "./LogoutButton";
import getTheme from "@/lib/utils/getTheme";
import Image from "next/image";
import Seperator from "./Seperator";

export default async function Header() {

    const theme = getTheme();
    const user = await getUser();

    return (
        <header className="z-10 sticky top-0 h-14 bg-white dark:bg-secondary-900 border-b border-b-secondary-200 dark:border-b-secondary-800 flex items-center px-5 gap-4">
            <Image
                className="flex items-center justify-center"
                src={(theme === "light" ? process.env.NEXT_PUBLIC_LOGO_LIGHT : process.env.NEXT_PUBLIC_LOGO_DARK) as string}
                alt="Logo"
                width={32}
                height={32}
                priority={true}
            />
            <Seperator />
            <UserLink user={user} />
            <div className="ml-auto">
                <ToggleThemeForm />
            </div>
            <LogoutButton />
        </header>
    )
}
