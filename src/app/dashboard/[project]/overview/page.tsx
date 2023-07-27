import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";

export default function Page() {

    return (
        <main className="max-w-3xl mx-auto px-5 py-10">
            Overview
        </main>
    )
}

export const generateMetadata = makeGenerateProjectMetadata("Overview")

export const revalidate = 0;
export const dynamic = "force-dynamic";
