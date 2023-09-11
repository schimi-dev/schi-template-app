import type { Session } from "next-auth";
import Image from "next/image";

export default function UserAvatar({ user }: { user: NonNullable<Session["user"]> }) {

    return (
        <Image
            className="rounded-full border border-secondary-300 dark:border-secondary-700"
            src={"/avatars/preset.svg"}
            alt={user.name ?? "Avatar"}
            height={24}
            width={24}
        />
    )
}
