import gridBg from './tw-plugin/grid-bg'

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,jsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand_pink: '#FF6699',
        brand_pink_thin: '#FFECF1',
        brand_pink_hover: '#FF8CB0',
        brand_pink_active: '#E84B85',
        brand_blue: '#00AEEC',
        brand_blue_thin: '#DFF6FD',
        brand_blue_hover: '#40C5F1',
        brand_blue_active: '#008AC5'
      }
    }
  },
  plugins: [gridBg]
}
