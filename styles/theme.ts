import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "400": "#ffbf1a",
    },
    dark: {
      "black": "#000000",
      "headings": "#47585B",
      "info": "#999999",
    },
    light: {
      "white": "#FFFFFF",
      "headings": "#F5F8FA",
      "info": "#DADADA",
    },
  },
  styles: {
    global: {
      body: {
        bg: 'light.headings',
        color: 'dark.black',
      }
    }
  }
});