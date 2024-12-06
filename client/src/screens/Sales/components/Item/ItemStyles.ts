import { styled, Theme, CSSObject } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ButtonProps, Button, Typography, TypographyProps, Box, BoxProps } from "@mui/material";

const buttonHeight: number = 150;

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  width: "100%",
  height: buttonHeight,
  backgroundColor: "#e2e2e2",
  color: theme.palette.grey[500],
  padding: `${theme.spacing(0)} ${theme.spacing(3)} ${theme.spacing(0)} ${theme.spacing(3)}`,
}));

export const ButtonImageStyled = styled(Button)<ButtonProps & { backgroundimage: string }>(
  ({ backgroundimage, theme }: { backgroundimage: string; theme: Theme }) => ({
    width: "100%",
    height: buttonHeight,
    color: theme.palette.grey[500],
    padding: `${theme.spacing(0)} ${theme.spacing(7)} ${theme.spacing(0)} ${theme.spacing(7)}`,
    // [theme.breakpoints.up("xl")]: {
    //   padding: theme.spacing(5),
    // },
    overflow: "hidden",
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${backgroundimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    } as CSSObject,
  })
);

export const ButtonShapeStyled = styled(Button)<ButtonProps & { backgroundimage: string }>(
  ({ backgroundimage, theme }: { backgroundimage: string; theme: Theme }) => ({
    width: "100%",
    height: buttonHeight,
    color: theme.palette.grey[500],
    padding: `${theme.spacing(0)} ${theme.spacing(7)} ${theme.spacing(0)} ${theme.spacing(7)}`,
    // [theme.breakpoints.up("xl")]: {
    //   padding: theme.spacing(5),
    // },
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${backgroundimage})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    } as CSSObject,
  })
);

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    textTransform: "capitalize",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "initial",
    wordBreak: "break-all",
    WebkitLineClamp: 2,
    lineHeight: 1.3,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    color: theme.palette.common.black,
    zIndex: 1,
  })
);

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 1,
  height: 70,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "rgba(0,0,0,.6)",
  color: theme.palette.common.white,
}));

export const TypographyImageStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    textTransform: "capitalize",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "initial",
    WebkitLineClamp: 2,
    lineHeight: 1.3,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    wordBreak: "break-all",
  })
);
