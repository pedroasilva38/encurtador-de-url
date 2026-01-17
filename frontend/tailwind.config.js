// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lume: {
          primary: '#FFC107',   // Dourado Quente (Cor principal)
          secondary: '#FFA000', // Laranja Dourado (Halo/Gradiente)
          bright: '#FDD835',    // Amarelo Brilhante (Ponto de luz intenso)
          light: '#FFECB3',     // Dourado Claro (Suavidade/Fundo claro)
          dark: '#212121',      // Preto Grafite (Fundo escuro de contraste)
        },
      },
    },
  },
  plugins: [],
}