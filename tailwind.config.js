/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
        secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        accent: { DEFAULT: 'var(--accent)', foreground: 'var(--accent-foreground)' },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: { DEFAULT: 'var(--muted-bg)', foreground: 'var(--muted-foreground)' },
        card: { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        brand: {
          900: 'var(--brand-900)',
          700: 'var(--brand-700)',
          500: 'var(--brand-500)',
          100: 'var(--brand-100)',
        },
        // Legacy aliases so any Tailwind class using navy-* still resolves
        navy: {
          900: 'var(--brand-900)',
          800: 'var(--brand-900)',
          700: 'var(--brand-700)',
          100: 'var(--brand-100)',
        },
        orange: {
          600: 'var(--orange-600)',
          500: 'var(--orange-500)',
          100: 'var(--orange-100)',
        },
        ink: 'var(--ink)',
        success: 'var(--success)',
        whatsapp: 'var(--whatsapp)',
        line: 'var(--line)',
      },
      borderRadius: {
        brand: 'var(--radius)',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      boxShadow: {
        brand: 'var(--shadow)',
        'orange-glow': '0 8px 24px rgba(232, 98, 12, 0.35)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};