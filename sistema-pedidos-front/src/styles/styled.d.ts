import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      quaternary: string,
      text1: string,
      text2: string,
      text3: string,
      success: string,
      warning:  string,
      error:  string,
      white:  string,
      black:  string,
      gray: string,
    };
  
  }
}