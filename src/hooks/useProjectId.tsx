import { useParams } from "next/navigation";

export default function useProjectId() {
    const { projectId } = useParams() as { projectId?: string };
    return projectId ?? null
}
