import Submit from "@/components/core/Submit";
import { deleteProjectAction } from "@/server/lib/project/actions";
import { TProject } from "@/types/project";

export default function DeleteProjectForm({ project }: { project: TProject }) {

    return (
        <form
            className="flex items-center justify-end"
            action={deleteProjectAction}
        >
            <input type="hidden" name="id" defaultValue={project.id} />
            <Submit danger>
                {"Yes, delete it"}
            </Submit>
        </form>
    )
}
