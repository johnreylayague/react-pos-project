import React from "react";
import { Stack, Container, ContainerProps, styled, Theme } from "@mui/material";
import { CSSObject } from "@emotion/react";

const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: { marginTop: 0, paddingRight: 0, paddingLeft: 0 } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

type ContainerWrapperProps = {
  children: React.ReactNode;
};

const ContainerWrapper: React.FC<ContainerWrapperProps> = (props) => {
  const { children } = props;

  return (
    <ContainerStyled maxWidth="md">
      <Stack spacing={3}>{children}</Stack>
    </ContainerStyled>
  );
};

export default ContainerWrapper;
