import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config : ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: 'Roboto',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
});

export default theme;
