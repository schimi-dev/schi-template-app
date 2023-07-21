import makeGenerateProjectMetadata from "@/server/utils/makeGenerateProjectMetadata";

export default function Page() {

    throw new Error();
}

export const generateMetadata = makeGenerateProjectMetadata("Settings")

export const revalidate = 0;
export const dynamic = "force-dynamic";
