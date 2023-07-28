import React from "react";
import { ClientSafeProvider, LiteralUnion } from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers";
import LoginButton from "./LoginButton";

export const metadata = {
    title: "Login"
}

export default async function Page({ searchParams }: { searchParams: { error?: string } }) {

    const providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | undefined = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/api/auth/providers`, { cache: 'no-store' })
        .then(res => res.json());

    if (!providers)
        throw new Error("Failed to fetch providers");

    const error = searchParams.error || null;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <main className="max-w-sm w-full p-4 relative">
                <h1 className="text-2xl text-center font-semibold mb-8">{`Log in to ${process.env.NEXT_PUBLIC_TITLE}`}</h1>
                <div className="flex flex-col space-y-4">
                    {Object.values(providers)
                        .filter(provider => provider.type === "oauth")
                        .map((provider, index) => (
                            <LoginButton
                                key={provider.id}
                                provider={provider}
                                primary={index === 0}
                            />
                        ))
                    }
                    {error &&
                        <p className="text-sm text-center text-error-500 dark:text-error-400 font-normal">
                            {`Failed to log in`}
                        </p>
                    }
                </div>

            </main>
        </div>
    )
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
