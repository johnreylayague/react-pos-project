import React from "react";
import { styled, Theme, Paper, PaperProps, Typography, TypographyProps } from "@mui/material";

const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    padding: `${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2)}`,
  },
  padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  boxShadow: theme.shadows[3],
  borderRadius: 1,
  backgroundColor: theme.palette.background.paper,
}));

const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  marginBottom: theme.spacing(3),
}));

type SectionProps = { children?: React.ReactNode; title?: string };

const Section: React.FC<SectionProps> = (props) => {
  const { children, title } = props;

  return (
    <PaperStyled>
      {title && <Title color="success">{title}</Title>}

      {children}
    </PaperStyled>
  );
};

export default Section;
