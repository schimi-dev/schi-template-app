'use client'

import { type ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import { useSearchParams } from "next/navigation";
import navigation from "@/navigation";

export default function LoginButton({ provider, primary }: { provider: ClientSafeProvider, primary: boolean }) {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    return (
        <button
            className={
                primary ?
                    "p-3.5 rounded w-full flex items-center justify-center shadow text-sm font-medium hover:bg-gradient-to-b from-[rgba(0,0,0,0.1)] dark:from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)] dark:to-[rgba(255,255,255,0.1)] text-white bg-primary-500" :
                    "p-3.5 rounded w-full flex items-center justify-center shadow text-sm font-medium hover:bg-gradient-to-b from-[rgba(0,0,0,0.05)] dark:from-[rgba(255,255,255,0.05)] to-[rgba(0,0,0,0.05)] dark:to-[rgba(255,255,255,0.05)] bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700"
            }
            onClick={() => signIn(
                provider.id,
                {
                    redirect: true,
                    callbackUrl: callbackUrl ? callbackUrl : navigation.projects
                }
            )}
        >
            {`Continue with ${provider.name}`}
        </button>
    )
}