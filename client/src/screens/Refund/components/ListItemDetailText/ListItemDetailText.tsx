import {
  ListItem,
  ListItemText,
  styled,
  Typography,
  TypographyProps,
  Theme,
  ListItemTextProps,
  CSSObject,
  Divider,
  DividerProps,
} from "@mui/material";
import React from "react";

type ListItemTextPrimaryProps = { "data-is-highlight": boolean; children: React.ReactNode };

type ListItemTextSecondaryProps = { "data-is-highlight": boolean; children: React.ReactNode };

export const ListItemTextPrimary = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "data-is-highlight",
})<ListItemTextProps & ListItemTextPrimaryProps>(
  ({ theme, ...props }: { theme: Theme } & ListItemTextPrimaryProps) => ({
    "& .MuiListItemText-primary": {
      ...(props["data-is-highlight"] ? ({ fontWeight: "bold" } as CSSObject) : {}),
    },
  })
);

const ListItemTextSecondary = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "data-is-highlight",
})<ListItemTextProps & ListItemTextSecondaryProps>(
  ({ theme, ...props }: { theme: Theme } & ListItemTextSecondaryProps) => ({
    "& .MuiListItemText-primary": {
      ...(props["data-is-highlight"] ? ({ fontWeight: "bold" } as CSSObject) : {}),
    },
    textAlign: "right",
  })
);

const InsetDivider = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

type ListItemDetailTextProps = {
  children?: React.ReactNode;
  secondary?: React.ReactNode;
  primaryHighlight?: boolean;
  secondaryHighlight?: boolean;
  divider?: boolean;
  insetDivider?: boolean;
};

const ListItemDetailText: React.FC<ListItemDetailTextProps> = (props) => {
  const {
    divider = false,
    insetDivider = false,
    children,
    secondary,
    primaryHighlight = false,
    secondaryHighlight = false,
  } = props;

  const listItemTextSecondaryContent = secondary && (
    <ListItemTextSecondary data-is-highlight={secondaryHighlight}>
      {secondary}
    </ListItemTextSecondary>
  );

  return (
    <>
      <ListItem>
        <ListItemTextPrimary data-is-highlight={primaryHighlight}>{children}</ListItemTextPrimary>
        {listItemTextSecondaryContent}
      </ListItem>
      {divider && <Divider component="li" />}
      {insetDivider && <InsetDivider component="li" />}
    </>
  );
};

export default ListItemDetailText;
