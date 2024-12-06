import { ListProps, Button, ButtonProps, Typography, List, TypographyProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const CustomizedList = styled(List)<ListProps>(({}) => ({
  overflow: "auto",
}));

type CustomizedTypographyProps = {
  theme: Theme;
};

export const CustomizedTypography = styled(Typography)<TypographyProps>(
  ({ theme }: CustomizedTypographyProps) => ({
    color: theme.palette.grey[600],
  })
);

export const CustomizedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 0,
  color: theme.palette.grey[600],
}));
