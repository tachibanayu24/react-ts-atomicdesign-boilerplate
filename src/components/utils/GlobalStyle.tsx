import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family:
      Futura, Futura, Meiryo, "メイリオ", Meiryo,
      "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
      Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;
