import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  styled,
  ListItemTextProps,
  Theme,
} from "@mui/material";

const ListItemTextStyled = styled(ListItemText)<ListItemTextProps>(
  ({ theme }: { theme: Theme }) => ({
    textAlign: "right",
    paddingLeft: theme.spacing(2),
    flexShrink: 0,
  })
);

type MobileListItemProps = {
  isShowDivider: boolean;
  refundCount?: number;
  onOpenDialog?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const MobileListItem: React.FC<MobileListItemProps> = (props) => {
  const { isShowDivider, refundCount, onOpenDialog, ...otherProps } = props;

  const contentPrimarySecondary = refundCount
    ? {
        secondary: (
          <Typography component={"div"} color="warning">
            Refund x {refundCount}
          </Typography>
        ),
      }
    : {};

  return (
    <ListItem disablePadding divider={isShowDivider}>
      <ListItemButton onClick={onOpenDialog} {...otherProps}>
        <ListItemIcon>
          <Checkbox color="success" />
        </ListItemIcon>
        <ListItemText {...contentPrimarySecondary}>
          <Typography component={"div"} noWrap>
            TotalTotalTotalTotalTotalTotalTotalTotalTotalTotalTotalTotalTotal
          </Typography>
        </ListItemText>
        <ListItemTextStyled>₱0.02</ListItemTextStyled>
      </ListItemButton>
    </ListItem>
  );
};

export default MobileListItem;
