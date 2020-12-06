import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
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
      50: "#e8f1dd",
      100: "#c5e1a5",
      200: "#c5e1a5",
      300: "#aed581",
      400: "#9ccc65",
      500: "#8bc34a",
      600: "#7cb342",
      700: "#689f38",
      800: "#558b2f",
      900: "#33691e",
      light: "#aed581",
      main: "#8bc34a",
      dark: "#689f38",
    },
    red: {
      ...red,
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    gray: {
      light: "#888",
      main: "#555",
      dark: "#333",
    },
    white: {
      main: "#fff",
    },
    text: {
      primary: "#333",
    },
  },
});

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
