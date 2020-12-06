import * as createPalette from "@material-ui/core/styles/createPalette";
import { PaletteColorOptions } from "@material-ui/core/styles/createPalette";

interface White {
  main: string;
}

interface Text {
  primary: string;
}

interface CustomPalette {
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  grey: PaletteColorOptions;
  red: PaletteColorOptions;
  white: White;
  text: Text;
}

declare module "@material-ui/core/styles/createPalette" {
  // eslint-disable-next-line
  interface PaletteOptions extends CustomPalette {}

  // eslint-disable-next-line
  interface Palette extends CustomPalette {}
}
