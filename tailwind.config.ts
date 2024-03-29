import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cookie': "url('/assets/images/cookieBanner.png')",
        'cookieMain': "url('/assets/images/cookieBGMain.png')",
        'confets': "url('/assets/images/confet_bg.png')",
        'confetsGold': "url('/assets/images/Confet_gold.png')",
        'confetsCupeCake': "url('/assets/images/confec-cupcake.png')",
      },
      backgroundSize: {
        'cookieMain-small':'8rem',
        'cookieMain-medium':'12.5rem',
        'cookieMain-large':'22.75rem',
      },
      colors: {
        primary:'#D49495',
        secondary:'#C5585B',
        tertiary:'#FFA6A8',
        quartenary:'#f8e4d9',
        footer: '#442422',
        fontColor1:'#FFD3D3',
        fontColor2:'#FFA3A3',
        linebaseColor:'#9B514E',
      },
      fontFamily: {
        'lily-script': ['Lily Script One', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      '@font-face': [
        {
          'font-family': 'Lily Script One',
          src: 'url(https://exemplo.com/caminho-para/LilyScriptOne-Regular.ttf) format("truetype")',
          'font-weight': 'normal',
          'font-style': 'normal',
        },
        {
          'font-family': 'Montserrat',
          src: 'url(https://exemplo.com/caminho-para/Montserrat-Regular.ttf) format("truetype")',
          'font-weight': 'normal',
          'font-style': 'normal',
        },
      ],
    },
  },
  plugins: [],
}

export default config


