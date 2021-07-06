import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBackground: string;
      white: string;
      lightBlue: string;
      black: string;
      lightGray: string;
      red: string;
      opacityGray: (opacity?: number) => string;
      success: string;
      orange: string;
    };
    borderRadius: string;
  }
}
