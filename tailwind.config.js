const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_site/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-color': '#1188D6',
        'theme-header-bg': '#FFFFFF',
        'theme-header-nav-link': '#666666',
        'theme-header-nav-link-sel': '#1188D6',
        'theme-header-nav-link-bg': 'transparent',
        'theme-header-nav-link-bg-sel': 'transparent',
        'theme-header-logo-message': '#999999',
        'theme-header-support-button': '#666666',
        'theme-header-support-button-hover': '#666666',
        'theme-header-support-button-bg': '#FFFFFF',
        'theme-header-support-button-bg-hover': '#E0E5E9',
        'theme-mobile-menu-icon': '#666666',
        'theme-mobile-menu-icon-hover': '#666666',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            h1: {
              'border-bottom': '1px solid ' + theme('colors.theme-color'),
              'padding-bottom': '0.5rem',
            },
            'h1, h2, h3, h4, h5, h6': {
              'font-weight': 'bold',
            },
            a: {
              color: theme('colors.theme-color'),
              'font-weight': 'medium',
              'text-decoration': 'none',
            },
            'a:hover': {
              color: theme('colors.theme-color'),
              'text-decoration': 'underline',
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            table: {
              'border-top': '1px solid ' + theme('colors.gray.200'),
              'border-bottom': '1px solid ' + theme('colors.gray.200'),
            },
            th: {
              'background-color': theme('colors.gray.50'),
              padding: '0.5rem !important',
              'text-transform': 'uppercase',
            },
            td: {
              padding: '0.5rem !important',
            },
            'td ul, td li': {
              'padding-left': '0 !important',
              'margin-left': '0 !important',
            },
            'td img': {
              'display': 'inline-block',
              margin: '0 !important',
            },
            'blockquote': {
              background: theme('colors.slate.50'),
              'padding-top': '0.1rem',
              'padding-bottom': '0.1rem',
              'border-left': '5px solid ' + theme('colors.theme-color'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
