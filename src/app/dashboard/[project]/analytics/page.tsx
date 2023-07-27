import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";

export default function Page() {

    return (
        <div className="px-5 py-10">
            Analytics
        </div>
    )
}

export const generateMetadata = makeGenerateProjectMetadata("Analytics")

export const revalidate = 0;
export const dynamic = "force-dynamic";
