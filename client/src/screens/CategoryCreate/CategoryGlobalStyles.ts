import { CSSObject } from "@mui/material";

type ElementStyles = {
  [Element in keyof JSX.IntrinsicElements]?: CSSObject;
};

export const categoryGlobalStyles: ElementStyles = { body: { background: "#f5f5f5" } };
