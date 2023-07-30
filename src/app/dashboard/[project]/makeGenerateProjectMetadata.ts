import getOptionalUser from "@/lib/auth/getOptionalUser";
import { findProject } from "@/lib/data/project";

export default function makeGenerateProjectMetadata(routeName: string) {
    async function generateMetadata({ params }: { params: { project: string } }) {
        const user = await getOptionalUser();
        if (!user)
            return;
        const project = await findProject(params.project, user.id, user.provider);
        if (project)
            return { title: `${project.name} - ${routeName}` };
    }
    return generateMetadata;
}
