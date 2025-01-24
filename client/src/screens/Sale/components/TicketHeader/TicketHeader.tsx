import { Toolbar, MenuItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import React from "react";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { AppBarStyled, MoreVertIcon, Title, MenuStyled } from "./TicketHeaderStyles";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { saleActions } from "../../../../store/sale-slice";

type TicketHeaderProps = {};
const TicketHeader: React.FC<TicketHeaderProps> = (props) => {
  const {} = props;

  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const dispatch = useDispatch();

  const { anchorEl, handleCloseMenu, handleOpenMenu, isOpen } = useMenu();

  const handleOnclearTicketAndCloseMenu = () => {
    dispatch(saleActions.clearTicket());
    handleCloseMenu();
  };

  return (
    <AppBarStyled elevation={0} position="static">
      <Toolbar>
        <Title component={"h6"} variant="h6">
          Ticket
        </Title>

        <IconButton onClick={handleOpenMenu}>
          <MoreVertIcon />
        </IconButton>

        <MenuStyled
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleOnclearTicketAndCloseMenu} disabled={!currentActiveShiftId}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Clear ticket</ListItemText>
          </MenuItem>
          {/* <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <SyncIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sync</ListItemText>
          </MenuItem> */}
        </MenuStyled>
      </Toolbar>
    </AppBarStyled>
  );
};

export default TicketHeader;
