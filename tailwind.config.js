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
        brand_blue: '#00AEEC'
      }
    }
  },
  plugins: [gridBg]
}
