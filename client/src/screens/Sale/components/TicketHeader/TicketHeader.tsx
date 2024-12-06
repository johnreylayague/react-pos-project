import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  AppBarProps,
  IconProps,
  MenuProps,
  TypographyProps,
} from "@mui/material";
import React from "react";
import { MoreVert, Delete as DeleteIcon, Sync as SyncIcon } from "@mui/icons-material";
import OptionsMenu from "../../../../components/common/elements/Dropdown/OptionsMenu/OptionsMenu";

const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  background: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const MoreVertIcon = styled(MoreVert)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

const MenuStyled = styled(Menu)<MenuProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiMenu-paper	": {
    borderRadius: 0,
  },
}));

const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
  flexGrow: 1,
}));

type TicketHeaderProps = {};
const TicketHeader: React.FC<TicketHeaderProps> = (props) => {
  const {} = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarStyled elevation={0} position="static">
      <Toolbar>
        <Title component={"h6"} variant="h6">
          Ticket
        </Title>

        <OptionsMenu
          id="button-menu"
          content={<MoreVertIcon />}
          anchorEl={anchorEl}
          isOpen={open}
          onClose={handleClose}
          onOpen={handleClick}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Clear ticket</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SyncIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sync</ListItemText>
          </MenuItem>
        </OptionsMenu>
      </Toolbar>
    </AppBarStyled>
  );
};

export default TicketHeader;
