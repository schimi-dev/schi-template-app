/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#fff',
                'info':'#60a5fa', // blue-400
                'error':'#f87171', // red-400
                'success':'#2dd4bf', // teal-400
                'warning':'#eab308', // yellow-500
            }
        },
    },
    plugins: [],
}
