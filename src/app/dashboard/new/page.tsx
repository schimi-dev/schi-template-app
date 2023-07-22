import BackLink from "@/components/core/BackLink"
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Submit from "@/components/core/Submit";
import TextArea from "@/components/core/TextArea";
import navigation from "@/navigation"
import { createProjectAction } from "@/server/lib/project/actions";
import { useId } from "react";

export default function Page() {

    const id = useId();

    return (
        <div className="p-6 flex flex-col gap-6 items-start">
            <BackLink href={navigation.dashboard} />
            <main className="flex flex-col mx-auto w-full max-w-md">
                <h1 className="text-2xl font-medium text-center mb-4">
                    Create a new project
                </h1>
                <p className="text-sm text-center text-neutral-500 mb-8">
                   After creating a new project, you will be redirected to that project's page where you can perform further actions.
                </p>
                <form
                    className="flex flex-col gap-8"
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

export const metadata = {
    title: "New Project"
}
