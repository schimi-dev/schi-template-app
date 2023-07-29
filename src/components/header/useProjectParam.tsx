import { useParams } from "next/navigation";

export default function useProjectParam() {
    const { project } = useParams() as { project?: string };
    return project ?? null
}
