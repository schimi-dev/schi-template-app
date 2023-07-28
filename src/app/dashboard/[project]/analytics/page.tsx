import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";

export const generateMetadata = makeGenerateProjectMetadata("Analytics")

export default function Page() {

    return (
        <main className="px-5 py-10">
            Analytics
        </main>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
