import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primary: colors.indigo,
            secondary: colors.zinc,
            error: colors.red,
            success: colors.green,
            warning: colors.yellow,
            white: colors.white,
            black: colors.black,
        },
    },
    plugins: [],
}
