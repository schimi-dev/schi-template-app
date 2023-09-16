import type { Session } from "next-auth";
import BreadcrumbLink from "./BreadcrumbLink";
import navigation from "@/navigation";
import UserAvatar from "./UserAvatar";

export default function UserLink({ user }: { user: NonNullable<Session["user"]> }) {

    return (
        <BreadcrumbLink href={navigation.projects}>
            <UserAvatar user={user} />
            {user.name}
        </BreadcrumbLink>
    )
}
