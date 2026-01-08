/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Axiforma', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    bg: '#F5F5F5', // Clean white-gray for canvas
                    text: '#2D3436', // Softer black
                    yellow: '#FFC901', // New Secondary Yellow
                    purple: '#6C5CE7', // Royal Purple
                    green: '#00B894', // Mint Green
                    red: '#FC6B00',   // Salmon Red/Orange -> Now Primary Orange
                    orange: '#FC6B00', // Primary CTA Orange
                    blue: '#74B9FF',  // Sky Blue
                    dark: '#2D3436',
                    gray: '#F1F2F6',
                }
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
