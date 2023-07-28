import { ReactNode } from 'react'
import lang from '@/lang'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import getTheme from '@/lib/utils/getTheme'

const inter = Inter({ subsets: ['latin'], fallback: ['Arial', 'sans-serif'] })

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_TITLE,
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {

    const theme = getTheme();

    return (
        <html lang={lang} className={theme === "light" ? "light" : "dark"}>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
