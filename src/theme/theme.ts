import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    mainBackground:
      'linear-gradient(180deg, rgba(237,237,237,1) 61%, rgba(118,168,246,1) 100%)',
    white: '#fff',
    lightBlue: '#0062ff',
    black: '#000',
    lightGray: '#b0b0b0',
    red: '#ff364a',
    opacityGray: (opacity = 1) => `rgba(79, 79, 79, ${opacity})`,
    success: '#3bf783',
    orange: '#f7960f',
    darkGreen: '#00a140',
  },
  borderRadius: '10px',
};
