import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";

export default function Page() {

    return (
        <main className="px-5 py-10">
            Build
        </main>
    )
}
export const generateMetadata = makeGenerateProjectMetadata("Build")

export const revalidate = 0;
export const dynamic = "force-dynamic";
