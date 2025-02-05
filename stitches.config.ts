import { createCss } from "@stitches/react";
export * from "@stitches/react";

export const defaultTheme = {
  colors: {
    blur: "rgba(0, 0, 0, 0.5)",
    border: "#424242",
    gray100: "#424242",
    gray200: "#616161",
    gray300: "#757575",
    gray400: "#9E9E9E",
    gray50: "#212121",
    gray500: "#BDBDBD",
    gray600: "#E0E0E0",
    gray700: "#EEEEEE",
    gray800: "#F5F5F5",
    gray900: "#FAFAFA",
    hiContrast: "#ffffff",
    loContrast: "#000000",
    table: "transparent",
    black: "#000000",
    white: "#ffffff",
    blue: "#52a9ff",
    green: "#26B38D",
    highlighter: "#E6A6BE",
    red: "#FF4343",
  },
  fonts: {
    heading: "Whyte Inktrap",
    sans: "Inter, sans-serif",
    mono: "Fira Mono, monospace",
  },
  fontSizes: {
    1: "12px",
    2: "14px",
    3: "16px",
    4: "20px",
    5: "24px",
    6: "32px",
    7: "48px",
    8: "64px",
    9: "72px",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "64px",
    6: "128px",
    7: "256px",
    8: "512px",
  },
  sizes: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "64px",
    6: "128px",
    7: "256px",
    8: "512px",
  },
  lineHeights: {
    1: "18px",
    2: "21px",
    3: "24px",
    4: "30px",
    5: "36px",
    6: "48px",
    7: "72px",
    8: "96px",
    9: "108px",
  },
  radii: {
    1: "2px",
    2: "4px",
    3: "8px",
    4: "10px",
    5: "12px",
    6: "14px",
    round: "9999px",
  },
};

export const lightTheme = {
  blur: "rgba(255, 255, 255, 0.5)",
  border: "#E0E0E0",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray50: "#FAFAFA",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",
  hiContrast: "#000000",
  loContrast: "#ffffff",
  table: "#FCFCFC",
};

const media = {
  bp1: `(min-width: 520px)`,
  bp2: `(min-width: 900px)`,
  bp3: `(min-width: 1200px)`,
  bp4: `(min-width: 1580px)`,
  motion: `(prefers-reduced-motion)`,
  hover: `(hover: hover)`,
  dark: `(prefers-color-scheme: dark)`,
  light: `(prefers-color-scheme: light)`,
};

const utils = {
  // Abbreviated margin properties
  m: () => (value) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: () => (value) => ({
    marginTop: value,
  }),
  mr: () => (value) => ({
    marginRight: value,
  }),
  mb: () => (value) => ({
    marginBottom: value,
  }),
  ml: () => (value) => ({
    marginLeft: value,
  }),
  mx: () => (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: () => (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: () => (value) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: () => (value) => ({
    paddingTop: value,
  }),
  pr: () => (value) => ({
    paddingRight: value,
  }),
  pb: () => (value) => ({
    paddingBottom: value,
  }),
  pl: () => (value) => ({
    paddingLeft: value,
  }),
  px: () => (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: () => (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // A property for applying width/height together
  size: () => (value) => ({
    width: value,
    height: value,
  }),

  // A property to apply linear gradient
  linearGradient: () => (value) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),

  // An abbreviated property for border-radius
  br: () => (value) => ({
    borderRadius: value,
  }),
};

export const {
  styled,
  theme,
  css,
  global,
  keyframes,
  getCssString,
} = createCss({
  theme: defaultTheme,
  utils,
  media,
});

export const lightThemeClass = theme({ colors: lightTheme });
