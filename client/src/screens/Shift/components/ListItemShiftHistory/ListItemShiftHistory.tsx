import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  styled,
  Theme,
  IconProps,
  AvatarProps,
  ListItemProps,
} from "@mui/material";
import { AccessTime as AccessTimeIcon } from "@mui/icons-material";

const AccessTimeIconStyled = styled(AccessTimeIcon)<IconProps>(({}: { theme: Theme }) => ({
  color: "#a1a1a1",
}));

const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  background: "#eeeeee",
}));

const ListItemStyled = styled(ListItem)<ListItemProps>(({}: { theme: Theme }) => ({
  alignItems: "flex-start",
}));

type ListItemShiftHistoryProps = { onShowShiftReport: () => void };

const ListItemShiftHistory: React.FC<ListItemShiftHistoryProps> = (props) => {
  const { onShowShiftReport } = props;

  return (
    <React.Fragment>
      <ListItemStyled disablePadding>
        <ListItemButton onClick={onShowShiftReport}>
          <ListItemAvatar>
            <AvatarStyled>
              <AccessTimeIconStyled />
            </AvatarStyled>
          </ListItemAvatar>
          <ListItemText secondary={<>10:38 PM - 10:43 PM</>}>Nov 17</ListItemText>
        </ListItemButton>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default ListItemShiftHistory;
