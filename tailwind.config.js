/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sora': ['Sora'],
            'raleway': ['Raleway'],
            'inter': ['Inter']
        }
    },
    plugins: [],
}