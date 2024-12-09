import { Box, CircularProgress, Typography, styled, BoxProps, Theme, Fade } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: `calc(100% - 56px)`,
  },
  position: "absolute",
  bottom: 0,
  left: 0,
  height: `calc(100% - 64px)`,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center ",
  gap: theme.spacing(2),
}));

type LoadingProps = {
  isShow: boolean;
  text: string;
};

const Loading: React.FC<LoadingProps> = (props) => {
  const { isShow, text } = props;

  return (
    <Fade in={isShow}>
      <BoxStyled>
        <CircularProgress color="success" />
        <Typography>{text}</Typography>
      </BoxStyled>
    </Fade>
  );
};

export default Loading;
