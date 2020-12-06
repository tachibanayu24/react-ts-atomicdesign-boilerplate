import * as createPalette from "@material-ui/core/styles/createPalette";

interface Primary {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  light: string;
  main: string;
  dark: string;
}

interface Secondary {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  light: string;
  main: string;
  dark: string;
}

interface Red {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
  light: string;
  main: string;
  dark: string;
}

interface Gray {
  light: string;
  main: string;
  dark: string;
}

interface White {
  main: string;
}

interface Text {
  primary: string;
}

interface CustomPalette {
  primary: Primary;
  secondary: Secondary;
  red: Red;
  gray: Gray;
  white: White;
  text: Text;
}

declare module "@material-ui/core/styles/createPalette" {
  // eslint-disable-next-line
  interface PaletteOptions extends CustomPalette {}

  // eslint-disable-next-line
  interface Palette extends CustomPalette {}
}
