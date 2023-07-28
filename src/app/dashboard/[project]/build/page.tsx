import makeGenerateProjectMetadata from "../makeGenerateProjectMetadata";

export const generateMetadata = makeGenerateProjectMetadata("Build")

export default function Page() {

    return (
        <main className="px-5 py-10">
            Build
        </main>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
