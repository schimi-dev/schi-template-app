import getTheme from "@/server/utils/getTheme";
import { cookies } from "next/headers";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const changeTheme = async(formData: FormData) => {
    'use server'
    const theme = formData.get("theme") as string;
    cookies().set({
        name: "theme",
        value: theme,
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 1000,
        path: '/'
    })
}

export default function ToggleThemeForm() {

    const theme = getTheme();

    return (
        <form action={changeTheme} className="ml-auto">
            <input type="hidden" name="theme" defaultValue={theme === "light" ? "dark" : "light"} />
            <button type="submit" className="h-9 w-9 rounded-md flex items-center justify-center hover:bg-secondary-100 dark:hover:bg-secondary-800">
                {theme === "light" ? <MdOutlineDarkMode className="h-5 w-5" /> : <MdOutlineLightMode className="h-5 w-5" />}
            </button>
        </form>
    )

}