import { useParams } from "next/navigation";

export default function useProjectId() {
    const { projectId } = useParams<{ projectId?: string }>();
    return projectId ?? null
}
