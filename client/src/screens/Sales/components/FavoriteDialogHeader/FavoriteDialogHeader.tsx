import React from "react";
import { Box, IconButton, Divider, Tabs, InputBase } from "@mui/material";
import { IconButtonSearchStyled, TabStyled, BoxTabStyled } from "./FavoriteDialogHeaderStyles";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { favoriteDialogActions } from "../../../../store/favoriteDialog-slice";
import { storeProps } from "../../../../store";

type FavoriteDialogHeaderProps = {};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FavoriteDialogHeader: React.FC<FavoriteDialogHeaderProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const { selectedTab, isSearch } = useSelector((state: storeProps) => state.favoriteDialog);

  const handleCloseSearch = () => {
    dispatch(favoriteDialogActions.closeSearch());
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    dispatch(favoriteDialogActions.changeTab(newValue));
  };

  const handleSearch = () => {
    dispatch(favoriteDialogActions.openSearch());
  };

  return (
    <>
      <Divider />

      <Box sx={{ minHeight: 56 }}>
        {isSearch && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputBase
              placeholder="Search"
              fullWidth
              sx={{ py: 1.321, pl: 4, pr: 3, fontSize: 18 }}
            />
            <IconButton onClick={handleCloseSearch} sx={{ mr: 4 }}>
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Box>
        )}
        {!isSearch && selectedTab !== 2 && (
          <BoxTabStyled>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              TabIndicatorProps={{ sx: { bgcolor: "success.main" } }}
            >
              <TabStyled label="ITEMS" {...a11yProps(0)} />
              <TabStyled label="CATEGORIES" {...a11yProps(1)} />
            </Tabs>
            <IconButtonSearchStyled onClick={handleSearch}>
              <SearchIcon fontSize="medium" />
            </IconButtonSearchStyled>
          </BoxTabStyled>
        )}
      </Box>

      <Divider />
    </>
  );
};

export default FavoriteDialogHeader;
