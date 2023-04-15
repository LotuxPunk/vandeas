import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

const theme = extendTheme({
    config,
    colors: {
        darkerblue: {
          50: '#e4f5ff',
          100: '#c0def1',
          200: '#99c8e6',
          300: '#72b1db',
          400: '#4e9cd1',
          500: '#3782b8',
          600: '#2a668f',
          700: '#1d4967',
          800: '#0e2c3f', // main
          900: '#001019',
        },
        darkblue: {
          50: '#e0f8ff',
          100: '#b5e6fd',
          200: '#88d5f9',
          300: '#5dc3f6',
          400: '#3ab2f3',
          500: '#2a98da',
          600: '#1e77a9',
          700: '#12557a',
          800: '#02334a', // main
          900: '#00121c',
        },
        blue: {
          50: '#ddfaff',
          100: '#b2eafe',
          200: '#85dbfa',
          300: '#58ccf7',
          400: '#32bef3',
          500: '#21a4da',
          600: '#1380aa',
          700: '#055b7a', // main
          800: '#00374b',
          900: '#00131d',
        },
        lightblue: {
          50: '#def8ff',
          100: '#b8e6f8',
          200: '#8fd4ef',
          300: '#65c3e7',
          400: '#3eb1df',
          500: '#2698c5',
          600: '#18769a', // main
          700: '#0a546f',
          800: '#003445',
          900: '#00131b',
        },
        pink: {
          50: '#ffeae4',
          100: '#f4c7bf',
          200: '#e8a397',
          300: '#dd7f6e', //main
          400: '#d25b46',
          500: '#b9422d',
          600: '#913222',
          700: '#682317',
          800: '#40140d',
          900: '#1c0300',
        }

    },
    fonts: {
        body: `'Inter', sans-serif`,
        heading: `'Gowun Dodum', sans-serif`,
        // body: `'Raleway', sans-serif`,
    },
    styles: {
        global: {
            body: {
                // bg:'url("./cameo_2.png") left top/ cover no-repeat;',
                bg: 'darkblue.800',
                color: 'white'
            }
        }
    }
})

export default theme