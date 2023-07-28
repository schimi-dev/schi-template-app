import BackLink from "@/components/core/BackLink"
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Submit from "@/components/core/Submit";
import TextArea from "@/components/core/TextArea";
import navigation from "@/navigation"
import getUser from "@/server/auth/getUser";
import { createProjectAction } from "@/server/lib/project/actions";
import type { Route } from "next";

export const metadata = {
    title: "New Project"
}

export default async function Page({ searchParams }: { searchParams: { backUrl?: string } }) {

    const id = "new-project-form";

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
                <form
                    className="flex flex-col gap-7"
                    spellCheck={false}
                    autoComplete="off"
                    action={createProjectAction}
                >
                    <div>
                        <Label htmlFor={`${id}-name`}>Name</Label>
                        <Input
                            id={`${id}-name`}
                            name="name"
                            autoFocus
                            required
                            maxLength={40}
                        />
                    </div>
                    <div>
                        <Label htmlFor={`${id}-description`}>Description</Label>
                        <TextArea
                            id={`${id}-description`}
                            name="description"
                            maxLength={200}
                            rows={6}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <Submit>Create project</Submit>
                    </div>
                </form>
            </main>
        </div>
    )
}
