import getOptionalUser from "../auth/getOptionalUser";
import { findProject } from "../lib/project";

export default function makeGenerateProjectMetadata(routeName: string) {
    async function generateMetadata({ params }: { params: { id: string } }) {
        const user = await getOptionalUser();
        if (!user) return;
        const project = await findProject(params.id, user.id, user.provider);
        if (project) return { title: `${project.name} - ${routeName}` };
    }
    return generateMetadata;
}
