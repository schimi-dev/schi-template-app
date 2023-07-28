import getTheme from "@/server/utils/getTheme";
import { cookies } from "next/headers";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ToggleThemeForm() {
    const theme = getTheme();

    async function changeThemeAction() {
        'use server'
        cookies().set({
            name: "theme",
            value: theme === "light" ? "dark" : "light",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 1000,
            path: '/'
        })
    }

    return (
        <form action={changeThemeAction} className="ml-auto">
            <button type="submit" className="h-9 w-9 rounded-md flex items-center justify-center hover:bg-secondary-100 dark:hover:bg-secondary-800">
                {theme === "light" ? <MdOutlineLightMode className="h-5 w-5" /> : <MdOutlineDarkMode className="h-5 w-5" />}
            </button>
        </form>
    )
}
