import {
  ArrowBack,
  ConfirmationNumber as ConfirmationNumberIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonBase,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { DialogSelectedItem } from "../../Sale/components/DialogSelectedItem/DialogSelectedItem";

const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

type SelectedItemListProps = {};

const Sale: React.FC<SelectedItemListProps> = (props) => {
  const {} = props;

  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <Box sx={(theme) => ({ height: "100dvh", display: "flex", flexDirection: "column" })}>
        <AppBar position="static" color="success" elevation={0}>
          <Toolbar>
            <IconButton
              component={Link}
              to={"../.."}
              relative={"path"}
              sx={(theme) => ({ marginLeft: `-${theme.spacing(1)}` })}
            >
              <ArrowBack sx={(theme) => ({ color: theme.palette.common.white })} />
            </IconButton>
            <Box
              sx={(theme) => ({ flexGrow: 1, paddingLeft: theme.spacing(1), minHeight: "inherit" })}
            >
              <ButtonBase
                component={Link}
                to={"../.."}
                relative={"path"}
                sx={(theme) => ({
                  [theme.breakpoints.up("sm")]: { display: "none" },
                  ...theme.typography.h6,
                  minHeight: "inherit",
                  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                })}
              >
                Ticket
                <Badge
                  color="error"
                  badgeContent={0}
                  showZero
                  sx={(theme) => ({ marginLeft: theme.spacing(1) })}
                >
                  <ConfirmationNumberIcon />
                </Badge>
              </ButtonBase>
            </Box>
            <IconButton>
              <MoreVertIcon sx={(theme) => ({ color: theme.palette.common.white })} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List sx={(theme) => ({ overflowY: "auto" })}>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={handleOpenDialog}>
                  <ListItemText
                    sx={(theme) => ({ "& .MuiListItemText-primary": { display: "flex" } })}
                  >
                    <Typography component={"span"} noWrap>
                      Item 1
                    </Typography>
                    <Quantity>X 1</Quantity>
                  </ListItemText>
                  <ListItemText
                    sx={() => ({
                      textAlign: "right",
                      flexShrink: 0,
                    })}
                  >
                    ₱0.02
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <List disablePadding>
          <Divider
            component={"li"}
            sx={(theme) => ({ marginLeft: theme.spacing(2), marginRight: theme.spacing(2) })}
          />
          <ListItem>
            <ListItemText
              sx={(theme) => ({ "& .MuiListItemText-primary": { fontWeight: "bold" } })}
            >
              Total
            </ListItemText>
            <ListItemText
              sx={(theme) => ({
                "& .MuiListItemText-primary": { fontWeight: "bold", textAlign: "right" },
              })}
            >
              ₱0.02
            </ListItemText>
          </ListItem>
        </List>
        <Box
          sx={(theme) => ({
            padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
            marginTop: "auto",
          })}
        >
          {/* <Button
            component={Link}
            to={"ticket"}
            relative={"path"}
            variant="contained"
            color="success"
            size="large"
            disableElevation
            fullWidth
          >
            <ListItemText primary={<Typography>₱0.02</Typography>}>CHARGE</ListItemText>
          </Button> */}
          <Button
            component={Link}
            to={"/sale/ticket"}
            disableElevation
            sx={(theme) => ({ borderRadius: 0 })}
            color="success"
            size="small"
            variant="contained"
            fullWidth
          >
            <ListItemText
              sx={(theme) => ({
                textAlign: "center",
                "& .MuiListItemText-primary": {},
                "& .MuiListItemText-secondary": {
                  ...theme.typography.body1,
                  color: theme.palette.common.white,
                },
              })}
              secondary={"₱0.02"}
            >
              CHARGE
            </ListItemText>
          </Button>
        </Box>
      </Box>

      <DialogSelectedItem isOpenDialog={isOpenDialog} onCloseDialog={handleCloseDialog} />
    </>
  );
};

export default Sale;
