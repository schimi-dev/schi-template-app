import { TProject } from "@/types/project";
import { updateProjectAction } from "@/server/lib/project/actions";
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Submit from "@/components/core/Submit";
import TextArea from "@/components/core/TextArea";
import { useId } from "react";

export default function UpdateProjetForm({ project }: { project: TProject }) {

    const id = useId()

    return (
        <form
            className="md:w-1/2 flex flex-col gap-6"
            spellCheck={false}
            autoComplete="off"
            action={updateProjectAction}
        >
            <input type="hidden" name="id" defaultValue={project.id} />
            <div>
                <Label htmlFor={`${id}-name`}>Name</Label>
                <Input
                    id={`${id}-name`}
                    name="name"
                    defaultValue={project.name}
                    required
                    maxLength={40}
                />
            </div>
            <div>
                <Label htmlFor={`${id}-description`}>Description</Label>
                <TextArea
                    id={`${id}-description`}
                    name="description"
                    defaultValue={project.description ?? ""}
                    maxLength={200}
                    rows={6}
                />
            </div>
            <div>
                <Submit>Update</Submit>
            </div>
        </form>
    )

}