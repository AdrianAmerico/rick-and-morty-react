import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      background_primary: string;
      background_secundary: string;
      text: string;
      red: string;
      black: string;
      black_secondary: string;
      green: string;
      lightGray: string;
      gray: string;
      darkGray: string;
    };
  }
}
