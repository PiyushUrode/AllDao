/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }
      'az': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      fontFamily: {
        k2d: ['K2D'],
        quicksand: ['Quicksand']
      },

      // colors: {
      //   'sb-track': '#0c0c0c',
      //   'sb-thumb': '#e2e2e2',
      // },
      // animation: {
      //   circle: "circular 20s  infinite", // 4 seconds, infinite loop
      // },
      //// keyframes: {
      //   circular: {
      //     "0%": { transform: "translateY(0) translateX(0) rotate(360deg)" },
      //     // "25%": { transform: "translateX(50px) translateY(50px) rotate(90deg)" },
      //     // "50%": { transform: "translateX(0) translateY(100px) rotate(180deg)" },
      //     // "75%": { transform: "translateX(-50px) translateY(50px) rotate(270deg)" },
      //     "100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
      //   },
      // },
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Adjust `5s` for slower or faster rotation
        'spin-reverse': 'reverse-spin 10s linear infinite', // Reverse spin
      },
      keyframes: {
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        }
      },
      

      colors: {
        primary: {
          light: '#ffffff', // Light mode primary color
          dark: '#000000', // Dark mode primary color
        },
        secondary: {
          light: '#f9f9f9', // Light secondary
          dark: '#1a1a1a', // Dark secondary
        },
        text: {
          light: '#000000', // Text for light mode
          dark: '#ffffff', // Text for dark mode
        },
        border: {
          light: '#cccccc', // Border for light mode
          dark: '#444444', // Border for dark mode
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(155deg, rgba(255,255,255,1) 0%, rgba(14,255,4,0.273) 34%, rgba(123,255,118,0.45) 64%, rgba(255,255,255,1) 100%)',
      },

      backgroundImage: {
        'light-gradient': 'linear-gradient(to right, #000000, #1fc600, #000000)',
        'dark-gradient': 'linear-gradient(to right, #1fc600, #ffffff, #1fc600)',
        'text-gradient-1': 'linear-gradient(to right, #1fc600, #00ff00, #00b4ff)', // Green to Blue
        'text-gradient-2': 'linear-gradient(to right, #1fc600, #0077ff)', // Vibrant Green to Deep Blue
        'text-gradient-3': 'linear-gradient(to right, #22dd01, #0066cc)', // Bright Green to Royal Blue
    
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Slow spin animation
      },

      animation: {
        'border-color-pulse': 'borderColorPulse 2s ease-in-out infinite',
      },
      keyframes: {
        borderColorPulse: {
          '0%': { borderColor: '#28a745' },  // Green
          '50%': { borderColor: '#ADFF2F' }, // Blue
          '100%': { borderColor: '#32CD32' }, // Dark Green
        },
      },




    },
      },
      plugins: [require("tailwind-scrollbar")

        
      ], // Add the plugin here
}