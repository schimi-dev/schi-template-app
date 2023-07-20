import { ReactNode } from 'react'
import locale from '@/locale'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], fallback: ['Arial', 'sans-serif'] })

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_TITLE,
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang={locale.lang}>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
