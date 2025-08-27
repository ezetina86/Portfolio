/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',
        secondary: '#3B82F6',
        accent: '#F59E0B',
        'base-bg': '#111827',
        'base-text': '#E5E7EB',
        'brand-cloud': '#3B82F6',
        'brand-devops': '#F97316',
        'brand-data': '#8B5CF6',
        'brand-python': '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}