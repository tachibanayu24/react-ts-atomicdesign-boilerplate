import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = createMuiTheme({
  overrides: {},
  typography: {
    fontFamily:
      "Futura, Futura, Meiryo, メイリオ, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, ＭＳ Ｐゴシック, MS PGothic, sans-serif",
  },
  palette: {
    primary: {
      main: "#0974E8",
      dark: "#0064A1",
    },
    secondary: {
      main: "#fa367b",
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
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};
