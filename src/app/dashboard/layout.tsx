import { ReactNode } from "react";
import Header from "@/components/header/Header";

export default function Layout({ children }: { children: ReactNode }) {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {children}
        </div>
    );
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
