import {
  ListItem,
  ListItemText,
  styled,
  ListItemTextProps,
  Theme,
  CSSObject,
  ListItemProps,
} from "@mui/material";
import React from "react";

const ListItemTextPrimary = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "data-is-highlight",
})<ListItemTextProps & { ["data-is-highlight"]: boolean; children: React.ReactNode }>(
  ({
    theme,
    ...props
  }: { theme: Theme } & { "data-is-highlight": boolean; children: React.ReactNode }) => ({
    ...(props["data-is-highlight"]
      ? ({ "& .MuiListItemText-primary": { fontWeight: "bold" } } as CSSObject)
      : {}),
  })
);

const ListItemTextSecondary = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "data-is-highlight",
})<ListItemTextProps & { ["data-is-highlight"]: boolean }>(
  ({ theme, ...props }: { theme: Theme } & { "data-is-highlight": boolean }) => ({
    ...(props["data-is-highlight"]
      ? ({ "& .MuiListItemText-primary": { fontWeight: "bold" } } as CSSObject)
      : {}),
    textAlign: "right",
  })
);

type ListItemDetailProps = {
  children: React.ReactNode;
  secondary?: string;
  primaryHighlight?: boolean;
  secondaryHighlight?: boolean;
  secondaryAction?: React.ReactNode;
};
const ListItemDetail: React.FC<ListItemDetailProps> = (props) => {
  const {
    secondaryAction,
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

  const secondaryActionContent = secondaryAction ? ({ secondaryAction } as ListItemProps) : {};

  return (
    <ListItem disableGutters {...secondaryActionContent}>
      <ListItemTextPrimary data-is-highlight={primaryHighlight}>{children}</ListItemTextPrimary>
      {listItemTextSecondaryContent}
    </ListItem>
  );
};

export default ListItemDetail;
