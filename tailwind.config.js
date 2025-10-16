/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                headline: ['Inter', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                'full-squircle': '100vw',
            },
            keyframes: {
                fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
                fadeOut: { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
                slideIn: {
                    '0%': { transform: 'translateY(-20px) scale(0.95)', opacity: 0 },
                    '100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
                },
                slideOut: {
                    '0%': { transform: 'translateY(0) scale(1)', opacity: 1 },
                    '100%': { transform: 'translateY(-20px) scale(0.95)', opacity: 0 },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
                    '50%': { transform: 'scale(1.2)', opacity: 0.7 },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-out',
                fadeOut: 'fadeOut 0.2s ease-in',
                slideIn: 'slideIn 0.3s ease-out',
                slideOut: 'slideOut 0.2s ease-in',
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
};
