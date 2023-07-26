import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";

export default function Page() {

    return (
        <>
            Settings
        </>
    )
}

export const generateMetadata = makeGenerateProjectMetadata("Settings")

export const revalidate = 0;
export const dynamic = "force-dynamic";
