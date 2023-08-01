import 'server-only'
import { cache } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "./authOptions";
import navigation from "@/navigation";

const getUser = cache(async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user)
        redirect(navigation.login)
    return session.user;
});

export default getUser;
