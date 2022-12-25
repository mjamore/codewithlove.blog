module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'articleCard': '0.75rem',
      },
      colors: {
        'amore-red': '#D42622',
        'content-bg': 'rgb(23 23 23 / 10%)',
        'content-bg2': 'rgba(18 18 18 / .9)',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      },
      cursor: {
        'heart': 'url(/images/red-heart.png), pointer',
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      maxWidth: {
        'page': '72rem'
      },
      scale: {
        '101': '1.01'
      }
    }
  }
};
