import BackLink from "@/components/core/BackLink"
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import SubmitButton from "@/components/core/SubmitButton";
import TextArea from "@/components/core/TextArea";
import navigation from "@/navigation"
import { createProjectAction } from "@/server/lib/project/actions";
import { useId } from "react";

export default function Page() {

    const id = useId();

    return (
        <div>
            <BackLink href={navigation.dashboard} />
            <main className="flex flex-col mx-auto w-full max-w-xl">
                <h1 className="text-2xl font-medium text-center mb-8">
                    Create a new project
                </h1>
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
                            large
                        />
                    </div>
                    <div>
                        <Label htmlFor={`${id}-description`}>Description</Label>
                        <TextArea
                            id={`${id}-description`}
                            name="description"
                            maxLength={200}
                            rows={6}
                            large
                        />
                    </div>
                    <div>
                        <SubmitButton >Create project</SubmitButton>
                    </div>
                </form>
            </main>
        </div>
    )
}

export const metadata = {
    title: "New Project"
}
