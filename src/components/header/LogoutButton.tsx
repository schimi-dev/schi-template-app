'use client'

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export default function LogoutButton() {

    const logout = async () => {
        try {
            await signOut({
                redirect: true,
            });
        }
        catch (error) {
            console.error('Failed to sign out');
        };
    }

    return (
        <button
            onClick={logout}
            className="text-sm font-medium hover:bg-secondary-100 dark:hover:bg-secondary-800 px-3 py-2 -mx-2 rounded-md flex items-center justify-center gap-1.5"
        >
            <MdLogout className="h-4 w-4" />
            Log out
        </button>
    )
}