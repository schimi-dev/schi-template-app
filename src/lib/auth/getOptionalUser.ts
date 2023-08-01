import 'server-only'
import { cache } from "react";
import { getServerSession } from "next-auth";
import authOptions from "./authOptions";

const getOptionalUser = cache(async () => {
    const session = await getServerSession(authOptions);
    return session?.user ?? null;
});

export default getOptionalUser;
