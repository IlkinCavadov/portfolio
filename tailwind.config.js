/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-chip': 'var(--bg-chip)',
        'bg-hover': 'var(--bg-hover)',
        'bg-nav': 'var(--bg-nav)',
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        'line-strong': 'var(--line-strong)',
        'tx-1': 'var(--tx-1)',
        'tx-2': 'var(--tx-2)',
        'tx-3': 'var(--tx-3)',
        'tx-strong': 'var(--tx-strong)',
        'tx-hover': 'var(--tx-hover)',
        'btn1-bg': 'var(--btn1-bg)',
        'btn1-tx': 'var(--btn1-tx)',
        'btn1-bg-hover': 'var(--btn1-bg-hover)',
        'btn2-bg': 'var(--btn2-bg)',
        'btn2-bg-hover': 'var(--btn2-bg-hover)',
        dot: 'var(--dot)',
        accent: '#4ADE80',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
