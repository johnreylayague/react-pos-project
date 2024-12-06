import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Divider,
  ListItemButton,
  InputBase,
  useTheme,
  useMediaQuery,
  styled,
  DialogProps,
  IconButtonProps,
  TypographyProps,
  TabsProps,
  TabProps,
  ListItemButtonProps,
  ListItemTextProps,
} from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";
import { useToggle } from "../../../../hooks/components/useToggle/useToggle";
import { useTabs } from "../../../../hooks/material-ui/useTabs/useTabs";

const DialogStyled = styled(Dialog)<DialogProps>(({}) => ({
  "& .MuiPaper-root": { borderRadius: 0, height: "100%" },
}));

const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const TabsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: "relative",
}));

const TabsStyled = styled(Tabs)<TabsProps>(({ theme }) => ({
  "& .MuiTabs-indicator": { backgroundColor: theme.palette.success.main },
}));

const TabStyled = styled(Tab)<TabProps>(({ theme }) => ({
  "&.Mui-selected": { color: theme.palette.success.main },
}));

const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  paddingRight: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

const ItemLabel = styled(ListItemText)<ListItemTextProps>(({}) => ({}));

const ItemPrice = styled(ListItemText)<ListItemTextProps>(({}) => ({
  textAlign: "right",
}));

const CategoryLabel = styled(ListItemText)<ListItemTextProps>(({}) => ({}));

const CategoryPrice = styled(ListItemText)<ListItemTextProps>(({}) => ({
  textAlign: "right",
}));

const SearchButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(2),
  top: "50%",
  transform: "translateY(-50%)",
}));

const DialogTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(2),
}));

const SearchContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  minHeight: theme.spacing(6),
}));

const CloseSearchButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

type DialogAddItemAndCategoryProps = {
  onCloseDialog: () => void;
  isOpenDialog: boolean;
};

const DialogAddItemAndCategory: React.FC<DialogAddItemAndCategoryProps> = (props) => {
  const { onCloseDialog, isOpenDialog } = props;

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    isOpenToggle: isOpenSearch,
    handleCloseToggle: handleCloseSearch,
    handleOpenToggle: handleOpenSearch,
  } = useToggle();

  const { tabIndex, handleTabChange } = useTabs();

  return (
    <>
      <DialogStyled open={isOpenDialog} fullScreen={isMobileScreen} fullWidth maxWidth="sm">
        <Toolbar>
          <CloseButton onClick={onCloseDialog}>
            <CloseIcon />
          </CloseButton>

          <DialogTitle component={"h6"} variant={"h6"}>
            Add item to the page
          </DialogTitle>
        </Toolbar>

        <TabsContainer>
          {!isOpenSearch && (
            <>
              <TabsStyled
                value={tabIndex}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                centered
              >
                <TabStyled
                  label="ITEMS"
                  id={`simple-tab${0}`}
                  aria-controls={`simple-tabpanel-${0}`}
                />
                <TabStyled
                  label="CATEGORIES"
                  id={`simple-tab${1}`}
                  aria-controls={`simple-tabpanel-${1}`}
                />
              </TabsStyled>
              <SearchButton onClick={handleOpenSearch}>
                <SearchIcon />
              </SearchButton>
            </>
          )}
          {isOpenSearch && (
            <SearchContainer>
              <InputBase placeholder="Search" autoFocus fullWidth />

              <CloseSearchButton onClick={handleCloseSearch}>
                <CloseIcon />
              </CloseSearchButton>
            </SearchContainer>
          )}
        </TabsContainer>

        <CustomTabPanel value={tabIndex} index={0}>
          <List disablePadding>
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem disablePadding>
                    <ListItemButtonStyled>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>

                      <ItemLabel>1234</ItemLabel>

                      <ItemPrice>₱1.00</ItemPrice>
                    </ListItemButtonStyled>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              );
            })}
          </List>
        </CustomTabPanel>

        <CustomTabPanel value={tabIndex} index={1}>
          <List disablePadding>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem disablePadding>
                    <ListItemButtonStyled>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>

                      <CategoryLabel>1234</CategoryLabel>

                      <CategoryPrice>0 items</CategoryPrice>
                    </ListItemButtonStyled>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              );
            })}
          </List>
        </CustomTabPanel>
      </DialogStyled>
    </>
  );
};

export default DialogAddItemAndCategory;
