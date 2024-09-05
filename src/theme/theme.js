// src/theme/theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Source Sans Pro', sans-serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: `'Source Sans Pro', sans-serif`,
        fontSize: '16px', // base font size
        lineHeight: '1.5',
      },
    },
  },
});

export default theme;
