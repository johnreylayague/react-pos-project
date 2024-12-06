import { CSSObject } from "@mui/material";
import { isThemeModeProps } from "../store/setting-slice";

declare module "@mui/material/styles" {
  interface Palette {
    customPrimary: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customSecondary: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customPrimaryButton: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customSecondaryButton: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customPrimaryListItemButton: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
  }

  interface PaletteOptions {
    customPrimary: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customSecondary: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customPrimaryButton: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customSecondaryButton: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
    customPrimaryListItemButton: {
      // main: string;
      light: string;
      dark: string;
      // contrastText: string;
    };
  }
}

export const getThemeConfiguration = (props: { isThemeMode: isThemeModeProps }) => ({
  palette: {
    mode: props.isThemeMode,
    customPrimary: {
      light: "#2e7d32",
      dark: "#303030",
    },
    customSecondary: {
      light: "",
      dark: "",
    },
    customPrimaryButton: {
      light: "",
      dark: "",
    },
    customSecondaryButton: {
      light: "#f5f5f5",
      dark: "#424242",
    },
    customPrimaryListItemButton: {
      light: "#f0f0f0",
      dark: "#3c3c3c",
    },
  },
});

export const rootStyles: { body: CSSObject } = {
  body: {
    fontFamily: "",
  },
};
