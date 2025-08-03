module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#ffb347',
        neutral: '#f6f7fb',
        text: '#23272f',
        background: '#ffffff'
      },
      fontFamily: {
        'primary': ['Inter, Helvetica, Arial, sans-serif', 'sans-serif'],
        'secondary': ['Playfair Display, Georgia, serif', 'serif']
      }
    }
  },
  plugins: []
}