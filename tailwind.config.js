/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/src/Components/Img/bank2.jpg')",
        Orqaimg2: "url('/src/Components/Img/bitco.jpg')",
        orqaimage3: "url('/src/Components/Img/infinity10.avif')",
        orqaimage4: "url('/src/Components/Img/teamGroup.webp')",
        orqaimage5: "url('/src/Components/Img/contact us.jpg')",
        orqaimage6: "url('/src/Components/Img/info.jpg')"
      },
      screens: {
        behruz: "1300px",
        bekor: "1425px",
        body: "100px",
        body1: "778px",
        body2: "880px"
      },
    },
    container: {
      padding: '10px',
      center: true,
      screens: {
        body: '100px',
        sm: '640px',
        md: '768px',
        body1: '778px',
        body2: '880px',
        lg: '1024px',
        xl: '1180px',
        behruz: "1300px",
        bekor: "1425px"
      }
    },
  },
  plugins: [],
}

