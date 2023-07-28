import { cookies } from 'next/headers';

const getTheme = () => {
    const theme = cookies().get("theme")?.value || "light";
    if (theme === "light") return "light";
    return "dark";
}

export default getTheme;
