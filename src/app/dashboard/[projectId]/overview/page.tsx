import makeGenerateProjectMetadata from "../makeGenerateProjectMetadata";

export const generateMetadata = makeGenerateProjectMetadata("Overview")

export default function Page() {

    return (
        <main className="px-5 py-10">
            Overview
        </main>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
