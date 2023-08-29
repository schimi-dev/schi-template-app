import BackLink from "@/components/core/BackLink"
import navigation from "@/navigation"
import getUser from "@/lib/auth/getUser";
import type { Route } from "next";
import CreateProjectForm from "./CreateProjectForm";

export const metadata = {
    title: "New Project"
}

export default async function Page({ searchParams }: { searchParams: { backUrl?: string } }) {

    const user = await getUser();

    const backUrl = searchParams.backUrl ? searchParams.backUrl as Route : navigation.dashboard;

    return (
        <div className="min-h-screen p-8 flex flex-col gap-6">
            <div className="flex flex-row w-full items-start gap-4">
                <div className="flex-1">
                    <p className="text-xs text-secondary-500 mb-1">
                        Logged in as:
                    </p>
                    <p className="text-sm font-medium">
                        {user.name || user.email}
                    </p>
                </div>
                <BackLink href={backUrl} >
                    {`Back to ${process.env.NEXT_PUBLIC_TITLE}`}
                </BackLink>
            </div>
            <main className="flex flex-col mx-auto w-full max-w-md">
                <h1 className="text-2xl font-medium text-center mb-4">
                    Create a new project
                </h1>
                <p className="text-sm text-center text-secondary-500 mb-8">
                    {"Projects are personal resources associated with your account and can only be viewed and edited by you."}
                </p>
                <CreateProjectForm />
            </main>
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
