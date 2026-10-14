/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006194', 'primary-container': '#007bb9', 'on-primary': '#ffffff',
        'accent-electric': '#06B5F7', 'success-emerald': '#10B981', 'alert-coral': '#F32049',
        'secondary-container': '#dae2fd', 'on-secondary-fixed': '#131b2e',
        surface: '#f8f9ff', 'surface-pure': '#FFFFFF', 'surface-subtle': '#F8FAFC',
        'surface-variant': '#d3e4fe', 'on-surface': '#0b1c30', 'on-surface-variant': '#3f4850',
        'outline-variant': '#bfc7d2', 'border-subtle': '#E2E8F0',
      },
      fontFamily: { display: ['"Plus Jakarta Sans"', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      boxShadow: {
        clean: '0 4px 16px -2px rgba(15,23,42,.04), 0 2px 6px -1px rgba(2,132,199,.03)',
        active: '0 10px 25px -4px rgba(15,23,42,.08), 0 4px 10px -2px rgba(2,132,199,.05)',
      },
    },
  },
  plugins: [],
}
