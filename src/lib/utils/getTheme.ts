import 'server-only'
import { cookies } from 'next/headers';

const getTheme = () => {
    const theme = cookies().get("theme")?.value;
    if (theme === "dark") return theme;
    return "light";
}

export default getTheme;
