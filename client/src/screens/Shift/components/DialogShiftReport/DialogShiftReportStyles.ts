import {
  styled,
  Theme,
  IconButton,
  Toolbar,
  Typography,
  IconButtonProps,
  TypographyProps,
  ToolbarProps,
  Container,
  Divider,
  DividerProps,
  ListSubheader,
  ListSubheaderProps,
  ContainerProps,
} from "@mui/material";

export const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const DialogTitleText = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    marginLeft: theme.spacing(3),
  })
);

export const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: `-${theme.spacing(2)}`,
    marginRight: `-${theme.spacing(2)}`,
  },
  marginLeft: `-${theme.spacing(3)}`,
  marginRight: `-${theme.spacing(3)}`,
}));

export const ContainerStyled = styled(Container)<ContainerProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));
