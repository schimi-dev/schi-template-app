import BackLink from "@/components/core/BackLink"
import navigation from "@/navigation"
import type { Route } from "next";
import CreateProjectForm from "./CreateProjectForm";
import getUser from "@/lib/auth/getUser";

export const metadata = {
    title: "New Project"
}

export default async function Page({ searchParams }: { searchParams: { backUrl?: string } }) {

    const user = await getUser();

    const backUrl = searchParams.backUrl ? searchParams.backUrl as Route : navigation.projects;

    return (
        <div className="min-h-screen p-8 flex flex-col gap-8">
            <div className="flex flex-row w-full items-start justify-start gap-4">
                <BackLink href={backUrl} >
                    Back
                </BackLink>
                <div className="ml-auto">
                    <p className="text-xs text-secondary-500 mb-1">
                        Logged in as:
                    </p>
                    <p className="text-sm font-medium">
                        {user.name ?? user.email}
                    </p>
                </div>
            </div>
            <main className="flex flex-col mx-auto w-full max-w-md">
                <h1 className="text-2xl font-medium text-center mb-4">
                    Create a new project
                </h1>
                <p className="text-sm text-center text-secondary-600 dark:text-secondary-400 mb-8">
                    {"Projects are personal resources associated with your account and can only be viewed and edited by you."}
                </p>
                <CreateProjectForm />
            </main>
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
