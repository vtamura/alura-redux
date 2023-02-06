/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{tsx,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: 'url("./src/assets/images/background.jpg")',
                advertise: 'url("./src/assets/images/advertise.jpg")',
            },
        },
    },
    plugins: [],
}
