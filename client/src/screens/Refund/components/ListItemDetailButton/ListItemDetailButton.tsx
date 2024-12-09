import {
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  styled,
  ListItemTextProps,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";

const PrimaryText = styled(ListItemText)<ListItemTextProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

const SecondaryText = styled(ListItemText)<ListItemTextProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { textAlign: "right" },
  flexShrink: 0,
  marginTop: theme.spacing(0.75),
  marginBottom: theme.spacing(0.75),
}));

type ListItemDetailButtonProps = {
  children?: React.ReactNode;
  primarySecondary?: React.ReactNode;
  secondary?: React.ReactNode;
  divider?: boolean;
};

const ListItemDetailButton: React.FC<ListItemDetailButtonProps> = (props) => {
  const { children, primarySecondary, secondary, divider = false, ...otherProps } = props;

  const contentPrimarySecondary = primarySecondary ? { secondary: primarySecondary } : {};

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton alignItems="flex-start" {...otherProps}>
          <PrimaryText {...contentPrimarySecondary}>{children}</PrimaryText>
          <SecondaryText>{secondary}</SecondaryText>
        </ListItemButton>
      </ListItem>
      {divider && <Divider component="li" />}
    </>
  );
};

export default ListItemDetailButton;
