import getUser from "@/lib/auth/getUser";
import { findProjects } from "@/lib/data/project";
import HeaderClientComponent from "./HeaderClientComponent";
import ToggleThemeForm from "./ToggleThemeForm";
import LogoutButton from "./LogoutButton";

export default async function Header() {

    const user = await getUser();
    const projects = await findProjects(user.id, user.provider);

    return (
        <HeaderClientComponent projects={projects} user={user} >
            <ToggleThemeForm />
            <LogoutButton />
        </HeaderClientComponent>
    )
}
