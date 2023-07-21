import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primary: colors.blue,
            secondary: colors.purple,
            error: colors.red,
            success: colors.green,
            warning: colors.yellow,
            neutral: colors.neutral,
            white: colors.white,
        },
    },
    plugins: [],
}
