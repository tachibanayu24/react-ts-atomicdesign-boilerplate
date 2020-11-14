import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  overrides: {},
  typography: {
    fontFamily:
      "Futura, Futura, Meiryo, メイリオ, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, ＭＳ Ｐゴシック, MS PGothic, sans-serif",
  },
  palette: {
    primary: {
      50: "#B3E5FC",
      100: "#81D4FA",
      200: "#4FC3F7",
      300: "#29B6F6",
      400: "#03A9F4",
      500: "#039BE5",
      600: "#0288D1",
      700: "#0277BD",
      800: "#01579B",
      900: "#003258",
      light: "#29B6F6",
      main: "#039BE5",
      dark: "#0277BD",
    },
    secondary: {
      50: "#FCE4EC",
      100: "#F8BBD0",
      200: "#F48FB1",
      300: "#F06292",
      400: "#EC407A",
      500: "#E91E63",
      600: "#D81B60",
      700: "#C2185B",
      800: "#AD1457",
      900: "#880E4F",
      light: "#F48FB1",
      main: "#E91E63",
      dark: "#AD1457",
    },
    green: {
      main: "#8bc34a",
    },
    gray: {
      light: "#888",
      main: "#555",
    },
    white: {
      main: "#fff",
    },
    text: {
      primary: "#333",
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};
